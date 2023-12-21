---
title: measure_active
description: API reference for qiskit.circuit.library.TwoLocal.measure_active
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.TwoLocal.measure_active
---

# measure\_active

<span id="qiskit.circuit.library.TwoLocal.measure_active" />

`TwoLocal.measure_active(inplace=True)`

Adds measurement to all non-idle qubits. Creates a new ClassicalRegister with a size equal to the number of non-idle qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

