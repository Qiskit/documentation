---
title: FeatureMap
description: API reference for qiskit.aqua.components.feature_maps.FeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.FeatureMap
---

# FeatureMap

<span id="qiskit.aqua.components.feature_maps.FeatureMap" />

`FeatureMap` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/feature_maps/feature_map.py "view source code")

Base class for FeatureMap.

This method should initialize the module and use an exception if a component of the module is not available.

## Attributes

### feature\_dimension

returns feature dimension

### num\_qubits

returns number of qubits

### support\_parameterized\_circuit

returns whether or not the sub-class support parameterized circuit

## Methods

### construct\_circuit

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

### get\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map" />

`static FeatureMap.get_entangler_map(map_type, num_qubits)`

get entangle map

### validate\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map" />

`static FeatureMap.validate_entangler_map(entangler_map, num_qubits)`

validate entangler map

