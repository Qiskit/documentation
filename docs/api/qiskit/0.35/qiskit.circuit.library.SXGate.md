# SXGate

<span id="undefined" />

`SXGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The single-qubit Sqrt(X) gate ($\sqrt{X}$).

**Matrix Representation:**

$$
\begin{split}\sqrt{X} = \frac{1}{2} \begin{pmatrix}
        1 + i & 1 - i \\
        1 - i & 1 + i
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌────┐
q_0: ┤ √X ├
     └────┘
```

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(\pi/2)$ and $\sqrt{X}$.

  $$
  \begin{split}RX(\pi/2) = \frac{1}{\sqrt{2}} \begin{pmatrix}
              1 & -i \\
              -i & 1
            \end{pmatrix}
          = e^{-i pi/4} \sqrt{X}\end{split}
  $$
</Admonition>

Create new SX gate.

## Methods Defined Here

|                                                                                                                                  |                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`control`](qiskit.circuit.library.SXGate.control#qiskit.circuit.library.SXGate.control "qiskit.circuit.library.SXGate.control") | Return a (multi-)controlled-SX gate. |
| [`inverse`](qiskit.circuit.library.SXGate.inverse#qiskit.circuit.library.SXGate.inverse "qiskit.circuit.library.SXGate.inverse") | Return inverse SX gate (i.e.         |

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
