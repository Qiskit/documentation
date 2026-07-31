from __future__ import annotations
import re
from sphinx.application import Sphinx


def build_toc(app: Sphinx, pages: dict[str, dict]) -> dict:
    """Build toc.json from the collected page dicts.

    pages: mapping of docname -> page dict (as returned by the visitors).
    Groups stub pages by their top-level module, emits package-relative URLs.
    """
    title = app.config.project

    # Separate module overview pages from stub (class/function) pages
    module_pages: dict[str, dict] = {}   # module_id -> page
    stub_pages: dict[str, dict] = {}     # docname -> page

    for docname, page in pages.items():
        if page.get("type") == "module":
            module_pages[page["id"]] = page
        else:
            stub_pages[docname] = page

    # Build a section per top-level module group
    # Group stubs by their module field
    from collections import defaultdict
    by_module: dict[str, list[tuple[str, dict]]] = defaultdict(list)
    for docname, page in stub_pages.items():
        module = page.get("module", "") or _module_from_id(page.get("id", ""))
        by_module[module].append((docname, page))

    # Build children sections — one per unique top-level module namespace
    # Order: modules that have an overview page first, sorted alphabetically
    all_modules = sorted(set(list(module_pages.keys()) + list(by_module.keys())))

    sections = []
    for mod_id in all_modules:
        mod_page = module_pages.get(mod_id)
        stubs = sorted(by_module.get(mod_id, []), key=lambda t: t[1].get("name", ""))

        section_children = []

        # Module overview link (if we have a page for it)
        if mod_page:
            section_children.append({
                "title": "Module overview",
                "url": mod_id.split(".")[-1],
            })

        # Stub entries
        for docname, page in stubs:
            section_children.append({
                "title": page.get("name", docname.split("/")[-1]),
                "url": _docname_to_url(docname),
                "untranslatable": True,
            })

        if section_children:
            sections.append({
                "title": mod_id,
                "children": section_children,
                "untranslatable": True,
            })

    return {
        "title": title,
        "children": sections,
        "collapsed": True,
        "untranslatable": True,
    }


def _module_from_id(full_id: str) -> str:
    """Derive module from a dotted id like 'qiskit_ibm_runtime.Session' → 'qiskit_ibm_runtime'."""
    parts = full_id.rsplit(".", 1)
    return parts[0] if len(parts) > 1 else full_id


def _docname_to_url(docname: str) -> str:
    """Convert a docname like 'stubs/qiskit_ibm_runtime.Session' to a URL slug.

    Strips the stubs/apidocs prefix and returns the last dotted segment as-is.
    iqp-channel-docs is responsible for any further URL transformation (kebab-case, etc.).
    """
    name = re.sub(r"^(stubs|apidocs)/", "", docname)
    return name.split(".")[-1]
