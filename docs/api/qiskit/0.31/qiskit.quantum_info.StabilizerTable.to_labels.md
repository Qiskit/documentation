# qiskit.quantum\_info.StabilizerTable.to\_labels

`StabilizerTable.to_labels(array=False)`

Convert a StabilizerTable to a list Pauli stabilizer string labels.

For large StabilizerTables converting using the `array=True` kwarg will be more efficient since it allocates memory for the full Numpy array of labels in advance.

| Label  | Phase | Symplectic | Matrix                                           | Pauli |
| ------ | ----- | ---------- | ------------------------------------------------ | ----- |
| `"+I"` | 0     | $[0, 0]$   | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$   | $I$   |
| `"-I"` | 1     | $[0, 0]$   | $\begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$ | $-I$  |
| `"X"`  | 0     | $[1, 0]$   | $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$   | $X$   |
| `"-X"` | 1     | $[1, 0]$   | $\begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}$ | $-X$  |
| `"Y"`  | 0     | $[1, 1]$   | $\begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$  | $iY$  |
| `"-Y"` | 1     | $[1, 1]$   | $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$  | $-iY$ |
| `"Z"`  | 0     | $[0, 1]$   | $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$  | $Z$   |
| `"-Z"` | 1     | $[0, 1]$   | $\begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}$  | $-Z$  |

**Parameters**

**array** (*bool*) – return a Numpy array if True, otherwise return a list (Default: False).

**Returns**

The rows of the StabilizerTable in label form.

**Return type**

list or array
