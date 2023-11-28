# MatrixOp[¶](#matrixop "Permalink to this headline")

<span id="undefined" />

`MatrixOp(primitive, coeff=1.0)`

Bases: `qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

Class for Operators represented by matrices, backed by Terra’s `Operator` module.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, `spmatrix`, `Operator`]) – The matrix-like object which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive

**Raises**

*   **TypeError** – invalid parameters.
*   **ValueError** – invalid parameters.

## Methods Defined Here

|                                                                                                                                                                                               |                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.MatrixOp.add#qiskit.opflow.primitive_ops.MatrixOp.add "qiskit.opflow.primitive_ops.MatrixOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                   |
| [`adjoint`](qiskit.opflow.primitive_ops.MatrixOp.adjoint#qiskit.opflow.primitive_ops.MatrixOp.adjoint "qiskit.opflow.primitive_ops.MatrixOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                  |
| [`compose`](qiskit.opflow.primitive_ops.MatrixOp.compose#qiskit.opflow.primitive_ops.MatrixOp.compose "qiskit.opflow.primitive_ops.MatrixOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`. |
| [`equals`](qiskit.opflow.primitive_ops.MatrixOp.equals#qiskit.opflow.primitive_ops.MatrixOp.equals "qiskit.opflow.primitive_ops.MatrixOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                         |
| [`eval`](qiskit.opflow.primitive_ops.MatrixOp.eval#qiskit.opflow.primitive_ops.MatrixOp.eval "qiskit.opflow.primitive_ops.MatrixOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                      |
| [`exp_i`](qiskit.opflow.primitive_ops.MatrixOp.exp_i#qiskit.opflow.primitive_ops.MatrixOp.exp_i "qiskit.opflow.primitive_ops.MatrixOp.exp_i")                                                 | Return a `CircuitOp` equivalent to e^-iH for this operator H                                                     |
| [`permute`](qiskit.opflow.primitive_ops.MatrixOp.permute#qiskit.opflow.primitive_ops.MatrixOp.permute "qiskit.opflow.primitive_ops.MatrixOp.permute")                                         | Creates a new MatrixOp that acts on the permuted qubits.                                                         |
| [`primitive_strings`](qiskit.opflow.primitive_ops.MatrixOp.primitive_strings#qiskit.opflow.primitive_ops.MatrixOp.primitive_strings "qiskit.opflow.primitive_ops.MatrixOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                     |
| [`tensor`](qiskit.opflow.primitive_ops.MatrixOp.tensor#qiskit.opflow.primitive_ops.MatrixOp.tensor "qiskit.opflow.primitive_ops.MatrixOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                 |
| [`to_instruction`](qiskit.opflow.primitive_ops.MatrixOp.to_instruction#qiskit.opflow.primitive_ops.MatrixOp.to_instruction "qiskit.opflow.primitive_ops.MatrixOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                            |
| [`to_matrix`](qiskit.opflow.primitive_ops.MatrixOp.to_matrix#qiskit.opflow.primitive_ops.MatrixOp.to_matrix "qiskit.opflow.primitive_ops.MatrixOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                     |
| [`to_matrix_op`](qiskit.opflow.primitive_ops.MatrixOp.to_matrix_op#qiskit.opflow.primitive_ops.MatrixOp.to_matrix_op "qiskit.opflow.primitive_ops.MatrixOp.to_matrix_op")                     | Returns a `MatrixOp` equivalent to this Operator.                                                                |

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

`qiskit.quantum_info.operators.operator.Operator`

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
