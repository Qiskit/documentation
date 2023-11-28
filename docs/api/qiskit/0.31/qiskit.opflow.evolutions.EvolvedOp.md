# EvolvedOp[¶](#evolvedop "Permalink to this headline")

<span id="undefined" />

`EvolvedOp(primitive, coeff=1.0)`

Bases: `qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

Class for wrapping Operator Evolutions for compilation (`convert`) by an EvolutionBase method later, essentially acting as a placeholder. Note that EvolvedOp is a weird case of PrimitiveOp. It happens to be that it fits into the PrimitiveOp interface nearly perfectly, and it essentially represents a placeholder for a PrimitiveOp later, even though it doesn’t actually hold a primitive object. We could have chosen for it to be an OperatorBase, but would have ended up copying and pasting a lot of code from PrimitiveOp.

**Parameters**

*   **primitive** (`OperatorBase`) – The operator being wrapped to signify evolution later.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the operator

## Methods Defined Here

|                                                                                                                                                                                         |                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.evolutions.EvolvedOp.add#qiskit.opflow.evolutions.EvolvedOp.add "qiskit.opflow.evolutions.EvolvedOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                               |
| [`adjoint`](qiskit.opflow.evolutions.EvolvedOp.adjoint#qiskit.opflow.evolutions.EvolvedOp.adjoint "qiskit.opflow.evolutions.EvolvedOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                              |
| [`assign_parameters`](qiskit.opflow.evolutions.EvolvedOp.assign_parameters#qiskit.opflow.evolutions.EvolvedOp.assign_parameters "qiskit.opflow.evolutions.EvolvedOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. |
| [`compose`](qiskit.opflow.evolutions.EvolvedOp.compose#qiskit.opflow.evolutions.EvolvedOp.compose "qiskit.opflow.evolutions.EvolvedOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                             |
| [`equals`](qiskit.opflow.evolutions.EvolvedOp.equals#qiskit.opflow.evolutions.EvolvedOp.equals "qiskit.opflow.evolutions.EvolvedOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                     |
| [`eval`](qiskit.opflow.evolutions.EvolvedOp.eval#qiskit.opflow.evolutions.EvolvedOp.eval "qiskit.opflow.evolutions.EvolvedOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                  |
| [`log_i`](qiskit.opflow.evolutions.EvolvedOp.log_i#qiskit.opflow.evolutions.EvolvedOp.log_i "qiskit.opflow.evolutions.EvolvedOp.log_i")                                                 | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                             |
| [`permute`](qiskit.opflow.evolutions.EvolvedOp.permute#qiskit.opflow.evolutions.EvolvedOp.permute "qiskit.opflow.evolutions.EvolvedOp.permute")                                         | Permutes the qubits of the operator.                                                                                                         |
| [`primitive_strings`](qiskit.opflow.evolutions.EvolvedOp.primitive_strings#qiskit.opflow.evolutions.EvolvedOp.primitive_strings "qiskit.opflow.evolutions.EvolvedOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                 |
| [`reduce`](qiskit.opflow.evolutions.EvolvedOp.reduce#qiskit.opflow.evolutions.EvolvedOp.reduce "qiskit.opflow.evolutions.EvolvedOp.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                           |
| [`tensor`](qiskit.opflow.evolutions.EvolvedOp.tensor#qiskit.opflow.evolutions.EvolvedOp.tensor "qiskit.opflow.evolutions.EvolvedOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                             |
| [`to_instruction`](qiskit.opflow.evolutions.EvolvedOp.to_instruction#qiskit.opflow.evolutions.EvolvedOp.to_instruction "qiskit.opflow.evolutions.EvolvedOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                                                        |
| [`to_matrix`](qiskit.opflow.evolutions.EvolvedOp.to_matrix#qiskit.opflow.evolutions.EvolvedOp.to_matrix "qiskit.opflow.evolutions.EvolvedOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                 |
| [`to_matrix_op`](qiskit.opflow.evolutions.EvolvedOp.to_matrix_op#qiskit.opflow.evolutions.EvolvedOp.to_matrix_op "qiskit.opflow.evolutions.EvolvedOp.to_matrix_op")                     | Returns a `MatrixOp` equivalent to this Operator.                                                                                            |

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

`qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

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
