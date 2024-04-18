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

import argparse
import sys
import warnings
import textwrap
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterator

import nbclient
import nbconvert
import nbformat
from qiskit_ibm_runtime import QiskitRuntimeService
from squeaky import clean_notebook

NOTEBOOKS_GLOB = "[!.]*/**/*.ipynb"
NOTEBOOKS_EXCLUDE = [
    "docs/api/**",
    "**/.ipynb_checkpoints/**",
]
NOTEBOOKS_THAT_SUBMIT_JOBS = [
    "docs/start/hello-world.ipynb",
    "docs/analyze/saving-and-retrieving.ipynb",
    "tutorials/build-repitition-codes/notebook.ipynb",
    "tutorials/chsh-inequality/notebook.ipynb",
    "tutorials/grovers-algorithm/notebook.ipynb",
    "tutorials/quantum-approximate-optimization-algorithm/notebook.ipynb",
    "tutorials/repeat-until-success/notebook.ipynb",
    "tutorials/submitting-transpiled-circuits/notebook.ipynb",
    "tutorials/variational-quantum-eigensolver/notebook.ipynb",
]


def matches(path: Path, glob_list: list[str]) -> bool:
    return any(path.match(glob) for glob in glob_list)

def filter_paths(paths: list[Path], args: argparse.Namespace) -> Iterator[Path]:
    """
    Filter out any paths we don't want to run, printing messages.
    """
    submit_jobs = args.submit_jobs or args.only_submit_jobs
    for path in paths:
        if path.suffix != ".ipynb":
            print(f"ℹ️ Skipping {path}; file is not `.ipynb` format.")
            continue

        if matches(path, NOTEBOOKS_EXCLUDE):
            this_file = Path(__file__).resolve()
            print(
                f"ℹ️ Skipping {path}; to run it, edit `NOTEBOOKS_EXCLUDE` in {this_file}."
            )
            continue

        if not submit_jobs and matches(path, NOTEBOOKS_THAT_SUBMIT_JOBS):
            print(
                f"ℹ️ Skipping {path} as it submits jobs; use the --submit-jobs flag to run it."
            )
            continue

        if args.only_submit_jobs and not matches(path, NOTEBOOKS_THAT_SUBMIT_JOBS):
            print(
                f"ℹ️ Skipping {path} as it does not submit jobs and the --only-submit-jobs flag is set."
            )
            continue

        yield path


@dataclass(frozen=True)
class NotebookWarning:
    cell_index: int
    msg: str

    def report(self):
        """
        Format warning and print it
        """
        message = f"Warning detected in cell {self.cell_index}:\n"
        for line in self.msg.splitlines():
            message += (
                textwrap.fill(
                    line, width=77, initial_indent=" │ ", subsequent_indent=" │ "
                )
                + "\n"
            )
        print_yellow(message, flush=True)


def print_yellow(s: str, **kwargs):
    """
    Use ANSI escape codes to print yellow text
    """
    print(f"\033[0;33m{s}\033[0m", **kwargs)


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


def execute_notebook(path: Path, args: argparse.Namespace) -> bool:
    """
    Wrapper function for `_execute_notebook` to print status
    """
    print(f"▶️  {path}", end="", flush=True)
    possible_exceptions = (
        nbconvert.preprocessors.CellExecutionError,
        nbclient.exceptions.CellTimeoutError,
    )
    try:
        nb = _execute_notebook(path, args)
    except possible_exceptions as err:
        print("\r❌\n")
        print(err)
        return False

    notebook_warnings = extract_warnings(nb)
    if notebook_warnings:
        print("\r⚠️")
        [w.report() for w in notebook_warnings]
        return False

    print("\r✅")
    return True


def _execute_notebook(filepath: Path, args: argparse.Namespace) -> nbformat.NotebookNode:
    """
    Use nbconvert to execute notebook
    """
    submit_jobs = args.submit_jobs or args.only_submit_jobs
    nb = nbformat.read(filepath, as_version=4)

    processor = nbconvert.preprocessors.ExecutePreprocessor(
        # If submitting jobs, we want to wait forever (-1 means no timeout)
        timeout=-1 if submit_jobs else 100,
        kernel_name="python3",
        extra_arguments=["--InlineBackend.figure_format='svg'"]
    )

    processor.preprocess(nb)

    if not args.write:
        return nb

    for cell in nb.cells:
        # Remove execution metadata to avoid noisy diffs.
        cell.metadata.pop("execution", None)
    nb, _ = clean_notebook(nb)
    nbformat.write(nb, filepath)
    return nb


def find_notebooks() -> list[Path]:
    """
    Get paths to all notebooks in NOTEBOOKS_GLOB that are not excluded by
    NOTEBOOKS_EXCLUDE
    """
    all_notebooks = Path(".").glob(NOTEBOOKS_GLOB)
    return [
        path
        for path in all_notebooks
        if not matches(path, NOTEBOOKS_EXCLUDE)
    ]


def cancel_trailing_jobs(start_time: datetime) -> bool:
    """
    Cancel any runtime jobs created after `start_time`.
    Return True if non exist, False otherwise.

    Notebooks should not submit jobs during a normal test run. If they do, the
    cell will time out and this function will cancel the job to avoid wasting
    device time.

    If a notebook submits a job but does not wait for the result, this check
    will also catch it and cancel the job.
    """
    # QiskitRuntimeService().jobs() includes qiskit-ibm-provider jobs too
    service = QiskitRuntimeService()

    def _is_not_finished(job):
        # Force runtime to update job status
        # Workaround for Qiskit/qiskit-ibm-runtime#1547
        job.status()
        return not job.in_final_state()

    jobs = list(filter(_is_not_finished, service.jobs(created_after=start_time)))
    if not jobs:
        return True

    print(
        f"⚠️ Cancelling {len(jobs)} job(s) created after {start_time}.\n"
        "Add any notebooks that submit jobs to NOTEBOOKS_EXCLUDE in "
        "`scripts/nb-tester/test-notebook.py`."
    )
    for job in jobs:
        job.cancel()
    return False


def create_argument_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="Notebook executor",
        description="For testing notebooks and updating their outputs",
    )
    parser.add_argument(
        "filenames",
        help=(
            "Paths to notebooks. If not provided, the script will search for "
            "notebooks in `docs/`. To exclude a notebook from this process, add it "
            "to `NOTEBOOKS_EXCLUDE` in the script."
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
        help="Same as --submit-jobs, but also skips notebooks that do not submit jobs to IBM Quantum",
    )
    return parser


if __name__ == "__main__":
    args = create_argument_parser().parse_args()
    paths = map(Path, args.filenames or find_notebooks())
    filtered_paths = filter_paths(paths, args)

    # Execute notebooks
    start_time = datetime.now()
    print("Executing notebooks:")
    results = [execute_notebook(path, args) for path in filtered_paths]
    print("Checking for trailing jobs...")
    results.append(cancel_trailing_jobs(start_time))
    if not all(results):
        sys.exit(1)
    sys.exit(0)
