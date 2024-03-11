---
title: CCZGate
description: API reference for qiskit.circuit.library.CCZGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CCZGate
---

# CCZGate

<span id="qiskit.circuit.library.CCZGate" />

`CCZGate(label=None, ctrl_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/z.py "view source code")

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

CCZ gate.

This is a symmetric gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`ccz()`](qiskit.circuit.QuantumCircuit#ccz "qiskit.circuit.QuantumCircuit.ccz") method.

**Circuit symbol:**

```python
q_0: ─■─
      │
q_1: ─■─
      │
q_2: ─■─
```

**Matrix representation:**

$$
\begin{split}CCZ\ q_0, q_1, q_2 =
    I \otimes I \otimes |0\rangle\langle 0| + CZ \otimes |1\rangle\langle 1| =
    \begin{pmatrix}
        1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
        0 & 0 & 0 & 0 & 0 & 0 & 0 & -1
    \end{pmatrix}\end{split}
$$

In the computational basis, this gate flips the phase of the target qubit if the control qubits are in the $|11\rangle$ state.

Create new CCZ gate.

## Methods Defined Here

<span id="qiskit-circuit-library-cczgate-inverse" />

### inverse

<span id="qiskit.circuit.library.CCZGate.inverse" />

`CCZGate.inverse()`

Return inverted CCZ gate (itself).

## Attributes

<span id="qiskit.circuit.library.CCZGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.CCZGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.CCZGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.CCZGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.CCZGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.CCZGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.CCZGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.CCZGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.CCZGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.CCZGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.CCZGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.CCZGate.unit" />

### unit

Get the time unit of duration.

