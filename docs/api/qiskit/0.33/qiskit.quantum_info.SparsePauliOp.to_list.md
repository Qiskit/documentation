# qiskit.quantum\_info.SparsePauliOp.to\_list

`SparsePauliOp.to_list(array=False)`

Convert to a list Pauli string labels and coefficients.

For operators with a lot of terms converting using the `array=True` kwarg will be more efficient since it allocates memory for the full Numpy array of labels in advance.

**Parameters**

**array** (*bool*) – return a Numpy array if True, otherwise return a list (Default: False).

**Returns**

List of pairs (label, coeff) for rows of the PauliList.

**Return type**

list or array
