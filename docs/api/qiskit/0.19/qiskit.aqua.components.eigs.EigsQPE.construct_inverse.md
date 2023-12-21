---
title: construct_inverse
description: API reference for qiskit.aqua.components.eigs.EigsQPE.construct_inverse
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.eigs.EigsQPE.construct_inverse
---

# construct\_inverse

<span id="qiskit.aqua.components.eigs.EigsQPE.construct_inverse" />

`EigsQPE.construct_inverse(mode, circuit)`

Construct the inverse eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the quantum circuit to invert

**Returns**

**object for of the inverted eigenvalue estimation**

circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **NotImplementedError** – not implemented for matrix mode
*   **ValueError** – Circuit was not constructed beforehand

