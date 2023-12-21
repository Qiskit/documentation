# qiskit.aqua.algorithms.HHL.expand\_to\_powerdim

`static HHL.expand_to_powerdim(matrix, vector)`

Expand a matrix to the next-larger 2\*\*n dimensional matrix with ones on the diagonal and zeros on the off-diagonal and expand the vector with zeros accordingly.

**Parameters**

*   **matrix** (`ndarray`) – the input matrix
*   **vector** (`ndarray`) – the input vector

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

**Returns**

the expanded matrix, the expanded vector
