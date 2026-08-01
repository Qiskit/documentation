import pytest
from docutils import nodes
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.visitors.class_visitor import visit_class


def _make_class_desc(
    objtype="class",
    fullname="mymodule.MyClass",
    module="mymodule",
    signature_text="MyClass(x=1)",
    github_url=None,
    description_text="A simple class.",
    bases_text="object",
    attributes=None,
    methods=None,
):
    """Build a minimal desc node tree matching Sphinx autodoc output."""
    desc = sphinx_nodes.desc()
    desc["objtype"] = objtype
    desc["domain"] = "py"

    sig = sphinx_nodes.desc_signature()
    sig["ids"] = [fullname]
    sig["module"] = module
    sig["fullname"] = fullname.split(".")[-1]
    sig += sphinx_nodes.desc_annotation(text=objtype + " ")
    sig += sphinx_nodes.desc_name(text=fullname.split(".")[-1])
    if signature_text:
        paramlist = sphinx_nodes.desc_parameterlist()
        sig += paramlist
    if github_url:
        ref = nodes.reference()
        ref["refuri"] = github_url
        ref["classes"] = ["viewcode-link"]
        sig += ref
    desc += sig

    content = sphinx_nodes.desc_content()
    if bases_text:
        para = nodes.paragraph()
        para += nodes.Text("Bases: ")
        para += nodes.literal(text=bases_text)
        content += para
    desc_para = nodes.paragraph()
    desc_para += nodes.Text(description_text)
    content += desc_para
    desc += content

    return desc


def test_basic_class():
    desc = _make_class_desc()
    result = visit_class(desc)
    assert result["id"] == "mymodule.MyClass"
    assert result["type"] == "class"
    assert result["name"] == "MyClass"
    assert result["module"] == "mymodule"
    assert result["modifiers"] == "class"


def test_class_description():
    desc = _make_class_desc(description_text="Does something useful.")
    result = visit_class(desc)
    assert any(
        node.get("type") == "paragraph" for node in result["description"]
    )


def test_class_github_url():
    desc = _make_class_desc(github_url="https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.48/qiskit_ibm_runtime/options/simulator_options.py#L30-L110")
    result = visit_class(desc)
    assert result["githubUrl"] == "https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.48/qiskit_ibm_runtime/options/simulator_options.py#L30-L110"


def test_pydantic_model_type():
    desc = _make_class_desc(objtype="pydantic_model")
    result = visit_class(desc)
    assert result["type"] == "pydantic_model"


def test_version_info_defaults():
    desc = _make_class_desc()
    result = visit_class(desc)
    assert result["versionInfo"] == {"added": None, "changed": None, "deprecated": None, "deprecationMessage": None}


def test_napoleon_parameters():
    """Test that Napoleon-style parameter nodes (literal_strong + pending_xref) are correctly parsed."""
    from sphinx.addnodes import pending_xref, literal_strong, literal_emphasis
    from docutils.nodes import Text, paragraph
    from qiskit_docs_builder.visitors.class_visitor import _parse_parameter_para

    # Simulate Napoleon output: backend(BackendV2) – The backend to use.
    para = paragraph()
    para += literal_strong(text="backend")
    para += Text(" (")
    # pending_xref wrapping literal_emphasis
    xref = pending_xref()
    xref += literal_emphasis(text="BackendV2")
    para += xref
    para += Text(")")
    para += Text(" – ")
    para += Text("The backend to use.")

    name, type_node, desc = _parse_parameter_para(para)
    assert name == "backend"
    assert type_node is not None
    assert type_node["type"] in ("name", "union")
    type_text = type_node.get("text", "") or type_node.get("name", "")
    assert "BackendV2" in type_text
    assert desc != []
    desc_text = desc[0]["children"][0]["value"]
    assert "backend" in desc_text.lower() or "use" in desc_text.lower()


def test_napoleon_parameters_union_type():
    """Test Napoleon parameter with union type (pending_xref | literal_emphasis)."""
    from sphinx.addnodes import pending_xref, literal_strong, literal_emphasis
    from docutils.nodes import Text, paragraph
    from qiskit_docs_builder.visitors.class_visitor import _parse_parameter_para

    # Simulate: shots(int | None) – Number of shots.
    para = paragraph()
    para += literal_strong(text="shots")
    para += Text(" (")
    xref = pending_xref()
    xref += literal_emphasis(text="int")
    para += xref
    para += Text(" | ")
    para += literal_emphasis(text="None")
    para += Text(")")
    para += Text(" – ")
    para += Text("Number of shots.")

    name, type_node, desc = _parse_parameter_para(para)
    assert name == "shots"
    assert type_node is not None
    assert type_node["type"] == "union"
    members = type_node["members"]
    member_texts = [m.get("text", "") or m.get("name", "") for m in members]
    assert "int" in member_texts
    assert "None" in member_texts
    assert desc != []
