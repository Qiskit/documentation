# FeatureMap

<span id="undefined" />

`FeatureMap`

Bases: `abc.ABC`

Base class for FeatureMap.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

|                                                                                                                                                                                                                                                 |                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit#qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit "qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit")                     | Construct the variational form, given its parameters. |
| [`get_entangler_map`](qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map#qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map")                     | get entangle map                                      |
| [`validate_entangler_map`](qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map#qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map") | validate entangler map                                |

## Attributes

<span id="undefined" />

### feature\_dimension

returns feature dimension

<span id="undefined" />

### num\_qubits

returns number of qubits

<span id="undefined" />

### support\_parameterized\_circuit

returns whether or not the sub-class support parameterized circuit
