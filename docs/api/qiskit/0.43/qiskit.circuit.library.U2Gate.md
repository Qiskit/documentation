---
title: U2Gate
description: API reference for qiskit.circuit.library.U2Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U2Gate
---

# U2Gate

<span id="qiskit.circuit.library.U2Gate" />

`U2Gate(phi, lam, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/u2.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single-qubit rotation about the X+Z axis.

Implemented using one X90 pulse on IBM Quantum systems:

<Admonition title="Warning" type="caution">
  This gate is deprecated. Instead, the following replacements should be used

  $$
  U2(\phi, \lambda) = U\left(\frac{\pi}{2}, \phi, \lambda\right)
  $$

  ```python
  circuit = QuantumCircuit(1)
  circuit.u(pi/2, phi, lambda)
  ```
</Admonition>

**Circuit symbol:**

```python
     ┌─────────┐
q_0: ┤ U2(φ,λ) ├
     └─────────┘
```

**Matrix Representation:**

$$
\begin{split}U2(\phi, \lambda) = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1          & -e^{i\lambda} \\
        e^{i\phi} & e^{i(\phi+\lambda)}
    \end{pmatrix}\end{split}
$$

**Examples:**

$$
U2(\phi,\lambda) = e^{i \frac{\phi + \lambda}{2}}RZ(\phi)
RY\left(\frac{\pi}{2}\right) RZ(\lambda)
= e^{- i\frac{\pi}{4}} P\left(\frac{\pi}{2} + \phi\right)
\sqrt{X} P\left(\lambda- \frac{\pi}{2}\right)
$$

$$
U2(0, \pi) = H
$$

$$
U2(0, 0) = RY(\pi/2)
$$

$$
U2(-\pi/2, \pi/2) = RX(\pi/2)
$$

<Admonition title="See also" type="note">
  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.
</Admonition>

Create new U2 gate.

## Methods Defined Here

<span id="qiskit-circuit-library-u2gate-inverse" />

### inverse

<span id="qiskit.circuit.library.U2Gate.inverse" />

`U2Gate.inverse()`

Return inverted U2 gate.

$U2(\phi, \lambda)^{\dagger} =U2(-\lambda-\pi, -\phi+\pi)$)

## Attributes

<span id="qiskit.circuit.library.U2Gate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.U2Gate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.U2Gate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.U2Gate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.U2Gate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.U2Gate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.U2Gate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.U2Gate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.U2Gate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.U2Gate.unit" />

### unit

Get the time unit of duration.

