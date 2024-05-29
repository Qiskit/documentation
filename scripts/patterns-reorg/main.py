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

from models import determine_redirects
from entries import TOP_LEVEL_ENTRIES


def write_guides_dir() -> None:
    folder_path = Path("docs", "guides")
    if folder_path.exists():
        shutil.rmtree(folder_path)
    folder_path.mkdir(parents=True)

    for entry in TOP_LEVEL_ENTRIES:
        entry.ensure_slugs_exist(folder_path)

    result = {
        "title": "Guides",
        "collapsed": True,
        "children": [entry.to_json("guides") for entry in TOP_LEVEL_ENTRIES],
    }
    text = json.dumps(result, indent=2)
    (folder_path / "_toc.json").write_text(text)


def write_redirects_file() -> None:
    fp = Path("scripts/patterns-reorg/redirects.json")
    redirects = determine_redirects(TOP_LEVEL_ENTRIES)
    text = json.dumps(redirects, indent=2)
    fp.write_text(text)


def main() -> None:
    write_guides_dir()
    write_redirects_file()


if __name__ == "__main__":
    main()
