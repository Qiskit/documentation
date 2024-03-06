---
title: U1Gate
description: API reference for qiskit.circuit.library.U1Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U1Gate
---

# U1Gate

<span id="qiskit.circuit.library.U1Gate" />

`U1Gate(theta, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/u1.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

<Admonition title="Warning" type="caution">
  This gate is deprecated. Instead, the following replacements should be used

  $$
  U1(\lambda) = P(\lambda)= U(0,0,\lambda)
  $$

  ```python
  circuit = QuantumCircuit(1)
  circuit.p(lambda, 0) # or circuit.u(0, 0, lambda)
  ```
</Admonition>

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ U1(λ) ├
     └───────┘
```

**Matrix Representation:**

$$
\begin{split}U1(\lambda) =
    \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> U1(\lambda = \pi) = Z
> $$
>
> $$
> U1(\lambda = \pi/2) = S
> $$
>
> $$
> U1(\lambda = \pi/4) = T
> $$

<Admonition title="See also" type="note">
  `RZGate`: This gate is equivalent to RZ up to a phase factor.

  > $$
  > U1(\lambda) = e^{i{\lambda}/2} RZ(\lambda)
  > $$

  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new U1 gate.

## Methods Defined Here

<span id="qiskit-circuit-library-u1gate-control" />

### control

<span id="qiskit.circuit.library.U1Gate.control" />

`U1Gate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-U1 gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

<span id="qiskit-circuit-library-u1gate-inverse" />

### inverse

<span id="qiskit.circuit.library.U1Gate.inverse" />

`U1Gate.inverse()`

Return inverted U1 gate ($U1(\lambda)^{\dagger} = U1(-\lambda)$)

## Attributes

<span id="qiskit.circuit.library.U1Gate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.U1Gate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.U1Gate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.U1Gate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.U1Gate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.U1Gate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.U1Gate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.U1Gate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.U1Gate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.U1Gate.unit" />

### unit

Get the time unit of duration.

