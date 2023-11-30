# UGate

<span id="undefined" />

`UGate(theta, phi, lam, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Generic single-qubit rotation gate with 3 Euler angles.

Implemented using two X90 pulses on IBM Quantum systems:

$$
U(\theta, \phi, \lambda) =
    RZ(\phi - \pi/2) RX(\pi/2) RZ(\pi - \theta) RX(\pi/2) RZ(\lambda - \pi/2)
$$

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤ U(ϴ,φ,λ) ├
     └──────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}U(\theta, \phi, \lambda) =
    \begin{pmatrix}
        \cos(\th)          & -e^{i\lambda}\sin(\th) \\
        e^{i\phi}\sin(\th) & e^{i(\phi+\lambda)}\cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

$$
U\left(\theta, -\frac{\pi}{2}, \frac{\pi}{2}\right) = RX(\theta)
$$

$$
U(\theta, 0, 0) = RY(\theta)
$$

Create new U gate.

## Methods Defined Here

|                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`control`](qiskit.circuit.library.UGate.control#qiskit.circuit.library.UGate.control "qiskit.circuit.library.UGate.control") | Return a (multi-)controlled-U gate. |
| [`inverse`](qiskit.circuit.library.UGate.inverse#qiskit.circuit.library.UGate.inverse "qiskit.circuit.library.UGate.inverse") | Return inverted U gate.             |

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
