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
from contextlib import contextmanager
from pathlib import Path
from typing import Iterator


logger = logging.getLogger(__name__)


def configure_logging() -> None:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
        datefmt="%H:%M:%S",
    )


def setup_git_account() -> None:
    run_subprocess(["git", "config", "user.name", "github-actions[bot]"])
    run_subprocess(
        ["git", "config", "user.email", "github-actions[bot]@users.noreply.github.com"]
    )


def changed_files() -> str:
    return run_subprocess(["git", "status", "--porcelain"]).stdout.strip()


def commit_all_and_push(commit_message: str) -> None:
    run_subprocess(["git", "add", "."])
    run_subprocess(["git", "commit", "-m", commit_message])
    run_subprocess(["git", "push"])


@contextmanager
def switch_branch(branchname: str) -> Iterator[None]:
    run_subprocess(["git", "fetch", "origin", branchname])
    run_subprocess(["git", "switch", branchname])
    yield
    run_subprocess(["git", "checkout", "-"])


def run_subprocess(
    cmd: list[str],
    *,
    cwd: Path | None = None,
    env: dict[str, str] | None = None,
    stream_output: bool = False,
) -> subprocess.CompletedProcess:
    output_dest = None if stream_output else subprocess.PIPE
    if stream_output:
        logger.info(f"Starting subprocess: {', '.join(cmd)}")
    result = subprocess.run(
        cmd,
        cwd=cwd,
        env=env,
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
    raise SystemExit(1)
