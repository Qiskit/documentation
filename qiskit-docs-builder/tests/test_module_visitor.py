from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.visitors.module_visitor import visit_module


def _make_module_section(module_name="mymodule", description_text="Module description."):
    section = nodes.section()
    section["ids"] = [f"module-{module_name}"]
    title = nodes.title()
    title += nodes.Text(module_name)
    section += title
    # Add an overview subsection with description
    overview = nodes.section()
    overview["ids"] = ["overview"]
    overview_title = nodes.title()
    overview_title += nodes.Text("Overview")
    overview += overview_title
    para = nodes.paragraph()
    para += nodes.Text(description_text)
    overview += para
    section += overview
    return section


def test_module_type():
    section = _make_module_section()
    result = visit_module(section)
    assert result["type"] == "module"


def test_module_name():
    section = _make_module_section(module_name="qiskit_ibm_runtime.options")
    result = visit_module(section)
    assert result["name"] == "qiskit_ibm_runtime.options"


def test_module_description():
    section = _make_module_section(description_text="Options module.")
    result = visit_module(section)
    assert any(n.get("type") == "paragraph" for n in result["description"])


def test_module_members_empty():
    section = _make_module_section()
    result = visit_module(section)
    assert result["members"] == []
