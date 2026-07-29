from __future__ import annotations
from sphinx.application import Sphinx
from sphinx.environment.adapters.toctree import TocTree


def build_toc(app: Sphinx) -> dict:
    """Build a toc.json structure from the Sphinx toctree environment."""
    env = app.env
    master_doc = app.config.master_doc if hasattr(app.config, "master_doc") else "index"
    root_toc = env.tocs.get(master_doc)

    if root_toc is None:
        return {"title": app.config.project, "children": [], "collapsed": True}

    title = app.config.project
    children = _build_children(env, master_doc, app.config.html_baseurl or "")
    return {"title": title, "children": children, "collapsed": True, "untranslatable": True}


def _build_children(env, docname: str, base_url: str) -> list[dict]:
    children = []
    toctree_data = env.toctree_includes.get(docname, [])
    for child_docname in toctree_data:
        title = _get_doc_title(env, child_docname)
        url = f"/docs/api/{child_docname}"
        grandchildren = _build_children(env, child_docname, base_url)
        if grandchildren:
            children.append({"title": title, "children": grandchildren, "untranslatable": True})
        else:
            children.append({"title": title, "url": url, "untranslatable": True})
    return children


def _get_doc_title(env, docname: str) -> str:
    metadata = env.metadata.get(docname, {})
    if "title" in metadata:
        return metadata["title"]
    toc = env.tocs.get(docname)
    if toc:
        from docutils import nodes
        titles = toc.traverse(nodes.title)
        if titles:
            return titles[0].astext()
    return docname
