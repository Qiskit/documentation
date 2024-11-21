# This code is a Qiskit project.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may obtain a
# copy of this license in the LICENSE file in the root directory of this source
# tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this copyright
# notice, and modified files need to carry a notice indicating that they have
# been altered from the originals.

from __future__ import annotations


import argparse
import asyncio
import sys
import textwrap
from textwrap import dedent
import platform
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterator, Literal

import nbclient
import nbformat
import tomli
from jupyter_client.manager import start_new_async_kernel, AsyncKernelClient
from qiskit_ibm_runtime import QiskitRuntimeService
from squeaky import clean_notebook

# We always run the following code in the kernel before running the notebook
PRE_EXECUTE_CODE = """\
import matplotlib
# See https://github.com/matplotlib/matplotlib/issues/23326#issuecomment-1164772708
matplotlib.set_loglevel("critical")
"""

def render_kwarg(arg: str, val: any):
    if isinstance(val, str):
        return f"{arg}=\"{val}\""
    return f"{arg}={val}"

def render_kwargs(kwargs: dict[str, any]):
    return ", ".join(render_kwarg(arg, val) for arg, val in kwargs.items())

def generate_backend_patch(
    backend_name: str, 
    provider: Literal["qiskit-ibm-runtime", "qiskit-fake-provider", "runtime-fake-provider"] = "qiskit-ibm-runtime", 
    generic_backend_kwargs: dict[str, any] = None, 
    runtime_service_kwargs: dict[str, any] = None
) -> str:
    """
    Generate code for fetching a custom backend to inject into a notebook.
    """

    patch = dedent("""
    from qiskit_ibm_runtime import QiskitRuntimeService
    import warnings

    warnings.filterwarnings("ignore", message="Options {.*} have no effect in local testing mode.")
    warnings.filterwarnings("ignore", message="Session is not supported in local testing mode or when using a simulator.")
    """)

    if provider == "qiskit-fake-provider":
        qiskit_fake_provider_args = render_kwargs(generic_backend_kwargs or {})
        patch += dedent(f"""
        from qiskit.providers.fake_provider import GenericBackendV2
        def patched_least_busy(self, *args, **kwargs):
            return GenericBackendV2({qiskit_fake_provider_args})
        """)

    elif provider == "runtime-fake-provider":
        patch += dedent(f"""
        from qiskit_ibm_runtime.fake_provider import FakeProviderForBackendV2

        def patched_least_busy(self, *args, **kwargs):
            provider = FakeProviderForBackendV2()
            return provider.backend("{backend_name}")
        """)

    elif provider == "qiskit-ibm-runtime": 
        qiskit_runtime_service_args = render_kwargs(runtime_service_kwargs or {})

        patch += dedent(f"""
        def patched_least_busy(self, *args, **kwargs):
            service = QiskitRuntimeService({qiskit_runtime_service_args})
            return service.backend("{backend_name}")
        """)

    else:
        raise ValueError(f"Please specify a valid provider. \"{provider}\" is invalid.")

    patch += "\nQiskitRuntimeService.least_busy = patched_least_busy\n"

    return patch


def get_package_versions():
    requirements_file = Path("scripts/nb-tester/requirements.txt").read_text()
    package_versions = "\n".join(
        line for line in requirements_file.split('\n') if not line.startswith('#')
    )
    return package_versions.strip()

VERSION_INFO = f"""\
<details>
<summary><b>Package versions</b></summary>

The code on this page was developed using the following requirements.
We recommend using these versions or newer.

```
{get_package_versions()}
```
</details>
"""

