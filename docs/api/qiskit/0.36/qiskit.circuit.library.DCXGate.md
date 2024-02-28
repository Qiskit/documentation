---
title: DCXGate
description: API reference for qiskit.circuit.library.DCXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.DCXGate
---

# DCXGate

<span id="qiskit.circuit.library.DCXGate" />

`DCXGate` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/standard_gates/dcx.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

Double-CNOT gate.

A 2-qubit Clifford gate consisting of two back-to-back CNOTs with alternate controls.

```python
          ┌───┐
q_0: ──■──┤ X ├
     ┌─┴─┐└─┬─┘
q_1: ┤ X ├──■──
     └───┘
```

This is a classical logic gate, equivalent to a CNOT-SWAP (CNS) sequence, and locally equivalent to an iSWAP.

$$
\begin{split}DCX\ q_0, q_1 =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0
    \end{pmatrix}\end{split}
$$

Create new DCX gate.

## Attributes

<span id="qiskit.circuit.library.DCXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.DCXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.DCXGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.DCXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.DCXGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.DCXGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.DCXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.DCXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.DCXGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.DCXGate.unit" />

### unit

Get the time unit of duration.

