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

from __future__ import annotations

import logging
import textwrap
import subprocess

from .setup.installation_instructions import check_for_package

logger = logging.getLogger(__name__)


def configure_logging() -> None:
    logging.basicConfig(level=logging.INFO, format="%(message)s")


def run_cmd(name: str, cmd: list[str], *, progress: str | None) -> None:
    """Run a command and log its success or failure.

    If failure, logs the output of the tool and exits the program.
    """
    result = subprocess.run(
        cmd,
        stdout=subprocess.PIPE,
        # Merge stderr into stdout so that output is sequential.
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
    )
    if result.returncode == 0:
        progress_formatted = f" ({progress})" if progress else ""
        logger.info(f"✅ {name}{progress_formatted}")
        return

    divider = "—" * 50
    output = textwrap.indent(result.stdout, " " * 2)
    logger.error(f"❌ {name}\n\n{divider}\n{output}")

    # This ends the program without adding a noisy stacktrace.
    raise SystemExit(1)


def check_packages(verbose=False) -> None:
    """Check the current system has the required packages"""
    checks = [
        (
            "node",
            (
                "If you expect to use JavaScript in other projects, consider "
                "using NVM (https://github.com/nvm-sh/nvm). Otherwise, consider "
                "using Homebrew (https://formulae.brew.sh/formula/node) or "
                "installing Node.js directly (https://nodejs.org/en)."
            ),
        ),
        (
            "docker",
            (
                "Go to https://docs.docker.com/engine/install/. If you are an "
                "IBM employee, make sure to only install Docker Engine; do NOT "
                'install "Docker Desktop".'
            ),
        ),
        (
            "tox",
            (
                "First, make sure `pipx` is installed "
                "(https://pipx.pypa.io/stable/), then run `pipx install tox`"
            ),
        ),
        (
            "magick",
            (
                "See instructions at "
                "https://imagemagick.org/script/download.php. "
                "We recommend installing through a package manager rather than "
                "downloading the binary."
            ),
        ),
    ]
    for command, install_instructions in checks:
        installed, message = check_for_package(command, install_instructions)
        if not installed:
            print(message)
            raise SystemExit(1)
        if verbose:
            print(message)
