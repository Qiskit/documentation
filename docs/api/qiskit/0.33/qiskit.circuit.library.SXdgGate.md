# SXdgGate

<span id="undefined" />

`SXdgGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The inverse single-qubit Sqrt(X) gate.

$$
\begin{split}\sqrt{X}^{\dagger} = \frac{1}{2} \begin{pmatrix}
        1 - i & 1 + i \\
        1 + i & 1 - i
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(-\pi/2)$ and $\sqrt{X}^{\dagger}$.

  $$
  \begin{split}RX(-\pi/2) = \frac{1}{\sqrt{2}} \begin{pmatrix}
              1 & i \\
              i & 1
            \end{pmatrix}
          = e^{-i pi/4} \sqrt{X}^{\dagger}\end{split}
  $$
</Admonition>

Create new SXdg gate.

## Methods Defined Here

|                                                                                                                                        |                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`inverse`](qiskit.circuit.library.SXdgGate.inverse#qiskit.circuit.library.SXdgGate.inverse "qiskit.circuit.library.SXdgGate.inverse") | Return inverse SXdg gate (i.e. |

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
