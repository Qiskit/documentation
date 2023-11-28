# HGate

<span id="undefined" />

`HGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit Hadamard gate.

This gate is a pi rotation about the X+Z axis, and has the effect of changing computation basis from $|0\rangle,|1\rangle$ to $|+\rangle,|-\rangle$ and vice-versa.

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ H ├
     └───┘
```

**Matrix Representation:**

$$
\begin{split}H = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1 & 1 \\
        1 & -1
    \end{pmatrix}\end{split}
$$

Create new H gate.

## Methods Defined Here

|                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`control`](qiskit.circuit.library.HGate.control#qiskit.circuit.library.HGate.control "qiskit.circuit.library.HGate.control") | Return a (multi-)controlled-H gate. |
| [`inverse`](qiskit.circuit.library.HGate.inverse#qiskit.circuit.library.HGate.inverse "qiskit.circuit.library.HGate.inverse") | Return inverted H gate (itself).    |

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

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
