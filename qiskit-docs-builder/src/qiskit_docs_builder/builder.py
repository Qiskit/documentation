from sphinx.builders import Builder

class QiskitJsonBuilder(Builder):
    name = "qiskit_json"
    format = "json"
    epilog = "JSON output written to %(outdir)s"

    def get_outdated_docs(self):
        return self.env.found_docs

    def prepare_writing(self, docnames):
        pass

    def write_doc(self, docname, doctree):
        pass

    def finish(self):
        pass
