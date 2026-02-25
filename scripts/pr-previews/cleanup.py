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
import time
from pathlib import Path
from datetime import datetime
from typing import TypedDict

logger = logging.getLogger(__name__)

from utils import (
    configure_logging,
    run_subprocess,
    setup_git_account,
    switch_branch,
    changed_files,
)

INITIAL_COMMIT = "499a5040585d02593cdd8237e19c9ee4a84ae126"

SEVEN_DAYS_IN_SECONDS = 60 * 60 * 24 * 7
PR_EXPIRATION_TIME_SECONDS = SEVEN_DAYS_IN_SECONDS


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


class PrFolders(TypedDict):
    all_open: set[str]
    open_stale: set[str]


def determine_stale(
    api_response: str, current_time: int, expiration_period: int
) -> PrFolders:
    # We parse the JSON into `{ number: int, updatedAt: int }[]`
    def parse_updated_at(data):
        """Converts "updatedAt" fields from iso strings into unix timestamps"""
        if "updatedAt" in data:
            iso_format = data["updatedAt"]
            timestamp = datetime.fromisoformat(iso_format).timestamp()
            data["updatedAt"] = timestamp
        return data

    parsed = json.loads(api_response, object_hook=parse_updated_at)
    all_pr_numbers = (pr["number"] for pr in parsed)

    # ========================================================
    # Extract stale PRs
    # ========================================================

    def is_stale(updated_at: int) -> bool:
        return (current_time - updated_at) > expiration_period

    stale_pr_numbers = (pr["number"] for pr in parsed if is_stale(pr["updatedAt"]))

    # === Return folder names ===
    def number_to_folder(num: int) -> str:
        return f"pr-{num}"

    return {
        "all_open": set(map(number_to_folder, all_pr_numbers)),
        "open_stale": set(map(number_to_folder, stale_pr_numbers)),
    }


def get_pr_folders() -> PrFolders:
    api_response = run_subprocess(
        [
            "gh",
            "pr",
            "list",
            "--state",
            "open",
            "--json",
            "number,updatedAt",
            "--limit",
            "1000",
        ]
    ).stdout
    return determine_stale(api_response, int(time.time()), PR_EXPIRATION_TIME_SECONDS)


def delete_closed_pr_folders() -> None:
    pr_folders = get_pr_folders()

    for folder in Path(".").glob("pr-*"):
        is_closed = folder.name not in pr_folders["all_open"]
        if is_closed:
            logger.info(f"Deleting {folder} as PR is closed")
            shutil.rmtree(folder)
            continue

        is_stale = folder.name in pr_folders["open_stale"]
        if is_stale:
            logger.info(f"Would delete {folder} as it is stale")
            # TODO (#3433) Change the log message and uncomment the following line
            # shutil.rmtree(folder)
            continue


if __name__ == "__main__":
    configure_logging()
    main()


# =====
# TESTS
# =====


def test_determine_stale_empty_list():
    assert determine_stale("[]", 0, 1) == {"all_open": set(), "open_stale": set()}


def test_determine_stale_active_pr():
    api_response = """[{
      "number": 1,
      "updatedAt": "1970-01-01T01:00:00"
    }]"""
    assert determine_stale(api_response, current_time=0, expiration_period=1) == {
        "all_open": {"pr-1"},
        "open_stale": set(),
    }


def test_determine_stale_stale_pr():
    # unix_epoch = "1970-01-01T01:00:00"
    # (checked wih `datetime.fromtimestamp(0).isoformat()`)
    api_response = """[{
      "number": 1,
      "updatedAt": "1970-01-01T01:00:00"
    }]"""
    assert determine_stale(api_response, current_time=100, expiration_period=10) == {
        "all_open": {"pr-1"},
        "open_stale": {"pr-1"},
    }


def test_determine_stale_many_results():
    api_response = """[
      {
        "number": 1,
        "updatedAt": "1970-01-01T01:00:00"
      },
      {
        "number": 2,
        "updatedAt": "1970-01-02T01:00:00"
      },
      {
        "number": 3,
        "updatedAt": "1970-01-03T01:00:00"
      }
    ]"""
    current_time = int(datetime(1970, 1, 4, 1, 0).timestamp())  # 4th Jan, 1970
    two_days_in_seconds = 60 * 60 * 24 * 2
    assert determine_stale(
        api_response, current_time, expiration_period=two_days_in_seconds
    ) == {
        "all_open": {"pr-1", "pr-2", "pr-3"},
        "open_stale": {"pr-1"},
    }
