---
title: FeatureMap
description: API reference for qiskit.aqua.components.feature_maps.FeatureMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.FeatureMap
---

# FeatureMap

<span id="qiskit.aqua.components.feature_maps.FeatureMap" />

`FeatureMap`

Base class for FeatureMap.

This method should initialize the module and use an exception if a component of the module is not available.

## Attributes

|                                                                                                                                                                                                           |                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`FeatureMap.feature_dimension`](qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension "qiskit.aqua.components.feature_maps.FeatureMap.feature_dimension")                                     | returns feature dimension                                          |
| [`FeatureMap.num_qubits`](qiskit.aqua.components.feature_maps.FeatureMap.num_qubits "qiskit.aqua.components.feature_maps.FeatureMap.num_qubits")                                                          | returns number of qubits                                           |
| [`FeatureMap.support_parameterized_circuit`](qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit "qiskit.aqua.components.feature_maps.FeatureMap.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |

## Methods

|                                                                                                                                                                                          |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`FeatureMap.construct_circuit`](qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit "qiskit.aqua.components.feature_maps.FeatureMap.construct_circuit")(x\[, qr, inverse]) | Construct the variational form, given its parameters. |
| [`FeatureMap.get_entangler_map`](qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.get_entangler_map")(map\_type, …)      | get entangle map                                      |
| [`FeatureMap.validate_entangler_map`](qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map "qiskit.aqua.components.feature_maps.FeatureMap.validate_entangler_map")(…)  | validate entangler map                                |

