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

import shutil
import json
from pathlib import Path

from models import Entry
from entries import TOP_LEVEL_ENTRIES


def write_result(folder: str, entries: tuple[Entry, ...]) -> None:
    folder_path = Path("docs", folder)
    if folder_path.exists():
        shutil.rmtree(folder_path)
    folder_path.mkdir(parents=True)

    for entry in entries:
        entry.ensure_slugs_exist(folder_path)

    result = {
        "title": "Guides",
        "collapsed": True,
        "children": [entry.to_json(folder) for entry in entries],
    }
    text = json.dumps(result, indent=2)
    (folder_path / "_toc.json").write_text(text)


def get_redirects(entries: tuple[Entry, ...]) -> list[str]:
    redirects = []
    for entry in entries:
        if entry.from_file and entry.from_file != "__unset__" and entry.slug:
            old_url = Path(entry.from_file).with_suffix("")
            redirects.append(f'["{old_url}", "{entry.slug}"],')
        redirects.extend(get_redirects(entry.children))
    return sorted(redirects)


def gen_redirects_file(entries: tuple[Entry, ...]) -> None:
    fp = Path("scripts/patterns-reorg/redirects.txt")
    fp.write_text("[\n")
    redirects = get_redirects(entries)
    with fp.open("a") as file:
        for redirect in redirects:
            file.write(f"  {redirect}\n")
        file.write("]")


def main() -> None:
    write_result("guides", TOP_LEVEL_ENTRIES)
    gen_redirects_file(TOP_LEVEL_ENTRIES)


if __name__ == "__main__":
    main()
