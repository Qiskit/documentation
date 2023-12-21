---
title: RawFeatureVector
description: API reference for qiskit.aqua.components.feature_maps.RawFeatureVector
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.RawFeatureVector
---

# RawFeatureVector

<span id="qiskit.aqua.components.feature_maps.RawFeatureVector" />

`RawFeatureVector(feature_dimension=2)`

Raw Feature Vector feature map.

The Raw Feature Vector can be directly used as a feature map, where the raw feature vectors will be automatically padded with ending 0s as necessary, to make sure vector length is a power of 2, and normalized such that it can be treated and used as an initial quantum state vector.

**Parameters**

**feature\_dimension** (`int`) – The feature dimension, has a minimum value of 1.

## Attributes

|                                                                                                                                                                                                                             |                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`RawFeatureVector.feature_dimension`](qiskit.aqua.components.feature_maps.RawFeatureVector.feature_dimension "qiskit.aqua.components.feature_maps.RawFeatureVector.feature_dimension")                                     | returns feature dimension                                          |
| [`RawFeatureVector.num_qubits`](qiskit.aqua.components.feature_maps.RawFeatureVector.num_qubits "qiskit.aqua.components.feature_maps.RawFeatureVector.num_qubits")                                                          | returns number of qubits                                           |
| [`RawFeatureVector.support_parameterized_circuit`](qiskit.aqua.components.feature_maps.RawFeatureVector.support_parameterized_circuit "qiskit.aqua.components.feature_maps.RawFeatureVector.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |

## Methods

|                                                                                                                                                                                                           |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`RawFeatureVector.construct_circuit`](qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit "qiskit.aqua.components.feature_maps.RawFeatureVector.construct_circuit")(x\[, qr, …])      | Construct the second order expansion based on given data. |
| [`RawFeatureVector.get_entangler_map`](qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map "qiskit.aqua.components.feature_maps.RawFeatureVector.get_entangler_map")(map\_type, …)     | get entangle map                                          |
| [`RawFeatureVector.validate_entangler_map`](qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map "qiskit.aqua.components.feature_maps.RawFeatureVector.validate_entangler_map")(…) | validate entangler map                                    |

