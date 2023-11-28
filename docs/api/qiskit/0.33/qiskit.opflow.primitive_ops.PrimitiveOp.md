# PrimitiveOp[¶](#primitiveop "Permalink to this headline")

<span id="undefined" />

`PrimitiveOp(primitive, coeff=1.0)`

Bases: `qiskit.opflow.operator_base.OperatorBase`

A class for representing basic Operators, backed by Operator primitives from Terra. This class (and inheritors) primarily serves to allow the underlying primitives to “flow” - i.e. interoperability and adherence to the Operator formalism - while the core computational logic mostly remains in the underlying primitives. For example, we would not produce an interface in Terra in which `QuantumCircuit1 + QuantumCircuit2` equaled the Operator sum of the circuit unitaries, rather than simply appending the circuits. However, within the Operator flow summing the unitaries is the expected behavior.

Note that all mathematical methods are not in-place, meaning that they return a new object, but the underlying primitives are not copied.

**Parameters**

*   **primitive** (`Union`\[`QuantumCircuit`, `Operator`, `Pauli`, `SparsePauliOp`, `OperatorBase`]) – The operator primitive being wrapped.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive.

## Methods Defined Here

|                                                                                                                                                                                                        |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.PrimitiveOp.add#qiskit.opflow.primitive_ops.PrimitiveOp.add "qiskit.opflow.primitive_ops.PrimitiveOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.opflow.primitive_ops.PrimitiveOp.adjoint#qiskit.opflow.primitive_ops.PrimitiveOp.adjoint "qiskit.opflow.primitive_ops.PrimitiveOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.opflow.primitive_ops.PrimitiveOp.assign_parameters#qiskit.opflow.primitive_ops.PrimitiveOp.assign_parameters "qiskit.opflow.primitive_ops.PrimitiveOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`compose`](qiskit.opflow.primitive_ops.PrimitiveOp.compose#qiskit.opflow.primitive_ops.PrimitiveOp.compose "qiskit.opflow.primitive_ops.PrimitiveOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`equals`](qiskit.opflow.primitive_ops.PrimitiveOp.equals#qiskit.opflow.primitive_ops.PrimitiveOp.equals "qiskit.opflow.primitive_ops.PrimitiveOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.opflow.primitive_ops.PrimitiveOp.eval#qiskit.opflow.primitive_ops.PrimitiveOp.eval "qiskit.opflow.primitive_ops.PrimitiveOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`exp_i`](qiskit.opflow.primitive_ops.PrimitiveOp.exp_i#qiskit.opflow.primitive_ops.PrimitiveOp.exp_i "qiskit.opflow.primitive_ops.PrimitiveOp.exp_i")                                                 | Return Operator exponentiation, equaling e^(-i \* op)                                                                                                                         |
| [`log_i`](qiskit.opflow.primitive_ops.PrimitiveOp.log_i#qiskit.opflow.primitive_ops.PrimitiveOp.log_i "qiskit.opflow.primitive_ops.PrimitiveOp.log_i")                                                 | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`mul`](qiskit.opflow.primitive_ops.PrimitiveOp.mul#qiskit.opflow.primitive_ops.PrimitiveOp.mul "qiskit.opflow.primitive_ops.PrimitiveOp.mul")                                                         | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`permute`](qiskit.opflow.primitive_ops.PrimitiveOp.permute#qiskit.opflow.primitive_ops.PrimitiveOp.permute "qiskit.opflow.primitive_ops.PrimitiveOp.permute")                                         | Permutes the qubits of the operator.                                                                                                                                          |
| [`primitive_strings`](qiskit.opflow.primitive_ops.PrimitiveOp.primitive_strings#qiskit.opflow.primitive_ops.PrimitiveOp.primitive_strings "qiskit.opflow.primitive_ops.PrimitiveOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.opflow.primitive_ops.PrimitiveOp.reduce#qiskit.opflow.primitive_ops.PrimitiveOp.reduce "qiskit.opflow.primitive_ops.PrimitiveOp.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.opflow.primitive_ops.PrimitiveOp.tensor#qiskit.opflow.primitive_ops.PrimitiveOp.tensor "qiskit.opflow.primitive_ops.PrimitiveOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.opflow.primitive_ops.PrimitiveOp.tensorpower#qiskit.opflow.primitive_ops.PrimitiveOp.tensorpower "qiskit.opflow.primitive_ops.PrimitiveOp.tensorpower")                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit`](qiskit.opflow.primitive_ops.PrimitiveOp.to_circuit#qiskit.opflow.primitive_ops.PrimitiveOp.to_circuit "qiskit.opflow.primitive_ops.PrimitiveOp.to_circuit")                             | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`to_circuit_op`](qiskit.opflow.primitive_ops.PrimitiveOp.to_circuit_op#qiskit.opflow.primitive_ops.PrimitiveOp.to_circuit_op "qiskit.opflow.primitive_ops.PrimitiveOp.to_circuit_op")                 | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`to_instruction`](qiskit.opflow.primitive_ops.PrimitiveOp.to_instruction#qiskit.opflow.primitive_ops.PrimitiveOp.to_instruction "qiskit.opflow.primitive_ops.PrimitiveOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`to_matrix`](qiskit.opflow.primitive_ops.PrimitiveOp.to_matrix#qiskit.opflow.primitive_ops.PrimitiveOp.to_matrix "qiskit.opflow.primitive_ops.PrimitiveOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.opflow.primitive_ops.PrimitiveOp.to_matrix_op#qiskit.opflow.primitive_ops.PrimitiveOp.to_matrix_op "qiskit.opflow.primitive_ops.PrimitiveOp.to_matrix_op")                     | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`to_pauli_op`](qiskit.opflow.primitive_ops.PrimitiveOp.to_pauli_op#qiskit.opflow.primitive_ops.PrimitiveOp.to_pauli_op "qiskit.opflow.primitive_ops.PrimitiveOp.to_pauli_op")                         | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |

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
