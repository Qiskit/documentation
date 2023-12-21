---
title: to_matrix
description: API reference for qiskit.quantum_info.SparsePauliOp.to_matrix
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.to_matrix
---

# to\_matrix

<span id="qiskit.quantum_info.SparsePauliOp.to_matrix" />

`SparsePauliOp.to_matrix(sparse=False)`

Convert to a dense or sparse matrix.

**Parameters**

**sparse** (*bool*) – if True return a sparse CSR matrix, otherwise return dense Numpy array (Default: False).

**Returns**

A dense matrix if sparse=False. csr\_matrix: A sparse matrix in CSR format if sparse=True.

**Return type**

array

