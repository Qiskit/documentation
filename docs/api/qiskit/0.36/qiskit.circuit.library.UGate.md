---
title: UGate
description: API reference for qiskit.circuit.library.UGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.UGate
---

# UGate

<span id="qiskit.circuit.library.UGate" />

`UGate(theta, phi, lam, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/standard_gates/u.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

Generic single-qubit rotation gate with 3 Euler angles.

Implemented using two X90 pulses on IBM Quantum systems:

$$
U(\theta, \phi, \lambda) =
    RZ(\phi) RX(-\pi/2) RZ(\theta) RX(\pi/2) RZ(\lambda)
$$

Equivalent simplified form:

$$
U(\theta, \phi, \lambda) =
    RZ(\phi + \pi/2) RX(\theta) RZ(\lambda - \pi/2)
$$

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤ U(ϴ,φ,λ) ├
     └──────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}U(\theta, \phi, \lambda) =
    \begin{pmatrix}
        \cos(\th)          & -e^{i\lambda}\sin(\th) \\
        e^{i\phi}\sin(\th) & e^{i(\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

$$
U\left(\theta, -\frac{\pi}{2}, \frac{\pi}{2}\right) = RX(\theta)
$$

$$
U(\theta, 0, 0) = RY(\theta)
$$

Create new U gate.

## Methods Defined Here

### control

<span id="qiskit.circuit.library.UGate.control" />

`UGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-U gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.UGate.inverse" />

`UGate.inverse()`

Return inverted U gate.

$U(\theta,\phi,\lambda)^{\dagger} =U(-\theta,-\lambda,-\phi)$)

## Attributes

<span id="qiskit.circuit.library.UGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.UGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.UGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.UGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.UGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.UGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.UGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.UGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.UGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.UGate.unit" />

### unit

Get the time unit of duration.

