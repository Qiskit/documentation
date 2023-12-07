# RYGate



`RYGate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the Y axis.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Ry(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RY(\theta) = exp(-i \th Y) =
    \begin{pmatrix}
        \cos{\th} & -\sin{\th} \\
        \sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RY gate.

## Methods Defined Here

|                                                                                                                                  |                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`control`](qiskit.circuit.library.RYGate.control#qiskit.circuit.library.RYGate.control "qiskit.circuit.library.RYGate.control") | Return a (multi-)controlled-RY gate. |
| [`inverse`](qiskit.circuit.library.RYGate.inverse#qiskit.circuit.library.RYGate.inverse "qiskit.circuit.library.RYGate.inverse") | Return inverted RY gate.             |

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
