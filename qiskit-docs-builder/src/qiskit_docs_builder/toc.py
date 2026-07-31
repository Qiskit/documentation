from __future__ import annotations
import re
import sphinx.addnodes as sphinx_nodes
from sphinx.application import Sphinx


def build_toc(app: Sphinx, pages: dict[str, dict]) -> dict:
    """Build toc.json mirroring the HTML builder's toctree structure.

    Follows env.toctree_includes order exactly (same as Sphinx HTML), so the
    top-level sections appear in the same order as the HTML apidocs index.
    """
    env = app.env
    title = app.config.project

    # Find the apidocs index docname that acts as the root nav page.
    # We detect it by looking for a page whose toctree children are all
    # apidoc module pages (i.e. they appear as module pages in our pages dict).
    index_docname = _find_apidocs_index(env, pages)

    sections = []
    if index_docname:
        # Top-level sections come from the index's toctree, in author order.
        for module_docname in _toctree_children(env, index_docname):
            page = pages.get(module_docname)
            if page is None:
                continue
            section = _build_section(env, pages, module_docname, page)
            if section:
                sections.append(section)

    if not sections:
        # Fallback: no index found, build a flat sorted list.
        sections = _build_sections_fallback(pages)

    return {
        "title": title,
        "children": sections,
    }


def _find_apidocs_index(env, pages: dict[str, dict]) -> str | None:
    """Return the docname of the apidocs index toctree root.

    Prefers 'apidocs/index'; falls back to any page whose toctree children
    are exclusively module pages.
    """
    candidate = "apidocs/index"
    if candidate in getattr(env, "toctree_includes", {}):
        return candidate
    # Scan toctree_includes for a page that has module-page children.
    for docname, children in getattr(env, "toctree_includes", {}).items():
        if all(pages.get(c, {}).get("type") == "module" for c in children if c in pages):
            return docname
    return None


def _toctree_children(env, docname: str) -> list[str]:
    """Return the ordered list of child docnames from a page's toctree(s).

    Reads the doctree directly to preserve author-defined order across
    multiple toctree directives on the same page (same as HTML builder).
    """
    includes = getattr(env, "toctree_includes", {}).get(docname, [])
    if includes:
        return list(includes)
    # Fallback: read from the doctree node itself.
    try:
        doctree = env.get_doctree(docname)
        result = []
        for node in doctree.findall(sphinx_nodes.toctree):
            result.extend(node.get("includefiles", []))
        return result
    except Exception:
        return []


def _build_section(env, pages: dict[str, dict], docname: str, page: dict) -> dict | None:
    """Build one top-level TOC section from a module overview page.

    Children come from the module page's own toctree entries (stubs), in order.
    Sub-module pages (apidocs/*) that appear as children get their own nested
    section rather than a flat stub entry.
    """
    section_children = []

    # Link to the module overview page itself.
    section_children.append({
        "title": "Module overview",
        "url": page.get("id", _docname_to_url(docname)),
    })

    # Stubs and sub-module pages listed under this module page.
    for child_docname in _toctree_children(env, docname):
        child_page = pages.get(child_docname)
        if child_page is None:
            continue
        if child_page.get("type") == "module":
            # Sub-module index (e.g. ibm_quantum_schemas sub-packages)
            sub = _build_section(env, pages, child_docname, child_page)
            if sub:
                section_children.append(sub)
        else:
            section_children.append({
                "title": child_page.get("name", _docname_to_url(child_docname)),
                "url": _docname_to_url(child_docname),
            })

    human_title = page.get("title") or ""
    mod_id = page.get("id", "")
    return {
        "title": human_title or mod_id,
        "id": mod_id,
        "children": section_children,
    }


def _build_sections_fallback(pages: dict[str, dict]) -> list[dict]:
    """Fallback when no toctree index is found: sorted module sections."""
    module_pages = {p["id"]: (dn, p) for dn, p in pages.items() if p.get("type") == "module"}
    sections = []
    for mod_id, (docname, page) in sorted(module_pages.items()):
        human_title = page.get("title") or ""
        sections.append({
            "title": human_title or mod_id,
            "id": mod_id,
            "children": [{"title": "Module overview", "url": mod_id}],
        })
    return sections


def _docname_to_url(docname: str) -> str:
    """Convert a docname to its canonical Python dotted identifier.

    Strips the stubs/apidocs prefix; iqp-channel-docs derives browser URLs from this.
    """
    return re.sub(r"^(stubs|apidocs)/", "", docname)
