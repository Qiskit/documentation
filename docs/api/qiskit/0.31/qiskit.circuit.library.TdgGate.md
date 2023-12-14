# TdgGate



`TdgGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single qubit T-adjoint gate (\~Z\*\*0.25).

It induces a $-\pi/4$ phase.

This is a non-Clifford gate and a fourth-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}Tdg = \begin{pmatrix}
        1 & 0 \\
        0 & e^{-i\pi/4}
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌─────┐
q_0: ┤ Tdg ├
     └─────┘
```

Equivalent to a $\pi/2$ radian rotation about the Z axis.

Create new Tdg gate.

## Methods Defined Here

|                                                                                                                                     |                               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`inverse`](qiskit.circuit.library.TdgGate.inverse#qiskit.circuit.library.TdgGate.inverse "qiskit.circuit.library.TdgGate.inverse") | Return inverse Tdg gate (i.e. |

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
