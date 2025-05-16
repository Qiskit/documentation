# This code is a Qiskit project.
#
# (C) Copyright IBM 2025.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

"""
Check all notebooks are listed on the tutorials index page, and that their
titles match the titles in the notebook.
"""

from pathlib import Path
from dataclasses import dataclass
import json
import re

TUTORIALS_ROOT = Path("docs/tutorials")
INDEX_PAGE = Path("docs/tutorials/index.mdx")

@dataclass
class Link:
    link_text: str
    href: str

    def __str__(self) -> str:
        return f"[{self.link_text}]({self.href})"

def is_hidden(path: Path) -> bool:
    return any(part.startswith(".") for part in path.parts)

def get_notebook_title(path: Path) -> str:
    data = json.loads(path.read_text())
    return data['metadata']['title'].strip()

def get_expected_links() -> list[Link]:
    notebook_paths = TUTORIALS_ROOT.rglob("**/*.ipynb")
    return [
        Link(
            href=f"/{path.with_suffix('')}",
            link_text=get_notebook_title(path)
        )
        for path in notebook_paths
        if not is_hidden(path)
    ]

def extract_markdown_links(md: str) -> Link:
    link_regex = r"\[([^\]]*)\]\(([^\)]+)\)"
    return [
        Link(
            link_text=match[0].strip(),
            href=match[1].strip(),
        )
        for match in re.findall(link_regex, md)
    ]

def check_link(expected_link: Link, found_links: list[Link]) -> tuple[bool, str]:
    links_with_matching_hrefs = [link for link in found_links if link.href == expected_link.href]
    if links_with_matching_hrefs == []:
        return (False, f"* Expected to find link '{expected_link}'")

    bad_link_texts = [
        link for link in links_with_matching_hrefs
        if link.link_text != expected_link.link_text
    ]

    if bad_link_texts != []:
        msg = f"* The following links have incorrect link texts, should be '{expected_link.link_text}' (pay attention to capitalization):\n   * "
        msg += "\n   * ".join(map(str, bad_link_texts))
        return (False, msg)

    return (True, '')


def main() -> None:
    markdown = INDEX_PAGE.read_text()
    found_links = extract_markdown_links(markdown)

    results = [
        check_link(expected_link, found_links)
        for expected_link in get_expected_links()
    ]

    problems = [
        problem
        for ok, problem in results
        if not ok
    ]


    if not problems:
        return

    print(
        f"\n\nFound the following problems in {INDEX_PAGE}:\n\n"
        + '\n\n'.join(map(str, problems))
        +"\n\n"
    )
    raise SystemExit(1)

if __name__ == "__main__":
    main()
