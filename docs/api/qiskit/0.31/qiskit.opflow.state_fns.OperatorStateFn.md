# OperatorStateFn

<span id="undefined" />

`OperatorStateFn(primitive, coeff=1.0, is_measurement=False)`

Bases: `qiskit.opflow.state_fns.state_fn.StateFn`

A class for state functions and measurements which are defined by a density Operator, stored using an `OperatorBase`.

**Parameters**

*   **primitive** (`OperatorBase`) – The `OperatorBase` which defines the behavior of the underlying State function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient by which to multiply the state function
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Methods Defined Here

|                                                                                                                                                                                                        |                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.OperatorStateFn.add#qiskit.opflow.state_fns.OperatorStateFn.add "qiskit.opflow.state_fns.OperatorStateFn.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                      |
| [`adjoint`](qiskit.opflow.state_fns.OperatorStateFn.adjoint#qiskit.opflow.state_fns.OperatorStateFn.adjoint "qiskit.opflow.state_fns.OperatorStateFn.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                                                     |
| [`eval`](qiskit.opflow.state_fns.OperatorStateFn.eval#qiskit.opflow.state_fns.OperatorStateFn.eval "qiskit.opflow.state_fns.OperatorStateFn.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                                         |
| [`permute`](qiskit.opflow.state_fns.OperatorStateFn.permute#qiskit.opflow.state_fns.OperatorStateFn.permute "qiskit.opflow.state_fns.OperatorStateFn.permute")                                         | Permute the qubits of the state function.                                                                                                                                                           |
| [`primitive_strings`](qiskit.opflow.state_fns.OperatorStateFn.primitive_strings#qiskit.opflow.state_fns.OperatorStateFn.primitive_strings "qiskit.opflow.state_fns.OperatorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                                        |
| [`sample`](qiskit.opflow.state_fns.OperatorStateFn.sample#qiskit.opflow.state_fns.OperatorStateFn.sample "qiskit.opflow.state_fns.OperatorStateFn.sample")                                             | Sample the state function as a normalized probability distribution.                                                                                                                                 |
| [`tensor`](qiskit.opflow.state_fns.OperatorStateFn.tensor#qiskit.opflow.state_fns.OperatorStateFn.tensor "qiskit.opflow.state_fns.OperatorStateFn.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                                                    |
| [`to_circuit_op`](qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op#qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op "qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op")                 | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                                              |
| [`to_density_matrix`](qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix#qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix "qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix") | Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix.                                                        |
| [`to_matrix`](qiskit.opflow.state_fns.OperatorStateFn.to_matrix#qiskit.opflow.state_fns.OperatorStateFn.to_matrix "qiskit.opflow.state_fns.OperatorStateFn.to_matrix")                                 | Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. |
| [`to_matrix_op`](qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op#qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op "qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op")                     | Return a MatrixOp for this operator.                                                                                                                                                                |

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

`qiskit.opflow.operator_base.OperatorBase`

The primitive which defines the behavior of the underlying State function.

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
