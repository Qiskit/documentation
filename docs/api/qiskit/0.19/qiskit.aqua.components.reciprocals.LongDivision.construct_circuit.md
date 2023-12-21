---
title: construct_circuit
description: API reference for qiskit.aqua.components.reciprocals.LongDivision.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.reciprocals.LongDivision.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.reciprocals.LongDivision.construct_circuit" />

`LongDivision.construct_circuit(mode, register=None, circuit=None)`

Construct the Long Division Rotation circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – input register, typically output register of Eigenvalues
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Quantum Circuit or None

**Returns**

containing the Long Division Rotation circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**NotImplementedError** – mode not supported

