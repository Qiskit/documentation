---
title: measure_all
description: API reference for qiskit.circuit.library.PolynomialPauliRotations.measure_all
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.PolynomialPauliRotations.measure_all
---

# measure\_all

<span id="qiskit.circuit.library.PolynomialPauliRotations.measure_all" />

`PolynomialPauliRotations.measure_all(inplace=True)`

Adds measurement to all qubits. Creates a new ClassicalRegister with a size equal to the number of qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

