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
Run the notebook tester on all notebooks using test-eagle.
"""

import subprocess
from pathlib import Path

args = ["tox", "--", "--test-strategy", "extended"]
if changed_notebooks and not config_changed:
    args.extend(changed_notebooks)

subprocess.run(args, check=True)
