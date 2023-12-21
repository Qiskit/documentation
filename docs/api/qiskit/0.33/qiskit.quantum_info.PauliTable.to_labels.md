# qiskit.quantum\_info.PauliTable.to\_labels

`PauliTable.to_labels(array=False)`

Convert a PauliTable to a list Pauli string labels.

For large PauliTables converting using the `array=True` kwarg will be more efficient since it allocates memory for the full Numpy array of labels in advance.

| Label | Symplectic | Matrix                                          |
| ----- | ---------- | ----------------------------------------------- |
| `"I"` | $[0, 0]$   | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$  |
| `"X"` | $[1, 0]$   | $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$  |
| `"Y"` | $[1, 1]$   | $\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$ |
| `"Z"` | $[0, 1]$   | $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ |

**Parameters**

**array** (*bool*) – return a Numpy array if True, otherwise return a list (Default: False).

**Returns**

The rows of the PauliTable in label form.

**Return type**

list or array
