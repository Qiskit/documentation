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

from pathlib import Path
import nbformat
from squeaky import clean_notebook

# This markdown replaces cells with tag 'version-info'
VERSION_INFO = """\
<details>
<summary><b>Package versions</b></summary>

The code on this page was developed using the following requirements.
We recommend using these versions or newer.

```
{packages}
```
</details>
"""


def post_process_notebook(nb: nbformat.NotebookNode) -> nbformat.NotebookNode:
    """
    This runs on each notebook after it executes.
    """
    for cell in nb.cells:
        # Remove execution metadata to avoid noisy diffs.
        cell.metadata.pop("execution", None)
        if "version-info" in cell.metadata.get("tags", []):
            cell.source = VERSION_INFO.format(packages=get_package_versions())

    nb, _ = clean_notebook(nb)
    return nb


def get_package_versions():
    requirements_file = Path("scripts/nb-tester/requirements.txt").read_text()
    package_versions = "\n".join(
        line for line in requirements_file.split("\n") if not line.startswith("#")
    )
    return package_versions.strip()
