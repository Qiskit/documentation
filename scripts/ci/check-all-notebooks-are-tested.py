# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""
Check all notebooks are listed in `scripts/config/notebook-testing.toml` so
they don't slip through our CI tests.
"""

from pathlib import Path
import tomllib
import sys

config_path = Path("scripts/config/notebook-testing.toml")
config = tomllib.loads(config_path.read_text())

categorized_notebooks = set()
for group in config["groups"].values():
    for path in group.get("notebooks", []):
        categorized_notebooks.add(Path(path))

uncategorized = [
    path
    for path in Path(".").glob("[!.]*/**/*.ipynb")
    if not path.match("**/.ipynb_checkpoints/**") and path not in categorized_notebooks
]

if uncategorized:
    print(
        f"\nThe following notebooks are not classified in {config_path}:\n  "
        + "\n  ".join(map(str, uncategorized))
        + "\nAdd them to the appropriate group so we know how to test them.\n"
    )
    sys.exit(1)
