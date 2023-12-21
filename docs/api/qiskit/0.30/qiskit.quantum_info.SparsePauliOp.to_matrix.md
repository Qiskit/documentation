# qiskit.quantum\_info.SparsePauliOp.to\_matrix

`SparsePauliOp.to_matrix(sparse=False)`

Convert to a dense or sparse matrix.

**Parameters**

**sparse** (*bool*) – if True return a sparse CSR matrix, otherwise return dense Numpy array (Default: False).

**Returns**

A dense matrix if sparse=False. csr\_matrix: A sparse matrix in CSR format if sparse=True.

**Return type**

array
