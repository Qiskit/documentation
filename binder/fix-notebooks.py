#!/usr/bin/env python3
"""Clean up IBM documentation notebooks for plain Jupyter rendering.

IBM's Qiskit notebooks are authored for a custom MDX platform.
This script fixes five issues that appear in standard Jupyter:

1. YAML frontmatter (--- title: ... ---) rendered as visible text
2. MDX cspell directives ({/* cspell:ignore ... */}) shown in output
3. JSX <Image> tags in markdown cells that don't render in Jupyter
4. Pre-rendered <Image> tags in code cell outputs (replace with HTML <img>)
5. Fenced code blocks (python/bash) in markdown cells that should be
   separate executable code cells

Image paths are converted from absolute (/docs/images/...) to relative paths
so they resolve correctly in Jupyter's URL space.
"""

import json
import os
import re
import sys
import textwrap
from pathlib import Path

# --- patterns -----------------------------------------------------------

# YAML frontmatter at the start of a cell: ---\n...\n---\n
FRONTMATTER_RE = re.compile(r"\A---\n.*?^---\n*", re.DOTALL | re.MULTILINE)

# MDX comment lines: {/* cspell:ignore ... */}  (possibly with surrounding whitespace)
CSPELL_RE = re.compile(r"^\{/\*.*?\*/\}\s*\n?", re.MULTILINE)

# JSX <Image src="..." alt="..." /> — attributes in either order
IMAGE_RE = re.compile(
    r'<Image\s+'
    r'(?:src="(?P<src1>[^"]+)"\s+alt="(?P<alt1>[^"]*)"'
    r'|alt="(?P<alt2>[^"]*)"\s+src="(?P<src2>[^"]+)")'
    r'\s*/?>',
)


# Fenced code block: ```lang\n...\n``` with optional indentation
FENCED_CODE_RE = re.compile(
    r"^(?P<indent>[ ]*)```(?P<lang>\w*)\s*\n"
    r"(?P<body>.*?)"
    r"^(?P=indent)```[ ]*$",
    re.MULTILINE | re.DOTALL,
)

# Languages to extract as executable code cells
EXTRACT_AS_CODE = {"python", "py"}
EXTRACT_AS_SHELL = {"bash", "shell", "sh"}
EXTRACTABLE_LANGS = EXTRACT_AS_CODE | EXTRACT_AS_SHELL

# MDX container tags whose code blocks should NOT be extracted
CONTAINER_TAGS = ["Admonition", "Tabs", "OperatingSystemTabs", "details"]


def _extract_image_attrs(m: re.Match) -> tuple[str, str]:
    """Extract (src, alt) from an IMAGE_RE match."""
    src = m.group("src1") or m.group("src2")
    alt = m.group("alt1") or m.group("alt2") or ""
    return src, alt


def _make_relative(abs_path: str, notebook_dir: str) -> str:
    """Convert an absolute image path like /docs/images/... to a path
    relative to the notebook's directory."""
    # Strip leading / to get repo-relative path
    repo_rel = abs_path.lstrip("/")
    return os.path.relpath(repo_rel, notebook_dir)


# --- code-block splitting helpers ----------------------------------------

def _find_no_extract_zones(source: str) -> list[tuple[int, int]]:
    """Return sorted, merged (start, end) char ranges inside container tags."""
    zones: list[tuple[int, int]] = []
    for tag in CONTAINER_TAGS:
        open_pat = re.compile(rf"<{tag}[\s>]")
        close_pat = re.compile(rf"</{tag}>")
        events: list[tuple[int, str]] = []
        for m in open_pat.finditer(source):
            events.append((m.start(), "open"))
        for m in close_pat.finditer(source):
            events.append((m.end(), "close"))
        events.sort(key=lambda e: e[0])
        depth = 0
        open_pos = 0
        for pos, kind in events:
            if kind == "open":
                if depth == 0:
                    open_pos = pos
                depth += 1
            else:
                depth -= 1
                if depth == 0:
                    zones.append((open_pos, pos))
    # Sort and merge overlapping zones
    zones.sort()
    merged: list[tuple[int, int]] = []
    for start, end in zones:
        if merged and start <= merged[-1][1]:
            merged[-1] = (merged[-1][0], max(merged[-1][1], end))
        else:
            merged.append((start, end))
    return merged


def _in_no_extract_zone(pos: int, zones: list[tuple[int, int]]) -> bool:
    """Check if a character position falls inside any no-extract zone."""
    for zs, ze in zones:
        if zs <= pos < ze:
            return True
    return False


def _strip_indent(body: str, fence_indent: str) -> str:
    """Remove the fence's indentation prefix from each line of code body,
    then dedent any remaining common whitespace."""
    n = len(fence_indent)
    if n == 0:
        result = body
    else:
        lines = body.split("\n")
        stripped = []
        for line in lines:
            if line.strip() == "":
                stripped.append("")
            elif line[:n] == fence_indent:
                stripped.append(line[n:])
            else:
                stripped.append(line.lstrip())
        result = "\n".join(stripped)
    result = textwrap.dedent(result)
    result = result.strip("\n")
    return result + "\n" if result else ""


