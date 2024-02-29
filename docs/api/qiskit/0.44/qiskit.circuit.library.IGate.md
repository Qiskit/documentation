---
title: IGate
description: API reference for qiskit.circuit.library.IGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IGate
---

# IGate

<span id="qiskit.circuit.library.IGate" />

`qiskit.circuit.library.IGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/library/standard_gates/i.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Identity gate.

Identity gate corresponds to a single-qubit gate wait cycle, and should not be optimized or unrolled (it is an opaque gate).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`i()`](qiskit.circuit.QuantumCircuit#i "qiskit.circuit.QuantumCircuit.i") and [`id()`](qiskit.circuit.QuantumCircuit#id "qiskit.circuit.QuantumCircuit.id") methods.

**Matrix Representation:**

$$
\begin{split}I = \begin{pmatrix}
        1 & 0 \\
        0 & 1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ I ├
     └───┘
```

Create new Identity gate.

## Attributes

<span id="qiskit.circuit.library.IGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.IGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.IGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.IGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.IGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.IGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.IGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.IGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.IGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.IGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.IGate.inverse" />

`inverse()`

Invert this gate.

### power

<span id="qiskit.circuit.library.IGate.power" />

`power(exponent)`

Raise gate to a power.

