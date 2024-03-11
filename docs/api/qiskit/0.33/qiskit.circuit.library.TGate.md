---
title: TGate
description: API reference for qiskit.circuit.library.TGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.TGate
---

# TGate

<span id="qiskit.circuit.library.TGate" />

`TGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/standard_gates/t.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

Single qubit T gate (Z\*\*0.25).

It induces a $\pi/4$ phase, and is sometimes called the pi/8 gate (because of how the RZ(pi/4) matrix looks like).

This is a non-Clifford gate and a fourth-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}T = \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\pi/4}
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ T ├
     └───┘
```

Equivalent to a $\pi/4$ radian rotation about the Z axis.

Create new T gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.TGate.inverse" />

`TGate.inverse()`

Return inverse T gate (i.e. Tdg).

## Attributes

<span id="qiskit.circuit.library.TGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.TGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.TGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.TGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.TGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.TGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.TGate.unit" />

### unit

Get the time unit of duration.

