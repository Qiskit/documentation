# U1Gate

<span id="undefined" />

`U1Gate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ U1(λ) ├
     └───────┘
```

**Matrix Representation:**

$$
\begin{split}U1(\lambda) =
    \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> U1(\lambda = \pi) = Z
> $$
>
> $$
> U1(\lambda = \pi/2) = S
> $$
>
> $$
> U1(\lambda = \pi/4) = T
> $$

<Admonition title="See also" type="note">
  `RZGate`: This gate is equivalent to RZ up to a phase factor.

  > $$
  > U1(\lambda) = e^{i{\lambda}/2} RZ(\lambda)
  > $$

  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new U1 gate.

## Methods Defined Here

|                                                                                                                                  |                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`control`](qiskit.circuit.library.U1Gate.control#qiskit.circuit.library.U1Gate.control "qiskit.circuit.library.U1Gate.control") | Return a (multi-)controlled-U1 gate.                            |
| [`inverse`](qiskit.circuit.library.U1Gate.inverse#qiskit.circuit.library.U1Gate.inverse "qiskit.circuit.library.U1Gate.inverse") | Return inverted U1 gate ($U1(\lambda){\dagger} = U1(-\lambda)$) |

## Attributes

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
