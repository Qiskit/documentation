# SwapGate[¶](#swapgate "Permalink to this headline")

<span id="undefined" />

`SwapGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The SWAP gate.

This is a symmetric and Clifford gate.

**Circuit symbol:**

```python
q_0: ─X─
      │
q_1: ─X─
```

**Matrix Representation:**

$$
\begin{split}SWAP =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}\end{split}
$$

The gate is equivalent to a state swap and is a classical logic gate.

$$
|a, b\rangle \rightarrow |b, a\rangle
$$

Create new SWAP gate.

## Methods Defined Here

|                                                                                                                                        |                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`control`](qiskit.circuit.library.SwapGate.control#qiskit.circuit.library.SwapGate.control "qiskit.circuit.library.SwapGate.control") | Return a (multi-)controlled-SWAP gate. |
| [`inverse`](qiskit.circuit.library.SwapGate.inverse#qiskit.circuit.library.SwapGate.inverse "qiskit.circuit.library.SwapGate.inverse") | Return inverse Swap gate (itself).     |

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
