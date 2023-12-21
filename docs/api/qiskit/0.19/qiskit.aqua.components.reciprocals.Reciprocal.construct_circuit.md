---
title: construct_circuit
description: API reference for qiskit.aqua.components.reciprocals.Reciprocal.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.reciprocals.Reciprocal.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.reciprocals.Reciprocal.construct_circuit" />

`abstract Reciprocal.construct_circuit(mode, register=None, circuit=None)`

Construct the initial state circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction.
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – circuit for construction.

**Returns**

The reciprocal circuit.

