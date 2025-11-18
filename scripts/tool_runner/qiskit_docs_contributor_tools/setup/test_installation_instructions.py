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
    PackageCheck,
    check_for_package,
)


def test_package_check_success():
    """This relies on the test system having Python3 installed"""

    python_three_check = PackageCheck(
        package_name="Python",
        version_command=["python3", "--version"],
        install_instructions="https://www.python.org/downloads/",
    )
    python_installed, message = check_for_package(python_three_check)
    assert python_installed
    assert message == "✅ Python"


def test_check_package_not_found():
    package_check = PackageCheck(
        package_name="Non-existent package",
        version_command=["non-existent-package", "--version"],
        install_instructions="Install through your package manager",
    )
    installed, message = check_for_package(package_check)
    assert not installed
    assert message == (
        "❌ Could not find package 'Non-existent package' on this system. "
        "To install it:\nInstall through your package manager"
    )
