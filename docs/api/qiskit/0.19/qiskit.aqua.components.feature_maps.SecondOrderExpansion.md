---
title: SecondOrderExpansion
description: API reference for qiskit.aqua.components.feature_maps.SecondOrderExpansion
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.feature_maps.SecondOrderExpansion
---

# SecondOrderExpansion

<span id="qiskit.aqua.components.feature_maps.SecondOrderExpansion" />

`SecondOrderExpansion(feature_dimension, depth=2, entangler_map=None, entanglement='full', data_map_func=<function self_product>)`

DEPRECATED. Second Order Expansion feature map.

This is a sub-class of [`PauliZExpansion`](qiskit.aqua.components.feature_maps.PauliZExpansion "qiskit.aqua.components.feature_maps.PauliZExpansion") where *z\_order* is fixed at 2.

**Parameters**

*   **feature\_dimension** (`int`) – The number of features
*   **depth** (`int`) – The number of repeated circuits. Defaults to 2, has a minimum value of 1.
*   **entangler\_map** (`Optional`\[`List`\[`List`\[`int`]]]) – Describes the connectivity of qubits, each list in the overall list describes \[source, target]. Defaults to `None` where the map is created as per *entanglement* parameter. Note that the order in the list is the order of applying the two-qubit gate.
*   **entanglement** (`str`) – (‘full’ | ‘linear’), generate the qubit connectivity by a predefined topology. Defaults to full which connects every qubit to each other. Linear connects each qubit to the next.
*   **data\_map\_func** (`Callable`\[\[`ndarray`], `float`]) – A mapping function for data x which can be supplied to override the default mapping from [`self_product()`](qiskit.aqua.components.feature_maps.self_product "qiskit.aqua.components.feature_maps.self_product").

## Attributes

|                                                                                                                                                                                                                                         |                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`SecondOrderExpansion.feature_dimension`](qiskit.aqua.components.feature_maps.SecondOrderExpansion.feature_dimension "qiskit.aqua.components.feature_maps.SecondOrderExpansion.feature_dimension")                                     | returns feature dimension                                          |
| [`SecondOrderExpansion.num_qubits`](qiskit.aqua.components.feature_maps.SecondOrderExpansion.num_qubits "qiskit.aqua.components.feature_maps.SecondOrderExpansion.num_qubits")                                                          | returns number of qubits                                           |
| [`SecondOrderExpansion.support_parameterized_circuit`](qiskit.aqua.components.feature_maps.SecondOrderExpansion.support_parameterized_circuit "qiskit.aqua.components.feature_maps.SecondOrderExpansion.support_parameterized_circuit") | returns whether or not the sub-class support parameterized circuit |

## Methods

|                                                                                                                                                                                                                       |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`SecondOrderExpansion.construct_circuit`](qiskit.aqua.components.feature_maps.SecondOrderExpansion.construct_circuit "qiskit.aqua.components.feature_maps.SecondOrderExpansion.construct_circuit")(x\[, …])          | Construct the second order expansion based on given data. |
| [`SecondOrderExpansion.get_entangler_map`](qiskit.aqua.components.feature_maps.SecondOrderExpansion.get_entangler_map "qiskit.aqua.components.feature_maps.SecondOrderExpansion.get_entangler_map")(…)                | get entangle map                                          |
| [`SecondOrderExpansion.validate_entangler_map`](qiskit.aqua.components.feature_maps.SecondOrderExpansion.validate_entangler_map "qiskit.aqua.components.feature_maps.SecondOrderExpansion.validate_entangler_map")(…) | validate entangler map                                    |