def _add_shell_prefix(code: str) -> str:
    """Prepend ! to each command line for Jupyter shell execution."""
    lines = code.split("\n")
    result = []
    for line in lines:
        s = line.strip()
        if s == "" or s.startswith("#"):
            result.append(line)
        else:
            result.append("!" + line)
    return "\n".join(result)


def _make_md_cell(text: str, cell_id: str) -> dict:
    """Create a markdown cell dict."""
    text = text.strip("\n")
    if not text.endswith("\n"):
        text += "\n"
    return {
        "cell_type": "markdown",
        "id": cell_id,
        "metadata": {},
        "source": text.splitlines(keepends=True),
    }


def _make_code_cell(code: str, cell_id: str) -> dict:
    """Create an executable code cell dict."""
    return {
        "cell_type": "code",
        "execution_count": None,
        "id": cell_id,
        "metadata": {},
        "outputs": [],
        "source": code.splitlines(keepends=True),
    }


def _split_markdown_cell(cell: dict) -> list[dict]:
    """Split a markdown cell at extractable fenced code blocks.

    Returns a list of cells.  If no extractable code blocks are found,
    returns a single-element list containing the original cell unchanged.
    """
    source = "".join(cell["source"])
    zones = _find_no_extract_zones(source)

    extractions = []
    for m in FENCED_CODE_RE.finditer(source):
        lang = m.group("lang").lower()
        if lang in EXTRACTABLE_LANGS and not _in_no_extract_zone(m.start(), zones):
            extractions.append(m)

    if not extractions:
        return [cell]

    result_cells: list[dict] = []
    prev_end = 0
    base_id = cell.get("id", "split")

    for idx, m in enumerate(extractions):
        # Markdown before this code block
        md_text = source[prev_end:m.start()]
        if md_text.strip():
            result_cells.append(_make_md_cell(md_text, f"{base_id}-md{idx}"))

        # Extracted code block
        lang = m.group("lang").lower()
        indent = m.group("indent")
        body = m.group("body")
        code = _strip_indent(body, indent)

        if not code.strip():
            prev_end = m.end()
            continue

        if lang in EXTRACT_AS_SHELL:
            code = _add_shell_prefix(code)

        result_cells.append(_make_code_cell(code, f"{base_id}-code{idx}"))
        prev_end = m.end()

    # Trailing markdown
    md_text = source[prev_end:]
    if md_text.strip():
        result_cells.append(
            _make_md_cell(md_text, f"{base_id}-md{len(extractions)}")
        )

    return result_cells


# --- processing ----------------------------------------------------------

def process_notebook(path: Path, root: Path) -> bool:
    """Process a single notebook. Returns True if the file was modified."""
    data = json.loads(path.read_text(encoding="utf-8"))
    changed = False

    # Directory of this notebook relative to the repo root
    nb_dir = str(path.parent.relative_to(root))

    def fix_md_image(m: re.Match) -> str:
        src, alt = _extract_image_attrs(m)
        rel = _make_relative(src, nb_dir)
        return f"![{alt}]({rel})"

    for i, cell in enumerate(data.get("cells", [])):
        # --- markdown cells: frontmatter, cspell, Image tags ---
        if cell.get("cell_type") == "markdown":
            source = "".join(cell["source"])
            original = source

            # Strip frontmatter from the first markdown cell only
            if i == 0:
                source = FRONTMATTER_RE.sub("", source)

            # Remove cspell directives
            source = CSPELL_RE.sub("", source)

            # Convert <Image> JSX to markdown with relative paths
            source = IMAGE_RE.sub(fix_md_image, source)

            # Also fix existing markdown images with absolute paths
            source = re.sub(
                r"!\[([^\]]*)\]\((/(?:docs|learning)/images/[^)]+)\)",
                lambda m: f"![{m.group(1)}]({_make_relative(m.group(2), nb_dir)})",
                source,
            )

            if source != original:
                cell["source"] = source.splitlines(keepends=True)
                changed = True

        # --- code cell outputs: pre-rendered <Image> tags ---
        for output in cell.get("outputs", []):
            text_plain = output.get("data", {}).get("text/plain", [])
            joined = "".join(text_plain) if isinstance(text_plain, list) else text_plain
            m = IMAGE_RE.search(joined)
            if m:
                src, alt = _extract_image_attrs(m)
                rel = _make_relative(src, nb_dir)
                output["data"]["text/html"] = [f'<img src="{rel}" alt="{alt}" />']
                output["data"].pop("text/plain", None)
                changed = True

    # --- Pass 2: split markdown cells with extractable code blocks ---
    new_cells = []
    for cell in data.get("cells", []):
        if cell.get("cell_type") == "markdown":
            split_result = _split_markdown_cell(cell)
            if len(split_result) > 1:
                changed = True
            new_cells.extend(split_result)
        else:
            new_cells.append(cell)
    data["cells"] = new_cells

    if changed:
        path.write_text(
            json.dumps(data, ensure_ascii=False, indent=1) + "\n",
            encoding="utf-8",
        )
    return changed


def main():
    root = Path(__file__).resolve().parent.parent
    notebooks = sorted(
        list((root / "docs").rglob("*.ipynb"))
        + list((root / "learning").rglob("*.ipynb"))
    )

    modified = 0
    for nb in notebooks:
        if process_notebook(nb, root):
            modified += 1

    print(f"fix-notebooks: processed {len(notebooks)} notebooks, modified {modified}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
