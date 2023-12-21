# DCXGate

`DCXGate`

Bases: `qiskit.circuit.gate.Gate`

Double-CNOT gate.

A 2-qubit Clifford gate consisting of two back-to-back CNOTs with alternate controls.

```python
          ┌───┐
q_0: ──■──┤ X ├
     ┌─┴─┐└─┬─┘
q_1: ┤ X ├──■──
     └───┘
```

This is a classical logic gate, equivalent to a CNOT-SWAP (CNS) sequence, and locally equivalent to an iSWAP.

$$
\begin{split}DCX\ q_0, q_1 =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0
    \end{pmatrix}\end{split}
$$

Create new DCX gate.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### duration

Get the duration.

### label

Return instruction label

**Return type**

`str`

### params

return instruction params.

### unit

Get the time unit of duration.
