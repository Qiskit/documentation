---
title: MCXVChain
description: API reference for qiskit.circuit.library.MCXVChain
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCXVChain
---

# MCXVChain

<span id="qiskit.circuit.library.MCXVChain" />

`MCXVChain(num_ctrl_qubits, dirty_ancillas=False, label=None, ctrl_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: [`qiskit.circuit.library.standard_gates.x.MCXGate`](qiskit.circuit.library.MCXGate "qiskit.circuit.library.standard_gates.x.MCXGate")

Implement the multi-controlled X gate using a V-chain of CX gates.

Create new MCX gate.

## Methods Defined Here

### get\_num\_ancilla\_qubits

<span id="qiskit.circuit.library.MCXVChain.get_num_ancilla_qubits" />

`static MCXVChain.get_num_ancilla_qubits(num_ctrl_qubits, mode='v-chain')`

Get the number of required ancilla qubits.

### inverse

<span id="qiskit.circuit.library.MCXVChain.inverse" />

`MCXVChain.inverse()`

Invert this gate. The MCX is its own inverse.

## Attributes

<span id="qiskit.circuit.library.MCXVChain.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.MCXVChain.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

**Return type**

`int`

<span id="qiskit.circuit.library.MCXVChain.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.MCXVChain.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

<span id="qiskit.circuit.library.MCXVChain.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.MCXVChain.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.MCXVChain.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

<span id="qiskit.circuit.library.MCXVChain.num_ancilla_qubits" />

### num\_ancilla\_qubits

The number of ancilla qubits.

<span id="qiskit.circuit.library.MCXVChain.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.MCXVChain.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

<span id="qiskit.circuit.library.MCXVChain.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.MCXVChain.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.MCXVChain.unit" />

### unit

Get the time unit of duration.

