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
from textwrap import dedent
from dataclasses import dataclass
from pathlib import Path
import tomli
from typing import Iterator, Literal, Callable

import nbformat
from squeaky import clean_notebook

# We always run the following code in the kernel before running the notebook
PRE_EXECUTE_CODE = """\
# Import with underscores to avoid interfering with user-facing code.
from matplotlib import set_loglevel as _set_mpl_loglevel

# See https://github.com/matplotlib/matplotlib/issues/23326#issuecomment-1164772708
_set_mpl_loglevel("critical")
"""


def get_package_versions():
    requirements_file = Path("scripts/nb-tester/requirements.txt").read_text()
    package_versions = "\n".join(
        line for line in requirements_file.split("\n") if not line.startswith("#")
    )
    return package_versions.strip()


# This markdown replaces cells with tag 'version-info'
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


def post_process_notebook(nb: nbformat.NotebookNode) -> nbformat.NotebookNode:
    for cell in nb.cells:
        # Remove execution metadata to avoid noisy diffs.
        cell.metadata.pop("execution", None)
        if "version-info" in cell.metadata.get("tags", []):
            cell.source = VERSION_INFO

    nb, _ = clean_notebook(nb)
    return nb


@dataclass
class Result:
    ok: bool
    reason: str | None = None

    def __bool__(self) -> bool:
        return self.ok


@dataclass
class NotebookJob:
    """
    All information the notebook executor needs to run the notebook.
    """

    path: Path
    pre_execute_code: str
    backend_patch: str | None
    cell_timeout: int | None
    write: Result
    post_process: Callable[[nbformat.NotebookNode], nbformat.NotebookNode]


def get_notebook_jobs(args: argparse.Namespace) -> Iterator[NotebookJob]:
    """
    Handle all CLI arguments and config files and outputs NotebookJobs for the executor to handle.
    """
    config = Config.from_args(args)

    for path in config.notebooks_to_execute():
        backend_patch = None
        if config.should_patch(path):
            # Implements a subset of options from QiskitRuntimeService, but in 
            # practice any option can easily be added here
            backend_patch = generate_backend_patch(
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
        
        write = Result(True)
        if reason := config.should_skip_writing(path):
            write = Result(False, reason)

        yield NotebookJob(
            path=path,
            pre_execute_code=PRE_EXECUTE_CODE,
            backend_patch=backend_patch,
            cell_timeout=-1 if config.args.submit_jobs else 300,
            write=write,
            post_process=post_process_notebook,
        )


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


def generate_backend_patch(
    backend_name: str,
    provider: Literal[
        "qiskit-ibm-runtime", "qiskit-fake-provider", "runtime-fake-provider"
    ] = "qiskit-ibm-runtime",
    generic_backend_kwargs: dict[str, any] = None,
    runtime_service_kwargs: dict[str, any] = None,
) -> str:
    """
    Generate code for fetching a custom backend to inject into a notebook.
    """

    def render_kwarg(arg: str, val: any):
        if isinstance(val, str):
            return f'{arg}="{val}"'
        return f"{arg}={val}"

    def render_kwargs(kwargs: dict[str, any]):
        return ", ".join(render_kwarg(arg, val) for arg, val in kwargs.items())

    patch = dedent(
        """
        from qiskit_ibm_runtime import QiskitRuntimeService
        import warnings

        warnings.filterwarnings("ignore", message="Options {.*} have no effect in local testing mode.")
        warnings.filterwarnings("ignore", message="Session is not supported in local testing mode or when using a simulator.")
        """
    )

    if provider == "qiskit-fake-provider":
        qiskit_fake_provider_args = render_kwargs(generic_backend_kwargs or {})
        patch += dedent(
            f"""
            from qiskit.providers.fake_provider import GenericBackendV2
            def patched_least_busy(self, *args, **kwargs):
                return GenericBackendV2({qiskit_fake_provider_args})
            """
        )

    elif provider == "runtime-fake-provider":
        patch += dedent(
            f"""
            from qiskit_ibm_runtime.fake_provider import FakeProviderForBackendV2

            def patched_least_busy(self, *args, **kwargs):
                provider = FakeProviderForBackendV2()
                return provider.backend("{backend_name}")
            """
        )

    elif provider == "qiskit-ibm-runtime":
        qiskit_runtime_service_args = render_kwargs(runtime_service_kwargs or {})

        patch += dedent(
            f"""
            def patched_least_busy(self, *args, **kwargs):
                service = QiskitRuntimeService({qiskit_runtime_service_args})
                return service.backend("{backend_name}")
            """
        )

    else:
        raise ValueError(f'Please specify a valid provider. "{provider}" is invalid.')

    patch += "\nQiskitRuntimeService.least_busy = patched_least_busy\n"

    return patch
