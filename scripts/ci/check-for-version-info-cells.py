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

guides_path = Path("./docs/guides")
for notebook in guides_path.glob("*.ipynb"):
    nb = nbformat.read(notebook, as_version=4)
    num_version_info_cells = len(
        list(
            filter(
                lambda cell: "version-info" in cell.metadata.get("tags", []),
                nb.cells,
            )
        )
    )
    if num_version_info_cells == 1:
        continue
    if num_version_info_cells == 0:
        print(
            f"\n\n❌ No version info cell found in {notebook}; add an empty markdown "
            "cell immediately after the top-level heading and add a "
            "`version-info` tag. This is so the package versions will be added "
            "to the notebook next time it's executed.\n\n"
        )
    else:
        print(
            f"\n\n❌ Found more than one cell with tag `version-info` in {notebook}; "
            "remove all but one.\n\n"
        )
    sys.exit(1)
