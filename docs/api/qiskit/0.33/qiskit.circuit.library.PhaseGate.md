# PhaseGate

<span id="undefined" />

`PhaseGate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

**Circuit symbol:**

```python
     ┌──────┐
q_0: ┤ P(λ) ├
     └──────┘
```

**Matrix Representation:**

$$
\begin{split}P(\lambda) =
    \begin{pmatrix}
        1 & 0 \\
        0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

**Examples:**

> $$
> P(\lambda = \pi) = Z
> $$
>
> $$
> P(\lambda = \pi/2) = S
> $$
>
> $$
> P(\lambda = \pi/4) = T
> $$

<Admonition title="See also" type="note">
  `RZGate`: This gate is equivalent to RZ up to a phase factor.

  > $$
  > P(\lambda) = e^{i{\lambda}/2} RZ(\lambda)
  > $$

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new Phase gate.

## Methods Defined Here

|                                                                                                                                           |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`control`](qiskit.circuit.library.PhaseGate.control#qiskit.circuit.library.PhaseGate.control "qiskit.circuit.library.PhaseGate.control") | Return a (multi-)controlled-Phase gate.                                  |
| [`inverse`](qiskit.circuit.library.PhaseGate.inverse#qiskit.circuit.library.PhaseGate.inverse "qiskit.circuit.library.PhaseGate.inverse") | Return inverted Phase gate ($Phase(\lambda){\dagger} = Phase(-\lambda)$) |

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
