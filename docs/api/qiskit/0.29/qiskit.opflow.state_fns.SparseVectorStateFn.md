# SparseVectorStateFn

`SparseVectorStateFn(primitive, coeff=1.0, is_measurement=False)`

Bases: `qiskit.opflow.state_fns.state_fn.StateFn`

A class for sparse state functions and measurements in vector representation.

This class uses `scipy.sparse.spmatrix` for the internal representation.

**Parameters**

*   **primitive** (`spmatrix`) – The underlying sparse vector.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

**Raises**

*   **ValueError** – If the primitive is not a column vector.
*   **ValueError** – If the number of elements in the primitive is not a power of 2.

## Methods Defined Here

|                                                                                                                                                                                                                    |                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.SparseVectorStateFn.add#qiskit.opflow.state_fns.SparseVectorStateFn.add "qiskit.opflow.state_fns.SparseVectorStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                  |
| [`adjoint`](qiskit.opflow.state_fns.SparseVectorStateFn.adjoint#qiskit.opflow.state_fns.SparseVectorStateFn.adjoint "qiskit.opflow.state_fns.SparseVectorStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. |
| [`equals`](qiskit.opflow.state_fns.SparseVectorStateFn.equals#qiskit.opflow.state_fns.SparseVectorStateFn.equals "qiskit.opflow.state_fns.SparseVectorStateFn.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                        |
| [`eval`](qiskit.opflow.state_fns.SparseVectorStateFn.eval#qiskit.opflow.state_fns.SparseVectorStateFn.eval "qiskit.opflow.state_fns.SparseVectorStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.     |
| [`primitive_strings`](qiskit.opflow.state_fns.SparseVectorStateFn.primitive_strings#qiskit.opflow.state_fns.SparseVectorStateFn.primitive_strings "qiskit.opflow.state_fns.SparseVectorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                    |
| [`sample`](qiskit.opflow.state_fns.SparseVectorStateFn.sample#qiskit.opflow.state_fns.SparseVectorStateFn.sample "qiskit.opflow.state_fns.SparseVectorStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                             |
| [`to_circuit_op`](qiskit.opflow.state_fns.SparseVectorStateFn.to_circuit_op#qiskit.opflow.state_fns.SparseVectorStateFn.to_circuit_op "qiskit.opflow.state_fns.SparseVectorStateFn.to_circuit_op")                 | Convert this state function to a `CircuitStateFn`.                                              |
| [`to_dict_fn`](qiskit.opflow.state_fns.SparseVectorStateFn.to_dict_fn#qiskit.opflow.state_fns.SparseVectorStateFn.to_dict_fn "qiskit.opflow.state_fns.SparseVectorStateFn.to_dict_fn")                             | Convert this state function to a `DictStateFn`.                                                 |
| [`to_matrix`](qiskit.opflow.state_fns.SparseVectorStateFn.to_matrix#qiskit.opflow.state_fns.SparseVectorStateFn.to_matrix "qiskit.opflow.state_fns.SparseVectorStateFn.to_matrix")                                 | Return NumPy representation of the Operator.                                                    |
| [`to_matrix_op`](qiskit.opflow.state_fns.SparseVectorStateFn.to_matrix_op#qiskit.opflow.state_fns.SparseVectorStateFn.to_matrix_op "qiskit.opflow.state_fns.SparseVectorStateFn.to_matrix_op")                     | Return a `VectorStateFn` for this `StateFn`.                                                    |
| [`to_spmatrix`](qiskit.opflow.state_fns.SparseVectorStateFn.to_spmatrix#qiskit.opflow.state_fns.SparseVectorStateFn.to_spmatrix "qiskit.opflow.state_fns.SparseVectorStateFn.to_spmatrix")                         | Return SciPy sparse matrix representation of the Operator.                                      |

## Attributes

### INDENTATION

`= ' '`

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

### instance\_id

Return the unique instance id.

**Return type**

`int`

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

### num\_qubits

**Return type**

`int`

### parameters

### primitive

`scipy.sparse.base.spmatrix`

The primitive which defines the behavior of the underlying State function.

### settings

Return settings.

**Return type**

`Dict`
