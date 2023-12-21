---
title: matrix_iter
description: API reference for qiskit.quantum_info.PauliTable.matrix_iter
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.matrix_iter
---

# matrix\_iter

<span id="qiskit.quantum_info.PauliTable.matrix_iter" />

`PauliTable.matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each row into the Pauli matrix representation only as it is used. To convert the entire table to matrices use the [`to_matrix()`](qiskit.quantum_info.PauliTable.to_matrix "qiskit.quantum_info.PauliTable.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliTable.

**Return type**

MatrixIterator

