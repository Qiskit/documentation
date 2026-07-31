from __future__ import annotations
from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.nodes.content_ast import _parse_node


def visit_module(section: nodes.section, env=None) -> dict:
    module_name = _extract_module_name(section)
    description = _extract_module_description(section)
    members = _extract_members(section, env)

    return {
        "id": module_name,
        "type": "module",
        "name": module_name,
        "description": description,
        "members": members,
    }


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
    """Pull prose from the 'Overview' subsection (or any non-class/function subsection)."""
    result = []
    for child in section.children:
        if isinstance(child, nodes.section):
            sec_ids = child.get("ids", [])
            # Skip the member-listing sections
            if any(i in sec_ids for i in ("classes", "functions", "exceptions", "attributes", "methods")):
                continue
            # Include overview and any other prose sections
            for grandchild in child.children:
                if isinstance(grandchild, nodes.title):
                    continue
                parsed = _parse_node(grandchild)
                if parsed:
                    if isinstance(parsed, list):
                        result.extend(parsed)
                    else:
                        result.append(parsed)
    return result


def _extract_members(section: nodes.section, env) -> list[dict]:
    """Extract member list from autosummary_toc > toctree includefiles."""
    members = []
    try:
        from sphinx.ext.autosummary import autosummary_toc
    except ImportError:
        return members

    for toc_node in section.traverse(autosummary_toc):
        toctree = next(
            (c for c in toc_node.children if isinstance(c, sphinx_nodes.toctree)),
            None,
        )
        if toctree is None:
            continue
        for docname in toctree.get("includefiles", []):
            # docname is like "stubs/qiskit_ibm_runtime.Session"
            name = docname.split("/")[-1]  # "qiskit_ibm_runtime.Session"
            short_name = name.split(".")[-1]  # "Session"
            # Try to get type from env if available
            member_type = "unknown"
            if env is not None:
                domain = env.get_domain("py")
                if domain and name in domain.objects:
                    member_type = domain.objects[name][2]  # objtype string
            members.append({
                "id": name,
                "name": short_name,
                "type": member_type,
                "url": docname,
                "summary": [],
            })
    return members
