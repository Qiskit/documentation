---
title: PhaseGate
description: API reference for qiskit.circuit.library.PhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PhaseGate
---

# PhaseGate

<span id="qiskit.circuit.library.PhaseGate" />

`PhaseGate(theta, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/standard_gates/p.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

**Circuit symbol:**

```python
     ┌──────┐
q_0: ┤ P(λ) ├
     └──────┘
```

**Matrix Representation:**

$$
\begin{split}P(\lambda) =
    \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> P(\lambda = \pi) = Z
> $$
>
> $$
> P(\lambda = \pi/2) = S
> $$
>
> $$
> P(\lambda = \pi/4) = T
> $$

<Admonition title="See also" type="note">
  `RZGate`: This gate is equivalent to RZ up to a phase factor.

  > $$
  > P(\lambda) = e^{i{\lambda}/2} RZ(\lambda)
  > $$

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new Phase gate.

## Methods Defined Here

### control

<span id="qiskit.circuit.library.PhaseGate.control" />

`PhaseGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-Phase gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.PhaseGate.inverse" />

`PhaseGate.inverse()`

Return inverted Phase gate ($Phase(\lambda){\dagger} = Phase(-\lambda)$)

## Attributes

<span id="qiskit.circuit.library.PhaseGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.PhaseGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.PhaseGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.PhaseGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.PhaseGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.PhaseGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.PhaseGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.PhaseGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.PhaseGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.PhaseGate.unit" />

### unit

Get the time unit of duration.

