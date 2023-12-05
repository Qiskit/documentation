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

WRITE_FLAG = "--write"
NOTEBOOKS_GLOB = "docs/**/*.ipynb"
NOTEBOOKS_EXCLUDE = [
    "docs/api/**",
    "**/.ipynb_checkpoints/**",
    # Following notebooks have code errors
    "docs/build/circuit-construction.ipynb",
    "docs/build/pulse.ipynb",
    "docs/transpile/custom-transpiler-pass.ipynb",
    "docs/transpile/transpiler-stages.ipynb",
    # Following notebook has some non-python dependency I can't figure out
    "docs/build/circuit-visualization.ipynb",
    # Following notebooks make requests so can't be tested yet
    "docs/run/get-backend-information.ipynb",
    "docs/start/hello-world.ipynb",
]


def execute_notebook(path: Path, write=False) -> bool:
    """
    Wrapper function for `_execute_notebook` to print status
    """
    print(f"▶️  {path}", end="", flush=True)
    try:
        _execute_notebook(path, write)
    except nbconvert.preprocessors.CellExecutionError as err:
        print("\r❌\n")
        print(err)
        return False
    print("\r✅")
    return True


def _execute_notebook(filepath: Path, write=False) -> None:
    """
    Use nbconvert to execute notebook
    """
    nb = nbformat.read(filepath, as_version=4)

    processor = nbconvert.preprocessors.ExecutePreprocessor(
        timeout=100,
        kernel_name="python3",
    )

    processor.preprocess(nb)

    if not write:
        return

    for cell in nb.cells:
        cell.metadata.pop("execution", None)
    nbformat.write(nb, filepath)


def find_notebooks() -> list[Path]:
    """
    Get paths to all notebooks in NOTEBOOKS_GLOB that are not excluded by
    NOTEBOOKS_EXCLUDE
    """
    all_notebooks = Path(".").rglob(NOTEBOOKS_GLOB)
    return [
        path
        for path in all_notebooks
        if not any(path.match(glob) for glob in NOTEBOOKS_EXCLUDE)
    ]


if __name__ == "__main__":
    args = sys.argv[1:]
    write = WRITE_FLAG in args
    if write:
        args.remove(WRITE_FLAG)

    notebook_paths = args or find_notebooks()
    print("Executing notebooks:")
    results = [execute_notebook(path, write) for path in notebook_paths]
    if not all(results):
        sys.exit(1)
    sys.exit(0)
