---
title: CircuitOp
description: API reference for qiskit.opflow.primitive_ops.CircuitOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.CircuitOp
---

# CircuitOp

<span id="qiskit.opflow.primitive_ops.CircuitOp" />

`CircuitOp(primitive, coeff=1.0)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/primitive_ops/circuit_op.py "view source code")

Bases: [`qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Class for Operators backed by Terra’s `QuantumCircuit` module.

**Parameters**

*   **primitive** (`Union`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]) – The QuantumCircuit which defines the
*   **function.** (*behavior of the underlying*) –
*   **coeff** (`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient multiplying the primitive

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

**Methods Defined Here**

|                                                                                                                                          |                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.CircuitOp#add "qiskit.opflow.primitive_ops.CircuitOp.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                               |
| [`adjoint`](qiskit.opflow.primitive_ops.CircuitOp#adjoint "qiskit.opflow.primitive_ops.CircuitOp.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                              |
| [`assign_parameters`](qiskit.opflow.primitive_ops.CircuitOp#assign_parameters "qiskit.opflow.primitive_ops.CircuitOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. |
| [`compose`](qiskit.opflow.primitive_ops.CircuitOp#compose "qiskit.opflow.primitive_ops.CircuitOp.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                             |
| [`equals`](qiskit.opflow.primitive_ops.CircuitOp#equals "qiskit.opflow.primitive_ops.CircuitOp.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                                                     |
| [`eval`](qiskit.opflow.primitive_ops.CircuitOp#eval "qiskit.opflow.primitive_ops.CircuitOp.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                  |
| [`permute`](qiskit.opflow.primitive_ops.CircuitOp#permute "qiskit.opflow.primitive_ops.CircuitOp.permute")                               | Permute the qubits of the circuit.                                                                                                           |
| [`primitive_strings`](qiskit.opflow.primitive_ops.CircuitOp#primitive_strings "qiskit.opflow.primitive_ops.CircuitOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                 |
| [`reduce`](qiskit.opflow.primitive_ops.CircuitOp#reduce "qiskit.opflow.primitive_ops.CircuitOp.reduce")                                  | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                           |
| [`tensor`](qiskit.opflow.primitive_ops.CircuitOp#tensor "qiskit.opflow.primitive_ops.CircuitOp.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                             |
| [`to_circuit`](qiskit.opflow.primitive_ops.CircuitOp#to_circuit "qiskit.opflow.primitive_ops.CircuitOp.to_circuit")                      | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                      |
| [`to_circuit_op`](qiskit.opflow.primitive_ops.CircuitOp#to_circuit_op "qiskit.opflow.primitive_ops.CircuitOp.to_circuit_op")             | Returns a `CircuitOp` equivalent to this Operator.                                                                                           |
| [`to_instruction`](qiskit.opflow.primitive_ops.CircuitOp#to_instruction "qiskit.opflow.primitive_ops.CircuitOp.to_instruction")          | Returns an `Instruction` equivalent to this Operator.                                                                                        |
| [`to_matrix`](qiskit.opflow.primitive_ops.CircuitOp#to_matrix "qiskit.opflow.primitive_ops.CircuitOp.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                 |

## Attributes

<span id="qiskit.opflow.primitive_ops.CircuitOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.CircuitOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.CircuitOp.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.CircuitOp.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.CircuitOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.CircuitOp.primitive" />

### primitive

`qiskit.circuit.quantumcircuit.QuantumCircuit`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.operators.operator.Operator"), [`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli"), [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp"), [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")]

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.CircuitOp.settings" />

### settings

Return operator settings.

**Return type**

`Dict`

