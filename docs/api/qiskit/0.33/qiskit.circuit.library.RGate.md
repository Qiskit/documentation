# RGate

<span id="undefined" />

`RGate(theta, phi, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Rotation θ around the cos(φ)x + sin(φ)y axis.

**Circuit symbol:**

```python
     ┌──────┐
q_0: ┤ R(ϴ) ├
     └──────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R(\theta, \phi) = e^{-i \th (\cos{\phi} x + \sin{\phi} y)} =
    \begin{pmatrix}
        \cos{\th} & -i e^{-i \phi} \sin{\th} \\
        -i e^{i \phi} \sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new r single-qubit gate.

## Methods Defined Here

|                                                                                                                               |                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [`inverse`](qiskit.circuit.library.RGate.inverse#qiskit.circuit.library.RGate.inverse "qiskit.circuit.library.RGate.inverse") | Invert this gate. |

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
