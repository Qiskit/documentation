---
title: FeatureMap
description: API reference for qiskit.aqua.components.feature_maps.FeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.FeatureMap
---

# qiskit.aqua.components.feature\_maps.FeatureMap

<span id="qiskit.aqua.components.feature_maps.FeatureMap" />

`FeatureMap`

Base class for FeatureMap.

This method should initialize the module and use an exception if a component of the module is not available.

### \_\_init\_\_

<span id="qiskit.aqua.components.feature_maps.FeatureMap.__init__" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### construct\_circuit

<span id="qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit" />

`abstract construct_circuit(x, qr=None, inverse=False)`

Construct the variational form, given its parameters.

**Parameters**

*   **x** (*numpy.ndarray\[float]*) – 1-D array, data
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the QuantumRegister object for the circuit, if None, generate new registers with name q.
*   **inverse** (*bool*) – whether or not inverse the circuit

**Returns**

a quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### feature\_dimension

<span id="qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension" />

`property feature_dimension`

returns feature dimension

### get\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map" />

`static get_entangler_map(map_type, num_qubits)`

get entangle map

### num\_qubits

<span id="qiskit.aqua.components.feature_maps.FeatureMap.num_qubits" />

`property num_qubits`

returns number of qubits

### support\_parameterized\_circuit

<span id="qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit" />

`property support_parameterized_circuit`

returns whether or not the sub-class support parameterized circuit

### validate\_entangler\_map

<span id="qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map" />

`static validate_entangler_map(entangler_map, num_qubits)`

validate entangler map

