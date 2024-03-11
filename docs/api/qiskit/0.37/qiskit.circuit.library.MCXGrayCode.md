---
title: MCXGrayCode
description: API reference for qiskit.circuit.library.MCXGrayCode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCXGrayCode
---

# MCXGrayCode

<span id="qiskit.circuit.library.MCXGrayCode" />

`MCXGrayCode(num_ctrl_qubits, label=None, ctrl_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: [`qiskit.circuit.library.standard_gates.x.MCXGate`](qiskit.circuit.library.MCXGate "qiskit.circuit.library.standard_gates.x.MCXGate")

Implement the multi-controlled X gate using the Gray code.

This delegates the implementation to the MCU1 gate, since $X = H \cdot U1(\pi) \cdot H$.

Create new MCX gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.MCXGrayCode.inverse" />

`MCXGrayCode.inverse()`

Invert this gate. The MCX is its own inverse.

## Attributes

<span id="qiskit.circuit.library.MCXGrayCode.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.MCXGrayCode.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="qiskit.circuit.library.MCXGrayCode.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.MCXGrayCode.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="qiskit.circuit.library.MCXGrayCode.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.MCXGrayCode.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.MCXGrayCode.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="qiskit.circuit.library.MCXGrayCode.num_ancilla_qubits" />

### num\_ancilla\_qubits

The number of ancilla qubits.

<span id="qiskit.circuit.library.MCXGrayCode.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.MCXGrayCode.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.MCXGrayCode.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.MCXGrayCode.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.MCXGrayCode.unit" />

### unit

Get the time unit of duration.

