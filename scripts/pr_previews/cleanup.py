#!/usr/bin/env python3

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

import json
import logging
import shutil
from pathlib import Path

logger = logging.getLogger(__name__)

from utils import configure_logging, run_subprocess, setup_git_account, switch_branch


def main() -> None:
    setup_git_account()

    with switch_branch("gh-pages"):
        delete_closed_pr_folders()

        changed_files = run_subprocess(["git", "status", "--porcelain"]).stdout.strip()
        if not changed_files:
            logger.info("No changed files detected, so no push made to gh-pages")
            return

        run_subprocess(["git", "add", "."])
        run_subprocess(["git", "commit", "-m", f"Clean up PR previews"])
        run_subprocess(["git", "push"])
        logger.info("Pushed updates to gh-pages branch")


def get_active_pr_folders() -> set[str]:
    raw = run_subprocess(
        ["gh", "pr", "list", "--state", "open", "--json", "number", "--limit", "1000"]
    ).stdout
    # `raw` is JSON string of form: { number: int }[]
    return {f"pr-{obj['number']}" for obj in json.loads(raw)}


def delete_closed_pr_folders() -> None:
    active_pr_folders = get_active_pr_folders()
    for folder in Path(".").glob("pr-*"):
        if folder.name not in active_pr_folders:
            logger.info(f"Deleting {folder}")
            shutil.rmtree(folder)


if __name__ == "__main__":
    configure_logging()
    main()
