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

from qiskit_docs_contributor_tools.setup.installation_instructions import (
    check_for_package,
)


def test_package_check_success():
    """This relies on the test system having Python3 installed"""

    python_installed, message = check_for_package(
        "python3", "https://www.python.org/downloads/"
    )
    assert python_installed
    assert message == "✅ python3"


def test_check_package_not_found():
    installed, message = check_for_package(
        "non-existent-package", "Consult your package manager"
    )
    assert not installed
    assert message == (
        "❌ No command 'non-existent-package' on this system. "
        "To install it:\nConsult your package manager"
    )
