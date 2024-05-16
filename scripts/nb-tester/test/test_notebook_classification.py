from types import SimpleNamespace
from pathlib import Path

from qiskit_docs_notebook_tester import Config, matches


def test_all_notebooks_are_classified():
    args = SimpleNamespace(
        filenames=None,
        write=False,
        submit_jobs=True,
        config_path="scripts/nb-tester/notebooks.toml"
    )

    config = Config.from_args(args)


    unclassified = [
        path for path in Path(".").glob("[!.]*/**/*.ipynb")
        if not matches(path, config.all_notebooks)
    ]

    message = (
        f"\nThe following notebooks are not classified in {args.config_path}:\n  "
        + "\n  ".join(map(str, unclassified))
        + "\nAdd them to the appropriate group so we know how to test them.\n"
    )

    assert unclassified == [], message
