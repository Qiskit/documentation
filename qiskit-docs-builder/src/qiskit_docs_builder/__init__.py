import os
from qiskit_docs_builder.builder import QiskitJsonBuilder
from sphinx.application import Sphinx


def _fix_katex_static_path(app, exception):
    # KaTeX's build-finished handler calls shutil.rmtree(app._katex_static_path).
    # When the JSON builder is active it never copies _static files, so the temp
    # dir KaTeX created in builder-inited may not exist at cleanup time —
    # causing a FileNotFoundError. Re-create it so KaTeX's rmtree succeeds harmlessly.
    if app.builder.name != "qiskit_json":
        return
    path = getattr(app, "_katex_static_path", None)
    if path and not os.path.isdir(path):
        os.makedirs(path, exist_ok=True)


def _remove_static_dir(app, exception):
    if app.builder.name != "qiskit_json":
        return
    import shutil
    static_dir = os.path.join(app.outdir, "_static")
    if os.path.isdir(static_dir):
        shutil.rmtree(static_dir)


def setup(app: Sphinx):
    app.add_builder(QiskitJsonBuilder)
    # Run before KaTeX's build-finished (default priority=500) so its rmtree finds the dir.
    app.connect("build-finished", _fix_katex_static_path, priority=100)
    # Run after all extensions have finished (priority=999) to remove _static.
    app.connect("build-finished", _remove_static_dir, priority=999)
    return {"version": "0.1.0", "parallel_read_safe": True, "parallel_write_safe": True}
