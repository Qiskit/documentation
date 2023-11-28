# EvolvedOp

<span id="undefined" />

`EvolvedOp(primitive, coeff=1.0)`

Bases: `qiskit.aqua.operators.primitive_ops.primitive_op.PrimitiveOp`

Class for wrapping Operator Evolutions for compilation (`convert`) by an EvolutionBase method later, essentially acting as a placeholder. Note that EvolvedOp is a weird case of PrimitiveOp. It happens to be that it fits into the PrimitiveOp interface nearly perfectly, and it essentially represents a placeholder for a PrimitiveOp later, even though it doesn’t actually hold a primitive object. We could have chosen for it to be an OperatorBase, but would have ended up copying and pasting a lot of code from PrimitiveOp.

**Parameters**

*   **primitive** (`OperatorBase`) – The operator being wrapped to signify evolution later.
*   **coeff** (`Union`\[`int`, `float`, `complex`, `ParameterExpression`, `None`]) – A coefficient multiplying the operator

## Methods

|                                                                                                                                                                                                                 |                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.evolutions.EvolvedOp.add#qiskit.aqua.operators.evolutions.EvolvedOp.add "qiskit.aqua.operators.evolutions.EvolvedOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.aqua.operators.evolutions.EvolvedOp.adjoint#qiskit.aqua.operators.evolutions.EvolvedOp.adjoint "qiskit.aqua.operators.evolutions.EvolvedOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.aqua.operators.evolutions.EvolvedOp.assign_parameters#qiskit.aqua.operators.evolutions.EvolvedOp.assign_parameters "qiskit.aqua.operators.evolutions.EvolvedOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.aqua.operators.evolutions.EvolvedOp.bind_parameters#qiskit.aqua.operators.evolutions.EvolvedOp.bind_parameters "qiskit.aqua.operators.evolutions.EvolvedOp.bind_parameters")         | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.aqua.operators.evolutions.EvolvedOp.compose#qiskit.aqua.operators.evolutions.EvolvedOp.compose "qiskit.aqua.operators.evolutions.EvolvedOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.aqua.operators.evolutions.EvolvedOp.equals#qiskit.aqua.operators.evolutions.EvolvedOp.equals "qiskit.aqua.operators.evolutions.EvolvedOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.aqua.operators.evolutions.EvolvedOp.eval#qiskit.aqua.operators.evolutions.EvolvedOp.eval "qiskit.aqua.operators.evolutions.EvolvedOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.aqua.operators.evolutions.EvolvedOp.exp_i#qiskit.aqua.operators.evolutions.EvolvedOp.exp_i "qiskit.aqua.operators.evolutions.EvolvedOp.exp_i")                                                 | Return Operator exponentiation, equaling e^(-i \* op)                                                                                                                         |
| [`log_i`](qiskit.aqua.operators.evolutions.EvolvedOp.log_i#qiskit.aqua.operators.evolutions.EvolvedOp.log_i "qiskit.aqua.operators.evolutions.EvolvedOp.log_i")                                                 | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.aqua.operators.evolutions.EvolvedOp.mul#qiskit.aqua.operators.evolutions.EvolvedOp.mul "qiskit.aqua.operators.evolutions.EvolvedOp.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.aqua.operators.evolutions.EvolvedOp.neg#qiskit.aqua.operators.evolutions.EvolvedOp.neg "qiskit.aqua.operators.evolutions.EvolvedOp.neg")                                                         | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.aqua.operators.evolutions.EvolvedOp.permute#qiskit.aqua.operators.evolutions.EvolvedOp.permute "qiskit.aqua.operators.evolutions.EvolvedOp.permute")                                         | Permutes the qubits of the operator.                                                                                                                                          |
| [`power`](qiskit.aqua.operators.evolutions.EvolvedOp.power#qiskit.aqua.operators.evolutions.EvolvedOp.power "qiskit.aqua.operators.evolutions.EvolvedOp.power")                                                 | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`primitive_strings`](qiskit.aqua.operators.evolutions.EvolvedOp.primitive_strings#qiskit.aqua.operators.evolutions.EvolvedOp.primitive_strings "qiskit.aqua.operators.evolutions.EvolvedOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.aqua.operators.evolutions.EvolvedOp.reduce#qiskit.aqua.operators.evolutions.EvolvedOp.reduce "qiskit.aqua.operators.evolutions.EvolvedOp.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.aqua.operators.evolutions.EvolvedOp.tensor#qiskit.aqua.operators.evolutions.EvolvedOp.tensor "qiskit.aqua.operators.evolutions.EvolvedOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.aqua.operators.evolutions.EvolvedOp.tensorpower#qiskit.aqua.operators.evolutions.EvolvedOp.tensorpower "qiskit.aqua.operators.evolutions.EvolvedOp.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit`](qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit#qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit "qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit")                             | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`to_circuit_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit_op#qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit_op")                 | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`to_instruction`](qiskit.aqua.operators.evolutions.EvolvedOp.to_instruction#qiskit.aqua.operators.evolutions.EvolvedOp.to_instruction "qiskit.aqua.operators.evolutions.EvolvedOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`to_legacy_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_legacy_op#qiskit.aqua.operators.evolutions.EvolvedOp.to_legacy_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_legacy_op")                     | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`to_matrix`](qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix#qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix "qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix_op#qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix_op")                     | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`to_pauli_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_pauli_op#qiskit.aqua.operators.evolutions.EvolvedOp.to_pauli_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_pauli_op")                         | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |

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
