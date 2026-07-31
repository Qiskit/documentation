import pytest
from docutils import nodes
from sphinx.addnodes import pending_xref
from qiskit_docs_builder.nodes.type_ast import parse_type_node

def make_text(text):
    return nodes.Text(text)

def make_ref(text, url):
    """Simulates a resolved pending_xref (intersphinx turns these into <a> tags in HTML,
    but in the doctree they are nodes.reference with refuri set)."""
    ref = nodes.reference()
    ref["refuri"] = url
    ref += nodes.Text(text)
    return ref

def make_inline(*children):
    n = nodes.inline()
    for c in children:
        n += c
    return n

def test_simple_name():
    node = make_inline(make_text("int"))
    result = parse_type_node(node)
    assert result == {"type": "name", "text": "int"}

def test_ref_node():
    node = make_inline(make_ref("QuantumCircuit", "https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.QuantumCircuit"))
    result = parse_type_node(node)
    assert result == {
        "type": "name",
        "text": "QuantumCircuit",
        "url": "https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.QuantumCircuit",
    }

def test_union_type():
    # "UnsetType | int | None"
    node = make_inline(
        make_text("UnsetType"),
        make_text(" | "),
        make_text("int"),
        make_text(" | "),
        make_text("None"),
    )
    result = parse_type_node(node)
    assert result == {
        "type": "union",
        "members": [
            {"type": "name", "text": "UnsetType"},
            {"type": "name", "text": "int"},
            {"type": "name", "text": "None"},
        ],
    }

def test_generic_list():
    # "list[int]"
    node = make_inline(
        make_text("list"),
        make_text("["),
        make_text("int"),
        make_text("]"),
    )
    result = parse_type_node(node)
    assert result == {
        "type": "generic",
        "name": "list",
        "args": [{"type": "name", "text": "int"}],
    }

def test_generic_with_ref():
    # "list[QuantumCircuit]"
    node = make_inline(
        make_text("list"),
        make_text("["),
        make_ref("QuantumCircuit", "https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.QuantumCircuit"),
        make_text("]"),
    )
    result = parse_type_node(node)
    assert result == {
        "type": "generic",
        "name": "list",
        "args": [{"type": "name", "text": "QuantumCircuit", "url": "https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.QuantumCircuit"}],
    }

def test_nested_generic():
    # "list[list[int]]"
    node = make_inline(
        make_text("list"),
        make_text("["),
        make_text("list"),
        make_text("["),
        make_text("int"),
        make_text("]"),
        make_text("]"),
    )
    result = parse_type_node(node)
    assert result == {
        "type": "generic",
        "name": "list",
        "args": [{"type": "generic", "name": "list", "args": [{"type": "name", "text": "int"}]}],
    }

def test_union_with_ref():
    # "UnsetType | list[list[int]] | CouplingMap"
    node = make_inline(
        make_text("UnsetType"),
        make_text(" | "),
        make_text("list"),
        make_text("["),
        make_text("list"),
        make_text("["),
        make_text("int"),
        make_text("]"),
        make_text("]"),
        make_text(" | "),
        make_ref("CouplingMap", "https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.transpiler.CouplingMap"),
    )
    result = parse_type_node(node)
    assert result == {
        "type": "union",
        "members": [
            {"type": "name", "text": "UnsetType"},
            {"type": "generic", "name": "list", "args": [
                {"type": "generic", "name": "list", "args": [{"type": "name", "text": "int"}]}
            ]},
            {"type": "name", "text": "CouplingMap", "url": "https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.transpiler.CouplingMap"},
        ],
    }
