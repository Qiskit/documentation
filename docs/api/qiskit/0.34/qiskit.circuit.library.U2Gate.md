# U2Gate

<span id="undefined" />

`U2Gate(phi, lam, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the X+Z axis.

Implemented using one X90 pulse on IBM Quantum systems:

$$
U2(\phi, \lambda) = RZ(\phi).RY(\frac{\pi}{2}).RZ(\lambda)
$$

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
U2(0, \pi) = H
U2(0, 0) = RY(\pi/2)
U2(-\pi/2, \pi/2) = RX(\pi/2)
$$

<Admonition title="See also" type="note">
  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.
</Admonition>

Create new U2 gate.

## Methods Defined Here

|                                                                                                                                  |                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [`inverse`](qiskit.circuit.library.U2Gate.inverse#qiskit.circuit.library.U2Gate.inverse "qiskit.circuit.library.U2Gate.inverse") | Return inverted U2 gate. |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
