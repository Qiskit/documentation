# DCXGate[¶](#dcxgate "Permalink to this headline")

<span id="undefined" />

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
