# This code is a Qiskit project.
#
# (C) Copyright IBM 2025.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

import os
import sys
from typing import TypedDict
from pathlib import Path


class Config(TypedDict):
    SHOULD_RUN_NOTEBOOK_TESTER: str


def filter_paths(changed_files: list[str]) -> Config:
    contains_script_file = any(
        path == ".github/workflows/notebook-test.yml"
        or path.startswith("scripts/nb-tester")
        for path in changed_files
    )
    if contains_script_file:
        return {"SHOULD_RUN_NOTEBOOK_TESTER": "true"}

    def is_content_notebook(path: str) -> bool:
        return path.endswith(".ipynb") and (
            path.startswith("learning/")
            or (path.startswith("docs/") and not path.startswith("docs/api/"))
        )

    content_notebooks = list(filter(is_content_notebook, changed_files))
    if content_notebooks == []:
        return {"SHOULD_RUN_NOTEBOOK_TESTER": "false"}
    return {"SHOULD_RUN_NOTEBOOK_TESTER": "true"}


if __name__ == "__main__":
    all_changed_files = sys.stdin.read().strip()
    config = filter_paths(all_changed_files)
    print(config)

    github_output = os.getenv("GITHUB_OUTPUT")
    with open(github_output, "a") as output:
        for key, value in config.items():
            output.write(f"{key}={value}")


# =====
# TESTS
# =====


def test_should_not_run_changed_mdx_config():
    files = ["docs/guides/thing.mdx"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "false"


def test_should_not_run_changed_ts_script():
    files = ["scripts/js/lib/thing.ts"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "false"


def test_should_not_run_changed_api_notebook():
    files = ["docs/api/thing.ipynb"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "false"


def test_should_run_changed_docs_notebook():
    files = ["docs/other/page.ipynb"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "true"


def test_should_run_changed_learning_notebook():
    files = ["learning/courses/my-course/page.ipynb"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "true"


def test_should_run_changed_workflow_file():
    files = [".github/workflows/notebook-test.yml"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "true"


def test_should_run_changed_source_file():
    files = ["scripts/nb-tester/requirements.txt"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "true"


def test_should_run_if_some_files_do_not_match():
    files = ["docs/other/page.ipynb", "docs/api/thing.ipynb"]
    assert filter_paths(files)["SHOULD_RUN_NOTEBOOK_TESTER"] == "true"
