#!/usr/bin/env python3.11

# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may obtain a
# copy of this license in the LICENSE file in the root directory of this source
# tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this copyright
# notice, and modified files need to carry a notice indicating that they have
# been altered from the originals.

from __future__ import annotations

import re
import glob
import yaml
from pathlib import Path
from textwrap import dedent
from main import OLD_FOLDERS, REDIRECTS


def update_link(markdown: str, folder: str, link: str, prefix: str) -> str:
    anchor_index = link.find("#")

    if link.startswith("http") or anchor_index == 0:
        return markdown

    if anchor_index == -1:
        link_without_anchor = link
        anchor = ""
    else:
        link_without_anchor = link[:anchor_index]
        anchor = link[anchor_index:]

    link_split = link_without_anchor.split("/")
    if link.startswith("/") or link.startswith("../"):
        if link_split[-2] == "..":
            # Match links to a folder like '../../transpile'
            search_key = link_split[-1]
        else:
            if link_split[-1] == "":
                # Match links like '../transpile/'
                search_key = link_split[-2]
            else:
                # Match links like '../transpile/index'
                search_key = f"{link_split[-2]}/{link_split[-1]}"
    else:
        if link_without_anchor == "./":
            # Match links with anchors to the index page, e.g. './#example-1'
            search_key = f"{folder}"
        else:
            search_key = f"{folder}/{link_split[-1]}"

    if search_key not in REDIRECTS:
        return markdown

    new_link = REDIRECTS[search_key]
    if new_link == "":
        new_link = "/guides"

    redirect_to = f"{new_link}{anchor}"
    # If the link doesn't change we return without changing anything
    if link == redirect_to:
        return markdown

    return markdown.replace(link, f"{prefix}{redirect_to}")


def update_old_files_links() -> None:
    inline_link_re = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")

    for folder in [*OLD_FOLDERS, "api/migration-guides"]:
        prefix = "/guides/" if folder == "api/migration-guides" else "./"
        for file_path in glob.glob(f"docs/{folder}/*"):
            file = Path(file_path)
            markdown = file.read_text()
            markdown = re.sub(
                inline_link_re,
                lambda m: update_link(m[0], folder, m[2], prefix),
                markdown,
            )
            file.write_text(markdown)


def get_new_qiskit_bot_notifications(qiskit_bot_file: str) -> None:
    with open(qiskit_bot_file, "r") as file:
        data = yaml.load(file, Loader=yaml.SafeLoader)
        new_entries = {}
        for file_path in data["notifications"]:
            file_path_split = file_path.split("/")
            search_key = f"{file_path_split[-2]}/{file_path_split[-1]}"

            if search_key in REDIRECTS:
                new_file = REDIRECTS[search_key]
                if new_file == "":
                    new_file = "index"
                new_entries[f"docs/guides/{new_file}"] = data["notifications"][
                    file_path
                ]
            elif file_path_split[-2] not in OLD_FOLDERS:
                # We don't want to modify the migration guides
                new_entries[file_path] = data["notifications"][file_path]

        return new_entries


def replace_indentation_placeholder(qiskit_bot_file: str) -> None:
    file = Path(qiskit_bot_file)
    data = file.read_text()
    data = data.replace('"INDENTATION":', "notifications:")
    file.write_text(data)


def generate_new_qiskit_bot_file(
    qiskit_bot_file: str, notifications: dict[str, str]
) -> None:
    with open(qiskit_bot_file, "w") as file:
        file.write(
            dedent(
                """\
---
always_notify: true
notification_prelude: |
  Thanks for contributing to Qiskit documentation!

  Before your PR can be merged, it will first need to pass continuous integration tests and be reviewed. Sometimes the review process can be slow, so please be patient. Thanks! 🙌

# We use backticks around users who don`t want a GitHub notification, but whom
# we still want their name in the Qiskit Bot message so people know they are
# relevant.
"""
            )
        )
        # Use a placeholder to have the correct indentation for the notifications
        yaml.dump(
            {"INDENTATION": notifications},
            file,
            default_flow_style=False,
            default_style='"',
        )
        replace_indentation_placeholder(qiskit_bot_file)


def update_qiskit_bot_files() -> None:
    qiskit_bot_file = "qiskit_bot.yaml"
    notifications = get_new_qiskit_bot_notifications(qiskit_bot_file)
    generate_new_qiskit_bot_file(qiskit_bot_file, notifications)


def main() -> None:
    update_old_files_links()
    update_qiskit_bot_files()


if __name__ == "__main__":
    main()
