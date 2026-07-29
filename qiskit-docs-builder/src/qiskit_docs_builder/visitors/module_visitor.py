from __future__ import annotations
import posixpath
from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.nodes.content_ast import parse_content, _parse_node


def visit_module(section: nodes.section, env=None) -> dict:
    module_name = _extract_module_name(section)
    description = _extract_module_description(section)
    members = _extract_members_from_table(section, env)

    return {
        "id": module_name,
        "type": "module",
        "name": module_name,
        "description": description,
        "members": members,
    }


def _extract_module_name(section: nodes.section) -> str:
    for child in section.children:
        if isinstance(child, sphinx_nodes.index):
            entries = child.get("entries", [])
            for entry in entries:
                if entry[0] == "single" and entry[2].startswith("module-"):
                    return entry[2][len("module-"):]
    # Fall back to section title
    title = next((c for c in section.children if isinstance(c, nodes.title)), None)
    return title.astext() if title else ""


def _extract_module_description(section: nodes.section) -> list[dict]:
    result = []
    for child in section.children:
        if isinstance(child, (nodes.title, sphinx_nodes.index)):
            continue
        if isinstance(child, nodes.table):
            break  # members table — stop description here
        parsed = _parse_node(child)
        if parsed:
            if isinstance(parsed, list):
                result.extend(parsed)
            else:
                result.append(parsed)
    return result


def _extract_members_from_table(section: nodes.section, env) -> list[dict]:
    members = []
    for child in section.children:
        if not isinstance(child, nodes.table):
            continue
        tgroup = next((c for c in child.children if isinstance(c, nodes.tgroup)), None)
        if not tgroup:
            continue
        tbody = next((c for c in tgroup.children if isinstance(c, nodes.tbody)), None)
        if not tbody:
            continue
        for row in tbody.children:
            if not isinstance(row, nodes.row):
                continue
            cells = [c for c in row.children if isinstance(c, nodes.entry)]
            if len(cells) < 2:
                continue
            # First cell: link to member page
            ref = next((n for n in cells[0].traverse(nodes.reference)), None)
            if ref is None:
                continue
            stem = posixpath.splitext(posixpath.basename(ref.get("refuri", "")))[0]
            member_id = stem.replace("-", ".")
            member_name = ref.astext()
            member_url = ref.get("refuri", "")
            # Second cell: summary text
            summary_para = next((n for n in cells[1].traverse(nodes.paragraph)), None)
            summary = []
            if summary_para:
                from qiskit_docs_builder.nodes.content_ast import _parse_inline_children
                summary = _parse_inline_children(summary_para)
            members.append({
                "id": member_id,
                "name": member_name,
                "type": "unknown",  # refined by builder when full env is available
                "url": member_url,
                "summary": summary,
            })
    return members
