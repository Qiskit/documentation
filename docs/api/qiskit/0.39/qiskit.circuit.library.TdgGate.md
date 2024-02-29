---
title: TdgGate
description: API reference for qiskit.circuit.library.TdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TdgGate
---

# TdgGate

<span id="qiskit.circuit.library.TdgGate" />

`TdgGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/circuit/library/standard_gates/t.py "view source code")

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single qubit T-adjoint gate (\~Z\*\*0.25).

It induces a $-\pi/4$ phase.

This is a non-Clifford gate and a fourth-root of Pauli-Z.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`tdg()`](qiskit.circuit.QuantumCircuit#tdg "qiskit.circuit.QuantumCircuit.tdg") method.

**Matrix Representation:**

$$
\begin{split}Tdg = \begin{pmatrix}
        1 & 0 \\
        0 & e^{-i\pi/4}
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌─────┐
q_0: ┤ Tdg ├
     └─────┘
```

Equivalent to a $-\pi/4$ radian rotation about the Z axis.

Create new Tdg gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.TdgGate.inverse" />

`TdgGate.inverse()`

Return inverse Tdg gate (i.e. T).

## Attributes

<span id="qiskit.circuit.library.TdgGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.TdgGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.TdgGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.TdgGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.TdgGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.TdgGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.TdgGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.TdgGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.TdgGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.TdgGate.unit" />

### unit

Get the time unit of duration.

