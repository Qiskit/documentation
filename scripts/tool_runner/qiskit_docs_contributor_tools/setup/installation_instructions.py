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

from dataclasses import dataclass
from typing import Callable

from .check_output import Err, check_output


@dataclass
class PackageCheck:
    package_name: str
    """Human-friendly pacakge name"""
    version_command: list[str]
    """Command that should return version info"""
    install_instructions: str
    """How to install the correct version of the package"""
    version_check: Callable[[str], bool] = lambda v: v != ''
    """Expected output of running `version_command` (stripped). If not provided,
    we just check the version information isn't empty."""


def check_for_package(pkg: PackageCheck) -> tuple[bool, str]:
    result = check_output(pkg.version_command)
    if isinstance(result, Err):
        if isinstance(result.err, FileNotFoundError):
            return (
                False,
                f"❌ Could not find package '{pkg.package_name}' on this system. "
                + "To install it:\n"
                + pkg.install_instructions,
            )
        else:
            return (
                False,
                f"❌ Something went wrong while checking for '{pkg.package_name}' "
                + "on this system. You might have the wrong version installed, to install it:\n"
                + pkg.install_instructions,
            )

    found_version = result.result.strip()
    if pkg.version_check(found_version):
        return (True, f"✅ {pkg.package_name}: Found compatible version")
    else:
        return (
            False,
            f"❌ We found an incompatible version of '{pkg.package_name}' ({found_version}) "
            + "on this system. You might have the wrong version installed, to install the correct version:\n"
            + pkg.install_instructions,
        )
