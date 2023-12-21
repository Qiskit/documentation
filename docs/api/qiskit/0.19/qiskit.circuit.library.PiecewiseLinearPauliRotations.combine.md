---
title: combine
description: API reference for qiskit.circuit.library.PiecewiseLinearPauliRotations.combine
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.PiecewiseLinearPauliRotations.combine
---

# combine

<span id="qiskit.circuit.library.PiecewiseLinearPauliRotations.combine" />

`PiecewiseLinearPauliRotations.combine(rhs)`

Append rhs to self if self contains compatible registers.

Two circuits are compatible if they contain the same registers or if they contain different registers with unique names. The returned circuit will contain all unique registers between both circuits.

Return self + rhs as a new object.

**Parameters**

**rhs** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit to append to the right hand side.

**Returns**

Returns a new QuantumCircuit object

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the rhs circuit is not compatible

