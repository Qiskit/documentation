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

from __future__ import annotations

import logging
import subprocess
from pathlib import Path


logger = logging.getLogger(__name__)


def configure_logging() -> None:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
        datefmt="%H:%M:%S",
    )


def run_subprocess(
    cmd: list[str],
    *,
    cwd: Path | None = None,
    stream_output: bool = False,
) -> subprocess.CompletedProcess:
    output_dest = None if stream_output else subprocess.PIPE
    if stream_output:
        logger.info(f"Starting subprocess: {', '.join(cmd)}")
    result = subprocess.run(
        cmd,
        cwd=cwd,
        stdout=output_dest,
        stderr=output_dest,
        text=True,
    )
    if result.returncode == 0:
        return result
    logger.error(f"Subprocess failed with code {result.returncode}: {cmd}")
    if not stream_output:
        logger.error(f"stdout: {result.stdout}")
        logger.error(f"stderr: {result.stderr}")
    raise SystemExit()
