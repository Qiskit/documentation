# RZGate

<span id="undefined" />

`RZGate(phi, label=None)`

Bases: `qiskit.circuit.gate.Gate`

Single-qubit rotation about the Z axis.

This is a diagonal gate. It can be implemented virtually in hardware via framechanges (i.e. at zero error and duration).

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rz(λ) ├
     └───────┘
```

**Matrix Representation:**

$$
\begin{split}RZ(\lambda) = exp(-i\frac{\lambda}{2}Z) =
    \begin{pmatrix}
        e^{-i\frac{\lambda}{2}} & 0 \\
        0 & e^{i\frac{\lambda}{2}}
    \end{pmatrix}\end{split}
$$

<Admonition title="See also" type="note">
  `U1Gate` This gate is equivalent to U1 up to a phase factor.

  > $$
  > U1(\lambda) = e^{i{\lambda}/2}RZ(\lambda)
  > $$

  Reference for virtual Z gate implementation: [1612.00858](https://arxiv.org/abs/1612.00858)
</Admonition>

Create new RZ gate.

## Methods Defined Here

|                                                                                                                                  |                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`control`](qiskit.circuit.library.RZGate.control#qiskit.circuit.library.RZGate.control "qiskit.circuit.library.RZGate.control") | Return a (multi-)controlled-RZ gate. |
| [`inverse`](qiskit.circuit.library.RZGate.inverse#qiskit.circuit.library.RZGate.inverse "qiskit.circuit.library.RZGate.inverse") | Return inverted RZ gate              |

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
