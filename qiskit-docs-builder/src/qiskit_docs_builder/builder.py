from __future__ import annotations
import json
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

    def write_doc(self, docname: str, doctree: nodes.document) -> None:
        self.env.resolve_references(doctree, docname, self)
        self.post_process_images(doctree)
        page = self._extract_page(docname, doctree)
        if page is None:
            return
        self._pages[docname] = page
        out_path = Path(self.outdir) / f"{docname}.json"
        out_path.parent.mkdir(parents=True, exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(page, f, indent=2, ensure_ascii=False)

    def finish(self) -> None:
        self._copy_images()
        self._remove_non_json_artifacts()
        toc = build_toc(self.app, getattr(self, "_pages", {}))
        toc_path = Path(self.outdir) / "toc.json"
        with open(toc_path, "w", encoding="utf-8") as f:
            json.dump(toc, f, indent=2, ensure_ascii=False)

        pkg_path = Path(self.outdir) / "_package.json"
        with open(pkg_path, "w", encoding="utf-8") as f:
            json.dump({
                "name": self.app.config.project,
                "version": self.app.config.release,
            }, f, indent=2, ensure_ascii=False)

    def _copy_images(self) -> None:
        """Copy referenced images into _images/ alongside the JSON output."""
        if not self.images:
            return
        images_dir = Path(self.outdir) / "_images"
        ensuredir(str(images_dir))
        for src, dest in self.images.items():
            src_path = Path(self.srcdir) / src
            if src_path.exists():
                shutil.copyfile(src_path, images_dir / dest)

    def _remove_non_json_artifacts(self) -> None:
        """Delete non-JSON files from the output directory.

        Runs after _copy_images so _images/ is already populated; we skip it
        here so copied images survive.
        """
        outdir = Path(self.outdir)
        all_paths = sorted(outdir.rglob("*"), key=lambda p: len(p.parts), reverse=True)
        for path in all_paths:
            if ".doctrees" in path.parts:
                continue
            if "_images" in path.parts:
                continue
            if path.is_file() and path.suffix != ".json":
                path.unlink()
            elif path.is_dir():
                try:
                    path.rmdir()
                except OSError:
                    pass

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
