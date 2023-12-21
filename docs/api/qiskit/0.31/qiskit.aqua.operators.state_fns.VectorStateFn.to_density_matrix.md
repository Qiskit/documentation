# qiskit.aqua.operators.state\_fns.VectorStateFn.to\_density\_matrix

`VectorStateFn.to_density_matrix(massive=False)`

Return matrix representing product of StateFn evaluated on pairs of basis states. Overridden by child classes.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

`ndarray`

**Returns**

The NumPy array representing the density matrix of the State function.

**Raises**

**ValueError** – If massive is set to False, and exponentially large computation is needed.
