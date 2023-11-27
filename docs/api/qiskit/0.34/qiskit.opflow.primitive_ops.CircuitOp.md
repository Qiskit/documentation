# CircuitOp[¶](#circuitop "Permalink to this headline")

<span id="undefined" />

`CircuitOp(primitive, coeff=1.0)`

Bases: `qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`

Class for Operators backed by Terra’s `QuantumCircuit` module.

**Parameters**

*   **primitive** (`Union`\[`Instruction`, `QuantumCircuit`]) – The QuantumCircuit which defines the
*   **of the underlying function.** (*behavior*) –
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Methods Defined Here

|                                                                                                                                                                                                  |                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.CircuitOp.add#qiskit.opflow.primitive_ops.CircuitOp.add "qiskit.opflow.primitive_ops.CircuitOp.add")                                                         | Return Operator addition of self and other, overloaded by `+`.                                                                               |
| [`adjoint`](qiskit.opflow.primitive_ops.CircuitOp.adjoint#qiskit.opflow.primitive_ops.CircuitOp.adjoint "qiskit.opflow.primitive_ops.CircuitOp.adjoint")                                         | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                              |
| [`assign_parameters`](qiskit.opflow.primitive_ops.CircuitOp.assign_parameters#qiskit.opflow.primitive_ops.CircuitOp.assign_parameters "qiskit.opflow.primitive_ops.CircuitOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. |
| [`compose`](qiskit.opflow.primitive_ops.CircuitOp.compose#qiskit.opflow.primitive_ops.CircuitOp.compose "qiskit.opflow.primitive_ops.CircuitOp.compose")                                         | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                             |
| [`equals`](qiskit.opflow.primitive_ops.CircuitOp.equals#qiskit.opflow.primitive_ops.CircuitOp.equals "qiskit.opflow.primitive_ops.CircuitOp.equals")                                             | Evaluate Equality between Operators, overloaded by `==`.                                                                                     |
| [`eval`](qiskit.opflow.primitive_ops.CircuitOp.eval#qiskit.opflow.primitive_ops.CircuitOp.eval "qiskit.opflow.primitive_ops.CircuitOp.eval")                                                     | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                  |
| [`permute`](qiskit.opflow.primitive_ops.CircuitOp.permute#qiskit.opflow.primitive_ops.CircuitOp.permute "qiskit.opflow.primitive_ops.CircuitOp.permute")                                         | Permute the qubits of the circuit.                                                                                                           |
| [`primitive_strings`](qiskit.opflow.primitive_ops.CircuitOp.primitive_strings#qiskit.opflow.primitive_ops.CircuitOp.primitive_strings "qiskit.opflow.primitive_ops.CircuitOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                 |
| [`reduce`](qiskit.opflow.primitive_ops.CircuitOp.reduce#qiskit.opflow.primitive_ops.CircuitOp.reduce "qiskit.opflow.primitive_ops.CircuitOp.reduce")                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                           |
| [`tensor`](qiskit.opflow.primitive_ops.CircuitOp.tensor#qiskit.opflow.primitive_ops.CircuitOp.tensor "qiskit.opflow.primitive_ops.CircuitOp.tensor")                                             | Return tensor product between self and other, overloaded by `^`.                                                                             |
| [`to_circuit`](qiskit.opflow.primitive_ops.CircuitOp.to_circuit#qiskit.opflow.primitive_ops.CircuitOp.to_circuit "qiskit.opflow.primitive_ops.CircuitOp.to_circuit")                             | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                      |
| [`to_circuit_op`](qiskit.opflow.primitive_ops.CircuitOp.to_circuit_op#qiskit.opflow.primitive_ops.CircuitOp.to_circuit_op "qiskit.opflow.primitive_ops.CircuitOp.to_circuit_op")                 | Returns a `CircuitOp` equivalent to this Operator.                                                                                           |
| [`to_instruction`](qiskit.opflow.primitive_ops.CircuitOp.to_instruction#qiskit.opflow.primitive_ops.CircuitOp.to_instruction "qiskit.opflow.primitive_ops.CircuitOp.to_instruction")             | Returns an `Instruction` equivalent to this Operator.                                                                                        |
| [`to_matrix`](qiskit.opflow.primitive_ops.CircuitOp.to_matrix#qiskit.opflow.primitive_ops.CircuitOp.to_matrix "qiskit.opflow.primitive_ops.CircuitOp.to_matrix")                                 | Return NumPy representation of the Operator.                                                                                                 |

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

`qiskit.circuit.quantumcircuit.QuantumCircuit`

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
