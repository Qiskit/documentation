# qiskit.aqua.algorithms.HHL.expand\_to\_hermitian

`static HHL.expand_to_hermitian(matrix, vector)`

Expand a non-hermitian matrix A to a hermitian matrix by \[\[0, A.H], \[A, 0]] and expand vector b to \[b.conj, b].

**Parameters**

*   **matrix** (`ndarray`) – the input matrix
*   **vector** (`ndarray`) – the input vector

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

**Returns**

the expanded matrix, the expanded vector
