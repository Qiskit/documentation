---
title: FirstOrderExpansion
description: API reference for qiskit.aqua.components.feature_maps.FirstOrderExpansion
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.FirstOrderExpansion
---

# FirstOrderExpansion

<span id="qiskit.aqua.components.feature_maps.FirstOrderExpansion" />

`FirstOrderExpansion(feature_dimension, depth=2, data_map_func=<function self_product>)`

DEPRECATED. First Order Expansion feature map.

This is a sub-class of [`PauliZExpansion`](qiskit.aqua.components.feature_maps.PauliZExpansion "qiskit.aqua.components.feature_maps.PauliZExpansion") where *z\_order* is fixed at 1. As a result the first order expansion will be a feature map without entangling gates.

**Parameters**

*   **feature\_dimension** (`int`) – The number of features
*   **depth** (`int`) – The number of repeated circuits. Defaults to 2, has a minimum value of 1.
*   **data\_map\_func** (`Callable`\[\[`ndarray`], `float`]) – A mapping function for data x which can be supplied to override the default mapping from [`self_product()`](qiskit.aqua.components.feature_maps.self_product "qiskit.aqua.components.feature_maps.self_product").

## Attributes

|                                                                                                                                                                                                                                      |                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [`FirstOrderExpansion.feature_dimension`](qiskit.aqua.components.feature_maps.FirstOrderExpansion.feature_dimension "qiskit.aqua.components.feature_maps.FirstOrderExpansion.feature_dimension")                                     | returns feature dimension                                          |
| [`FirstOrderExpansion.num_qubits`](qiskit.aqua.components.feature_maps.FirstOrderExpansion.num_qubits "qiskit.aqua.components.feature_maps.FirstOrderExpansion.num_qubits")                                                          | returns number of qubits                                           |
| [`FirstOrderExpansion.support_parameterized_circuit`](qiskit.aqua.components.feature_maps.FirstOrderExpansion.support_parameterized_circuit "qiskit.aqua.components.feature_maps.FirstOrderExpansion.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |

## Methods

|                                                                                                                                                                                                                    |                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| [`FirstOrderExpansion.construct_circuit`](qiskit.aqua.components.feature_maps.FirstOrderExpansion.construct_circuit "qiskit.aqua.components.feature_maps.FirstOrderExpansion.construct_circuit")(x\[, …])          | Construct the second order expansion based on given data. |
| [`FirstOrderExpansion.get_entangler_map`](qiskit.aqua.components.feature_maps.FirstOrderExpansion.get_entangler_map "qiskit.aqua.components.feature_maps.FirstOrderExpansion.get_entangler_map")(…)                | get entangle map                                          |
| [`FirstOrderExpansion.validate_entangler_map`](qiskit.aqua.components.feature_maps.FirstOrderExpansion.validate_entangler_map "qiskit.aqua.components.feature_maps.FirstOrderExpansion.validate_entangler_map")(…) | validate entangler map                                    |

