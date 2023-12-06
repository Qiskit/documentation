# HGate



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



### name

Return the name.



### num\_clbits

Return the number of clbits.



### num\_qubits

Return the number of qubits.



### params

return instruction params.



### unit

Get the time unit of duration.
