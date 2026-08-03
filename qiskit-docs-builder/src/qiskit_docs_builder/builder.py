from __future__ import annotations
import json
import re
import shutil
from pathlib import Path
from sphinx.builders import Builder
from sphinx.util.osutil import ensuredir
from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.visitors.class_visitor import visit_class
from qiskit_docs_builder.visitors.function_visitor import visit_function
from qiskit_docs_builder.visitors.module_visitor import visit_module
from qiskit_docs_builder.toc import build_toc
from qiskit_docs_builder.slugutils import slug_from_id

# Keep old private name as alias so toc.py's existing import still works.
_slug_from_id = slug_from_id


def _resolve_urls(obj, pkg_slug: str, known_ids: set[str]) -> None:
    """Walk a page dict in-place and replace dotted-id link urls with slugs."""
    if isinstance(obj, dict):
        if 'url' in obj:
            url = obj['url']
            if url and not url.startswith(('http://', 'https://', '//', '/')):
                # Dotted Python ID — resolve to slug only if it's a known page.
                base_id = url.split('#')[0] if '#' in url else url
                if base_id in known_ids:
                    slug = _slug_from_id(base_id, pkg_slug)
                    obj['url'] = slug + url[len(base_id):]
        for v in obj.values():
            _resolve_urls(v, pkg_slug, known_ids)
    elif isinstance(obj, list):
        for item in obj:
            _resolve_urls(item, pkg_slug, known_ids)


class QiskitJsonBuilder(Builder):
    name = "qiskit_json"
    format = "json"
    epilog = "JSON output written to %(outdir)s"

    def init(self) -> None:
        # Add "html" tag so linkcode/viewcode `only expr="html"` nodes survive
        # OnlyNodeTransform and reach write_doc with their GitHub URLs intact.
        self.tags.add("html")
        self.images: dict[str, str] = {}  # src_path → dest_filename

    def get_outdated_docs(self) -> str:
        # Always do a full rebuild — JSON output is cheap and incremental
        # staleness checks would need to compare .json mtimes against source mtimes.
        return "all source files"

    def get_target_uri(self, docname: str, typ: str | None = None) -> str:
        return docname + ".json"

    def prepare_writing(self, docnames):
        self._pages: dict[str, dict] = {}
        Path(self.outdir).mkdir(parents=True, exist_ok=True)

    def write_doc(self, docname: str, doctree: nodes.document) -> None:
        self.env.resolve_references(doctree, docname, self)
        self.post_process_images(doctree)
        page = self._extract_page(docname, doctree)
        if page is None:
            return
        self._pages[docname] = page

    def finish(self) -> None:
        # Derive pkg_slug from the shortest page id (the root module name).
        page_ids = [p["id"] for p in self._pages.values() if p.get("id")]
        pkg_slug = min(page_ids, key=len).replace('_', '-').lower() if page_ids else ""

        # Resolve internal link URLs then write each page named by its slug.
        known_ids: set[str] = set(page_ids)
        outdir = Path(self.outdir)
        for page in self._pages.values():
            if pkg_slug:
                _resolve_urls(page, pkg_slug, known_ids)
            page_id = page.get("id", "")
            filename = slug_from_id(page_id, pkg_slug) if pkg_slug else page_id
            with open(outdir / f"{filename}.json", "w", encoding="utf-8") as f:
                json.dump(page, f, indent=2, ensure_ascii=False)
        self._copy_images()
        self._remove_non_json_artifacts()
        toc = build_toc(self.app, getattr(self, "_pages", {}), pkg_slug)
        toc_path = Path(self.outdir) / "_toc.json"
        with open(toc_path, "w", encoding="utf-8") as f:
            json.dump(toc, f, indent=2, ensure_ascii=False)

        pkg_info: dict = {
            "name": self.app.config.project,
            "version": self.app.config.release,
        }
        if pkg_slug:
            pkg_info["slug"] = pkg_slug
        pkg_path = Path(self.outdir) / "_package.json"
        with open(pkg_path, "w", encoding="utf-8") as f:
            json.dump(pkg_info, f, indent=2, ensure_ascii=False)

    def _copy_images(self) -> None:
        """Copy all referenced images into _images/ alongside the JSON output."""
        images_dir = Path(self.outdir) / "_images"

        # Images tracked by Sphinx (e.g. .. image:: directives pointing to source files).
        if self.images:
            ensuredir(str(images_dir))
            for src, dest in self.images.items():
                src_path = Path(self.srcdir) / src
                if src_path.exists():
                    shutil.copyfile(src_path, images_dir / dest)

        # plot_directive writes generated images into {outdir}/plot_directive/**/.
        # Copy them flat into _images/.
        plot_dir = Path(self.outdir) / "plot_directive"
        if plot_dir.exists():
            ensuredir(str(images_dir))
            for img in plot_dir.rglob("*.png"):
                shutil.copyfile(img, images_dir / img.name)

    def _remove_non_json_artifacts(self) -> None:
        """Delete non-JSON directories written by Sphinx extensions (e.g. _static)."""
        outdir = Path(self.outdir)
        keep = {"_images"}
        for entry in outdir.iterdir():
            if entry.is_dir() and entry.name not in keep:
                shutil.rmtree(entry)

    def _extract_page(self, docname: str, doctree: nodes.document) -> dict | None:
        # Find the first desc node to determine page type
        for node in doctree.findall(sphinx_nodes.desc):
            objtype = node.get("objtype", "")
            if objtype in ("class", "pydantic_model"):
                return visit_class(node)
            if objtype in ("function", "method"):
                return visit_function(node)
            if objtype == "attribute":
                return visit_function(node)  # standalone attribute page

        # No desc node — check if it's a module page.
        # Automodule pages have a section id "module-<name>".
        # Manual-title pages (e.g. ibm_quantum_schemas.rst) use a slug id but
        # their title still follows the "Label (module.name)" convention.
        for node in doctree.findall(nodes.section):
            if any(id_.startswith("module-") for id_ in node.get("ids", [])):
                return visit_module(node)
            # Fallback: title text ends with "(module.name)" pattern.
            title_node = next((c for c in node.children if isinstance(c, nodes.title)), None)
            if title_node:
                text = title_node.astext()
                if "(" in text and text.endswith(")"):
                    return visit_module(node)
            break  # only check first section

        return None
