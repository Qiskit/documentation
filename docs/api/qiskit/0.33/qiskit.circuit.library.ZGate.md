# ZGate



`ZGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The single-qubit Pauli-Z gate ($\sigma_z$).

**Matrix Representation:**

$$
\begin{split}Z = \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ Z ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the Z axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RZ(\pi)$ and $Z$.

  $$
  \begin{split}RZ(\pi) = \begin{pmatrix}
              -1 & 0 \\
              0 & 1
            \end{pmatrix}
          = -Z\end{split}
  $$
</Admonition>

The gate is equivalent to a phase flip.

$$
\begin{split}|0\rangle \rightarrow |0\rangle \\
|1\rangle \rightarrow -|1\rangle\end{split}
$$

Create new Z gate.

## Methods Defined Here

|                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`control`](qiskit.circuit.library.ZGate.control#qiskit.circuit.library.ZGate.control "qiskit.circuit.library.ZGate.control") | Return a (multi-)controlled-Z gate. |
| [`inverse`](qiskit.circuit.library.ZGate.inverse#qiskit.circuit.library.ZGate.inverse "qiskit.circuit.library.ZGate.inverse") | Return inverted Z gate (itself).    |

## Attributes



### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]



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
