# qiskit.quantum\_info.PauliList.matrix\_iter

`PauliList.matrix_iter(sparse=False)`

Return a matrix representation iterator.

This is a lazy iterator that converts each row into the Pauli matrix representation only as it is used. To convert the entire table to matrices use the [`to_matrix()`](qiskit.quantum_info.PauliList.to_matrix#qiskit.quantum_info.PauliList.to_matrix "qiskit.quantum_info.PauliList.to_matrix") method.

**Parameters**

**sparse** (*bool*) – optionally return sparse CSR matrices if True, otherwise return Numpy array matrices (Default: False)

**Returns**

matrix iterator object for the PauliList.

**Return type**

MatrixIterator
