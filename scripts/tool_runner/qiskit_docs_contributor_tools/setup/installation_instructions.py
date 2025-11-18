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
import subprocess


@dataclass
class PackageCheck:
    package_name: str
    """Human-friendly pacakge name"""
    version_command: list[str]
    """Command that should return version info"""
    install_instructions: str
    """Human readable instructions to install the correct version of the package"""


def check_for_package(pkg: PackageCheck) -> tuple[bool, str]:
    try:
        subprocess.check_output(
            pkg.version_command,
            text=True,
            encoding="utf-8",
        )
    except FileNotFoundError:
        return (
            False,
            f"❌ Could not find package '{pkg.package_name}' on this system. "
            + "To install it:\n"
            + pkg.install_instructions,
        )
    except Exception:
        return (
            False,
            f"❌ Something went wrong while checking for '{pkg.package_name}' "
            + "on this system. You might have the wrong version installed, to install it:\n"
            + pkg.install_instructions,
        )

    return (True, f"✅ {pkg.package_name}")
