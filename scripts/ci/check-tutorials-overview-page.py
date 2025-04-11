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
Check all tutorials are listed in the overview page once in each section.

This splits the page by second-level heading (`##`), then uses a regex to detect
links of the form `* [Title](/path)`.
"""

from pathlib import Path
from dataclasses import dataclass
import re
import sys

TUTORIALS_ROOT = Path("./docs/tutorials/")
OVERVIEW_PAGE = Path(TUTORIALS_ROOT, "overview.mdx")

# All links must be of the form
# * [Tutorial title](/tutorials/tutorial-slug)
LINK_REGEX = r"\*\s+\[.*\]\((/tutorials\/.*)\)"


@dataclass
class OverviewSection:
    title: str
    paths: list[str]

    @classmethod
    def from_mdx(cls, mdx: str):
        section_title = mdx.split("\n", 1)[0].strip()
        return OverviewSection(
            title=section_title,
            paths=re.findall(LINK_REGEX, mdx),
        )


if __name__ == "__main__":
    all_tutorial_paths = [
        f"/{path.with_suffix('').relative_to('./docs')}"
        for path in TUTORIALS_ROOT.glob("*.ipynb")
    ]

    overview_page_source = OVERVIEW_PAGE.read_text()
    sections = [
        OverviewSection.from_mdx(subsection)
        for subsection in overview_page_source.split("##")[1:]
    ]

    problems: list[str] = []
    for section in sections:
        for path in all_tutorial_paths:
            appearances = section.paths.count(path)
            if appearances == 0:
                problems.append(f'"{path}" is not listed in section "{section.title}."')
            if appearances > 1:
                problems.append(
                    f'"{path}" appears more than once in section "{section.title}".'
                )

    if not problems:
        sys.exit(0)

    print(f"\n\n❌ Problem(s) detected in '{OVERVIEW_PAGE}':")
    for problem in problems:
        print(f"  {problem}")
    print()
    sys.exit(1)
