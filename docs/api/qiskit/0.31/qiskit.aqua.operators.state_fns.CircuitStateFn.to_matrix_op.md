# qiskit.aqua.operators.state\_fns.CircuitStateFn.to\_matrix\_op

`CircuitStateFn.to_matrix_op(massive=False)`

Return a `VectorStateFn` for this `StateFn`.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

`OperatorBase`

**Returns**

A VectorStateFn equivalent to self.
