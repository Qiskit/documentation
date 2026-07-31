from __future__ import annotations
from docutils import nodes
from qiskit_docs_builder.nodes.content_ast import _parse_node


def visit_module(section: nodes.section, env=None, docname: str | None = None) -> dict:
    module_name = _extract_module_name(section)
    description = _extract_module_description(section)
    members = _extract_members(section, env, docname)

    return {
        "id": module_name,
        "type": "module",
        "name": module_name,
        "title": _extract_module_title(section),
        "description": description,
        "members": members,
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


_MEMBER_SECTION_IDS = frozenset(("classes", "functions", "exceptions", "attributes", "methods"))


def _extract_module_description(section: nodes.section) -> list[dict]:
    """Pull prose from direct children and from non-member subsections."""
    result = []
    for child in section.children:
        if isinstance(child, nodes.title):
            continue
        if isinstance(child, nodes.section):
            sec_ids = child.get("ids", [])
            if any(i in sec_ids for i in _MEMBER_SECTION_IDS):
                continue
            for grandchild in child.children:
                if isinstance(grandchild, nodes.title):
                    continue
                parsed = _parse_node(grandchild)
                if parsed:
                    if isinstance(parsed, list):
                        result.extend(parsed)
                    else:
                        result.append(parsed)
        else:
            parsed = _parse_node(child)
            if parsed:
                if isinstance(parsed, list):
                    result.extend(parsed)
                else:
                    result.append(parsed)
    return result


def _extract_members(section: nodes.section, env, docname: str | None = None) -> list[dict]:
    """Extract member list from env.toctree_includes (set during read phase, stable at write time)."""
    members = []
    if env is None or docname is None:
        return members

    includes = getattr(env, "toctree_includes", {}).get(docname, [])
    for included_docname in includes:
        # included_docname is like "stubs/qiskit_ibm_runtime.Session"
        name = included_docname.split("/")[-1]  # "qiskit_ibm_runtime.Session"
        short_name = name.split(".")[-1]  # "Session"
        member_type = "unknown"
        domain = env.get_domain("py")
        if domain and name in domain.objects:
            member_type = domain.objects[name][2]  # objtype string
        members.append({
            "id": name,
            "name": short_name,
            "type": member_type,
            "url": included_docname,
            "summary": [],
        })
    return members
