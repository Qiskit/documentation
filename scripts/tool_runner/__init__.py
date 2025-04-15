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
