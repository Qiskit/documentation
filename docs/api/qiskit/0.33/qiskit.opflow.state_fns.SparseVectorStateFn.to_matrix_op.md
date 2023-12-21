# qiskit.opflow\.state\_fns.SparseVectorStateFn.to\_matrix\_op

`SparseVectorStateFn.to_matrix_op(massive=False)`

Return a `VectorStateFn` for this `StateFn`.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

`OperatorBase`

**Returns**

A VectorStateFn equivalent to self.
