---
title: RYYGate
description: API reference for qiskit.circuit.library.RYYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RYYGate
---

# RYYGate

<span id="qiskit.circuit.library.RYYGate" />

`RYYGate(theta)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/standard_gates/ryy.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

A parametric 2-qubit $Y \otimes Y$ interaction (rotation about YY).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Ryy(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{YY}(\theta) = exp(-i \th Y{\otimes}Y) =
    \begin{pmatrix}
        \cos(\th)   & 0           & 0           & i\sin(\th) \\
        0           & \cos(\th)   & -i\sin(\th) & 0 \\
        0           & -i\sin(\th) & \cos(\th)   & 0 \\
        i\sin(\th)  & 0           & 0           & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

> $$
> R_{YY}(\theta = 0) = I
> $$
>
> $$
> R_{YY}(\theta = \pi) = i Y \otimes Y
> $$
>
> $$
> \begin{split}R_{YY}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1 & 0 & 0 & i \\
>                             0 & 1 & -i & 0 \\
>                             0 & -i & 1 & 0 \\
>                             i & 0 & 0 & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RYY gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.RYYGate.inverse" />

`RYYGate.inverse()`

Return inverse RYY gate (i.e. with the negative rotation angle).

## Attributes

<span id="qiskit.circuit.library.RYYGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RYYGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RYYGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RYYGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.RYYGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RYYGate.unit" />

### unit

Get the time unit of duration.

