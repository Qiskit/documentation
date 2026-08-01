from __future__ import annotations
import posixpath
from docutils import nodes
import sphinx.addnodes as sphinx_nodes


_VERSION_ADMONITION_TYPES = {
    "deprecated": "deprecated",
    "deprecatedremoved": "deprecated",
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
    return _block.dispatch(node)


def _parse_inline(node: nodes.Node) -> dict | list | None:
    return _inline.dispatch(node)


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


class _Visitor:
    """MRO-aware dispatch: visit_{ClassName} following node.__class__.__mro__."""

    def dispatch(self, node: nodes.Node):
        for cls in type(node).__mro__:
            method = getattr(self, f'visit_{cls.__name__}', None)
            if method is not None:
                return method(node)
        return None


class _BlockVisitor(_Visitor):

    def visit_paragraph(self, node: nodes.paragraph):
        # Skip the plot_directive "(Source code, png, hires.png, pdf)" paragraph —
        # it contains only download-class references and their surrounding punctuation.
        if _is_download_links_paragraph(node):
            return None
        return {"type": "paragraph", "children": _parse_inline_children(node)}

    def visit_literal_block(self, node: nodes.literal_block):
        lang = node.get("language") or node.get("xml:space")
        if lang in (None, "preserve", "default"):
            lang = "python"
        return {"type": "code", "lang": lang, "value": node.astext()}

    def visit_doctest_block(self, node: nodes.doctest_block):
        return {"type": "code", "lang": "python", "value": node.astext()}

    def visit_math_block(self, node: nodes.math_block):
        return {"type": "math", "block": True, "value": node.astext()}

    def visit_figure(self, node: nodes.figure):
        result = []
        for child in node.children:
            if isinstance(child, nodes.image):
                uri = _normalize_image_uri(child.get("uri", ""))
                if uri.endswith(".*"):
                    continue
                result.append({"type": "image", "url": uri, "alt": child.get("alt") or None})
            elif isinstance(child, nodes.caption):
                result.append({"type": "paragraph", "children": _parse_inline_children(child)})
        return result or None

    def visit_image(self, node: nodes.image):
        uri = _normalize_image_uri(node.get("uri", ""))
        # Skip wildcard format images (e.g. fake_provider-1.*) — the .png is always present.
        if uri.endswith(".*"):
            return None
        return {"type": "image", "url": uri, "alt": node.get("alt") or None}

    def visit_bullet_list(self, node: nodes.bullet_list):
        return {
            "type": "list",
            "ordered": False,
            "children": [{"type": "listItem", "children": parse_content(c)} for c in node.children if isinstance(c, nodes.list_item)],
        }

    def visit_enumerated_list(self, node: nodes.enumerated_list):
        return {
            "type": "list",
            "ordered": True,
            "children": [{"type": "listItem", "children": parse_content(c)} for c in node.children if isinstance(c, nodes.list_item)],
        }

    def visit_table(self, node: nodes.table):
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
                            "children": [{"type": "tableCell", "children": _parse_inline_children(cell)} for cell in row.children if isinstance(cell, nodes.entry)],
                        })
            elif isinstance(child, nodes.tbody):
                for row in child.children:
                    if isinstance(row, nodes.row):
                        rows.append({
                            "type": "tableRow",
                            "header": False,
                            "children": [{"type": "tableCell", "children": _parse_inline_children(cell)} for cell in row.children if isinstance(cell, nodes.entry)],
                        })
        return {"type": "table", "children": rows}

    def visit_definition_list(self, node: nodes.definition_list):
        items = []
        for item in node.children:
            if not isinstance(item, nodes.definition_list_item):
                continue
            term_idx = item.first_child_matching_class(nodes.term)
            def_idx = item.first_child_matching_class(nodes.definition)
            term_children = _parse_inline_children(item.children[term_idx]) if term_idx is not None else []
            def_children = parse_content(item.children[def_idx]) if def_idx is not None else []
            items.append({"type": "definitionListItem", "term": term_children, "definition": def_children})
        return {"type": "definitionList", "children": items} if items else None

    def visit_block_quote(self, node: nodes.block_quote):
        return {"type": "blockquote", "children": parse_content(node)}

    def visit_section(self, node: nodes.section):
        return parse_content(node)

    def visit_title(self, node: nodes.title):
        return None

    def visit_rubric(self, node: nodes.rubric):
        return {"type": "paragraph", "children": [{"type": "strong", "children": _parse_inline_children(node)}]}

    def visit_field_list(self, node: nodes.field_list):
        return None

    def visit_target(self, node: nodes.target):
        return None

    def visit_raw(self, node: nodes.raw):
        return None

    def visit_comment(self, node: nodes.comment):
        return None

    def visit_transition(self, node: nodes.transition):
        return None

    def visit_compound(self, node: nodes.compound):
        return None

    # autosummary_table subclasses comment (which we suppress), so needs an explicit handler
    # to unwrap its inner nodes.table child and render it as a plain table.
    def visit_autosummary_table(self, node):
        return parse_content(node)

    # autosummary_toc and tabular_col_spec are navigation/formatting metadata — suppress.
    def visit_autosummary_toc(self, node):
        return None

    def visit_tabular_col_spec(self, node):
        return None

    # Specific admonitions dispatch before the generic Admonition base class.
    def visit_note(self, node):      return _parse_admonition(node, "note")
    def visit_warning(self, node):   return _parse_admonition(node, "warning")
    def visit_tip(self, node):       return _parse_admonition(node, "tip")
    def visit_danger(self, node):    return _parse_admonition(node, "danger")
    def visit_caution(self, node):   return _parse_admonition(node, "caution")
    def visit_important(self, node): return _parse_admonition(node, "important")
    def visit_hint(self, node):      return _parse_admonition(node, "hint")

    def visit_Admonition(self, node):
        # Catches: generic `.. admonition::` and sphinx versionmodified nodes.
        # versionmodified stores its subtype in the "type" attribute.
        kind = _VERSION_ADMONITION_TYPES.get(node.get("type", ""))
        if kind is None:
            kind = "note"
        return _parse_admonition(node, kind)

    def visit_Node(self, node):
        children = parse_content(node)
        return children if children else None


