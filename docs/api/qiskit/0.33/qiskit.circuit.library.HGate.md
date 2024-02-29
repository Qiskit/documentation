---
title: HGate
description: API reference for qiskit.circuit.library.HGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.HGate
---

# HGate

<span id="qiskit.circuit.library.HGate" />

`HGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/standard_gates/h.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

Single-qubit Hadamard gate.

This gate is a pi rotation about the X+Z axis, and has the effect of changing computation basis from $|0\rangle,|1\rangle$ to $|+\rangle,|-\rangle$ and vice-versa.

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ H ├
     └───┘
```

**Matrix Representation:**

$$
\begin{split}H = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1 & 1 \\
        1 & -1
    \end{pmatrix}\end{split}
$$

Create new H gate.

## Methods Defined Here

### control

<span id="qiskit.circuit.library.HGate.control" />

`HGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-H gate.

One control qubit returns a CH gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.HGate.inverse" />

`HGate.inverse()`

Return inverted H gate (itself).

## Attributes

<span id="qiskit.circuit.library.HGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.HGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.HGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.HGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.HGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.HGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.HGate.unit" />

### unit

Get the time unit of duration.