@dataclass
class Config:
    args: argparse.Namespace
    notebooks_normal_test: list[str]
    notebooks_exclude: list[str]
    notebooks_that_submit_jobs: list[str]
    notebooks_no_mock: list[str]

    @property
    def all_job_submitting_notebooks(self) -> list[str]:
        return [*self.notebooks_that_submit_jobs, *self.notebooks_no_mock]

    @property
    def all_notebooks_to_test(self) -> list[str]:
        return [
            *self.notebooks_normal_test,
            *self.notebooks_that_submit_jobs,
            *self.notebooks_no_mock,
        ]

    @property
    def all_notebooks(self) -> list[str]:
        return [
            *self.all_notebooks_to_test,
            *self.notebooks_exclude,
        ]

    @classmethod
    def from_args(cls, args: argparse.Namespace) -> Config:
        """
        Create config from args, including loading the globs from the TOML file
        """
        path = Path(args.config_path)
        try:
            return cls(args=args, **tomli.loads(path.read_text()))
        except TypeError as err:
            raise ValueError(
                f"Couldn't read config from {path}; check it exists and the"
                " entries are correct."
            ) from err

    def notebooks_to_execute(self) -> Iterator[Path]:
        """
        Yield notebooks to be executed, printing messages for any skipped files.
        """
        paths = map(Path, self.args.filenames or self.all_notebooks_to_test)
        for path in paths:
            if path.suffix != ".ipynb":
                print(f"ℹ️ Skipping {path}; file is not `.ipynb` format.")
                continue

            if matches(path, self.notebooks_exclude):
                print(
                    f"ℹ️ Skipping {path}; to run it, edit `notebooks-exclude` in {self.args.config_path}."
                )
                continue

            if not self.args.submit_jobs and matches(path, self.notebooks_no_mock):
                print(
                    f"ℹ️ Skipping {path} as it doesn't work with mock hardware; use the --submit-jobs flag to run it."
                )
                continue

            if self.args.only_submit_jobs and not matches(
                path, self.all_job_submitting_notebooks
            ):
                print(
                    f"ℹ️ Skipping {path} as it doesn't submit jobs and the --only-submit-jobs flag is set."
                )
                continue

            yield path

    def should_patch(self, path: Path) -> bool:
        if self.args.submit_jobs:
            return False
        return matches(path, self.notebooks_that_submit_jobs)

    def should_skip_writing(self, path: Path) -> bool | str:
        """Returns False or string with reason for skipping"""
        if not self.args.write:
            return "--write arg not set"
        if self.should_patch(path):
            return "hardware was mocked"
        return False


def matches(path: Path, glob_list: list[str]) -> bool:
    return any(path.match(glob) for glob in glob_list)


@dataclass(frozen=True)
class NotebookWarning:
    cell_index: int
    msg: str

    def format(self) -> str:
        """
        Format warning to pretty string
        """
        message = f"Cell {self.cell_index}:\n"
        for line in self.msg.splitlines():
            message += (
                textwrap.fill(
                    line, width=77, initial_indent=" │ ", subsequent_indent=" │ "
                )
                + "\n"
            )
        return message


def extract_warnings(notebook: nbformat.NotebookNode) -> list[NotebookWarning]:
    """
    Detect warning messages in cell outputs
    """
    notebook_warnings = []
    for cell_index, cell in enumerate(notebook.cells):
        if not hasattr(cell, "outputs"):
            continue
        if "ignore-warnings" in cell.metadata.get("tags", []):
            continue
        for output in cell.outputs:
            if hasattr(output, "name") and output.name == "stderr":
                notebook_warnings.append(
                    NotebookWarning(cell_index=cell_index, msg=output.text)
                )
    return notebook_warnings


async def execute_notebook(path: Path, config: Config) -> bool:
    """
    Wrapper function for `_execute_notebook` to print status and write result
    """
    if config.should_patch(path):
        print(f"▶️ Executing {path} (with least_busy patched)")
    else:
        print(f"▶️ Executing {path}")
    possible_exceptions = (
        nbclient.exceptions.CellExecutionError,
        nbclient.exceptions.CellTimeoutError,
    )
    try:
        nb = await _execute_notebook(path, config)
    except possible_exceptions as err:
        print(f"❌ Problem in {path}:\n{err}")
        return False

    notebook_warnings = extract_warnings(nb)
    if notebook_warnings:
        print(
            f"⚠️ Warnings in {path}:\n"
            + "\n".join((w.format() for w in notebook_warnings))
        )
        return False

    if skip_reason := config.should_skip_writing(path):
        print(f"✅ No problems in {path} (not written as {skip_reason})")
        return True

    nbformat.write(nb, path)
    print(f"✅ No problems in {path} (written)")
    return True


