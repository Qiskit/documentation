---
title: to_matrix
description: API reference for qiskit.quantum_info.PauliTable.to_matrix
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.to_matrix
---

# to\_matrix

<span id="qiskit.quantum_info.PauliTable.to_matrix" />

`PauliTable.to_matrix(sparse=False, array=False)`

Convert to a list or array of Pauli matrices.

For large PauliTables converting using the `array=True` kwarg will be more efficient since it allocates memory a full rank-3 Numpy array of matrices in advance.

| Label | Symplectic | Matrix                                          |
| ----- | ---------- | ----------------------------------------------- |
| `"I"` | $[0, 0]$   | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$  |
| `"X"` | $[1, 0]$   | $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$  |
| `"Y"` | $[1, 1]$   | $\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$ |
| `"Z"` | $[0, 1]$   | $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ |

**Parameters**

*   **sparse** (*bool*) – if True return sparse CSR matrices, otherwise return dense Numpy arrays (Default: False).
*   **array** (*bool*) – return as rank-3 numpy array if True, otherwise return a list of Numpy arrays (Default: False).

**Returns**

A list of dense Pauli matrices if array=False and sparse=False. list: A list of sparse Pauli matrices if array=False and sparse=True. array: A dense rank-3 array of Pauli matrices if array=True.

**Return type**

list

