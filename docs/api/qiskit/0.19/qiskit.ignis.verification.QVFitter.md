---
title: QVFitter
description: API reference for qiskit.ignis.verification.QVFitter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.QVFitter
---

# QVFitter

<span id="qiskit.ignis.verification.QVFitter" />

`QVFitter(backend_result=None, statevector_result=None, qubit_lists=None)`

Class for fitters for quantum volume.

**Parameters**

*   **backend\_result** (*list*) – list of results (qiskit.Result).
*   **statevector\_result** (*list*) – the ideal statevectors of each circuit
*   **qubit\_lists** (*list*) – list of qubit lists (what was passed to the circuit generation)

## Attributes

|                                                                                                                                                               |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`QVFitter.depths`](qiskit.ignis.verification.QVFitter.depths "qiskit.ignis.verification.QVFitter.depths")                                                    | Return depth list.                                    |
| [`QVFitter.heavy_output_counts`](qiskit.ignis.verification.QVFitter.heavy_output_counts "qiskit.ignis.verification.QVFitter.heavy_output_counts")             | Return the number of heavy output counts as measured. |
| [`QVFitter.heavy_output_prob_ideal`](qiskit.ignis.verification.QVFitter.heavy_output_prob_ideal "qiskit.ignis.verification.QVFitter.heavy_output_prob_ideal") | Return the heavy output probability ideally.          |
| [`QVFitter.heavy_outputs`](qiskit.ignis.verification.QVFitter.heavy_outputs "qiskit.ignis.verification.QVFitter.heavy_outputs")                               | Return the ideal heavy outputs dictionary.            |
| [`QVFitter.qubit_lists`](qiskit.ignis.verification.QVFitter.qubit_lists "qiskit.ignis.verification.QVFitter.qubit_lists")                                     | Return depth list.                                    |
| [`QVFitter.results`](qiskit.ignis.verification.QVFitter.results "qiskit.ignis.verification.QVFitter.results")                                                 | Return all the results.                               |
| [`QVFitter.ydata`](qiskit.ignis.verification.QVFitter.ydata "qiskit.ignis.verification.QVFitter.ydata")                                                       | Return the average and std of the output probability. |

## Methods

|                                                                                                                                                                    |                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| [`QVFitter.add_data`](qiskit.ignis.verification.QVFitter.add_data "qiskit.ignis.verification.QVFitter.add_data")(new\_backend\_result\[, …])                       | Add a new result.                                                                                    |
| [`QVFitter.add_statevectors`](qiskit.ignis.verification.QVFitter.add_statevectors "qiskit.ignis.verification.QVFitter.add_statevectors")(new\_statevector\_result) | Add the ideal results and convert to the heavy outputs.                                              |
| [`QVFitter.calc_data`](qiskit.ignis.verification.QVFitter.calc_data "qiskit.ignis.verification.QVFitter.calc_data")()                                              | Make a count dictionary for each unique circuit from all the results.                                |
| [`QVFitter.calc_statistics`](qiskit.ignis.verification.QVFitter.calc_statistics "qiskit.ignis.verification.QVFitter.calc_statistics")()                            | Convert the heavy outputs in the different trials into mean and error for plotting.                  |
| [`QVFitter.plot_qv_data`](qiskit.ignis.verification.QVFitter.plot_qv_data "qiskit.ignis.verification.QVFitter.plot_qv_data")(\[ax, show\_plt])                     | Plot the qv data as a function of depth                                                              |
| [`QVFitter.quantum_volume`](qiskit.ignis.verification.QVFitter.quantum_volume "qiskit.ignis.verification.QVFitter.quantum_volume")()                               | Return the volume for each depth.                                                                    |
| [`QVFitter.qv_success`](qiskit.ignis.verification.QVFitter.qv_success "qiskit.ignis.verification.QVFitter.qv_success")()                                           | Return whether each depth was successful (>2/3 with confidence greater than 97.5) and the confidence |

