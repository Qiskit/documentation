# RZZGate

<span id="undefined" />

`RZZGate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

A parametric 2-qubit $Z \otimes Z$ interaction (rotation about ZZ).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
q_0: ───■────
        │zz(θ)
q_1: ───■────
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZZ}(\theta) = exp(-i \th Z{\otimes}Z) =
    \begin{pmatrix}
        e^{-i \th} & 0 & 0 & 0 \\
        0 & e^{i \th} & 0 & 0 \\
        0 & 0 & e^{i \th} & 0 \\
        0 & 0 & 0 & e^{-i \th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

This is a direct sum of RZ rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RZ gate:

$$
\begin{split}R_{ZZ}(\theta) =
    \begin{pmatrix}
        RZ(\theta) & 0 \\
        0 & RZ(-\theta)
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> R_{ZZ}(\theta = 0) = I
> $$
>
> $$
> R_{ZZ}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZZ}(\theta = \pi) = - Z \otimes Z
> $$
>
> $$
> \begin{split}R_{ZZ}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1-i & 0 & 0 & 0 \\
>                             0 & 1+i & 0 & 0 \\
>                             0 & 0 & 1+i & 0 \\
>                             0 & 0 & 0 & 1-i
>                         \end{pmatrix}\end{split}
> $$

Create new RZZ gate.

## Methods Defined Here

|                                                                                                                                     |                               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`inverse`](qiskit.circuit.library.RZZGate.inverse#qiskit.circuit.library.RZZGate.inverse "qiskit.circuit.library.RZZGate.inverse") | Return inverse RZZ gate (i.e. |

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
