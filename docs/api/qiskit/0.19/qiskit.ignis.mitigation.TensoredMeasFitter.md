---
title: TensoredMeasFitter
description: API reference for qiskit.ignis.mitigation.TensoredMeasFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.TensoredMeasFitter
---

# TensoredMeasFitter

<span id="qiskit.ignis.mitigation.TensoredMeasFitter" />

`TensoredMeasFitter(results, mit_pattern, substate_labels_list=None, circlabel='')`

Measurement correction fitter for a tensored calibration.

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits.

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – the results of running the measurement calibration circuits. If this is None, the user will set calibration matrices later.
*   **mit\_pattern** (`List`\[`List`\[`int`]]) – qubits to perform the measurement correction on, divided to groups according to tensors
*   **substate\_labels\_list** (`Optional`\[`List`\[`List`\[`str`]]]) – for each calibration matrix, the labels of its rows and columns. If None, the labels are ordered lexicographically
*   **circlabel** (`str`) – if the qubits were labeled

**Raises**

**ValueError** – if the mit\_pattern doesn’t match the substate\_labels\_list

## Attributes

|                                                                                                                                                                                |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [`TensoredMeasFitter.cal_matrices`](qiskit.ignis.mitigation.TensoredMeasFitter.cal_matrices "qiskit.ignis.mitigation.TensoredMeasFitter.cal_matrices")                         | Return cal\_matrices.                               |
| [`TensoredMeasFitter.filter`](qiskit.ignis.mitigation.TensoredMeasFitter.filter "qiskit.ignis.mitigation.TensoredMeasFitter.filter")                                           | Return a measurement filter using the cal matrices. |
| [`TensoredMeasFitter.nqubits`](qiskit.ignis.mitigation.TensoredMeasFitter.nqubits "qiskit.ignis.mitigation.TensoredMeasFitter.nqubits")                                        | Return \_qubit\_list\_sizes.                        |
| [`TensoredMeasFitter.substate_labels_list`](qiskit.ignis.mitigation.TensoredMeasFitter.substate_labels_list "qiskit.ignis.mitigation.TensoredMeasFitter.substate_labels_list") | Return \_substate\_labels\_list.                    |

## Methods

|                                                                                                                                                                          |                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| [`TensoredMeasFitter.add_data`](qiskit.ignis.mitigation.TensoredMeasFitter.add_data "qiskit.ignis.mitigation.TensoredMeasFitter.add_data")(new\_results\[, …])           | Add measurement calibration data                                                                                             |
| [`TensoredMeasFitter.plot_calibration`](qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration "qiskit.ignis.mitigation.TensoredMeasFitter.plot_calibration")(\[…]) | Plot one of the calibration matrices (2D color grid plot).                                                                   |
| [`TensoredMeasFitter.readout_fidelity`](qiskit.ignis.mitigation.TensoredMeasFitter.readout_fidelity "qiskit.ignis.mitigation.TensoredMeasFitter.readout_fidelity")(\[…]) | Based on the results, output the readout fidelity, which is the average of the diagonal entries in the calibration matrices. |

