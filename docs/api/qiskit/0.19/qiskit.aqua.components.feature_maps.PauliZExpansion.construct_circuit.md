---
title: construct_circuit
description: API reference for qiskit.aqua.components.feature_maps.PauliZExpansion.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.feature_maps.PauliZExpansion.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.feature_maps.PauliZExpansion.construct_circuit" />

`PauliZExpansion.construct_circuit(x, qr=None, inverse=False)`

Construct the second order expansion based on given data.

**Parameters**

*   **x** (*Union(numpy.ndarray, list\[*[*Parameter*](qiskit.circuit.Parameter "qiskit.circuit.Parameter")*],* [*ParameterVector*](qiskit.circuit.ParameterVector "qiskit.circuit.ParameterVector")*)*) – 1-D to-be-transformed data.
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*, optional*) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool, optional*) – whether or not inverse the circuit

**Returns**

a quantum circuit transform data x.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **TypeError** – invalid input
*   **ValueError** – invalid input

