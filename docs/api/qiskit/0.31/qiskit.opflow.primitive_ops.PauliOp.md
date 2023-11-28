# PauliOp

<span id="undefined" />

`PauliOp(primitive, coeff=1.0)`

Bases: `qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

Class for Operators backed by Terra’s `Pauli` module.

**Parameters**

*   **primitive** (`Pauli`) – The Pauli which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

## Methods Defined Here

|                                                                                                                                                                                            |                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.PauliOp.add#qiskit.opflow.primitive_ops.PauliOp.add "qiskit.opflow.primitive_ops.PauliOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                   |
| [`adjoint`](qiskit.opflow.primitive_ops.PauliOp.adjoint#qiskit.opflow.primitive_ops.PauliOp.adjoint "qiskit.opflow.primitive_ops.PauliOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                  |
| [`compose`](qiskit.opflow.primitive_ops.PauliOp.compose#qiskit.opflow.primitive_ops.PauliOp.compose "qiskit.opflow.primitive_ops.PauliOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`. |
| [`equals`](qiskit.opflow.primitive_ops.PauliOp.equals#qiskit.opflow.primitive_ops.PauliOp.equals "qiskit.opflow.primitive_ops.PauliOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                         |
| [`eval`](qiskit.opflow.primitive_ops.PauliOp.eval#qiskit.opflow.primitive_ops.PauliOp.eval "qiskit.opflow.primitive_ops.PauliOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                      |
| [`exp_i`](qiskit.opflow.primitive_ops.PauliOp.exp_i#qiskit.opflow.primitive_ops.PauliOp.exp_i "qiskit.opflow.primitive_ops.PauliOp.exp_i")                                                 | Return a `CircuitOp` equivalent to e^-iH for this operator H.                                                    |
| [`permute`](qiskit.opflow.primitive_ops.PauliOp.permute#qiskit.opflow.primitive_ops.PauliOp.permute "qiskit.opflow.primitive_ops.PauliOp.permute")                                         | Permutes the sequence of Pauli matrices.                                                                         |
| [`primitive_strings`](qiskit.opflow.primitive_ops.PauliOp.primitive_strings#qiskit.opflow.primitive_ops.PauliOp.primitive_strings "qiskit.opflow.primitive_ops.PauliOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                     |
| [`tensor`](qiskit.opflow.primitive_ops.PauliOp.tensor#qiskit.opflow.primitive_ops.PauliOp.tensor "qiskit.opflow.primitive_ops.PauliOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                 |
| [`to_circuit`](qiskit.opflow.primitive_ops.PauliOp.to_circuit#qiskit.opflow.primitive_ops.PauliOp.to_circuit "qiskit.opflow.primitive_ops.PauliOp.to_circuit")                             | Returns a `QuantumCircuit` equivalent to this Operator.                                                          |
| [`to_instruction`](qiskit.opflow.primitive_ops.PauliOp.to_instruction#qiskit.opflow.primitive_ops.PauliOp.to_instruction "qiskit.opflow.primitive_ops.PauliOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                            |
| [`to_matrix`](qiskit.opflow.primitive_ops.PauliOp.to_matrix#qiskit.opflow.primitive_ops.PauliOp.to_matrix "qiskit.opflow.primitive_ops.PauliOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                     |
| [`to_pauli_op`](qiskit.opflow.primitive_ops.PauliOp.to_pauli_op#qiskit.opflow.primitive_ops.PauliOp.to_pauli_op "qiskit.opflow.primitive_ops.PauliOp.to_pauli_op")                         | Returns a sum of `PauliOp` s equivalent to this Operator.                                                        |
| [`to_spmatrix`](qiskit.opflow.primitive_ops.PauliOp.to_spmatrix#qiskit.opflow.primitive_ops.PauliOp.to_spmatrix "qiskit.opflow.primitive_ops.PauliOp.to_spmatrix")                         | Returns SciPy sparse matrix representation of the Operator.                                                      |

## Attributes

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="undefined" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### parameters

<span id="undefined" />

### primitive

`qiskit.quantum_info.operators.symplectic.pauli.Pauli`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[`QuantumCircuit`, `Operator`, `Pauli`, `SparsePauliOp`, `OperatorBase`]

**Returns**

The primitive object.

<span id="undefined" />

### settings

Return operator settings.

**Return type**

`Dict`
