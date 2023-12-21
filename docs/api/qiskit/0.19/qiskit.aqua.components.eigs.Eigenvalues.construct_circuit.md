---
title: construct_circuit
description: API reference for qiskit.aqua.components.eigs.Eigenvalues.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.eigs.Eigenvalues.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.eigs.Eigenvalues.construct_circuit" />

`abstract Eigenvalues.construct_circuit(mode, register=None)`

Construct the eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction where eigenvalues will be stored.

**Returns**

object for the eigenvalue estimation circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**NotImplementedError** – not implemented

