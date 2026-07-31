from qiskit_docs_builder.builder import QiskitJsonBuilder
from sphinx.application import Sphinx


def _cleanup_non_json(app, exception):
    if exception or app.builder.name != "qiskit_json":
        return
    app.builder._remove_non_json_artifacts()


def setup(app: Sphinx):
    app.add_builder(QiskitJsonBuilder)
    # Priority 999 runs after all other build-finished handlers (e.g. autodoc_pydantic)
    app.connect("build-finished", _cleanup_non_json, priority=999)
    return {"version": "0.1.0", "parallel_read_safe": True, "parallel_write_safe": True}
