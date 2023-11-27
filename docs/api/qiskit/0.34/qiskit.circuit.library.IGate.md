# IGate[¶](#igate "Permalink to this headline")

<span id="undefined" />

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
