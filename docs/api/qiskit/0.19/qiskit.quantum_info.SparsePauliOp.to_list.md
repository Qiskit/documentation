---
title: to_list
description: API reference for qiskit.quantum_info.SparsePauliOp.to_list
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.to_list
---

# to\_list

<span id="qiskit.quantum_info.SparsePauliOp.to_list" />

`SparsePauliOp.to_list(array=False)`

Convert to a list Pauli string labels and coefficients.

For operators with a lot of terms converting using the `array=True` kwarg will be more efficient since it allocates memory for the full Numpy array of labels in advance.

**Parameters**

**array** (*bool*) – return a Numpy array if True, otherwise return a list (Default: False).

**Returns**

List of pairs (label, coeff) for rows of the PauliTable.

**Return type**

list or array

