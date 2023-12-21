# qiskit.quantum\_info.PauliTable.matrix\_iter

`PauliTable.matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each row into the Pauli matrix representation only as it is used. To convert the entire table to matrices use the [`to_matrix()`](qiskit.quantum_info.PauliTable.to_matrix#qiskit.quantum_info.PauliTable.to_matrix "qiskit.quantum_info.PauliTable.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliTable.

**Return type**

MatrixIterator
