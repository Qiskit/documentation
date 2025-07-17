from nbformat import NotebookNode
from nbformat.v4 import new_notebook, new_code_cell, new_output

from qiskit_docs_notebook_tester.execute import (
    open_backends_to_internal,
    internal_backends_to_open,
)

def create_notebook(cell_source: str, outputs: list[dict] | None = None) -> NotebookNode:
    """Create a notebook with a single code cell"""
    return new_notebook(cells=[new_code_cell(
        source=cell_source,
        outputs=[new_output(**o) for o in outputs] if outputs else []
    )])

def test_simple_open_to_internal():
    nb = create_notebook("backend = service.backend(\"ibm_brisbane\")")
    received = open_backends_to_internal(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "backend = service.backend(\"alt_brisbane\")"

def test_simple_internal_to_open():
    nb = create_notebook("backend = service.backend(\"alt_brisbane\")")
    received = internal_backends_to_open(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "backend = service.backend(\"ibm_brisbane\")"

def test_open_to_internal_with_superstring():
    nb = create_notebook("ibm_brisbane_coupling_map = CouplingMap(...)")
    received = open_backends_to_internal(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "ibm_brisbane_coupling_map = CouplingMap(...)"

def test_internal_to_open_superstring():
    nb = create_notebook("alt_brisbane_coupling_map = CouplingMap(...)")
    received = internal_backends_to_open(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "alt_brisbane_coupling_map = CouplingMap(...)"

def test_internal_to_open_stream_outputs():
    nb = create_notebook(
        "print(\"Using backend: {backend.name}\")",
        outputs=[{
            "output_type": "stream",
            "text": "Using backend: alt_brisbane"
        }]
    )
    received = internal_backends_to_open(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "print(\"Using backend: {backend.name}\")"
    assert len(received.cells[0].outputs) == 1
    assert received.cells[0].outputs[0].output_type == "stream"
    assert received.cells[0].outputs[0].text == "Using backend: ibm_brisbane"

def test_internal_to_open_stream_outputs_alt():
    nb = create_notebook(
        "print(\"Using backend: {backend.name}\")\nprint(\"Using backend: '{backend.name}'\")",
        outputs=[{
            "output_type": "stream",
            "text": "Using backend: alt_brisbane"
        },
        {
            "output_type": "stream",
            "text": "Using backend: 'alt_brisbane'"
        },
        ]
    )
    received = internal_backends_to_open(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "print(\"Using backend: {backend.name}\")\nprint(\"Using backend: '{backend.name}'\")"
    assert len(received.cells[0].outputs) == 2
    assert received.cells[0].outputs[0].output_type == "stream"
    assert received.cells[0].outputs[0].text == "Using backend: ibm_brisbane"
    assert received.cells[0].outputs[1].output_type == "stream"
    assert received.cells[0].outputs[1].text == "Using backend: 'ibm_brisbane'"

def test_internal_to_open_result_outputs():
    nb = create_notebook(
        "print(\"Using backend: {backend.name}\")",
        outputs=[{
            "output_type": "execute_result",
            "data": { "text/plain": "Using backend: alt_brisbane" }
        }]
    )
    received = internal_backends_to_open(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "print(\"Using backend: {backend.name}\")"
    assert len(received.cells[0].outputs) == 1
    assert received.cells[0].outputs[0].output_type == "execute_result"
    assert received.cells[0].outputs[0].data["text/plain"] == "Using backend: ibm_brisbane"

def test_internal_to_open_result_outputs_alt():
    nb = create_notebook(
        "print(\"Using backend:\\n>>> '{backend.name}'\")",
        outputs=[{
            "output_type": "execute_result",
            "data": { "text/plain": "Using backend:\n>>> 'alt_brisbane'" }
        }]
    )
    received = internal_backends_to_open(nb)
    assert len(received.cells) == 1
    assert received.cells[0].source == "print(\"Using backend:\\n>>> '{backend.name}'\")"
    assert len(received.cells[0].outputs) == 1
    assert received.cells[0].outputs[0].output_type == "execute_result"
    assert received.cells[0].outputs[0].data["text/plain"] == "Using backend:\n>>> 'ibm_brisbane'"
