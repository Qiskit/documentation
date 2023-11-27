# RXXGate[¶](#rxxgate "Permalink to this headline")

<span id="undefined" />

`RXXGate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

A parametric 2-qubit $X \otimes X$ interaction (rotation about XX).

This gate is symmetric, and is maximally entangling at $\theta = \pi/2$.

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤1        ├
     │  Rxx(ϴ) │
q_1: ┤0        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX}(\theta) = exp(-i \th X{\otimes}X) =
    \begin{pmatrix}
        \cos(\th)   & 0           & 0           & -i\sin(\th) \\
        0           & \cos(\th)   & -i\sin(\th) & 0 \\
        0           & -i\sin(\th) & \cos(\th)   & 0 \\
        -i\sin(\th) & 0           & 0           & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

**Examples:**

> $$
> R_{XX}(\theta = 0) = I
> $$
>
> $$
> R_{XX}(\theta = \pi) = i X \otimes X
> $$
>
> $$
> \begin{split}R_{XX}(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1  & 0  & 0  & -i \\
>                             0  & 1  & -i & 0 \\
>                             0  & -i & 1  & 0 \\
>                             -i & 0  & 0  & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RXX gate.

## Methods Defined Here

|                                                                                                                                     |                               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`inverse`](qiskit.circuit.library.RXXGate.inverse#qiskit.circuit.library.RXXGate.inverse "qiskit.circuit.library.RXXGate.inverse") | Return inverse RXX gate (i.e. |

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
