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
import tomllib
from typing import Iterator


# We always run the following code in the kernel before running the notebook
PRE_EXECUTE_CODE = """\
# Import with underscores to avoid interfering with user-facing code.
from matplotlib import set_loglevel as _set_mpl_loglevel

# See https://github.com/matplotlib/matplotlib/issues/23326#issuecomment-1164772708
_set_mpl_loglevel("critical")
"""

BUILT_IN_PATCHES = {
  "qiskit-fake-provider": dedent("""
        import warnings
        from qiskit.providers.fake_provider import GenericBackendV2
        from qiskit_ibm_runtime import QiskitRuntimeService

        warnings.filterwarnings("ignore", message="Options {{.*}} have no effect in local testing mode.")
        warnings.filterwarnings("ignore", message="Session is not supported in local testing mode or when using a simulator.")

        def patched_least_busy(self, *args, **kwargs):
            return GenericBackendV2(num_qubits={num_qubits})

        QiskitRuntimeService.least_busy = patched_least_busy
        """),

  "runtime-fake-provider": dedent("""
        import warnings
        from qiskit_ibm_runtime import QiskitRuntimeService

        warnings.filterwarnings("ignore", message="Options {{.*}} have no effect in local testing mode.")
        warnings.filterwarnings("ignore", message="Session is not supported in local testing mode or when using a simulator.")

        def patched_least_busy(self, *args, **kwargs):
            provider = FakeProviderForBackendV2()
            return provider.backend("{backend}")

        QiskitRuntimeService.least_busy = patched_least_busy
        """),

  "qiskit-ibm-runtime": dedent("""
        from qiskit_ibm_runtime import QiskitRuntimeService

        def patched_least_busy(self, *args, **kwargs):
            service = QiskitRuntimeService({qiskit_runtime_service_args})
            return service.backend("{backend}")

        QiskitRuntimeService.least_busy = patched_least_busy
        """)
}

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


def get_notebook_jobs(args: argparse.Namespace) -> Iterator[NotebookJob]:
    """
    Handle all CLI arguments and config files and outputs NotebookJobs for the executor to handle.
    """
    config = Config.from_args(args)

    for group in config.groups:
        for path in group["notebooks"]:
            if config.cli_filenames and not matches(path, config.cli_filenames):
                continue
            if config.test_strategy not in group.get("test-strategies", {}):
                if matches(path, config.cli_filenames):
                    # User explicitly defined this path so we'll explain why we're skipping it
                    print(
                        f'ℹ️ Skipping {path} (no test strategy "{config.test_strategy}" defined for this notebook)'
                    )
                continue

            patch = config.get_patch_for_group(group)

            if patch:
                write = Result(False, "hardware was mocked")
            elif not config.write:
                write = Result(False, "--write arg not set")
            else:
                write = Result(True)

            yield NotebookJob(
                path=Path(path),
                pre_execute_code=PRE_EXECUTE_CODE,
                backend_patch=patch,
                cell_timeout=config.cell_timeout,
                write=write,
            )


@dataclass
class Config:
    cli_filenames: list[Path]
    cell_timeout: int
    test_strategy: str
    write: bool
    groups: list[dict]

    @classmethod
    def from_args(cls, args: argparse.Namespace) -> Config:
        """
        Create config from args, including loading the paths from the TOML file if needed.
        """
        if (args.config_path or args.test_strategy) and args.patch:
            raise ValueError("Can't set --patch with --config-file or --test-strategy")

        if not args.config_path:
            patch_info = parse_patch_arg(args.patch)
            if patch_info != {}:
                print("Patching all notebooks with:", patch_info)
            return cls(
                cli_filenames=args.filenames,
                cell_timeout=args.cell_timeout,
                test_strategy="custom",
                write=args.write,
                groups=[
                    {
                        "name": "main",
                        "notebooks": args.filenames,
                        "test-strategies": {"custom": patch_info},
                    }
                ],
            )

        try:
            config_path = Path(args.config_path)
            config_file = tomllib.loads(config_path.read_text())
        except TypeError as err:
            raise ValueError(
                f"Couldn't read config from {config_path}; check it exists and the"
                " entries are correct."
            ) from err

        groups = [
            {"name": key, **value} for key, value in config_file["groups"].items()
        ]
        test_strategy = args.test_strategy or config_file["default-strategy"]
        cell_timeout = (
            args.cell_timeout or
            config_file.get("test-strategies", {})
            .get(test_strategy, {})
            .get("timeout", None)
        )
        return cls(
            cli_filenames=args.filenames,
            cell_timeout=cell_timeout,
            test_strategy=test_strategy,
            write=args.write,
            groups=groups,
        )

    def get_patch_for_group(self, group: dict) -> str | None:
        patch_config = group["test-strategies"].get(self.test_strategy, {})

        patch_name = patch_config.get("patch", None)
        if patch_name is None:
            return None
        if Path(patch_name).exists():
            return Path(patch_name).read_text().format(**patch_config)
        if patch_name in BUILT_IN_PATCHES:
            return BUILT_IN_PATCHES[patch_name].format(**patch_config)

        valid_patch_names = list(BUILT_IN_PATCHES.keys())
        raise ValueError(
            f"Could not find patch \"{patch_name}\". "
            f"Patch names must be one of {valid_patch_names} or a path to a file."
        )


def matches(path: Path | str, glob_list: list[str]) -> bool:
    return any(Path(path).match(glob) for glob in glob_list)


def parse_patch_arg(patch: str | None) -> dict:
    if not patch:
        return {}
    try:
        patch_info = tomllib.loads(f"patch={patch}")["patch"]
    except tomllib.TOMLDecodeError as err:
        raise ValueError(
            "Problem parsing your --patch argument; "
            "Make sure it's of the form '{ string=\"value\", number=4, ... }'."
        ) from err
    return patch_info


def get_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="Notebook executor",
        description=dedent(
            """\
            For testing notebooks and updating their outputs.

            There are two ways to call this script. The simplest is to just provide a list of filenames and (optionally) a backend that we'll patch qiskit-ibm-runtime's least_busy method to always return.
            If providing a patch, this will apply all the notebooks.

            The other option is to provide a config file, which lets you set different patches for each notebook. See the README for more information.
            """
        ),
    )
    parser.add_argument(
        "filenames",
        help=(
            "Paths to notebooks. If not provided but --config-file is provided, the script will run all notebooks in the config file."
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
        "--patch",
        help='If not providing a config file, an optional TOML string with the patch information. For example, \'{ provider="qiskit-ibm-runtime", backend="test-eagle" }\'',
    )
    parser.add_argument(
        "--cell-timeout",
        type=int,
        help="Maximum number of seconds each cell can run for. This overrides the timeout in your config file if you're using one. For no timeout, set to -1 (This is also the default with no config file).",
    )
    parser.add_argument(
        "--config-path",
        help="Path to a TOML file listing the notebooks to execute and the test strategies for each notebook.",
    )
    parser.add_argument(
        "--test-strategy",
        help=(
            "If using a config file, the name of the testing strategy to use. "
            "This affects which notebooks are run and how they're patched."
        ),
    )
    return parser
