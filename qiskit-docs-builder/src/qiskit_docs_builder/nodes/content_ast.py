from __future__ import annotations
from docutils import nodes


# Map docutils admonition node classes to kind strings
_ADMONITION_KINDS = {
    nodes.note: "note",
    nodes.warning: "warning",
    nodes.tip: "tip",
    nodes.danger: "danger",
    nodes.caution: "warning",
    nodes.important: "note",
    nodes.hint: "tip",
}

# sphinx.addnodes version-change directives mapped to admonition kinds
_VERSION_ADMONITION_CLASSES = {
    "deprecated": "deprecated",
    "versionadded": "versionAdded",
    "versionchanged": "versionChanged",
}


def parse_content(node: nodes.Node) -> list[dict]:
    """Parse prose docutils nodes into a list of ContentNode dicts."""
    results = []
    for child in node.children:
        parsed = _parse_node(child)
        if parsed is not None:
            if isinstance(parsed, list):
                results.extend(parsed)
            else:
                results.append(parsed)
    return results


def _parse_node(node: nodes.Node) -> dict | list | None:
    if isinstance(node, nodes.paragraph):
        return {"type": "paragraph", "children": _parse_inline_children(node)}

    if isinstance(node, (nodes.literal_block, nodes.doctest_block)):
        lang = node.get("language") or node.get("xml:space")
        if lang in (None, "preserve", "default") or isinstance(node, nodes.doctest_block):
            lang = "python"
        return {"type": "code", "language": lang, "value": node.astext()}

    if isinstance(node, nodes.math_block):
        return {"type": "math", "block": True, "value": node.astext()}

    if isinstance(node, nodes.figure):
        # Unwrap: extract image + optional caption as separate content nodes
        result = []
        for child in node.children:
            if isinstance(child, nodes.image):
                result.append({"type": "image", "url": child.get("uri", ""), "alt": child.get("alt") or None})
            elif isinstance(child, nodes.caption):
                result.append({"type": "paragraph", "children": _parse_inline_children(child)})
        return result or None

    if isinstance(node, nodes.image):
        return {"type": "image", "url": node.get("uri", ""), "alt": node.get("alt") or None}

    if isinstance(node, nodes.bullet_list):
        return {
            "type": "list",
            "ordered": False,
            "children": [_parse_list_item(c) for c in node.children if isinstance(c, nodes.list_item)],
        }

    if isinstance(node, nodes.enumerated_list):
        return {
            "type": "list",
            "ordered": True,
            "children": [_parse_list_item(c) for c in node.children if isinstance(c, nodes.list_item)],
        }

    if isinstance(node, nodes.table):
        return _parse_table(node)

    if isinstance(node, nodes.definition_list):
        items = []
        for item in node.children:
            if not isinstance(item, nodes.definition_list_item):
                continue
            term_node = item.first_child_matching_class(nodes.term)
            def_node = item.first_child_matching_class(nodes.definition)
            term_children = _parse_inline_children(item.children[term_node]) if term_node is not None else []
            def_children = parse_content(item.children[def_node]) if def_node is not None else []
            items.append({"type": "definitionListItem", "term": term_children, "definition": def_children})
        return {"type": "definitionList", "children": items} if items else None

    if isinstance(node, nodes.block_quote):
        return {"type": "blockquote", "children": parse_content(node)}

    if isinstance(node, nodes.section):
        # sections within a description body — flatten to their children
        return parse_content(node)

    if isinstance(node, nodes.title):
        # section titles within API description — skip (handled by section structure)
        return None

    for adm_class, kind in _ADMONITION_KINDS.items():
        if isinstance(node, adm_class):
            return _parse_admonition(node, kind)

    # sphinx.addnodes version directives (deprecated, versionadded, versionchanged)
    node_classes = node.get("classes", []) if hasattr(node, "get") else []
    for cls, kind in _VERSION_ADMONITION_CLASSES.items():
        if cls in node_classes:
            return _parse_admonition(node, kind)

    # Generic admonition with custom title
    if isinstance(node, nodes.admonition):
        return _parse_admonition(node, "note")

    # Rubric (bold heading within a section) — treat as strong paragraph
    if isinstance(node, nodes.rubric):
        return {"type": "paragraph", "children": [{"type": "strong", "children": _parse_inline_children(node)}]}

    # Skip structural nodes that don't map to content
    if isinstance(node, (nodes.target, nodes.comment, nodes.transition, nodes.compound)):
        return None

    # Field lists (Parameters/Returns/Raises) are handled by visitors, not content AST
    if isinstance(node, nodes.field_list):
        return None

    # Fallback: parse children
    children = parse_content(node)
    return children if children else None


