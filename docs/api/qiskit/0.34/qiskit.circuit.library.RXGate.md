# RXGate

<span id="undefined" />

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
