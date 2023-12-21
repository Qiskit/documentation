# IGate

`IGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

Identity gate.

Identity gate corresponds to a single-qubit gate wait cycle, and should not be optimized or unrolled (it is an opaque gate).

**Matrix Representation:**

$$
\begin{split}I = \begin{pmatrix}
        1 & 0 \\
        0 & 1
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ I ├
     └───┘
```

Create new Identity gate.

## Methods Defined Here

|                                                                                                                               |                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`inverse`](qiskit.circuit.library.IGate.inverse#qiskit.circuit.library.IGate.inverse "qiskit.circuit.library.IGate.inverse") | Invert this gate. |

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
