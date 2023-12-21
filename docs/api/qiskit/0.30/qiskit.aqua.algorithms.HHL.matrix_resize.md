# qiskit.aqua.algorithms.HHL.matrix\_resize

`static HHL.matrix_resize(matrix, vector)`

Resizes matrix if necessary

**Parameters**

*   **matrix** (`ndarray`) – the input matrix of linear system of equations
*   **vector** (`ndarray`) – the input vector of linear system of equations

**Return type**

`Tuple`\[`ndarray`, `ndarray`, `bool`, `bool`]

**Returns**

new matrix, vector, truncate\_powerdim, truncate\_hermitian

**Raises**

**ValueError** – invalid input
