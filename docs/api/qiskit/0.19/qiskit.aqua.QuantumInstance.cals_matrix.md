---
title: cals_matrix
description: API reference for qiskit.aqua.QuantumInstance.cals_matrix
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.QuantumInstance.cals_matrix
---

# cals\_matrix

<span id="qiskit.aqua.QuantumInstance.cals_matrix" />

`QuantumInstance.cals_matrix(qubit_index=None)`

Get the stored calibration matrices and its timestamp.

**Parameters**

*   **qubit\_index** (*list\[int]*) – the qubit index of corresponding calibration matrix.
*   **None** (*If*) –
*   **matrices.** (*return all stored calibration*) –

**Returns**

**the calibration matrix and the creation timestamp if qubit\_index**

is not None otherwise, return all matrices and their timestamp in a dictionary.

**Return type**

tuple(np.ndarray, int)

