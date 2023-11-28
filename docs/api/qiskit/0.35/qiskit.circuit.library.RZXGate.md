# RZXGate[¶](#rzxgate "Permalink to this headline")

<span id="undefined" />

`RZXGate(theta, label=None)`

Bases: `qiskit.circuit.gate.Gate`

A parametric 2-qubit $Z \otimes X$ interaction (rotation about ZX).

This gate is maximally entangling at $\theta = \pi/2$.

The cross-resonance gate (CR) for superconducting qubits implements a ZX interaction (however other terms are also present in an experiment).

**Circuit Symbol:**

```python
     ┌─────────┐
q_0: ┤0        ├
     │  Rzx(θ) │
q_1: ┤1        ├
     └─────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZX}(\theta)\ q_0, q_1 = exp(-i \frac{\theta}{2} X{\otimes}Z) =
    \begin{pmatrix}
        \cos(\th)   & 0          & -i\sin(\th)  & 0          \\
        0           & \cos(\th)  & 0            & i\sin(\th) \\
        -i\sin(\th) & 0          & \cos(\th)    & 0          \\
        0           & i\sin(\th) & 0            & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in the $X \otimes Z$ tensor order. Instead, if we apply it on (q\_1, q\_0), the matrix will be $Z \otimes X$:

  ```python
       ┌─────────┐
  q_0: ┤1        ├
       │  Rzx(θ) │
  q_1: ┤0        ├
       └─────────┘
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{ZX}(\theta)\ q_1, q_0 = exp(-i \frac{\theta}{2} Z{\otimes}X) =
      \begin{pmatrix}
          \cos(\th)   & -i\sin(\th) & 0           & 0          \\
          -i\sin(\th) & \cos(\th)   & 0           & 0          \\
          0           & 0           & \cos(\th)   & i\sin(\th) \\
          0           & 0           & i\sin(\th)  & \cos(\th)
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$

  This is a direct sum of RX rotations, so this gate is equivalent to a uniformly controlled (multiplexed) RX gate:

  $$
  \begin{split}R_{ZX}(\theta)\ q_1, q_0 =
      \begin{pmatrix}
          RX(\theta) & 0 \\
          0 & RX(-\theta)
      \end{pmatrix}\end{split}
  $$
</Admonition>

**Examples:**

> $$
> R_{ZX}(\theta = 0) = I
> $$
>
> $$
> R_{ZX}(\theta = 2\pi) = -I
> $$
>
> $$
> R_{ZX}(\theta = \pi) = -i Z \otimes X
> $$
>
> $$
> \begin{split}RZX(\theta = \frac{\pi}{2}) = \frac{1}{\sqrt{2}}
>                         \begin{pmatrix}
>                             1  & 0 & -i & 0 \\
>                             0  & 1 & 0  & i \\
>                             -i & 0 & 1  & 0 \\
>                             0  & i & 0  & 1
>                         \end{pmatrix}\end{split}
> $$

Create new RZX gate.

## Methods Defined Here

|                                                                                                                                     |                               |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`inverse`](qiskit.circuit.library.RZXGate.inverse#qiskit.circuit.library.RZXGate.inverse "qiskit.circuit.library.RZXGate.inverse") | Return inverse RZX gate (i.e. |

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
