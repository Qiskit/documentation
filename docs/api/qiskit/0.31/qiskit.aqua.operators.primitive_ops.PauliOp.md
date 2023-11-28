# PauliOp

<span id="undefined" />

`PauliOp(primitive, coeff=1.0)`

Bases: `qiskit.aqua.operators.primitive_ops.primitive_op.PrimitiveOp`

Class for Operators backed by Terra’s `Pauli` module.

**Parameters**

*   **primitive** (`Pauli`) – The Pauli which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`]) – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

## Methods

|                                                                                                                                                                                                                    |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.primitive_ops.PauliOp.add#qiskit.aqua.operators.primitive_ops.PauliOp.add "qiskit.aqua.operators.primitive_ops.PauliOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.primitive_ops.PauliOp.adjoint#qiskit.aqua.operators.primitive_ops.PauliOp.adjoint "qiskit.aqua.operators.primitive_ops.PauliOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.primitive_ops.PauliOp.assign_parameters#qiskit.aqua.operators.primitive_ops.PauliOp.assign_parameters "qiskit.aqua.operators.primitive_ops.PauliOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.primitive_ops.PauliOp.bind_parameters#qiskit.aqua.operators.primitive_ops.PauliOp.bind_parameters "qiskit.aqua.operators.primitive_ops.PauliOp.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`commutes`](qiskit.aqua.operators.primitive_ops.PauliOp.commutes#qiskit.aqua.operators.primitive_ops.PauliOp.commutes "qiskit.aqua.operators.primitive_ops.PauliOp.commutes")                                     | Returns whether self commutes with other\_op.                                                                                                                                 |
| [`compose`](qiskit.aqua.operators.primitive_ops.PauliOp.compose#qiskit.aqua.operators.primitive_ops.PauliOp.compose "qiskit.aqua.operators.primitive_ops.PauliOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.aqua.operators.primitive_ops.PauliOp.equals#qiskit.aqua.operators.primitive_ops.PauliOp.equals "qiskit.aqua.operators.primitive_ops.PauliOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.primitive_ops.PauliOp.eval#qiskit.aqua.operators.primitive_ops.PauliOp.eval "qiskit.aqua.operators.primitive_ops.PauliOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.aqua.operators.primitive_ops.PauliOp.exp_i#qiskit.aqua.operators.primitive_ops.PauliOp.exp_i "qiskit.aqua.operators.primitive_ops.PauliOp.exp_i")                                                 | Return a `CircuitOp` equivalent to e^-iH for this operator H.                                                                                                                 |
| [`log_i`](qiskit.aqua.operators.primitive_ops.PauliOp.log_i#qiskit.aqua.operators.primitive_ops.PauliOp.log_i "qiskit.aqua.operators.primitive_ops.PauliOp.log_i")                                                 | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.aqua.operators.primitive_ops.PauliOp.mul#qiskit.aqua.operators.primitive_ops.PauliOp.mul "qiskit.aqua.operators.primitive_ops.PauliOp.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.primitive_ops.PauliOp.neg#qiskit.aqua.operators.primitive_ops.PauliOp.neg "qiskit.aqua.operators.primitive_ops.PauliOp.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.primitive_ops.PauliOp.permute#qiskit.aqua.operators.primitive_ops.PauliOp.permute "qiskit.aqua.operators.primitive_ops.PauliOp.permute")                                         | Permutes the sequence of Pauli matrices.                                                                                                                                      |
| [`power`](qiskit.aqua.operators.primitive_ops.PauliOp.power#qiskit.aqua.operators.primitive_ops.PauliOp.power "qiskit.aqua.operators.primitive_ops.PauliOp.power")                                                 | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.aqua.operators.primitive_ops.PauliOp.primitive_strings#qiskit.aqua.operators.primitive_ops.PauliOp.primitive_strings "qiskit.aqua.operators.primitive_ops.PauliOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.primitive_ops.PauliOp.reduce#qiskit.aqua.operators.primitive_ops.PauliOp.reduce "qiskit.aqua.operators.primitive_ops.PauliOp.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.aqua.operators.primitive_ops.PauliOp.tensor#qiskit.aqua.operators.primitive_ops.PauliOp.tensor "qiskit.aqua.operators.primitive_ops.PauliOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.primitive_ops.PauliOp.tensorpower#qiskit.aqua.operators.primitive_ops.PauliOp.tensorpower "qiskit.aqua.operators.primitive_ops.PauliOp.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit`](qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit#qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit "qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit")                             | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`to_circuit_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit_op#qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit_op")                 | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`to_instruction`](qiskit.aqua.operators.primitive_ops.PauliOp.to_instruction#qiskit.aqua.operators.primitive_ops.PauliOp.to_instruction "qiskit.aqua.operators.primitive_ops.PauliOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`to_legacy_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_legacy_op#qiskit.aqua.operators.primitive_ops.PauliOp.to_legacy_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix#qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix "qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix_op#qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix_op")                     | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`to_pauli_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_pauli_op#qiskit.aqua.operators.primitive_ops.PauliOp.to_pauli_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_pauli_op")                         | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`to_spmatrix`](qiskit.aqua.operators.primitive_ops.PauliOp.to_spmatrix#qiskit.aqua.operators.primitive_ops.PauliOp.to_spmatrix "qiskit.aqua.operators.primitive_ops.PauliOp.to_spmatrix")                         | Returns SciPy sparse matrix representation of the Operator.                                                                                                                   |

## Attributes

<span id="undefined" />

### ENABLE\_DEPRECATION

`= True`

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`int`, `float`, `complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### parameters

<span id="undefined" />

### primitive

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[`Instruction`, `QuantumCircuit`, `List`, `ndarray`, `spmatrix`, `Operator`, `Pauli`]

**Returns**

The primitive object.
