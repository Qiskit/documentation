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
    """This relies on the test system having Python >=3.8"""

    def check_python(version: str) -> bool:
        split_version = version.split(".")
        if split_version[0] != "Python 3":
            return False
        if int(split_version[1]) < 8:
            return False
        return True

    python_three_check = PackageCheck(
        package_name="Python >=3.8",
        version_command=["python3", "--version"],
        version_check=check_python,
        install_instructions="https://www.python.org/downloads/",
    )
    python_installed, message = check_for_package(python_three_check)
    assert python_installed
    assert message == "✅ Python >=3.8: Found compatible version"


def test_check_package_check_not_found():
    package_check = PackageCheck(
        package_name="Non-existent package (any)",
        version_command=["non-existent-package", "--version"],
        version_check=lambda v: True,
        install_instructions="Install through your package manager",
    )
    installed, message = check_for_package(package_check)
    assert not installed
    assert message == (
        "❌ Could not find package 'Non-existent package (any)' on this system. "
        "To install it:\nInstall through your package manager"
    )


def test_check_package_check_wrong_version():
    package_check = PackageCheck(
        package_name="Python",
        version_command=["python3", "--version"],
        version_check=lambda v: False,
        install_instructions="https://www.python.org/downloads/",
    )
    installed, message = check_for_package(package_check)
    assert not installed
    assert message.startswith("❌ We found an incompatible version of 'Python' (")
    assert message.endswith(
        "on this system. You might have the wrong version installed, "
        "to install the correct version:\nhttps://www.python.org/downloads/"
    )
