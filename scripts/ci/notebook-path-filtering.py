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

from typing import TypedDict

# Add your notebook to this list if it needs latex or graphviz to run
EXTRA_DEPS_NOTEBOOKS = """\
docs/guides/visualize-circuits.ipynb
docs/guides/custom-backend.ipynb
docs/guides/transpiler-stages.ipynb
docs/guides/represent-quantum-computers.ipynb
docs/guides/common-parameters.ipynb
docs/guides/DAG-representation.ipynb
""".strip().split(
    "\n"
)


class Config(TypedDict):
    SHOULD_RUN: str
    FILES_TO_RUN: str
    NEEDS_EXTRA_DEPS: str


def nb_tester_config(changed_files: list[str]) -> Config:
    contains_script_file = any(
        path == ".github/workflows/notebook-test.yml"
        or path.startswith("scripts/nb-tester")
        for path in changed_files
    )
    if contains_script_file:
        return {"SHOULD_RUN": "true", "FILES_TO_RUN": "", "NEEDS_EXTRA_DEPS": "true"}

    def is_content_notebook(path: str) -> bool:
        return path.endswith(".ipynb") and (
            path.startswith("learning/")
            or (path.startswith("docs/") and not path.startswith("docs/api/"))
        )

    content_notebooks = list(filter(is_content_notebook, changed_files))
    if content_notebooks == []:
        return {"SHOULD_RUN": "false", "FILES_TO_RUN": "", "NEEDS_EXTRA_DEPS": "false"}

    return {
        "SHOULD_RUN": "true",
        "FILES_TO_RUN": ",".join(content_notebooks),
        "NEEDS_EXTRA_DEPS": str(
            any(path in EXTRA_DEPS_NOTEBOOKS for path in content_notebooks)
        ).lower(),
    }


# =====
# TESTS
# =====


def test_should_not_run_changed_mdx_config():
    files = ["docs/guides/thing.mdx"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "false"


def test_should_not_run_changed_ts_script():
    files = ["scripts/js/lib/thing.ts"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "false"


def test_should_not_run_changed_api_notebook():
    files = ["docs/api/thing.ipynb"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "false"


def test_should_run_changed_docs_notebook():
    files = ["docs/other/page.ipynb"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "true"


def test_should_run_changed_learning_notebook():
    files = ["learning/courses/my-course/page.ipynb"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "true"


def test_should_run_changed_workflow_file():
    files = [".github/workflows/notebook-test.yml"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "true"


def test_should_run_changed_source_file():
    files = ["scripts/nb-tester/requirements.txt"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "true"


def test_should_run_if_some_files_do_not_match():
    files = ["docs/other/page.ipynb", "docs/api/thing.ipynb"]
    assert nb_tester_config(files)["SHOULD_RUN"] == "true"


def test_run_all_files_if_workflow_changes():
    files = [".github/workflows/notebook-test.yml"]
    assert nb_tester_config(files)["FILES_TO_RUN"] == ""

    files = ["docs/guides/thing.ipynb", ".github/workflows/notebook-test.yml"]
    assert nb_tester_config(files)["FILES_TO_RUN"] == ""


def test_run_all_files_if_script_changes():
    files = ["scripts/nb-tester/requirements.txt"]
    assert nb_tester_config(files)["FILES_TO_RUN"] == ""

    files = ["docs/guides/thing.ipynb", "scripts/nb-tester/requirements.txt"]
    assert nb_tester_config(files)["FILES_TO_RUN"] == ""


def test_only_run_changed_content_files():
    files = ["docs/guides/thing.ipynb", "docs/guides/thing2.ipynb"]
    assert (
        nb_tester_config(files)["FILES_TO_RUN"]
        == "docs/guides/thing.ipynb,docs/guides/thing2.ipynb"
    )


def test_workflow_and_scripts_need_extra_deps():
    files = ["scripts/nb-tester/requirements.txt"]
    assert nb_tester_config(files)["NEEDS_EXTRA_DEPS"] == "true"

    files = [".github/workflows/notebook-test.yml"]
    assert nb_tester_config(files)["NEEDS_EXTRA_DEPS"] == "true"


def test_certain_files_need_extra_deps():
    files = ["docs/guides/visualize-circuits.ipynb"]
    assert nb_tester_config(files)["NEEDS_EXTRA_DEPS"] == "true"


def test_other_files_do_not_need_extra_deps():
    files = ["docs/guides/thing.ipynb"]
    assert nb_tester_config(files)["NEEDS_EXTRA_DEPS"] == "false"
