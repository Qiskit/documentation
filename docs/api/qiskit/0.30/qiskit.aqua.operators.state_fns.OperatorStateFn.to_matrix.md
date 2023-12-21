# qiskit.aqua.operators.state\_fns.OperatorStateFn.to\_matrix

`OperatorStateFn.to_matrix(massive=False)`

Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. Do not assume this is is a normalized quantum or classical probability vector. If we allowed this to return a density matrix, then we would need to change the definition of composition to be \~Op @ StateFn @ Op for those cases, whereas by this methodology we can ensure that composition always means Op @ StateFn.

Return numpy vector of state vector, warn if more than 16 qubits to force the user to set massive=True if they want such a large vector.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Returns**

Vector of state vector

**Return type**

np.ndarray

**Raises**

**ValueError** – Invalid parameters.
