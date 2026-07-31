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

    def get_outdated_docs(self):
        return self.env.found_docs

    def get_target_uri(self, docname: str, typ: str | None = None) -> str:
        return docname + ".json"

    def prepare_writing(self, docnames):
        pass

    def copy_image_files(self) -> None:
        pass

    def copy_static_files(self) -> None:
        pass

    def copy_extra_files(self) -> None:
        pass

    def write_doc(self, docname: str, doctree: nodes.document) -> None:
        page = self._extract_page(docname, doctree)
        if page is None:
            return
        out_path = Path(self.outdir) / f"{docname}.json"
        out_path.parent.mkdir(parents=True, exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(page, f, indent=2, ensure_ascii=False)

    def finish(self) -> None:
        toc = build_toc(self.app)
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
        for path in outdir.rglob("*"):
            # Leave .doctrees alone — Sphinx uses it for incremental builds
            if ".doctrees" in path.parts:
                continue
            if path.is_file() and path.suffix != ".json":
                path.unlink()
        for path in sorted(outdir.rglob("*"), reverse=True):
            if ".doctrees" in path.parts:
                continue
            if path.is_dir():
                try:
                    path.rmdir()
                except OSError:
                    pass

    def _extract_page(self, docname: str, doctree: nodes.document) -> dict | None:
        # Find the first desc node to determine page type
        for node in doctree.traverse(sphinx_nodes.desc):
            objtype = node.get("objtype", "")
            if objtype in ("class", "pydantic_model"):
                return visit_class(node)
            if objtype in ("function", "method"):
                return visit_function(node)
            if objtype == "attribute":
                return visit_function(node)  # standalone attribute page

        # No desc node — check if it's a module page.
        # The index node is at document level; the section has id "module-<name>".
        for node in doctree.traverse(nodes.section):
            if any(id_.startswith("module-") for id_ in node.get("ids", [])):
                return visit_module(node, self.env)
            break  # only check first section

        return None
