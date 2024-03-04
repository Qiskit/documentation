---
title: RGate
description: API reference for qiskit.circuit.library.RGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RGate
---

# RGate

<span id="qiskit.circuit.library.RGate" />

`qiskit.circuit.library.RGate(theta, phi, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/library/standard_gates/r.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Rotation θ around the cos(φ)x + sin(φ)y axis.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`r()`](qiskit.circuit.QuantumCircuit#r "qiskit.circuit.QuantumCircuit.r") method.

**Circuit symbol:**

```python
     ┌──────┐
q_0: ┤ R(ϴ) ├
     └──────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R(\theta, \phi) = e^{-i \th \left(\cos{\phi} x + \sin{\phi} y\right)} =
    \begin{pmatrix}
        \cos\left(\th\right) & -i e^{-i \phi} \sin\left(\th\right) \\
        -i e^{i \phi} \sin\left(\th\right) & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new r single-qubit gate.

## Attributes

<span id="qiskit.circuit.library.RGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.RGate.inverse" />

`inverse()`

Invert this gate.

r(θ, φ)^dagger = r(-θ, φ)

### power

<span id="qiskit.circuit.library.RGate.power" />

`power(exponent)`

Raise gate to a power.

