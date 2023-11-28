# OperatorBase

<span id="undefined" />

`OperatorBase`

Bases: `abc.ABC`

A base class for all Operators: PrimitiveOps, StateFns, ListOps, etc. Operators are defined as functions which take one complex binary function to another. These complex binary functions are represented by StateFns, which are themselves a special class of Operators taking only the `Zero` StateFn to the complex binary function they represent.

Operators can be used to construct complicated functions and computation, and serve as the building blocks for algorithms in Aqua.

## Methods

|                                                                                                                                                                                         |                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.OperatorBase.add#qiskit.aqua.operators.OperatorBase.add "qiskit.aqua.operators.OperatorBase.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.OperatorBase.adjoint#qiskit.aqua.operators.OperatorBase.adjoint "qiskit.aqua.operators.OperatorBase.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.OperatorBase.assign_parameters#qiskit.aqua.operators.OperatorBase.assign_parameters "qiskit.aqua.operators.OperatorBase.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.OperatorBase.bind_parameters#qiskit.aqua.operators.OperatorBase.bind_parameters "qiskit.aqua.operators.OperatorBase.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.aqua.operators.OperatorBase.compose#qiskit.aqua.operators.OperatorBase.compose "qiskit.aqua.operators.OperatorBase.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.aqua.operators.OperatorBase.equals#qiskit.aqua.operators.OperatorBase.equals "qiskit.aqua.operators.OperatorBase.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.OperatorBase.eval#qiskit.aqua.operators.OperatorBase.eval "qiskit.aqua.operators.OperatorBase.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`mul`](qiskit.aqua.operators.OperatorBase.mul#qiskit.aqua.operators.OperatorBase.mul "qiskit.aqua.operators.OperatorBase.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.OperatorBase.neg#qiskit.aqua.operators.OperatorBase.neg "qiskit.aqua.operators.OperatorBase.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.OperatorBase.permute#qiskit.aqua.operators.OperatorBase.permute "qiskit.aqua.operators.OperatorBase.permute")                                         | Permutes the qubits of the operator.                                                                                                                                          |
| [`power`](qiskit.aqua.operators.OperatorBase.power#qiskit.aqua.operators.OperatorBase.power "qiskit.aqua.operators.OperatorBase.power")                                                 | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.aqua.operators.OperatorBase.primitive_strings#qiskit.aqua.operators.OperatorBase.primitive_strings "qiskit.aqua.operators.OperatorBase.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.OperatorBase.reduce#qiskit.aqua.operators.OperatorBase.reduce "qiskit.aqua.operators.OperatorBase.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.aqua.operators.OperatorBase.tensor#qiskit.aqua.operators.OperatorBase.tensor "qiskit.aqua.operators.OperatorBase.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.OperatorBase.tensorpower#qiskit.aqua.operators.OperatorBase.tensorpower "qiskit.aqua.operators.OperatorBase.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_legacy_op`](qiskit.aqua.operators.OperatorBase.to_legacy_op#qiskit.aqua.operators.OperatorBase.to_legacy_op "qiskit.aqua.operators.OperatorBase.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.OperatorBase.to_matrix#qiskit.aqua.operators.OperatorBase.to_matrix "qiskit.aqua.operators.OperatorBase.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |

## Attributes

<span id="undefined" />

### ENABLE\_DEPRECATION

`= True`

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### num\_qubits

The number of qubits over which the Operator is defined. If `op.num_qubits == 5`, then `op.eval('1' * 5)` will be valid, but `op.eval('11')` will not.

**Return type**

`int`

**Returns**

The number of qubits accepted by the Operator’s underlying function.

<span id="undefined" />

### parameters

Return a set of Parameter objects contained in the Operator.
