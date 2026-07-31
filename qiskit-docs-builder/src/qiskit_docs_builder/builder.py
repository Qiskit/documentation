from __future__ import annotations
import json
from pathlib import Path
from sphinx.builders import Builder
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

    def get_outdated_docs(self) -> str:
        # Always do a full rebuild — JSON output is cheap and incremental
        # staleness checks would need to compare .json mtimes against source mtimes.
        return "all source files"

    def get_target_uri(self, docname: str, typ: str | None = None) -> str:
        return docname + ".json"

    def prepare_writing(self, docnames):
        self._pages: dict[str, dict] = {}

    def write_doc(self, docname: str, doctree: nodes.document) -> None:
        page = self._extract_page(docname, doctree)
        if page is None:
            return
        self._pages[docname] = page
        out_path = Path(self.outdir) / f"{docname}.json"
        out_path.parent.mkdir(parents=True, exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(page, f, indent=2, ensure_ascii=False)

    def finish(self) -> None:
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

    def _remove_non_json_artifacts(self) -> None:
        outdir = Path(self.outdir)
        # Collect all paths in reverse (deepest first) so rmdir works bottom-up.
        all_paths = sorted(outdir.rglob("*"), key=lambda p: len(p.parts), reverse=True)
        for path in all_paths:
            if ".doctrees" in path.parts:
                continue
            if path.is_file() and path.suffix != ".json":
                path.unlink()
            elif path.is_dir():
                try:
                    path.rmdir()  # only succeeds if empty after file deletion above
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
                return visit_module(node, self.env, docname=docname)
            # Fallback: title text ends with "(module.name)" pattern.
            title_node = next((c for c in node.children if isinstance(c, nodes.title)), None)
            if title_node:
                text = title_node.astext()
                if "(" in text and text.endswith(")"):
                    return visit_module(node, self.env, docname=docname)
            break  # only check first section

        return None
