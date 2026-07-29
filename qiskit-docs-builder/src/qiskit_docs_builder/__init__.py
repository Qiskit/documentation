from qiskit_docs_builder.builder import QiskitJsonBuilder

def setup(app):
    app.add_builder(QiskitJsonBuilder)
    return {"version": "0.1.0", "parallel_read_safe": True}
