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

from utils import (
    configure_logging,
    run_subprocess,
    setup_git_account,
    switch_branch,
    changed_files,
)

INITIAL_COMMIT = "499a5040585d02593cdd8237e19c9ee4a84ae126"


def main() -> None:
    setup_git_account()

    with switch_branch("gh-pages"):
        delete_closed_pr_folders()

        if not changed_files():
            logger.info("No changed files detected, so no push made to gh-pages")
            return

        # Be extra sure about the branch before we force-push
        current_branch = run_subprocess(
            ["git", "branch", "--show-current"]
        ).stdout.strip()
        if current_branch != "gh-pages":
            raise AssertionError(
                f"Did not expect to be on branch '{current_branch}'; exiting"
            )

        # Squash all commits on this branch to save space
        run_subprocess(["git", "reset", "--soft", INITIAL_COMMIT])
        run_subprocess(["git", "add", "."])
        run_subprocess(["git", "commit", "-m", "Clean up PR previews"])
        run_subprocess(["git", "push", "-f"])
        logger.info("Cleaned up closed PR previews")


def get_active_pr_folders() -> 'set[str]':
    raw = run_subprocess(
        ["gh", "pr", "list", "--state", "open", "--json", "number", "--limit", "1000"]
    ).stdout
    # `raw` is JSON string of form: { number: int }[]
    return {f"pr-{obj['number']}" for obj in json.loads(raw)}

def delete_closed_pr_folders() -> None:
    active_pr_folders = get_active_pr_folders()
    for folder in Path(".").glob("pr-*"):
        is_closed = folder.name not in active_pr_folders
        if is_closed:
            logger.info(f"Deleting {folder} as PR is closed")
            shutil.rmtree(folder)


if __name__ == "__main__":
    configure_logging()
    main()
