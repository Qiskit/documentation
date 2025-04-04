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

"""
Check all notebooks have exactly one `version-info` cell.
"""

from pathlib import Path
import nbformat
import sys

if __name__ == "__main__":
    guides_path = Path("./docs/guides")
    for notebook in guides_path.glob("*.ipynb"):
        nb = nbformat.read(notebook, as_version=4)
        version_info_cells = [
            cell for cell in nb.cells if "version-info" in cell.metadata.get("tags", [])
        ]
        if len(version_info_cells) == 1:
            cell = version_info_cells.pop()
            if cell.cell_type != "markdown":
                print(
                    "\n\n❌ Version info cells must be markdown cells. "
                    f"Found a {cell.cell_type} cell with tag 'version-info' in "
                    f"{notebook}.\n\n"
                )
            continue
        if len(version_info_cells) == 0:
            print(
                f"\n\n❌ No version info cell found in {notebook}. (This allows users to "
                "see what versions of requirements were used when developing the notebook.)\n\n"
                "To fix, add a new markdown cell immediately after the top-level heading. Keep its content "
                "empty. In the `tags` metadata, add 'version-info'.\n\n"
            )
        else:
            print(
                f"\n\n❌ Found more than one cell with tag `version-info` in {notebook}. "
                "To fix, remove all but one.\n\n"
            )
        sys.exit(1)
