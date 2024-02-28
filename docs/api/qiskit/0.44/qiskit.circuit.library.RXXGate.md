---
title: RXXGate
description: API reference for qiskit.circuit.library.RXXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXXGate
---

# RXXGate

<span id="qiskit.circuit.library.RXXGate" />

`qiskit.circuit.library.RXXGate(theta, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/library/standard_gates/rxx.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A parametric 2-qubit $X \otimes X$ interaction (rotation about XX).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rxx()`](qiskit.circuit.QuantumCircuit#rxx "qiskit.circuit.QuantumCircuit.rxx") method.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Rxx(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX}(\theta) = \exp\left(-i \th X{\otimes}X\right) =
    \begin{pmatrix}
        \cos\left(\th\right)   & 0           & 0           & -i\sin\left(\th\right) \\
        0           & \cos\left(\th\right)   & -i\sin\left(\th\right) & 0 \\
        0           & -i\sin\left(\th\right) & \cos\left(\th\right)   & 0 \\
        -i\sin\left(\th\right) & 0           & 0           & \cos\left(\th\right)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

> $$
> R_{XX}(\theta = 0) = I
> $$
>
> $$
> R_{XX}(\theta = \pi) = i X \otimes X
> $$
>
> $$
> \begin{split}R_{XX}\left(\theta = \frac{\pi}{2}\right) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1  & 0  & 0  & -i \\
>                             0  & 1  & -i & 0 \\
>                             0  & -i & 1  & 0 \\
>                             -i & 0  & 0  & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RXX gate.

## Attributes

<span id="qiskit.circuit.library.RXXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RXXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RXXGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RXXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RXXGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RXXGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RXXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RXXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RXXGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RXXGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.RXXGate.inverse" />

`inverse()`

Return inverse RXX gate (i.e. with the negative rotation angle).

### power

<span id="qiskit.circuit.library.RXXGate.power" />

`power(exponent)`

Raise gate to a power.

