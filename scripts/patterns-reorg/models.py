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

import dataclasses
from collections.abc import Sequence
from dataclasses import dataclass, field
from pathlib import Path


@dataclass(frozen=True)
class Entry:
    title: str
    slug: str | None = field(default=None, kw_only=True)
    children: tuple[Entry, ...] = field(default_factory=lambda: (), kw_only=True)
    external_url: str | None = field(default=None, kw_only=True)
    from_file: str | None = field(default="__unset__", kw_only=True)
    extra_page_content: str | None = field(default=None, kw_only=True)

    def __post_init__(self) -> None:
        from_file_set = self.from_file != "__unset__"
        if self.slug and self.external_url:
            raise ValueError("Cannot specify both `slug` and `external_url`")
        if self.extra_page_content and from_file_set:
            raise ValueError("Cannot specify both `from_file` and `extra_page_content`")
        if self.slug and not from_file_set and not self.extra_page_content:
            raise ValueError(
                "Must set `from_file` when `slug` is set. Set it to `None` if this is a new page."
            )

    def to_json(self, folder_name: str) -> dict:
        result = {"title": self.title}
        if self.slug is not None:
            result["url"] = f"/{folder_name}/{self.slug}"
        if self.external_url is not None:
            result["url"] = self.external_url
        if self.children:
            result["children"] = [child.to_json(folder_name) for child in self.children]
        return result

    def ensure_slugs_exist(self, base_dir: Path) -> None:
        for child in self.children:
            child.ensure_slugs_exist(base_dir)
        if self.slug is None:
            return

        extension = ".mdx"
        if self.from_file and self.from_file != "__unset__":
            from_file = Path("docs", self.from_file)
            content = from_file.read_text()
            extension = from_file.suffix
        else:
            content = f"# {self.title}"
            if self.extra_page_content:
                content += f"\n\n{self.extra_page_content}\n"
        (base_dir / f"{self.slug}{extension}").write_text(content)


def entries_as_markdown_list(
    entries: Sequence[Entry], *, indent: None | str = None
) -> str:
    result = []
    for entry in entries:
        if entry.slug:
            result.append(f"{indent or ''}* [{entry.title}](./{entry.slug})")
        if entry.external_url:
            result.append(f"{indent or ''}* [{entry.title}]({entry.external_url})")
        if entry.children:
            if indent is not None:
                first_line = f"{indent}* {entry.title}"
                children = entries_as_markdown_list(
                    entry.children, indent=indent + "  "
                )
            else:
                children = entries_as_markdown_list(entry.children, indent="")
                first_line = f"\n### {entry.title}"
            result.append(f"{first_line}\n{children}")
    return "\n".join(result)


def filter_entries(
    entries: Sequence[Entry], *, ignore: Sequence[Entry]
) -> tuple[Entry, ...]:
    result = []
    for entry in entries:
        if entry in ignore:
            continue
        result.append(
            dataclasses.replace(
                entry, children=filter_entries(entry.children, ignore=ignore)
            )
        )
    return tuple(result)
