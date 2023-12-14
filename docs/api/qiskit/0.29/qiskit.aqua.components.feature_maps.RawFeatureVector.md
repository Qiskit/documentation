# RawFeatureVector



`RawFeatureVector(feature_dimension=2)`

Bases: `qiskit.aqua.components.feature_maps.feature_map.FeatureMap`

Raw Feature Vector feature map.

The Raw Feature Vector can be directly used as a feature map, where the raw feature vectors will be automatically padded with ending 0s as necessary, to make sure vector length is a power of 2, and normalized such that it can be treated and used as an initial quantum state vector.

**Parameters**

**feature\_dimension** (`int`) – The feature dimension, has a minimum value of 1.

## Methods

|                                                                                                                                                                                                                                                                   |                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit#qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit "qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit")                     | Construct the second order expansion based on given data. |
| [`get_entangler_map`](qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map#qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map "qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map")                     | get entangle map                                          |
| [`validate_entangler_map`](qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map#qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map "qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map") | validate entangler map                                    |

## Attributes



### feature\_dimension

returns feature dimension



### num\_qubits

returns number of qubits



### support\_parameterized\_circuit

returns whether or not the sub-class support parameterized circuit
