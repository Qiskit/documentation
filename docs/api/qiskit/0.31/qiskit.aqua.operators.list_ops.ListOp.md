# ListOp

<span id="undefined" />

`ListOp(oplist, combo_fn=<function ListOp.<lambda>>, coeff=1.0, abelian=False, grad_combo_fn=None)`

Bases: `qiskit.aqua.operators.operator_base.OperatorBase`

A Class for manipulating List Operators, and parent class to `SummedOp`, `ComposedOp`, and `TensoredOp`.

List Operators are classes for storing and manipulating lists of Operators, State functions, or Measurements, and include some rule or `combo_fn` defining how the Operator functions of the list constituents should be combined to form to cumulative Operator function of the `ListOp`. For example, a `SummedOp` has an addition-based `combo_fn`, so once the Operators in its list are evaluated against some bitstring to produce a list of results, we know to add up those results to produce the final result of the `SummedOp`’s evaluation. In theory, this `combo_fn` can be any function over classical complex values, but for convenience we’ve chosen for them to be defined over NumPy arrays and values. This way, large numbers of evaluations, such as after calling `to_matrix` on the list constituents, can be efficiently combined. While the combination function is defined over classical values, it should be understood as the operation by which each Operators’ underlying function is combined to form the underlying Operator function of the `ListOp`. In this way, the `ListOps` are the basis for constructing large and sophisticated Operators, State Functions, and Measurements in Aqua.

The base `ListOp` class is particularly interesting, as its `combo_fn` is “the identity list Operation”. Meaning, if we understand the `combo_fn` as a function from a list of complex values to some output, one such function is returning the list as-is. This is powerful for constructing compact hierarchical Operators which return many measurements in multiple dimensional lists.

**Parameters**

*   **oplist** (`List`\[`OperatorBase`]) – The list of `OperatorBases` defining this Operator’s underlying function.
*   **combo\_fn** (*callable*) – The recombination function to combine classical results of the `oplist` Operators’ eval functions (e.g. sum).
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient multiplying the operator
*   **abelian** (`bool`) – Indicates whether the Operators in `oplist` are known to mutually commute.
*   **grad\_combo\_fn** (`Optional`\[`Callable`]) – The gradient of recombination function. If None, the gradient will be computed automatically.
*   **that the default "recombination function" lambda above is essentially the** (*Note*) –
*   **- it accepts the list of values** (*identity*) –
*   **returns them in a list.** (*and*) –

## Methods

