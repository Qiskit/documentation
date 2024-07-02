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

import yaml
from textwrap import dedent
from pathlib import Path
from main import OLD_FOLDERS, REDIRECTS


def get_new_qiskit_bot_notifications(qiskit_bot_file_path: str) -> None:
    with open(qiskit_bot_file_path, "r") as file:
        data = yaml.load(file, Loader=yaml.SafeLoader)

    new_entries = {}
    for file_path in data["notifications"]:
        file_path_split = file_path.split("/")
        search_key = f"/{file_path_split[-2]}/{file_path_split[-1]}"

        if search_key in REDIRECTS:
            new_file = REDIRECTS[search_key]
            if new_file == "/guides":
                new_file = "/guides/index"
            new_entries[f"docs{new_file}"] = data["notifications"][file_path]
        elif file_path_split[-2] not in OLD_FOLDERS:
            # We don't want to modify the migration guides
            new_entries[file_path] = data["notifications"][file_path]

    return new_entries


def replace_indentation_placeholder(qiskit_bot_file_path: str) -> None:
    file = Path(qiskit_bot_file_path)
    data = file.read_text()
    data = data.replace('"INDENTATION":', "notifications:")
    file.write_text(data)


def generate_new_qiskit_bot_file(
    qiskit_bot_file_path: str, notifications: dict[str, str]
) -> None:
    with open(qiskit_bot_file_path, "w") as file:
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
    replace_indentation_placeholder(qiskit_bot_file_path)


def main() -> None:
    qiskit_bot_file_path = "qiskit_bot.yaml"
    notifications = get_new_qiskit_bot_notifications(qiskit_bot_file_path)
    generate_new_qiskit_bot_file(qiskit_bot_file_path, notifications)


if __name__ == "__main__":
    main()