async def _execute_in_kernel(kernel: AsyncKernelClient, code: str) -> None:
    """Execute code in kernel and raise if it fails"""
    response = await kernel.execute_interactive(code, store_history=False)
    if response.get("content", {}).get("status", "") == "error":
        raise Exception("Error running initialization code")


async def _execute_notebook(filepath: Path, config: Config) -> nbformat.NotebookNode:
    """
    Use nbclient to execute notebook. The steps are:
    1. Read notebook from file
    2. Create a new kernel
    3. (Optional) Run some custom code to set up the kernel
    4. Execute the notebook inside the kernel
    5. Clean the notebook and return it
    """
    nb = nbformat.read(filepath, as_version=4)

    kernel_manager, kernel = await start_new_async_kernel(
        kernel_name="python3",
        extra_arguments=["--InlineBackend.figure_format='svg'"],
    )

    await _execute_in_kernel(kernel, PRE_EXECUTE_CODE)
    if config.should_patch(filepath):
        # Implements a subset of options from QiskitRuntimeService, but in 
        # practice any option can easily be added here
        backend_cell = generate_backend_patch(
            backend_name=config.args.backend, 
            provider=config.args.provider,
            runtime_service_kwargs = {
                "channel": config.args.channel,
                "token": config.args.token,
                "url": config.args.url,
                "name": config.args.name,
                "instance": config.args.instance,
            },
            generic_backend_kwargs = {
                "num_qubits": config.args.num_qubits,
                "control_flow": config.args.control_flow
            }
        )
        await _execute_in_kernel(kernel, backend_cell)

    notebook_client = nbclient.NotebookClient(
        nb=nb,
        km=kernel_manager,
        kc=kernel,
        # If submitting jobs, we want to wait forever (-1 means no timeout)
        timeout=-1 if config.args.submit_jobs else 300,
    )
    await notebook_client.async_execute()

    for cell in nb.cells:
        # Remove execution metadata to avoid noisy diffs.
        cell.metadata.pop("execution", None)
        if 'version-info' in cell.metadata.get('tags', []):
            cell.source = VERSION_INFO
    nb, _ = clean_notebook(nb)
    return nb


def cancel_trailing_jobs(start_time: datetime, config_path: str) -> bool:
    """
    Cancel any runtime jobs created after `start_time`.

    Return True if none exist, False otherwise.

    Notebooks should not submit jobs during a normal test run. If they do, the
    cell will time out and this function will cancel the job to avoid wasting
    device time.

    If a notebook submits a job but does not wait for the result, this check
    will also catch it and cancel the job.
    """
    jobs = [
        job
        for job in QiskitRuntimeService().jobs(created_after=start_time)
        if not job.in_final_state()
    ]
    if not jobs:
        return True

    print(
        f"⚠️ Cancelling {len(jobs)} job(s) created after {start_time}.\n"
        "Add any notebooks that submit jobs to `notebooks-that-submit-jobs` in "
        f"`{config_path}`."
    )
    for job in jobs:
        job.cancel()
    return False


