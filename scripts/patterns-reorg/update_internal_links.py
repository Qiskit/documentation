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
from pathlib import Path
from main import OLD_FOLDERS, REDIRECTS


def update_link(markdown: str, folder: str, link: str) -> str:
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
        search_key = f"{link_split[-2]}/{link_split[-1]}"
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

    return markdown.replace(link, f"./{redirect_to}")


def main() -> None:
    inline_link_re = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")

    for folder in OLD_FOLDERS:
        for file_path in glob.glob(f"docs/{folder}/*"):
            file = Path(file_path)
            markdown = file.read_text()
            markdown = re.sub(
                inline_link_re,
                lambda m: update_link(m[0], folder, m[2]),
                markdown,
            )
            file.write_text(markdown)


if __name__ == "__main__":
    main()
