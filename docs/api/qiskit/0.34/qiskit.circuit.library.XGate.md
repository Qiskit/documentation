# XGate

<span id="undefined" />

`XGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The single-qubit Pauli-X gate ($\sigma_x$).

**Matrix Representation:**

$$
\begin{split}X = \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ X ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the X axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(\pi)$ and $X$.

  $$
  \begin{split}RX(\pi) = \begin{pmatrix}
              0 & -i \\
              -i & 0
            \end{pmatrix}
          = -i X\end{split}
  $$
</Admonition>

The gate is equivalent to a classical bit flip.

$$
\begin{split}|0\rangle \rightarrow |1\rangle \\
|1\rangle \rightarrow |0\rangle\end{split}
$$

Create new X gate.

## Methods Defined Here

|                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`control`](qiskit.circuit.library.XGate.control#qiskit.circuit.library.XGate.control "qiskit.circuit.library.XGate.control") | Return a (multi-)controlled-X gate. |
| [`inverse`](qiskit.circuit.library.XGate.inverse#qiskit.circuit.library.XGate.inverse "qiskit.circuit.library.XGate.inverse") | Return inverted X gate (itself).    |

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
