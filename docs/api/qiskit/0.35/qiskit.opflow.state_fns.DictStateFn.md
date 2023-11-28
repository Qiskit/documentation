# DictStateFn

<span id="undefined" />

`DictStateFn(primitive=None, coeff=1.0, is_measurement=False, from_operator=False)`

Bases: `qiskit.opflow.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined by a lookup table, stored in a dict.

**Parameters**

*   **primitive** (`Union`\[`str`, `dict`, `Result`, `None`]) – The dict, single bitstring (if defining a basis sate), or Qiskit Result, which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator.
*   **from\_operator** (`bool`) – if True the StateFn is derived from OperatorStateFn. (Default: False)

**Raises**

**TypeError** – invalid parameters.

## Methods Defined Here

|                                                                                                                                                                                            |                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.DictStateFn.add#qiskit.opflow.state_fns.DictStateFn.add "qiskit.opflow.state_fns.DictStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                  |
| [`adjoint`](qiskit.opflow.state_fns.DictStateFn.adjoint#qiskit.opflow.state_fns.DictStateFn.adjoint "qiskit.opflow.state_fns.DictStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`. |
| [`eval`](qiskit.opflow.state_fns.DictStateFn.eval#qiskit.opflow.state_fns.DictStateFn.eval "qiskit.opflow.state_fns.DictStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.     |
| [`permute`](qiskit.opflow.state_fns.DictStateFn.permute#qiskit.opflow.state_fns.DictStateFn.permute "qiskit.opflow.state_fns.DictStateFn.permute")                                         | Permute the qubits of the state function.                                                       |
| [`primitive_strings`](qiskit.opflow.state_fns.DictStateFn.primitive_strings#qiskit.opflow.state_fns.DictStateFn.primitive_strings "qiskit.opflow.state_fns.DictStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                    |
| [`sample`](qiskit.opflow.state_fns.DictStateFn.sample#qiskit.opflow.state_fns.DictStateFn.sample "qiskit.opflow.state_fns.DictStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                             |
| [`tensor`](qiskit.opflow.state_fns.DictStateFn.tensor#qiskit.opflow.state_fns.DictStateFn.tensor "qiskit.opflow.state_fns.DictStateFn.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                |
| [`to_circuit_op`](qiskit.opflow.state_fns.DictStateFn.to_circuit_op#qiskit.opflow.state_fns.DictStateFn.to_circuit_op "qiskit.opflow.state_fns.DictStateFn.to_circuit_op")                 | Convert this state function to a `CircuitStateFn`.                                              |
| [`to_density_matrix`](qiskit.opflow.state_fns.DictStateFn.to_density_matrix#qiskit.opflow.state_fns.DictStateFn.to_density_matrix "qiskit.opflow.state_fns.DictStateFn.to_density_matrix") | Return matrix representing product of StateFn evaluated on pairs of basis states.               |
| [`to_matrix`](qiskit.opflow.state_fns.DictStateFn.to_matrix#qiskit.opflow.state_fns.DictStateFn.to_matrix "qiskit.opflow.state_fns.DictStateFn.to_matrix")                                 | Return NumPy representation of the Operator.                                                    |
| [`to_spmatrix`](qiskit.opflow.state_fns.DictStateFn.to_spmatrix#qiskit.opflow.state_fns.DictStateFn.to_spmatrix "qiskit.opflow.state_fns.DictStateFn.to_spmatrix")                         | Same as to\_matrix, but returns csr sparse matrix.                                              |
| [`to_spmatrix_op`](qiskit.opflow.state_fns.DictStateFn.to_spmatrix_op#qiskit.opflow.state_fns.DictStateFn.to_spmatrix_op "qiskit.opflow.state_fns.DictStateFn.to_spmatrix_op")             | Convert this state function to a `SparseVectorStateFn`.                                         |

## Attributes

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

<span id="undefined" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

**Return type**

`bool`

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### parameters

<span id="undefined" />

### primitive

`Dict[str, complex]`

The primitive which defines the behavior of the underlying State function.

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