class _InlineVisitor(_Visitor):

    def visit_Text(self, node: nodes.Text):
        text = str(node)
        return {"type": "text", "value": text} if text else None

    def visit_reference(self, node: nodes.reference):
        # Drop plot_directive download links (Source code, png, pdf, hires.png).
        # They carry class "download" on their literal child and have no useful URL.
        for child in node.children:
            if isinstance(child, nodes.literal) and "download" in child.get("classes", []):
                return None
        url = node.get("refid") or node.get("refuri", "")
        if ".json#" in url:
            url = url.split(".json#", 1)[1]
        elif url.endswith(".json"):
            url = ""
        children = _parse_inline_children(node)
        if not children:
            children = [{"type": "text", "value": node.astext()}]
        return {"type": "link", "url": url, "children": children}

    def visit_literal(self, node: nodes.literal):
        return {"type": "inlineCode", "value": node.astext()}

    def visit_math(self, node: nodes.math):
        return {"type": "math", "block": False, "value": node.astext()}

    def visit_emphasis(self, node: nodes.emphasis):
        return {"type": "emphasis", "children": _parse_inline_children(node)}

    def visit_strong(self, node: nodes.strong):
        return {"type": "strong", "children": _parse_inline_children(node)}

    def visit_target(self, node: nodes.target):
        return None

    def visit_raw(self, node: nodes.raw):
        return None

    def visit_paragraph(self, node: nodes.paragraph):
        return _parse_inline_children(node)

    def visit_Node(self, node):
        children = _parse_inline_children(node)
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


_block = _BlockVisitor()
_inline = _InlineVisitor()


def _is_download_links_paragraph(node: nodes.paragraph) -> bool:
    """Return True if this paragraph is solely a plot_directive download-links container.

    These look like: ( `Source code` , `png` , `hires.png` , `pdf` )
    Every meaningful child is either a download reference or punctuation/whitespace text.
    """
    has_download = False
    for child in node.children:
        if isinstance(child, nodes.reference):
            if any("download" in c.get("classes", []) for c in child.children if hasattr(c, "get")):
                has_download = True
            else:
                return False  # non-download link — not a download paragraph
        elif isinstance(child, nodes.Text):
            if str(child).strip(" (),"):
                return False  # meaningful text content — not a download paragraph
        else:
            return False
    return has_download


def _normalize_image_uri(uri: str) -> str:
    """Normalize a plot_directive image URI to just the filename.

    plot_directive generates builder-relative paths like:
      _build/json/docs/apidocs/fake_provider-1.png
      _build/json/plot_directive/apidocs/fake_provider-1.png
    The HTML builder copies these to _images/. We emit just the filename
    so the UI can resolve it relative to its own static asset base.
    Other URIs (absolute URLs, relative paths like ../_images/foo.png) pass through.
    """
    if not uri or uri.startswith(("http://", "https://", "//")):
        return uri
    if uri.startswith("_build/"):
        return posixpath.basename(uri)
    return uri
