# qiskit.opflow\.primitive\_ops.PauliSumOp.matrix\_iter

`PauliSumOp.matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each term in the PauliSumOp into a matrix as it is used. To convert to a single matrix use the [`to_matrix()`](qiskit.opflow.primitive_ops.PauliSumOp.to_matrix#qiskit.opflow.primitive_ops.PauliSumOp.to_matrix "qiskit.opflow.primitive_ops.PauliSumOp.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliSumOp.

**Return type**

MatrixIterator
