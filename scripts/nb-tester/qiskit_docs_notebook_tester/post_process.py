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

import ast
import importlib
import itertools
import re
import sys
from pathlib import Path
from collections.abc import Iterable

import nbformat
from squeaky import clean_notebook

# This markdown replaces cells with tag 'version-info'
VERSION_INFO = """\
{{/*
  DO NOT EDIT THIS CELL!!!
  This cell's content is generated automatically by a script. Anything you add
  here will be removed next time the notebook is run. To add new content, create
  a new cell before or after this one.
*/}}

<Accordion>
<AccordionItem title="Package versions">

The code on this page was developed using the following requirements.
We recommend using these versions or newer.

```
{packages}
```
</AccordionItem>
</Accordion>
"""


def post_process_notebook(nb: nbformat.NotebookNode) -> nbformat.NotebookNode:
    """
    This runs on each notebook after it executes.
    """
    for cell in nb.cells:
        # Remove execution metadata to avoid noisy diffs.
        cell.metadata.pop("execution", None)
        if "version-info" in cell.metadata.get("tags", []):
            python_code = "\n".join(cell.source for cell in nb.cells if cell.cell_type == 'code')
            requirements_txt = Path("scripts/nb-tester/requirements.txt").read_text()
            used_package_versions = get_package_versions(python_code, requirements_txt)
            if used_package_versions:
                cell.source = VERSION_INFO.format(packages=used_package_versions)

    nb, _ = clean_notebook(nb)
    return nb


def get_package_versions(python_code: str, requirements_txt: str) -> str:
    # A module can refer to many installable packages, e.g. 'import qiskit' can import
    # things installed by both 'qiskit' and 'qiskit[visualization]'. For simplicity,
    # we include any packages that could be relevant.
    module_to_packages = importlib.metadata.packages_distributions()
    packages = flatten(
      module_to_packages[module]
      for module in get_used_modules(python_code)
      if module not in sys.stdlib_module_names
    )
    package_versions = "\n".join(
        line for line in requirements_txt.split("\n")
        if re.split('[\\[~=]', line)[0].strip() in packages
    )
    return package_versions.strip()

def get_used_modules(source: str) -> Iterable[str]:
    # Remove Jupyter magics
    source_without_magics = "\n".join(
        line for line in source.split("\n")
        if not line.strip().startswith("%")
   )
    for node in ast.iter_child_nodes(ast.parse(source=source_without_magics, filename="_.py")):
        if isinstance(node, ast.Import):
            for module in node.names:
                yield module.name.split(".")[0]
        elif isinstance(node, ast.ImportFrom):
            if node.module is not None:
                yield node.module.split(".")[0]

def flatten(i: Iterable[Iterable]) -> list:
    return list(itertools.chain.from_iterable(i))
