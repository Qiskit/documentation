from __future__ import annotations
from docutils import nodes
from qiskit_docs_builder.nodes.content_ast import _parse_node, _parse_inline_children


def visit_module(section: nodes.section) -> dict:
    module_name = _extract_module_name(section)
    description = _extract_module_description(section)

    return {
        "id": module_name,
        "type": "module",
        "name": module_name,
        "title": _extract_module_title(section),
        "description": description,
    }


def _extract_module_title(section: nodes.section) -> str:
    """Extract human-readable label from section title (prefix before last parenthetical)."""
    title = next((c for c in section.children if isinstance(c, nodes.title)), None)
    if title:
        text = title.astext()
        if "(" in text and text.endswith(")"):
            return text[:text.rfind("(")].strip()
        return text
    return ""


def _extract_module_name(section: nodes.section) -> str:
    # id is "module-qiskit_ibm_runtime.execution_span"
    for id_ in section.get("ids", []):
        if id_.startswith("module-"):
            return id_[len("module-"):]
    # fallback: section title text (strip parenthetical)
    title = next((c for c in section.children if isinstance(c, nodes.title)), None)
    if title:
        text = title.astext()
        # "Execution Spans (qiskit_ibm_runtime.execution_span)" → extract parens
        if "(" in text and text.endswith(")"):
            return text[text.rfind("(") + 1:-1]
        return text
    return ""


def _extract_module_description(section: nodes.section) -> list[dict]:
    """Parse prose and member tables from subsections into a flat description list."""
    result = []
    for child in section.children:
        if isinstance(child, nodes.title):
            continue
        if isinstance(child, nodes.section):
            _extract_section_content(child, result, level=2)
        else:
            parsed = _parse_node(child)
            if parsed:
                if isinstance(parsed, list):
                    result.extend(parsed)
                else:
                    result.append(parsed)
    return result


def _extract_section_content(section: nodes.section, result: list, level: int) -> None:
    """Recursively emit a section's title (as a heading) followed by its prose content."""
    for child in section.children:
        if isinstance(child, nodes.title):
            children = _parse_inline_children(child)
            if children:
                result.append({"type": "heading", "level": level, "children": children})
        elif isinstance(child, nodes.section):
            _extract_section_content(child, result, level + 1)
        else:
            parsed = _parse_node(child)
            if parsed is not None:
                if isinstance(parsed, list):
                    result.extend(parsed)
                else:
                    result.append(parsed)


