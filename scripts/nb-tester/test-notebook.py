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


def run_notebook(*args, **kwargs):
    print(f"▶️  {path}", end="", flush=True)
    try:
        _run_notebook(*args, **kwargs)
    except Exception as err:
        print("\r❌\n")
        raise err
    print("\r✅")


def _run_notebook(filepath: Path, write=False):
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


def find_notebooks():
    all_notebooks = Path(".").rglob(NOTEBOOKS_GLOB)
    filtered_notebooks = [
        path
        for path in all_notebooks
        if not any(path.match(glob) for glob in NOTEBOOKS_EXCLUDE)
    ]
    return filtered_notebooks


if __name__ == "__main__":
    args = sys.argv[1:]
    write = WRITE_FLAG in args
    if write:
        args.remove(WRITE_FLAG)

    notebook_paths = args or find_notebooks()
    print("Executing notebooks:")
    for path in notebook_paths:
        run_notebook(path, write)
