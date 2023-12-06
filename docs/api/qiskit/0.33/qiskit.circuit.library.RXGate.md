# RXGate



`RXGate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the X axis.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rx(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RX(\theta) = exp(-i \th X) =
    \begin{pmatrix}
        \cos{\th}   & -i\sin{\th} \\
        -i\sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RX gate.

## Methods Defined Here

|                                                                                                                                  |                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`control`](qiskit.circuit.library.RXGate.control#qiskit.circuit.library.RXGate.control "qiskit.circuit.library.RXGate.control") | Return a (multi-)controlled-RX gate. |
| [`inverse`](qiskit.circuit.library.RXGate.inverse#qiskit.circuit.library.RXGate.inverse "qiskit.circuit.library.RXGate.inverse") | Return inverted RX gate.             |

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
