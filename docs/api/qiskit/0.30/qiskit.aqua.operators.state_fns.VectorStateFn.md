# VectorStateFn

<span id="undefined" />

`VectorStateFn(primitive=None, coeff=1.0, is_measurement=False)`

Bases: `qiskit.aqua.operators.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined in vector representation, and stored using Terra’s `Statevector` class.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, `Statevector`, `None`]) – The `Statevector`, NumPy array, or list, which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods

|                                                                                                                                                                                                                          |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.state_fns.VectorStateFn.add#qiskit.aqua.operators.state_fns.VectorStateFn.add "qiskit.aqua.operators.state_fns.VectorStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.state_fns.VectorStateFn.adjoint#qiskit.aqua.operators.state_fns.VectorStateFn.adjoint "qiskit.aqua.operators.state_fns.VectorStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.state_fns.VectorStateFn.assign_parameters#qiskit.aqua.operators.state_fns.VectorStateFn.assign_parameters "qiskit.aqua.operators.state_fns.VectorStateFn.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.state_fns.VectorStateFn.bind_parameters#qiskit.aqua.operators.state_fns.VectorStateFn.bind_parameters "qiskit.aqua.operators.state_fns.VectorStateFn.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.aqua.operators.state_fns.VectorStateFn.compose#qiskit.aqua.operators.state_fns.VectorStateFn.compose "qiskit.aqua.operators.state_fns.VectorStateFn.compose")                                         | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                      |
| [`equals`](qiskit.aqua.operators.state_fns.VectorStateFn.equals#qiskit.aqua.operators.state_fns.VectorStateFn.equals "qiskit.aqua.operators.state_fns.VectorStateFn.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.state_fns.VectorStateFn.eval#qiskit.aqua.operators.state_fns.VectorStateFn.eval "qiskit.aqua.operators.state_fns.VectorStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`mul`](qiskit.aqua.operators.state_fns.VectorStateFn.mul#qiskit.aqua.operators.state_fns.VectorStateFn.mul "qiskit.aqua.operators.state_fns.VectorStateFn.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.state_fns.VectorStateFn.neg#qiskit.aqua.operators.state_fns.VectorStateFn.neg "qiskit.aqua.operators.state_fns.VectorStateFn.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.state_fns.VectorStateFn.permute#qiskit.aqua.operators.state_fns.VectorStateFn.permute "qiskit.aqua.operators.state_fns.VectorStateFn.permute")                                         | Permute the qubits of the state function.                                                                                                                                     |
| [`power`](qiskit.aqua.operators.state_fns.VectorStateFn.power#qiskit.aqua.operators.state_fns.VectorStateFn.power "qiskit.aqua.operators.state_fns.VectorStateFn.power")                                                 | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                     |
| [`primitive_strings`](qiskit.aqua.operators.state_fns.VectorStateFn.primitive_strings#qiskit.aqua.operators.state_fns.VectorStateFn.primitive_strings "qiskit.aqua.operators.state_fns.VectorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.state_fns.VectorStateFn.reduce#qiskit.aqua.operators.state_fns.VectorStateFn.reduce "qiskit.aqua.operators.state_fns.VectorStateFn.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`sample`](qiskit.aqua.operators.state_fns.VectorStateFn.sample#qiskit.aqua.operators.state_fns.VectorStateFn.sample "qiskit.aqua.operators.state_fns.VectorStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                                                                                                           |
| [`tensor`](qiskit.aqua.operators.state_fns.VectorStateFn.tensor#qiskit.aqua.operators.state_fns.VectorStateFn.tensor "qiskit.aqua.operators.state_fns.VectorStateFn.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower#qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower "qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit_op`](qiskit.aqua.operators.state_fns.VectorStateFn.to_circuit_op#qiskit.aqua.operators.state_fns.VectorStateFn.to_circuit_op "qiskit.aqua.operators.state_fns.VectorStateFn.to_circuit_op")                 | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                        |
| [`to_density_matrix`](qiskit.aqua.operators.state_fns.VectorStateFn.to_density_matrix#qiskit.aqua.operators.state_fns.VectorStateFn.to_density_matrix "qiskit.aqua.operators.state_fns.VectorStateFn.to_density_matrix") | Return matrix representing product of StateFn evaluated on pairs of basis states.                                                                                             |
| [`to_dict_fn`](qiskit.aqua.operators.state_fns.VectorStateFn.to_dict_fn#qiskit.aqua.operators.state_fns.VectorStateFn.to_dict_fn "qiskit.aqua.operators.state_fns.VectorStateFn.to_dict_fn")                             | Creates the equivalent state function of type DictStateFn.                                                                                                                    |
| [`to_legacy_op`](qiskit.aqua.operators.state_fns.VectorStateFn.to_legacy_op#qiskit.aqua.operators.state_fns.VectorStateFn.to_legacy_op "qiskit.aqua.operators.state_fns.VectorStateFn.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix#qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix "qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix_op#qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix_op "qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix_op")                     | Return a `VectorStateFn` for this `StateFn`.                                                                                                                                  |
| [`traverse`](qiskit.aqua.operators.state_fns.VectorStateFn.traverse#qiskit.aqua.operators.state_fns.VectorStateFn.traverse "qiskit.aqua.operators.state_fns.VectorStateFn.traverse")                                     | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                        |

## Attributes

<span id="undefined" />

### ENABLE\_DEPRECATION

`= True`

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

A coefficient by which the state function is multiplied.

**Return type**

`Union`\[`int`, `float`, `complex`, `ParameterExpression`]

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

The primitive which defines the behavior of the underlying State function.
