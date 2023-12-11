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

import sys
from pathlib import Path
import nbconvert
import nbformat
import nbclient
from datetime import datetime
from qiskit_ibm_runtime import QiskitRuntimeService
import argparse

NOTEBOOKS_GLOB = "docs/**/*.ipynb"
NOTEBOOKS_EXCLUDE = [
    "docs/api/**",
    "**/.ipynb_checkpoints/**",
    # Following notebooks are broken
    "docs/transpile/transpiler-stages.ipynb",
    "docs/run/get-backend-information.ipynb",
]
NOTEBOOKS_THAT_SUBMIT_JOBS = [
    "docs/start/hello-world.ipynb",
]


class ExecuteOptions:
    write: bool
    submit_jobs: bool


def execute_notebook(path: Path, options: ExecuteOptions) -> bool:
    """
    Wrapper function for `_execute_notebook` to print status
    """
    print(f"▶️  {path}", end="", flush=True)
    possible_exceptions = (
        nbconvert.preprocessors.CellExecutionError,
        nbclient.exceptions.CellTimeoutError,
    )
    try:
        _execute_notebook(path, options)
    except possible_exceptions as err:
        print("\r❌\n")
        print(err)
        return False
    print("\r✅")
    return True


def _execute_notebook(filepath: Path, options: ExecuteOptions) -> None:
    """
    Use nbconvert to execute notebook
    """
    nb = nbformat.read(filepath, as_version=4)

    processor = nbconvert.preprocessors.ExecutePreprocessor(
        timeout=-1 if options.submit_jobs else 100,
        kernel_name="python3",
    )

    processor.preprocess(nb)

    if not options.write:
        return

    for cell in nb.cells:
        # To avoid noisy diffs
        cell.metadata.pop("execution", None)
    nbformat.write(nb, filepath)


def find_notebooks(submit_jobs=False) -> list[Path]:
    """
    Get paths to all notebooks in NOTEBOOKS_GLOB that are not excluded by
    NOTEBOOKS_EXCLUDE
    """
    all_notebooks = Path(".").rglob(NOTEBOOKS_GLOB)
    excluded_notebooks = NOTEBOOKS_EXCLUDE
    if not submit_jobs:
        excluded_notebooks += NOTEBOOKS_THAT_SUBMIT_JOBS
    return [
        path
        for path in all_notebooks
        if not any(path.match(glob) for glob in excluded_notebooks)
    ]


def cancel_trailing_jobs(start_time: datetime) -> bool:
    """
    Cancel any runtime jobs created after `start_time`.
    Return True if non exist, False otherwise.
    """
    service = QiskitRuntimeService()
    jobs = [j for j in service.jobs(created_after=start_time) if not j.in_final_state()]
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


parser = argparse.ArgumentParser(
    prog="Notebook executor",
    description="For testing notebooks and updating their outputs",
    epilog="For help, contact Frank Harkins",
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
    help="overwrite notebooks with execution outputs",
)
parser.add_argument(
    "--submit-jobs",
    action="store_true",
    help=(
        "run notebooks that submit jobs to IBM Quantum and wait indefinitely "
        "for jobs to complete"
    ),
)

if __name__ == "__main__":
    args = parser.parse_args()
    notebook_paths = args.filenames or find_notebooks(args.submit_jobs)
    start_time = datetime.now()
    print("Executing notebooks:")
    results = [execute_notebook(path, args) for path in notebook_paths]
    print("Checking for trailing jobs...")
    results.append(cancel_trailing_jobs(start_time))
    if not all(results):
        sys.exit(1)
    sys.exit(0)
