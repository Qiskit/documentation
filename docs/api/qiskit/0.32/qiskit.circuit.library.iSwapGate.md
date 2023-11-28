# iSwapGate

<span id="undefined" />

`iSwapGate`

Bases: `qiskit.circuit.gate.Gate`

iSWAP gate.

A 2-qubit XX+YY interaction. This is a Clifford and symmetric gate. Its action is to swap two qubit states and phase the $|01\rangle$ and $|10\rangle$ amplitudes by i.

**Circuit Symbol:**

```python
q_0: ─⨂─
      │
q_1: ─⨂─
```

**Reference Implementation:**

```python
     ┌───┐┌───┐     ┌───┐
q_0: ┤ S ├┤ H ├──■──┤ X ├─────
     ├───┤└───┘┌─┴─┐└─┬─┘┌───┐
q_1: ┤ S ├─────┤ X ├──■──┤ H ├
     └───┘     └───┘     └───┘
```

**Matrix Representation:**

$$
\begin{split}iSWAP = R_{XX+YY}(-\frac{\pi}{2})
  = exp(i \frac{\pi}{4} (X{\otimes}X+Y{\otimes}Y)) =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & i & 0 \\
        0 & i & 0 & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}\end{split}
$$

This gate is equivalent to a SWAP up to a diagonal.

$$
\begin{split}iSWAP =
   \begin{pmatrix}
       1 & 0 & 0 & 0 \\
       0 & 0 & 1 & 0 \\
       0 & 1 & 0 & 0 \\
       0 & 0 & 0 & 1
   \end{pmatrix}
.  \begin{pmatrix}
       1 & 0 & 0 & 0 \\
       0 & i & 0 & 0 \\
       0 & 0 & i & 0 \\
       0 & 0 & 0 & 1
   \end{pmatrix}\end{split}
$$

Create new iSwap gate.

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
