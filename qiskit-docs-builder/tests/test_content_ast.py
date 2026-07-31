import pytest
from docutils import nodes
from docutils.parsers.rst import directives
from docutils.utils import new_document
import sphinx.addnodes as sphinx_nodes
from qiskit_docs_builder.nodes.content_ast import parse_content


def test_simple_paragraph():
    doc = new_document("<test>")
    para = nodes.paragraph()
    para += nodes.Text("Hello world")
    doc += para
    result = parse_content(doc)
    assert result == [{"type": "paragraph", "children": [{"type": "text", "value": "Hello world"}]}]


def test_paragraph_with_inline_ref():
    doc = new_document("<test>")
    para = nodes.paragraph()
    para += nodes.Text("See ")
    ref = nodes.reference()
    ref["refuri"] = "https://example.com"
    ref += nodes.Text("ExecutionSpans")
    para += ref
    para += nodes.Text(" for details.")
    doc += para
    result = parse_content(doc)
    assert result == [{
        "type": "paragraph",
        "children": [
            {"type": "text", "value": "See "},
            {"type": "link", "url": "https://example.com", "children": [{"type": "text", "value": "ExecutionSpans"}]},
            {"type": "text", "value": " for details."},
        ]
    }]


def test_inline_code():
    doc = new_document("<test>")
    para = nodes.paragraph()
    para += nodes.literal(text="some_function()")
    doc += para
    result = parse_content(doc)
    assert result[0]["children"][0] == {"type": "inlineCode", "value": "some_function()"}


def test_code_block():
    doc = new_document("<test>")
    block = nodes.literal_block(text="x = 1\ny = 2")
    block["language"] = "python"
    doc += block
    result = parse_content(doc)
    assert result == [{"type": "code", "lang": "python", "value": "x = 1\ny = 2"}]


def test_math_block():
    doc = new_document("<test>")
    m = nodes.math_block()
    m += nodes.Text(r"\hat{H} = \sum_i \sigma^z_i")
    doc += m
    result = parse_content(doc)
    assert result == [{"type": "math", "block": True, "value": r"\hat{H} = \sum_i \sigma^z_i"}]


def test_inline_math():
    doc = new_document("<test>")
    para = nodes.paragraph()
    m = nodes.math()
    m += nodes.Text("x^2")
    para += m
    doc += para
    result = parse_content(doc)
    assert result[0]["children"][0] == {"type": "math", "block": False, "value": "x^2"}


def test_admonition_note():
    doc = new_document("<test>")
    adm = nodes.note()
    para = nodes.paragraph()
    para += nodes.Text("This is a note.")
    adm += para
    doc += adm
    result = parse_content(doc)
    assert result == [{
        "type": "admonition",
        "kind": "note",
        "title": None,
        "children": [{"type": "paragraph", "children": [{"type": "text", "value": "This is a note."}]}]
    }]


def test_bullet_list():
    doc = new_document("<test>")
    lst = nodes.bullet_list()
    item = nodes.list_item()
    para = nodes.paragraph()
    para += nodes.Text("Item one")
    item += para
    lst += item
    doc += lst
    result = parse_content(doc)
    assert result == [{
        "type": "list",
        "ordered": False,
        "children": [{"type": "listItem", "children": [
            {"type": "paragraph", "children": [{"type": "text", "value": "Item one"}]}
        ]}]
    }]


def test_image():
    doc = new_document("<test>")
    img = nodes.image()
    img["uri"] = "../_images/circuit.png"
    img["alt"] = "Circuit diagram"
    doc += img
    result = parse_content(doc)
    assert result == [{"type": "image", "url": "../_images/circuit.png", "alt": "Circuit diagram"}]
