# TGate

`TGate(label=None)`

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

|                                                                                                                               |                             |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [`inverse`](qiskit.circuit.library.TGate.inverse#qiskit.circuit.library.TGate.inverse "qiskit.circuit.library.TGate.inverse") | Return inverse T gate (i.e. |

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### duration

Get the duration.

### label

Return instruction label

**Return type**

`str`

### params

return instruction params.

### unit

Get the time unit of duration.
