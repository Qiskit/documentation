---
title: TensoredFilter
description: API reference for qiskit.ignis.mitigation.TensoredFilter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.TensoredFilter
---

# TensoredFilter

<span id="qiskit.ignis.mitigation.TensoredFilter" />

`TensoredFilter(cal_matrices, substate_labels_list)`

Tensored measurement error mitigation filter.

Produced from a tensored measurement calibration fitter and can be applied to data.

Initialize a tensored measurement error mitigation filter using the cal\_matrices from a tensored measurement calibration fitter.

**Parameters**

*   **cal\_matrices** (`matrix`) – the calibration matrices for applying the correction.
*   **substate\_labels\_list** (`list`) – for each calibration matrix a list of the states (as strings, states in the subspace)

## Attributes

|                                                                                                                                                                    |                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| [`TensoredFilter.cal_matrices`](qiskit.ignis.mitigation.TensoredFilter.cal_matrices "qiskit.ignis.mitigation.TensoredFilter.cal_matrices")                         | Return cal\_matrices.           |
| [`TensoredFilter.nqubits`](qiskit.ignis.mitigation.TensoredFilter.nqubits "qiskit.ignis.mitigation.TensoredFilter.nqubits")                                        | Return the number of qubits.    |
| [`TensoredFilter.qubit_list_sizes`](qiskit.ignis.mitigation.TensoredFilter.qubit_list_sizes "qiskit.ignis.mitigation.TensoredFilter.qubit_list_sizes")             | Return \_qubit\_list\_sizes.    |
| [`TensoredFilter.substate_labels_list`](qiskit.ignis.mitigation.TensoredFilter.substate_labels_list "qiskit.ignis.mitigation.TensoredFilter.substate_labels_list") | Return \_substate\_labels\_list |

## Methods

|                                                                                                                                             |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`TensoredFilter.apply`](qiskit.ignis.mitigation.TensoredFilter.apply "qiskit.ignis.mitigation.TensoredFilter.apply")(raw\_data\[, method]) | Apply the calibration matrices to results. |