|                                                                                                                                                                                                  |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.list_ops.ListOp.add#qiskit.aqua.operators.list_ops.ListOp.add "qiskit.aqua.operators.list_ops.ListOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.list_ops.ListOp.adjoint#qiskit.aqua.operators.list_ops.ListOp.adjoint "qiskit.aqua.operators.list_ops.ListOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.list_ops.ListOp.assign_parameters#qiskit.aqua.operators.list_ops.ListOp.assign_parameters "qiskit.aqua.operators.list_ops.ListOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.list_ops.ListOp.bind_parameters#qiskit.aqua.operators.list_ops.ListOp.bind_parameters "qiskit.aqua.operators.list_ops.ListOp.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.aqua.operators.list_ops.ListOp.compose#qiskit.aqua.operators.list_ops.ListOp.compose "qiskit.aqua.operators.list_ops.ListOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.aqua.operators.list_ops.ListOp.equals#qiskit.aqua.operators.list_ops.ListOp.equals "qiskit.aqua.operators.list_ops.ListOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.list_ops.ListOp.eval#qiskit.aqua.operators.list_ops.ListOp.eval "qiskit.aqua.operators.list_ops.ListOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.aqua.operators.list_ops.ListOp.exp_i#qiskit.aqua.operators.list_ops.ListOp.exp_i "qiskit.aqua.operators.list_ops.ListOp.exp_i")                                                 | Return an `OperatorBase` equivalent to an exponentiation of self \* -i, e^(-i\*op).                                                                                           |
| [`log_i`](qiskit.aqua.operators.list_ops.ListOp.log_i#qiskit.aqua.operators.list_ops.ListOp.log_i "qiskit.aqua.operators.list_ops.ListOp.log_i")                                                 | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.aqua.operators.list_ops.ListOp.mul#qiskit.aqua.operators.list_ops.ListOp.mul "qiskit.aqua.operators.list_ops.ListOp.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.list_ops.ListOp.neg#qiskit.aqua.operators.list_ops.ListOp.neg "qiskit.aqua.operators.list_ops.ListOp.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.list_ops.ListOp.permute#qiskit.aqua.operators.list_ops.ListOp.permute "qiskit.aqua.operators.list_ops.ListOp.permute")                                         | Permute the qubits of the operator.                                                                                                                                           |
| [`power`](qiskit.aqua.operators.list_ops.ListOp.power#qiskit.aqua.operators.list_ops.ListOp.power "qiskit.aqua.operators.list_ops.ListOp.power")                                                 | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.aqua.operators.list_ops.ListOp.primitive_strings#qiskit.aqua.operators.list_ops.ListOp.primitive_strings "qiskit.aqua.operators.list_ops.ListOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.list_ops.ListOp.reduce#qiskit.aqua.operators.list_ops.ListOp.reduce "qiskit.aqua.operators.list_ops.ListOp.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.aqua.operators.list_ops.ListOp.tensor#qiskit.aqua.operators.list_ops.ListOp.tensor "qiskit.aqua.operators.list_ops.ListOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.list_ops.ListOp.tensorpower#qiskit.aqua.operators.list_ops.ListOp.tensorpower "qiskit.aqua.operators.list_ops.ListOp.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit_op`](qiskit.aqua.operators.list_ops.ListOp.to_circuit_op#qiskit.aqua.operators.list_ops.ListOp.to_circuit_op "qiskit.aqua.operators.list_ops.ListOp.to_circuit_op")                 | Returns an equivalent Operator composed of only QuantumCircuit-based primitives, such as `CircuitOp` and `CircuitStateFn`.                                                    |
| [`to_legacy_op`](qiskit.aqua.operators.list_ops.ListOp.to_legacy_op#qiskit.aqua.operators.list_ops.ListOp.to_legacy_op "qiskit.aqua.operators.list_ops.ListOp.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.list_ops.ListOp.to_matrix#qiskit.aqua.operators.list_ops.ListOp.to_matrix "qiskit.aqua.operators.list_ops.ListOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.list_ops.ListOp.to_matrix_op#qiskit.aqua.operators.list_ops.ListOp.to_matrix_op "qiskit.aqua.operators.list_ops.ListOp.to_matrix_op")                     | Returns an equivalent Operator composed of only NumPy-based primitives, such as `MatrixOp` and `VectorStateFn`.                                                               |
| [`to_pauli_op`](qiskit.aqua.operators.list_ops.ListOp.to_pauli_op#qiskit.aqua.operators.list_ops.ListOp.to_pauli_op "qiskit.aqua.operators.list_ops.ListOp.to_pauli_op")                         | Returns an equivalent Operator composed of only Pauli-based primitives, such as `PauliOp`.                                                                                    |
| [`to_spmatrix`](qiskit.aqua.operators.list_ops.ListOp.to_spmatrix#qiskit.aqua.operators.list_ops.ListOp.to_spmatrix "qiskit.aqua.operators.list_ops.ListOp.to_spmatrix")                         | Returns SciPy sparse matrix representation of the Operator.                                                                                                                   |
| [`traverse`](qiskit.aqua.operators.list_ops.ListOp.traverse#qiskit.aqua.operators.list_ops.ListOp.traverse "qiskit.aqua.operators.list_ops.ListOp.traverse")                                     | Apply the convert\_fn to each node in the oplist.                                                                                                                             |

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

Indicates whether the ListOp or subclass is distributive under composition. ListOp and SummedOp are, meaning that (opv @ op) = (opv\[0] @ op + opv\[1] @ op) (using plus for SummedOp, list for ListOp, etc.), while ComposedOp and TensoredOp do not behave this way.

**Return type**

`bool`

**Returns**

A bool indicating whether the ListOp is distributive under composition.

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
