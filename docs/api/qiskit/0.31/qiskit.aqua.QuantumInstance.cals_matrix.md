# qiskit.aqua.QuantumInstance.cals\_matrix

`QuantumInstance.cals_matrix(qubit_index=None)`

Get the stored calibration matrices and its timestamp.

**Parameters**

**qubit\_index** (`Optional`\[`List`\[`int`]]) – the qubit index of corresponding calibration matrix. If None, return all stored calibration matrices.

**Return type**

`Union`\[`Tuple`\[`ndarray`, `float`], `Dict`\[`str`, `Tuple`\[`ndarray`, `float`]], `None`]

**Returns**

The calibration matrix and the creation timestamp if qubit\_index is not None otherwise, return all matrices and their timestamp in a dictionary.
