# OperatorStateFn

<span id="undefined" />

`OperatorStateFn(primitive=None, coeff=1.0, is_measurement=False)`

Bases: `qiskit.aqua.operators.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined by a density Operator, stored using an `OperatorBase`.

**Parameters**

*   **primitive** (`Optional`\[`OperatorBase`]) – The `OperatorBase` which defines the behavior of the underlying State function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods

|                                                                                                                                                                                                                                |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.state_fns.OperatorStateFn.add#qiskit.aqua.operators.state_fns.OperatorStateFn.add "qiskit.aqua.operators.state_fns.OperatorStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                      |
| [`adjoint`](qiskit.aqua.operators.state_fns.OperatorStateFn.adjoint#qiskit.aqua.operators.state_fns.OperatorStateFn.adjoint "qiskit.aqua.operators.state_fns.OperatorStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                                                     |
| [`assign_parameters`](qiskit.aqua.operators.state_fns.OperatorStateFn.assign_parameters#qiskit.aqua.operators.state_fns.OperatorStateFn.assign_parameters "qiskit.aqua.operators.state_fns.OperatorStateFn.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                                        |
| [`bind_parameters`](qiskit.aqua.operators.state_fns.OperatorStateFn.bind_parameters#qiskit.aqua.operators.state_fns.OperatorStateFn.bind_parameters "qiskit.aqua.operators.state_fns.OperatorStateFn.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                                                   |
| [`compose`](qiskit.aqua.operators.state_fns.OperatorStateFn.compose#qiskit.aqua.operators.state_fns.OperatorStateFn.compose "qiskit.aqua.operators.state_fns.OperatorStateFn.compose")                                         | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                                            |
| [`equals`](qiskit.aqua.operators.state_fns.OperatorStateFn.equals#qiskit.aqua.operators.state_fns.OperatorStateFn.equals "qiskit.aqua.operators.state_fns.OperatorStateFn.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                                            |
| [`eval`](qiskit.aqua.operators.state_fns.OperatorStateFn.eval#qiskit.aqua.operators.state_fns.OperatorStateFn.eval "qiskit.aqua.operators.state_fns.OperatorStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                                         |
| [`mul`](qiskit.aqua.operators.state_fns.OperatorStateFn.mul#qiskit.aqua.operators.state_fns.OperatorStateFn.mul "qiskit.aqua.operators.state_fns.OperatorStateFn.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`).                       |
| [`neg`](qiskit.aqua.operators.state_fns.OperatorStateFn.neg#qiskit.aqua.operators.state_fns.OperatorStateFn.neg "qiskit.aqua.operators.state_fns.OperatorStateFn.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                                            |
| [`permute`](qiskit.aqua.operators.state_fns.OperatorStateFn.permute#qiskit.aqua.operators.state_fns.OperatorStateFn.permute "qiskit.aqua.operators.state_fns.OperatorStateFn.permute")                                         | Permute the qubits of the state function.                                                                                                                                                           |
| [`power`](qiskit.aqua.operators.state_fns.OperatorStateFn.power#qiskit.aqua.operators.state_fns.OperatorStateFn.power "qiskit.aqua.operators.state_fns.OperatorStateFn.power")                                                 | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                                           |
| [`primitive_strings`](qiskit.aqua.operators.state_fns.OperatorStateFn.primitive_strings#qiskit.aqua.operators.state_fns.OperatorStateFn.primitive_strings "qiskit.aqua.operators.state_fns.OperatorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                                        |
| [`reduce`](qiskit.aqua.operators.state_fns.OperatorStateFn.reduce#qiskit.aqua.operators.state_fns.OperatorStateFn.reduce "qiskit.aqua.operators.state_fns.OperatorStateFn.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                                                  |
| [`sample`](qiskit.aqua.operators.state_fns.OperatorStateFn.sample#qiskit.aqua.operators.state_fns.OperatorStateFn.sample "qiskit.aqua.operators.state_fns.OperatorStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                                                                                                                                 |
| [`tensor`](qiskit.aqua.operators.state_fns.OperatorStateFn.tensor#qiskit.aqua.operators.state_fns.OperatorStateFn.tensor "qiskit.aqua.operators.state_fns.OperatorStateFn.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                                                    |
| [`tensorpower`](qiskit.aqua.operators.state_fns.OperatorStateFn.tensorpower#qiskit.aqua.operators.state_fns.OperatorStateFn.tensorpower "qiskit.aqua.operators.state_fns.OperatorStateFn.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                                                  |
| [`to_circuit_op`](qiskit.aqua.operators.state_fns.OperatorStateFn.to_circuit_op#qiskit.aqua.operators.state_fns.OperatorStateFn.to_circuit_op "qiskit.aqua.operators.state_fns.OperatorStateFn.to_circuit_op")                 | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                                              |
| [`to_density_matrix`](qiskit.aqua.operators.state_fns.OperatorStateFn.to_density_matrix#qiskit.aqua.operators.state_fns.OperatorStateFn.to_density_matrix "qiskit.aqua.operators.state_fns.OperatorStateFn.to_density_matrix") | Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix.                                                        |
| [`to_legacy_op`](qiskit.aqua.operators.state_fns.OperatorStateFn.to_legacy_op#qiskit.aqua.operators.state_fns.OperatorStateFn.to_legacy_op "qiskit.aqua.operators.state_fns.OperatorStateFn.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                                               |
| [`to_matrix`](qiskit.aqua.operators.state_fns.OperatorStateFn.to_matrix#qiskit.aqua.operators.state_fns.OperatorStateFn.to_matrix "qiskit.aqua.operators.state_fns.OperatorStateFn.to_matrix")                                 | Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. |
| [`to_matrix_op`](qiskit.aqua.operators.state_fns.OperatorStateFn.to_matrix_op#qiskit.aqua.operators.state_fns.OperatorStateFn.to_matrix_op "qiskit.aqua.operators.state_fns.OperatorStateFn.to_matrix_op")                     | Return a MatrixOp for this operator.                                                                                                                                                                |
| [`traverse`](qiskit.aqua.operators.state_fns.OperatorStateFn.traverse#qiskit.aqua.operators.state_fns.OperatorStateFn.traverse "qiskit.aqua.operators.state_fns.OperatorStateFn.traverse")                                     | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                                              |

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