def _parse_admonition(node: nodes.Node, kind: str) -> dict:
    title = None
    children_nodes = list(node.children)
    if children_nodes and isinstance(children_nodes[0], nodes.title):
        title = children_nodes[0].astext()
        children_nodes = children_nodes[1:]
    children = []
    for child in children_nodes:
        parsed = _parse_node(child)
        if parsed is not None:
            if isinstance(parsed, list):
                children.extend(parsed)
            else:
                children.append(parsed)
    return {"type": "admonition", "kind": kind, "title": title, "children": children}


def _parse_list_item(node: nodes.list_item) -> dict:
    return {"type": "listItem", "children": parse_content(node)}


def _parse_table(node: nodes.table) -> dict:
    rows = []
    tgroup = next((c for c in node.children if isinstance(c, nodes.tgroup)), None)
    if tgroup is None:
        return {"type": "table", "children": []}
    for child in tgroup.children:
        if isinstance(child, nodes.thead):
            for row in child.children:
                if isinstance(row, nodes.row):
                    rows.append({
                        "type": "tableRow",
                        "header": True,
                        "children": [{"type": "tableCell", "children": _parse_inline_children(cell)} for cell in row.children if isinstance(cell, nodes.entry)]
                    })
        elif isinstance(child, nodes.tbody):
            for row in child.children:
                if isinstance(row, nodes.row):
                    rows.append({
                        "type": "tableRow",
                        "header": False,
                        "children": [{"type": "tableCell", "children": _parse_inline_children(cell)} for cell in row.children if isinstance(cell, nodes.entry)]
                    })
    return {"type": "table", "children": rows}


def _parse_inline_children(node: nodes.Node) -> list[dict]:
    result = []
    for child in node.children:
        inline = _parse_inline(child)
        if inline is not None:
            if isinstance(inline, list):
                result.extend(inline)
            else:
                result.append(inline)
    return result


def _parse_inline(node: nodes.Node) -> dict | list | None:
    if isinstance(node, nodes.Text):
        text = str(node)
        if not text:
            return None
        return {"type": "text", "value": text}

    if isinstance(node, nodes.reference):
        # Same-page refs use refid; cross-page refs use refuri.
        url = node.get("refid") or node.get("refuri", "")
        # Cross-page local refs look like "stubs/foo.json#foo.bar" — use the fragment.
        if ".json#" in url:
            url = url.split(".json#", 1)[1]
        elif url.endswith(".json"):
            url = ""
        return {"type": "ref", "text": node.astext(), "url": url}

    if isinstance(node, nodes.literal):
        return {"type": "inlineCode", "value": node.astext()}

    if isinstance(node, nodes.math):
        return {"type": "math", "block": False, "value": node.astext()}

    if isinstance(node, nodes.emphasis):
        return {"type": "emphasis", "children": _parse_inline_children(node)}

    if isinstance(node, nodes.strong):
        return {"type": "strong", "children": _parse_inline_children(node)}

    if isinstance(node, (nodes.target, nodes.raw)):
        return None

    # paragraph inside inline context — flatten
    if isinstance(node, nodes.paragraph):
        return _parse_inline_children(node)

    # Fallback: recurse
    children = _parse_inline_children(node)
    return children if children else None
