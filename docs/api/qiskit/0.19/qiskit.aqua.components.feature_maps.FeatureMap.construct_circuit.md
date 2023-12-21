---
title: construct_circuit
description: API reference for qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit
---

# construct\_circuit

<span id="qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit" />

`abstract FeatureMap.construct_circuit(x, qr=None, inverse=False)`

Construct the variational form, given its parameters.

**Parameters**

*   **x** (*numpy.ndarray\[float]*) – 1-D array, data
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool*) – whether or not inverse the circuit

**Returns**

a quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

