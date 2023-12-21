---
title: CompleteMeasFitter
description: API reference for qiskit.ignis.mitigation.CompleteMeasFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.mitigation.CompleteMeasFitter
---

# CompleteMeasFitter

<span id="qiskit.ignis.mitigation.CompleteMeasFitter" />

`CompleteMeasFitter(results, state_labels, qubit_list=None, circlabel='')`

Measurement correction fitter for a full calibration

Initialize a measurement calibration matrix from the results of running the circuits returned by measurement\_calibration\_circuits

A wrapper for the tensored fitter

**Parameters**

*   **results** (`Union`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result"), `List`\[[`Result`](qiskit.result.Result "qiskit.result.result.Result")]]) – the results of running the measurement calibration circuits. If this is None the user will set a calibration matrix later.
*   **state\_labels** (`List`\[`str`]) – list of calibration state labels returned from measurement\_calibration\_circuits. The output matrix will obey this ordering.
*   **qubit\_list** (`Optional`\[`List`\[`int`]]) – List of the qubits (for reference and if the subset is needed). If None, the qubit\_list will be created according to the length of state\_labels\[0].
*   **circlabel** (`str`) – if the qubits were labeled.

## Attributes

|                                                                                                                                                        |                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| [`CompleteMeasFitter.cal_matrix`](qiskit.ignis.mitigation.CompleteMeasFitter.cal_matrix "qiskit.ignis.mitigation.CompleteMeasFitter.cal_matrix")       | Return cal\_matrix.                               |
| [`CompleteMeasFitter.filter`](qiskit.ignis.mitigation.CompleteMeasFitter.filter "qiskit.ignis.mitigation.CompleteMeasFitter.filter")                   | Return a measurement filter using the cal matrix. |
| [`CompleteMeasFitter.qubit_list`](qiskit.ignis.mitigation.CompleteMeasFitter.qubit_list "qiskit.ignis.mitigation.CompleteMeasFitter.qubit_list")       | Return list of qubits.                            |
| [`CompleteMeasFitter.state_labels`](qiskit.ignis.mitigation.CompleteMeasFitter.state_labels "qiskit.ignis.mitigation.CompleteMeasFitter.state_labels") | Return state\_labels.                             |

## Methods

|                                                                                                                                                                                    |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`CompleteMeasFitter.add_data`](qiskit.ignis.mitigation.CompleteMeasFitter.add_data "qiskit.ignis.mitigation.CompleteMeasFitter.add_data")(new\_results\[, …])                     | Add measurement calibration data                                                                          |
| [`CompleteMeasFitter.plot_calibration`](qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration "qiskit.ignis.mitigation.CompleteMeasFitter.plot_calibration")(\[ax, …])       | Plot the calibration matrix (2D color grid plot)                                                          |
| [`CompleteMeasFitter.readout_fidelity`](qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity "qiskit.ignis.mitigation.CompleteMeasFitter.readout_fidelity")(\[label\_list]) | Based on the results, output the readout fidelity which is the normalized trace of the calibration matrix |
| [`CompleteMeasFitter.subset_fitter`](qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter "qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter")(\[qubit\_sublist])       | Return a fitter object that is a subset of the qubits in the original list.                               |

