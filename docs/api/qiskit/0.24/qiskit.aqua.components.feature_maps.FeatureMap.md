---
title: FeatureMap
description: API reference for qiskit.aqua.components.feature_maps.FeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.FeatureMap
---

<span id="qiskit-aqua-components-feature-maps-featuremap" />

# qiskit.aqua.components.feature\_maps.FeatureMap

<span id="qiskit.aqua.components.feature_maps.FeatureMap" />

`FeatureMap` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/feature_maps/feature_map.py "view source code")

Base class for FeatureMap.

This method should initialize the module and use an exception if a component of the module is not available.

### \_\_init\_\_

<span id="qiskit.aqua.components.feature_maps.FeatureMap.__init__" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                         |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.feature_maps.FeatureMap.__init__ "qiskit.aqua.components.feature_maps.FeatureMap.__init__")()                                                                      | Initialize self.                                      |
| [`construct_circuit`](#qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit "qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit")(x\[, qr, inverse])                          | Construct the variational form, given its parameters. |
| [`get_entangler_map`](#qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map")(map\_type, num\_qubits)                     | get entangle map                                      |
| [`validate_entangler_map`](#qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map")(entangler\_map, num\_qubits) | validate entangler map                                |

## Attributes

|                                                                                                                                                                                                 |                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`feature_dimension`](#qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension "qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension")                                     | returns feature dimension                                          |
| [`num_qubits`](#qiskit.aqua.components.feature_maps.FeatureMap.num_qubits "qiskit.aqua.components.feature_maps.FeatureMap.num_qubits")                                                          | returns number of qubits                                           |
| [`support_parameterized_circuit`](#qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit "qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |

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