def get_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="Notebook executor",
        description="For testing notebooks and updating their outputs",
    )
    parser.add_argument(
        "filenames",
        help=(
            "Paths to notebooks. If not provided, the script will search for "
            "notebooks in `docs/`. To exclude a notebook from this process, add it "
            "to `notebooks-exclude` in the config file."
        ),
        nargs="*",
    )
    parser.add_argument(
        "-w",
        "--write",
        action="store_true",
        help="Overwrite notebooks with the results of this script's execution.",
    )
    parser.add_argument(
        "--submit-jobs",
        action="store_true",
        help=(
            "Run notebooks that submit jobs to IBM Quantum and wait indefinitely "
            "for jobs to complete. Warning: this has a real cost because it uses "
            "quantum resources! Only use this argument occasionally and intentionally."
        ),
    )
    parser.add_argument(
        "--only-submit-jobs",
        action="store_true",
        help=(
            "Same as --submit-jobs, but only runs notebooks that submit jobs. "
            "Setting this option implicitly sets --submit-jobs."
        ),
    )
    parser.add_argument(
        "--config-path",
        help="Path to a TOML file containing the globs for detecting and sorting notebooks",
    )
    parser.add_argument(
        "--is-fork",
        action="store_true",
        help=(
            "Set to true when running on forks in CI, since authentication cannot work there. "
            "The program will fail with a helpful message if any of the notebooks cannot be executed."
        ),
    )
    parser.add_argument(
        "--provider",
        action="store",
        default="qiskit-fake-provider",
        choices=["qiskit-ibm-runtime", "qiskit-fake-provider", "runtime-fake-provider"],
        help=(
            "Specify a provider to run notebook against."
        )
    )
    parser.add_argument(
        "--backend",
        action="store",
        default="fake_athens",
        help=(
            "Specify a backend to run the script against, such as 'fake_athens'"
            "or 'athens'. Only relevant when `--provider` is "
            "`qiskit-ibm-runtime` or `runtime-fake-provider`."
        )
    )

    generic_backend_options_group = parser.add_argument_group(
        "qiskit-fake-backend options",
        description=(
            "These options change the behavior when --provider=qiskit-fake-backend, "
            "and are passed as parameters directly to GenericBackendV2. "
            "See https://docs.quantum.ibm.com/api/qiskit/qiskit.providers.fake_provider.GenericBackendV2 "
            "for more details."

        )
    )
    generic_backend_options_group.add_argument(
        "--num-qubits",
        action="store",
        type=int,
        default=6,
        help=(
            "Specify the number of qubits for the qiskit generic backend to use"
        )
    )
    generic_backend_options_group.add_argument(
        "--control-flow",
        action="store_true",
        help=(
            "Specify if the qiskit generic backend should enable control flow"
            "directives on the target"
        )
    )

    runtime_options_group = parser.add_argument_group(
        "qiskit-ibm-runtime options",
        description=(
            "These options change the behavior when --provider=qiskit-ibm-runtime, "
            "and are passed as parameters directly to QiskitRuntimeService. "
            "See https://docs.quantum.ibm.com/api/qiskit-ibm-runtime/qiskit_ibm_runtime.QiskitRuntimeService "
            "for more details."
        )
    )
    runtime_options_group.add_argument(
        "--channel",
        action="store",
        default="ibm_quantum",
        choices=["ibm_cloud", "ibm_quantum", "local"],
        help=(
            "Specify a channel for running the notebook against."
        )
    )
    runtime_options_group.add_argument(
        "--token",
        action="store",
        default=None,
        help=(
            'IBM Cloud API key or IBM Quantum API token. Warning: for security,' 
            'you should set this via an environment variable, e.g. '
            '`--token="${IQP_API_TOKEN}".'
        )
    )
    runtime_options_group.add_argument(
        "--url",
        action="store",
        default=None,
        help=(
            "The API URL to submit the notebook against."
        )
    )
    runtime_options_group.add_argument(
        "--name",
        action="store",
        default=None,
        help=(
            "Name of the qiskit account to load."
        )
    )
    runtime_options_group.add_argument(
        "--instance",
        action="store",
        default=None,
        help=(
            "The service instance to use."
        )
    )
    args = parser.parse_args()
    if args.only_submit_jobs:
        args.submit_jobs = True
    return args


async def _main() -> None:
    args = get_args()
    config = Config.from_args(args)
    paths = list(config.notebooks_to_execute())

    if not paths:
        print("⚠️ No notebooks to execute - exiting")
        return

    if paths and args.is_fork:
        print(
            "⛔️ We can't run notebook tests on pull requests from forks becaus of how GitHub Secrets work."
            "\n\n"
            "If you have write access to Qiskit/documentation, push to a new "
            "branch there and make your pull request from that branch instead."
            "\n\n"
            "If you don't have write access, you should locally test out the notebooks you're modifying "
            "by using the instructions in "
            "https://github.com/Qiskit/documentation#execute-notebooks. "
            "When this PR is approved, a maintainer will merge it to a new "
            "branch in Qiskit/documentation, then make a PR from that branch "
            "into main so it can pass CI.\n",
        )
        sys.exit(1)

    # Execute notebooks
    start_time = datetime.now()
    print("Executing notebooks:")
    results = await asyncio.gather(*(execute_notebook(path, config) for path in paths))
    print("Checking for trailing jobs...")
    results.append(cancel_trailing_jobs(start_time, config.args.config_path))
    if not all(results):
        sys.exit(1)


def main():
    if platform.system() == "Windows":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(_main())

