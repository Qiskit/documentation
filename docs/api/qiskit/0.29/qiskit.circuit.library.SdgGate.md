# SdgGate



`SdgGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single qubit S-adjoint gate (\~Z\*\*0.5).

It induces a $-\pi/2$ phase.

This is a Clifford gate and a square-root of Pauli-Z.

**Matrix Representation:**

$$
\begin{split}Sdg = \begin{pmatrix}
        1 & 0 \\
        0 & -i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌─────┐
q_0: ┤ Sdg ├
     └─────┘
```

Equivalent to a $\pi/2$ radian rotation about the Z axis.

Create new Sdg gate.

## Methods Defined Here

|                                                                                                                                     |                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`inverse`](qiskit.circuit.library.SdgGate.inverse#qiskit.circuit.library.SdgGate.inverse "qiskit.circuit.library.SdgGate.inverse") | Return inverse of Sdg (SGate). |

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
