# ComposedOp

<span id="undefined" />

`ComposedOp(oplist, coeff=1.0, abelian=False)`

Bases: `qiskit.aqua.operators.list_ops.list_op.ListOp`

A class for lazily representing compositions of Operators. Often Operators cannot be efficiently composed with one another, but may be manipulated further so that they can be composed later. This class holds logic to indicate that the Operators in `oplist` are meant to be composed, and therefore if they reach a point in which they can be, such as after conversion to QuantumCircuits or matrices, they can be reduced by composition.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The Operators being composed.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods

|                                                                                                                                                                                                                                      |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.list_ops.ComposedOp.add#qiskit.aqua.operators.list_ops.ComposedOp.add "qiskit.aqua.operators.list_ops.ComposedOp.add")                                                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.list_ops.ComposedOp.adjoint#qiskit.aqua.operators.list_ops.ComposedOp.adjoint "qiskit.aqua.operators.list_ops.ComposedOp.adjoint")                                                                 | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.list_ops.ComposedOp.assign_parameters#qiskit.aqua.operators.list_ops.ComposedOp.assign_parameters "qiskit.aqua.operators.list_ops.ComposedOp.assign_parameters")                         | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.list_ops.ComposedOp.bind_parameters#qiskit.aqua.operators.list_ops.ComposedOp.bind_parameters "qiskit.aqua.operators.list_ops.ComposedOp.bind_parameters")                                 | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.aqua.operators.list_ops.ComposedOp.compose#qiskit.aqua.operators.list_ops.ComposedOp.compose "qiskit.aqua.operators.list_ops.ComposedOp.compose")                                                                 | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.aqua.operators.list_ops.ComposedOp.equals#qiskit.aqua.operators.list_ops.ComposedOp.equals "qiskit.aqua.operators.list_ops.ComposedOp.equals")                                                                     | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.list_ops.ComposedOp.eval#qiskit.aqua.operators.list_ops.ComposedOp.eval "qiskit.aqua.operators.list_ops.ComposedOp.eval")                                                                             | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.aqua.operators.list_ops.ComposedOp.exp_i#qiskit.aqua.operators.list_ops.ComposedOp.exp_i "qiskit.aqua.operators.list_ops.ComposedOp.exp_i")                                                                         | Return an `OperatorBase` equivalent to an exponentiation of self \* -i, e^(-i\*op).                                                                                           |
| [`log_i`](qiskit.aqua.operators.list_ops.ComposedOp.log_i#qiskit.aqua.operators.list_ops.ComposedOp.log_i "qiskit.aqua.operators.list_ops.ComposedOp.log_i")                                                                         | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.aqua.operators.list_ops.ComposedOp.mul#qiskit.aqua.operators.list_ops.ComposedOp.mul "qiskit.aqua.operators.list_ops.ComposedOp.mul")                                                                                 | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.list_ops.ComposedOp.neg#qiskit.aqua.operators.list_ops.ComposedOp.neg "qiskit.aqua.operators.list_ops.ComposedOp.neg")                                                                                 | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`non_distributive_reduce`](qiskit.aqua.operators.list_ops.ComposedOp.non_distributive_reduce#qiskit.aqua.operators.list_ops.ComposedOp.non_distributive_reduce "qiskit.aqua.operators.list_ops.ComposedOp.non_distributive_reduce") | Reduce without attempting to expand all distributive compositions.                                                                                                            |
| [`permute`](qiskit.aqua.operators.list_ops.ComposedOp.permute#qiskit.aqua.operators.list_ops.ComposedOp.permute "qiskit.aqua.operators.list_ops.ComposedOp.permute")                                                                 | Permute the qubits of the operator.                                                                                                                                           |
| [`power`](qiskit.aqua.operators.list_ops.ComposedOp.power#qiskit.aqua.operators.list_ops.ComposedOp.power "qiskit.aqua.operators.list_ops.ComposedOp.power")                                                                         | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.aqua.operators.list_ops.ComposedOp.primitive_strings#qiskit.aqua.operators.list_ops.ComposedOp.primitive_strings "qiskit.aqua.operators.list_ops.ComposedOp.primitive_strings")                         | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.list_ops.ComposedOp.reduce#qiskit.aqua.operators.list_ops.ComposedOp.reduce "qiskit.aqua.operators.list_ops.ComposedOp.reduce")                                                                     | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.aqua.operators.list_ops.ComposedOp.tensor#qiskit.aqua.operators.list_ops.ComposedOp.tensor "qiskit.aqua.operators.list_ops.ComposedOp.tensor")                                                                     | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.list_ops.ComposedOp.tensorpower#qiskit.aqua.operators.list_ops.ComposedOp.tensorpower "qiskit.aqua.operators.list_ops.ComposedOp.tensorpower")                                                 | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit`](qiskit.aqua.operators.list_ops.ComposedOp.to_circuit#qiskit.aqua.operators.list_ops.ComposedOp.to_circuit "qiskit.aqua.operators.list_ops.ComposedOp.to_circuit")                                                     | Returns the quantum circuit, representing the composed operator.                                                                                                              |
| [`to_circuit_op`](qiskit.aqua.operators.list_ops.ComposedOp.to_circuit_op#qiskit.aqua.operators.list_ops.ComposedOp.to_circuit_op "qiskit.aqua.operators.list_ops.ComposedOp.to_circuit_op")                                         | Returns an equivalent Operator composed of only QuantumCircuit-based primitives, such as `CircuitOp` and `CircuitStateFn`.                                                    |
| [`to_legacy_op`](qiskit.aqua.operators.list_ops.ComposedOp.to_legacy_op#qiskit.aqua.operators.list_ops.ComposedOp.to_legacy_op "qiskit.aqua.operators.list_ops.ComposedOp.to_legacy_op")                                             | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.list_ops.ComposedOp.to_matrix#qiskit.aqua.operators.list_ops.ComposedOp.to_matrix "qiskit.aqua.operators.list_ops.ComposedOp.to_matrix")                                                         | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.list_ops.ComposedOp.to_matrix_op#qiskit.aqua.operators.list_ops.ComposedOp.to_matrix_op "qiskit.aqua.operators.list_ops.ComposedOp.to_matrix_op")                                             | Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`.                                                               |
| [`to_pauli_op`](qiskit.aqua.operators.list_ops.ComposedOp.to_pauli_op#qiskit.aqua.operators.list_ops.ComposedOp.to_pauli_op "qiskit.aqua.operators.list_ops.ComposedOp.to_pauli_op")                                                 | Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.                                                                                    |
| [`to_spmatrix`](qiskit.aqua.operators.list_ops.ComposedOp.to_spmatrix#qiskit.aqua.operators.list_ops.ComposedOp.to_spmatrix "qiskit.aqua.operators.list_ops.ComposedOp.to_spmatrix")                                                 | Returns SciPy sparse matrix representation of the Operator.                                                                                                                   |
| [`traverse`](qiskit.aqua.operators.list_ops.ComposedOp.traverse#qiskit.aqua.operators.list_ops.ComposedOp.traverse "qiskit.aqua.operators.list_ops.ComposedOp.traverse")                                                             | Apply the convert\_fn to each node in the oplist.                                                                                                                             |

## Attributes

<span id="undefined" />

### ENABLE\_DEPRECATION

`= True`

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### abelian

Whether the Operators in `oplist` are known to commute with one another.

**Return type**

`bool`

**Returns**

A bool indicating whether the `oplist` is Abelian.

<span id="undefined" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`int`, `float`, `complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="undefined" />

### combo\_fn

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Return type**

`Callable`

**Returns**

The combination function.

<span id="undefined" />

### distributive

**Return type**

`bool`

<span id="undefined" />

### grad\_combo\_fn

The gradient of `combo_fn`.

**Return type**

`Optional`\[`Callable`]

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### oplist

The list of `OperatorBases` defining the underlying function of this Operator.

**Return type**

`List`\[`OperatorBase`]

**Returns**

The Operators defining the ListOp

<span id="undefined" />

### parameters
