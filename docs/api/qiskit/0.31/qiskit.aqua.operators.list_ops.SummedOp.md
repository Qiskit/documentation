# SummedOp

<span id="undefined" />

`SummedOp(oplist, coeff=1.0, abelian=False)`

Bases: `qiskit.aqua.operators.list_ops.list_op.ListOp`

A class for lazily representing sums of Operators. Often Operators cannot be efficiently added to one another, but may be manipulated further so that they can be later. This class holds logic to indicate that the Operators in `oplist` are meant to be added together, and therefore if they reach a point in which they can be, such as after evaluation or conversion to matrices, they can be reduced by addition.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The Operators being summed.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.

## Methods

|                                                                                                                                                                                                        |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.list_ops.SummedOp.add#qiskit.aqua.operators.list_ops.SummedOp.add "qiskit.aqua.operators.list_ops.SummedOp.add")                                                         | Return Operator addition of `self` and `other`, overloaded by `+`.                                                                                                            |
| [`adjoint`](qiskit.aqua.operators.list_ops.SummedOp.adjoint#qiskit.aqua.operators.list_ops.SummedOp.adjoint "qiskit.aqua.operators.list_ops.SummedOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.list_ops.SummedOp.assign_parameters#qiskit.aqua.operators.list_ops.SummedOp.assign_parameters "qiskit.aqua.operators.list_ops.SummedOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.list_ops.SummedOp.bind_parameters#qiskit.aqua.operators.list_ops.SummedOp.bind_parameters "qiskit.aqua.operators.list_ops.SummedOp.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`collapse_summands`](qiskit.aqua.operators.list_ops.SummedOp.collapse_summands#qiskit.aqua.operators.list_ops.SummedOp.collapse_summands "qiskit.aqua.operators.list_ops.SummedOp.collapse_summands") | Return Operator by simplifying duplicate operators.                                                                                                                           |
| [`compose`](qiskit.aqua.operators.list_ops.SummedOp.compose#qiskit.aqua.operators.list_ops.SummedOp.compose "qiskit.aqua.operators.list_ops.SummedOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.aqua.operators.list_ops.SummedOp.equals#qiskit.aqua.operators.list_ops.SummedOp.equals "qiskit.aqua.operators.list_ops.SummedOp.equals")                                             | Check if other is equal to self.                                                                                                                                              |
| [`eval`](qiskit.aqua.operators.list_ops.SummedOp.eval#qiskit.aqua.operators.list_ops.SummedOp.eval "qiskit.aqua.operators.list_ops.SummedOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.aqua.operators.list_ops.SummedOp.exp_i#qiskit.aqua.operators.list_ops.SummedOp.exp_i "qiskit.aqua.operators.list_ops.SummedOp.exp_i")                                                 | Return an `OperatorBase` equivalent to an exponentiation of self \* -i, e^(-i\*op).                                                                                           |
| [`log_i`](qiskit.aqua.operators.list_ops.SummedOp.log_i#qiskit.aqua.operators.list_ops.SummedOp.log_i "qiskit.aqua.operators.list_ops.SummedOp.log_i")                                                 | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.aqua.operators.list_ops.SummedOp.mul#qiskit.aqua.operators.list_ops.SummedOp.mul "qiskit.aqua.operators.list_ops.SummedOp.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.list_ops.SummedOp.neg#qiskit.aqua.operators.list_ops.SummedOp.neg "qiskit.aqua.operators.list_ops.SummedOp.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.list_ops.SummedOp.permute#qiskit.aqua.operators.list_ops.SummedOp.permute "qiskit.aqua.operators.list_ops.SummedOp.permute")                                         | Permute the qubits of the operator.                                                                                                                                           |
| [`power`](qiskit.aqua.operators.list_ops.SummedOp.power#qiskit.aqua.operators.list_ops.SummedOp.power "qiskit.aqua.operators.list_ops.SummedOp.power")                                                 | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.aqua.operators.list_ops.SummedOp.primitive_strings#qiskit.aqua.operators.list_ops.SummedOp.primitive_strings "qiskit.aqua.operators.list_ops.SummedOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`print_details`](qiskit.aqua.operators.list_ops.SummedOp.print_details#qiskit.aqua.operators.list_ops.SummedOp.print_details "qiskit.aqua.operators.list_ops.SummedOp.print_details")                 | Print out the operator in details.                                                                                                                                            |
| [`reduce`](qiskit.aqua.operators.list_ops.SummedOp.reduce#qiskit.aqua.operators.list_ops.SummedOp.reduce "qiskit.aqua.operators.list_ops.SummedOp.reduce")                                             | Try collapsing list or trees of sums.                                                                                                                                         |
| [`tensor`](qiskit.aqua.operators.list_ops.SummedOp.tensor#qiskit.aqua.operators.list_ops.SummedOp.tensor "qiskit.aqua.operators.list_ops.SummedOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.list_ops.SummedOp.tensorpower#qiskit.aqua.operators.list_ops.SummedOp.tensorpower "qiskit.aqua.operators.list_ops.SummedOp.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit`](qiskit.aqua.operators.list_ops.SummedOp.to_circuit#qiskit.aqua.operators.list_ops.SummedOp.to_circuit "qiskit.aqua.operators.list_ops.SummedOp.to_circuit")                             | Returns the quantum circuit, representing the SummedOp.                                                                                                                       |
| [`to_circuit_op`](qiskit.aqua.operators.list_ops.SummedOp.to_circuit_op#qiskit.aqua.operators.list_ops.SummedOp.to_circuit_op "qiskit.aqua.operators.list_ops.SummedOp.to_circuit_op")                 | Returns an equivalent Operator composed of only QuantumCircuit-based primitives, such as `CircuitOp` and `CircuitStateFn`.                                                    |
| [`to_legacy_op`](qiskit.aqua.operators.list_ops.SummedOp.to_legacy_op#qiskit.aqua.operators.list_ops.SummedOp.to_legacy_op "qiskit.aqua.operators.list_ops.SummedOp.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.list_ops.SummedOp.to_matrix#qiskit.aqua.operators.list_ops.SummedOp.to_matrix "qiskit.aqua.operators.list_ops.SummedOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.list_ops.SummedOp.to_matrix_op#qiskit.aqua.operators.list_ops.SummedOp.to_matrix_op "qiskit.aqua.operators.list_ops.SummedOp.to_matrix_op")                     | Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`.                                                               |
| [`to_pauli_op`](qiskit.aqua.operators.list_ops.SummedOp.to_pauli_op#qiskit.aqua.operators.list_ops.SummedOp.to_pauli_op "qiskit.aqua.operators.list_ops.SummedOp.to_pauli_op")                         | Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.                                                                                    |
| [`to_spmatrix`](qiskit.aqua.operators.list_ops.SummedOp.to_spmatrix#qiskit.aqua.operators.list_ops.SummedOp.to_spmatrix "qiskit.aqua.operators.list_ops.SummedOp.to_spmatrix")                         | Returns SciPy sparse matrix representation of the Operator.                                                                                                                   |
| [`traverse`](qiskit.aqua.operators.list_ops.SummedOp.traverse#qiskit.aqua.operators.list_ops.SummedOp.traverse "qiskit.aqua.operators.list_ops.SummedOp.traverse")                                     | Apply the convert\_fn to each node in the oplist.                                                                                                                             |

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
