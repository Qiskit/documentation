---
title: construct_circuit
description: API reference for qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit" />

`RawFeatureVector.construct_circuit(x, qr=None, inverse=False)`

Construct the second order expansion based on given data.

**Parameters**

*   **x** (*numpy.ndarray*) – 1-D to-be-encoded data.
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool*) – inverse

**Returns**

a quantum circuit transform data x.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **TypeError** – invalid input
*   **ValueError** – invalid input

