---
title: matrix_iter
description: API reference for qiskit.quantum_info.SparsePauliOp.matrix_iter
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.matrix_iter
---

# matrix\_iter

<span id="qiskit.quantum_info.SparsePauliOp.matrix_iter" />

`SparsePauliOp.matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each term in the SparsePauliOp into a matrix as it is used. To convert to a single matrix use the [`to_matrix()`](qiskit.quantum_info.SparsePauliOp.to_matrix "qiskit.quantum_info.SparsePauliOp.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliTable.

**Return type**

MatrixIterator

