---
title: extend
description: API reference for qiskit.circuit.library.HiddenLinearFunction.extend
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.HiddenLinearFunction.extend
---

# extend

<span id="qiskit.circuit.library.HiddenLinearFunction.extend" />

`HiddenLinearFunction.extend(rhs)`

Append QuantumCircuit to the right hand side if it contains compatible registers.

Two circuits are compatible if they contain the same registers or if they contain different registers with unique names. The returned circuit will contain all unique registers between both circuits.

Modify and return self.

**Parameters**

**rhs** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit to append to the right hand side.

**Returns**

Returns this QuantumCircuit object (which has been modified)

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the rhs circuit is not compatible

