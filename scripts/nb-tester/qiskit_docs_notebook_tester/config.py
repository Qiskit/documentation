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
import importlib
from typing import Iterator

from . import patches

# We always run the following code in the kernel before running the notebook
PRE_EXECUTE_CODE = """\
import logging
import re
# Import with underscores to avoid interfering with user-facing code.
from matplotlib import set_loglevel as _set_mpl_loglevel

# See https://github.com/matplotlib/matplotlib/issues/23326#issuecomment-1164772708
_set_mpl_loglevel("critical")


# Ignore server configuration warnings from qiskit-ibm-runtime; we can't control these and they seem to be benign
def _runtime_warnings_filter(record):
    ignore_patterns = {
        # If you add more patterns, make sure to add the filter to the correct logger path using getLogger
        r'Remote backend "[_a-z]+" for service instance .+ could not be instantiated due to an invalid server-side configuration',
        r"Unable to create configuration for [_a-z]+. 'NoneType' object has no attribute 'basis_gates'"
    }
    if any(re.match(pattern, record.getMessage()) for pattern in ignore_patterns):
        return False
    return True

# We must add the filter to each module that emits warnings to be filtered
logging.getLogger("qiskit_ibm_runtime.utils.backend_decoder").addFilter(_runtime_warnings_filter)
logging.getLogger("qiskit_ibm_runtime.qiskit_runtime_service").addFilter(_runtime_warnings_filter)
"""


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
    log_cell_outputs: bool | None
    write: Result
    map_open_backends_to_internal: bool = False


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

            warning_filter = ""
            if config.check_pending_deprecations:
                warning_filter = "import warnings as _warnings \
                \n_warnings.simplefilter('default', category=PendingDeprecationWarning)"
            pre_execute_code = PRE_EXECUTE_CODE + warning_filter

            patch = config.get_patch_for_group(group)

            if patch and not "# nb-tester: allow-write" in patch:
                write = Result(False, "hardware was mocked")
            elif not config.write:
                write = Result(False, "--write arg not set")
            else:
                write = Result(True)

            yield NotebookJob(
                path=Path(path),
                pre_execute_code=pre_execute_code,
                backend_patch=patch,
                cell_timeout=config.cell_timeout,
                log_cell_outputs=config.log_cell_outputs,
                write=write,
                map_open_backends_to_internal=config.map_open_backends_to_internal,
            )


@dataclass
class Config:
    cli_filenames: list[Path]
    cell_timeout: int
    test_strategy: str
    check_pending_deprecations: bool
    write: bool
    groups: list[dict]
    log_cell_outputs: bool
    map_open_backends_to_internal: bool

    @classmethod
    def from_args(cls, args: argparse.Namespace) -> Config:
        """
        Create config from args, including loading the paths from the TOML file if needed.
        """
        if (args.config_path or args.test_strategy) and args.patch:
            raise ValueError("Can't set --patch with --config-file or --test-strategy")

        if not args.config_path:
            groups = []
            if args.filenames:
                groups.append(
                    {
                        "name": "no-patch",
                        "notebooks": args.filenames,
                        "test-strategies": {"custom": {}},
                    }
                )
            for index, (patch_info, *filenames) in enumerate(args.patch or []):
                groups.append(
                    {
                        "name": f"patch-{index}",
                        "notebooks": filenames,
                        "test-strategies": {"custom": parse_patch_arg(patch_info)},
                    }
                )

            cli_filenames = args.filenames + [
                filepath for group in groups for filepath in group["notebooks"]
            ]
            return cls(
                cli_filenames=cli_filenames,
                cell_timeout=args.cell_timeout,
                test_strategy="custom",
                check_pending_deprecations=args.check_pending_deprecations,
                write=args.write,
                groups=groups,
                log_cell_outputs=args.log_cell_outputs,
                map_open_backends_to_internal=args.map_open_backends_to_internal,
            )

        try:
            config_path = Path(args.config_path)
            config_file = tomllib.loads(config_path.read_text())
        except TypeError as err:
            raise ValueError(
                f"Couldn't read config from {args.config_path}; check it exists and the"
                " entries are correct."
            ) from err

        groups = [
            {"name": key, **value} for key, value in config_file["groups"].items()
        ]
        test_strategy = args.test_strategy or config_file["default-strategy"]
        cell_timeout = args.cell_timeout or config_file.get("test-strategies", {}).get(
            test_strategy, {}
        ).get("timeout", None)
        return cls(
            cli_filenames=args.filenames,
            cell_timeout=cell_timeout,
            test_strategy=test_strategy,
            check_pending_deprecations=args.check_pending_deprecations,
            write=args.write,
            groups=groups,
            log_cell_outputs=args.log_cell_outputs,
            map_open_backends_to_internal=args.map_open_backends_to_internal,
        )

    def get_patch_for_group(self, group: dict) -> str | None:
        patch_config = group["test-strategies"][self.test_strategy]

        patch_name = patch_config.get("patch", None)
        if patch_name is None:
            return None

        if Path(patch_name).exists():
            return Path(patch_name).read_text().format(**patch_config)

        built_in_patch_dir = importlib.resources.files(patches)
        built_in_patch = built_in_patch_dir / patch_name
        if built_in_patch.exists():
            return built_in_patch.read_text().format(**patch_config)

        valid_patch_names = list(path.name for path in built_in_patch_dir.iterdir())
        raise ValueError(
            f'Could not find patch "{patch_name}". '
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
        action="append",
        nargs="+",
        metavar=("patch", "filenames"),
        help='If not providing a config file, an optional TOML string with the patch information, followed by a list of filenames to run with that patch. For example, \'{ provider="qiskit-ibm-runtime", backend="test-eagle" }\'',
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
    parser.add_argument(
        "--ignore-trailing-jobs",
        action="store_true",
        help=(
            "Do not cancel trailing jobs with QiskitRuntimeService. This is "
            "useful to set if your patch does not use QiskitRuntimeService"
        ),
    )
    parser.add_argument(
        "--check-pending-deprecations",
        action="store_true",
        help="Include checking for PendingDeprecationWarnings in notebook outputs",
    )
    parser.add_argument(
        "--log-cell-outputs",
        action="store_true",
        help=(
            "Print text outputs of cells to the console as they run.\n"
            "NOTE: This script runs notebooks in parallel. When running more than one "
            "notebook, cell outputs will appear as they're received, not grouped by notebook."
        )
    )
    parser.add_argument(
        "--map-open-backends-to-internal",
        action="store_true",
        help=(
            "Temporary hack to map open backend names to internal before "
            "execution, then back again after execution. This is to get round the "
            "fact that our instance can't access open backends through their "
            "usual names."
        )
    )
    return parser
