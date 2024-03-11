---
title: XGate
description: API reference for qiskit.circuit.library.XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.XGate
---

# XGate

<span id="qiskit.circuit.library.XGate" />

`XGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

The single-qubit Pauli-X gate ($\sigma_x$).

**Matrix Representation:**

$$
\begin{split}X = \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}\end{split}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ X ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the X axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(\pi)$ and $X$.

  $$
  \begin{split}RX(\pi) = \begin{pmatrix}
              0 & -i \\
              -i & 0
            \end{pmatrix}
          = -i X\end{split}
  $$
</Admonition>

The gate is equivalent to a classical bit flip.

$$
\begin{split}|0\rangle \rightarrow |1\rangle \\
|1\rangle \rightarrow |0\rangle\end{split}
$$

Create new X gate.

## Methods Defined Here

### control

<span id="qiskit.circuit.library.XGate.control" />

`XGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-X gate.

One control returns a CX gate. Two controls returns a CCX gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.XGate.inverse" />

`XGate.inverse()`

Return inverted X gate (itself).

## Attributes

<span id="qiskit.circuit.library.XGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.XGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.XGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.XGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.XGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.XGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.XGate.unit" />

### unit

Get the time unit of duration.

