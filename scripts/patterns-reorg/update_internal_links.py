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
import json
from pathlib import Path
import os 
import glob

def get_redirects(json_path: str)-> dict[str, str]:
    dir_path = os.path.dirname(os.path.realpath(__file__))
    with open(f"{dir_path}/{json_path}") as redirects_file:
        return json.load(redirects_file)


def update_link(markdown: str, folder: str, link: str, redirects: dict[str, str])-> str:
    anchor_index = link.find("#")

    if link.startswith("http") or anchor_index == 0:
        return markdown
    
    if anchor_index == -1:
        link_without_anchor = link
        anchor = ""
    else:
        link_without_anchor = link[:anchor_index]
        anchor = link[anchor_index:]

    link_split = link_without_anchor.split('/')
    if link.startswith("/") or link.startswith("../"):
        search_key = f"{link_split[-2]}/{link_split[-1]}"
    else:
        search_key = f"{folder}/{link_split[-1]}"

    if search_key in redirects:
        new_link = redirects[search_key]
        if new_link == "":
            new_link = "/guides/"
        return markdown.replace(markdown, markdown.replace(link, f"{new_link}{anchor}"))
    
    return markdown


def main() -> None:
    inline_link_re = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
    folders = ["build", "run", "start", "transpile", "verify"]
    redirects = get_redirects("redirects.json")

    for folder in folders:
        for file_path in glob.glob(f"docs/{folder}/*"):
            file = Path(file_path)
            markdown = file.read_text()
            markdown = re.sub(inline_link_re, lambda m: update_link(m[0], folder, m[2], redirects), markdown)
            file.write_text(markdown)


if __name__ == "__main__":
    main()
