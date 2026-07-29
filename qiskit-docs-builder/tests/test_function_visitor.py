from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.visitors.function_visitor import visit_function


def _make_function_desc(
    fullname="mymodule.my_function",
    module="mymodule",
    github_url=None,
    description_text="Does something.",
):
    desc = sphinx_nodes.desc()
    desc["objtype"] = "function"
    desc["domain"] = "py"
    sig = sphinx_nodes.desc_signature()
    sig["ids"] = [fullname]
    sig["module"] = module
    sig["fullname"] = fullname.split(".")[-1]
    sig += sphinx_nodes.desc_name(text=fullname.split(".")[-1])
    sig += sphinx_nodes.desc_parameterlist()
    if github_url:
        ref = nodes.reference()
        ref["refuri"] = github_url
        ref["classes"] = ["viewcode-link"]
        sig += ref
    desc += sig
    content = sphinx_nodes.desc_content()
    para = nodes.paragraph()
    para += nodes.Text(description_text)
    content += para
    desc += content
    return desc


def test_function_type():
    desc = _make_function_desc()
    result = visit_function(desc)
    assert result["type"] == "function"
    assert result["isDedicatedPage"] is True


def test_function_id_and_name():
    desc = _make_function_desc(fullname="mymodule.draw_spans")
    result = visit_function(desc)
    assert result["id"] == "mymodule.draw_spans"
    assert result["name"] == "draw_spans"


def test_function_description():
    desc = _make_function_desc(description_text="Draws something.")
    result = visit_function(desc)
    assert any(n.get("type") == "paragraph" for n in result["description"])
