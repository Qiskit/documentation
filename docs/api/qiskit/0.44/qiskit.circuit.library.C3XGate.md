---
title: C3XGate
description: API reference for qiskit.circuit.library.C3XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.C3XGate
---

# C3XGate

<span id="qiskit.circuit.library.C3XGate" />

`qiskit.circuit.library.C3XGate(label=None, ctrl_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.controlledgate.ControlledGate")

The X gate controlled on 3 qubits.

This implementation uses $\sqrt{T}$ and 14 CNOT gates.

Create a new 3-qubit controlled X gate.

## Attributes

<span id="qiskit.circuit.library.C3XGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.C3XGate.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.C3XGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.C3XGate.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.C3XGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.C3XGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.C3XGate.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.C3XGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.C3XGate.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

<span id="qiskit.circuit.library.C3XGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.C3XGate.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.C3XGate.unit" />

### unit

Get the time unit of duration.

## Methods

### control

<span id="qiskit.circuit.library.C3XGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Controlled version of this gate.

**Parameters**

*   **num\_ctrl\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – number of control qubits.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.C3XGate.inverse" />

`inverse()`

Invert this gate. The C4X is its own inverse.

