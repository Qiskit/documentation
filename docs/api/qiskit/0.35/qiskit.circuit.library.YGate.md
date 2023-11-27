# YGate[¶](#ygate "Permalink to this headline")

<span id="undefined" />

`YGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The single-qubit Pauli-Y gate ($\sigma_y$).

**Matrix Representation:**

$$
\begin{split}Y = \begin{pmatrix}
        0 & -i \\
        i & 0
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ Y ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the Y axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RY(\pi)$ and $Y$.

  $$
  \begin{split}RY(\pi) = \begin{pmatrix}
              0 & -1 \\
              1 & 0
            \end{pmatrix}
          = -i Y\end{split}
  $$
</Admonition>

The gate is equivalent to a bit and phase flip.

$$
\begin{split}|0\rangle \rightarrow i|1\rangle \\
|1\rangle \rightarrow -i|0\rangle\end{split}
$$

Create new Y gate.

## Methods Defined Here

|                                                                                                                               |                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`control`](qiskit.circuit.library.YGate.control#qiskit.circuit.library.YGate.control "qiskit.circuit.library.YGate.control") | Return a (multi-)controlled-Y gate.       |
| [`inverse`](qiskit.circuit.library.YGate.inverse#qiskit.circuit.library.YGate.inverse "qiskit.circuit.library.YGate.inverse") | Return inverted Y gate ($Y{\dagger} = Y$) |

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
