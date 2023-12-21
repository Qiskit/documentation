---
title: CircuitOp
description: API reference for qiskit.aqua.operators.primitive_ops.CircuitOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.primitive_ops.CircuitOp
---

# CircuitOp

<span id="qiskit.aqua.operators.primitive_ops.CircuitOp" />

`CircuitOp(primitive=None, coeff=1.0)`

Class for Operators backed by Terra’s `QuantumCircuit` module.

**Parameters**

*   **primitive** (`Union`\[[`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `None`]) – The QuantumCircuit which defines the
*   **function.** (*behavior of the underlying*) –
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `None`]) – A coefficient multiplying the primitive

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

## Attributes

|                                                                                                                                               |                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`CircuitOp.coeff`](qiskit.aqua.operators.primitive_ops.CircuitOp.coeff "qiskit.aqua.operators.primitive_ops.CircuitOp.coeff")                | The scalar coefficient multiplying the Operator.                |
| [`CircuitOp.num_qubits`](qiskit.aqua.operators.primitive_ops.CircuitOp.num_qubits "qiskit.aqua.operators.primitive_ops.CircuitOp.num_qubits") | The number of qubits over which the Operator is defined.        |
| [`CircuitOp.primitive`](qiskit.aqua.operators.primitive_ops.CircuitOp.primitive "qiskit.aqua.operators.primitive_ops.CircuitOp.primitive")    | The primitive defining the underlying function of the Operator. |

## Methods

|                                                                                                                                                                                 |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`CircuitOp.__mul__`](qiskit.aqua.operators.primitive_ops.CircuitOp.__mul__ "qiskit.aqua.operators.primitive_ops.CircuitOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`CircuitOp.add`](qiskit.aqua.operators.primitive_ops.CircuitOp.add "qiskit.aqua.operators.primitive_ops.CircuitOp.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`CircuitOp.adjoint`](qiskit.aqua.operators.primitive_ops.CircuitOp.adjoint "qiskit.aqua.operators.primitive_ops.CircuitOp.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`CircuitOp.assign_parameters`](qiskit.aqua.operators.primitive_ops.CircuitOp.assign_parameters "qiskit.aqua.operators.primitive_ops.CircuitOp.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`CircuitOp.bind_parameters`](qiskit.aqua.operators.primitive_ops.CircuitOp.bind_parameters "qiskit.aqua.operators.primitive_ops.CircuitOp.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`CircuitOp.compose`](qiskit.aqua.operators.primitive_ops.CircuitOp.compose "qiskit.aqua.operators.primitive_ops.CircuitOp.compose")(other)                                     | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`CircuitOp.equals`](qiskit.aqua.operators.primitive_ops.CircuitOp.equals "qiskit.aqua.operators.primitive_ops.CircuitOp.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`CircuitOp.eval`](qiskit.aqua.operators.primitive_ops.CircuitOp.eval "qiskit.aqua.operators.primitive_ops.CircuitOp.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`CircuitOp.exp_i`](qiskit.aqua.operators.primitive_ops.CircuitOp.exp_i "qiskit.aqua.operators.primitive_ops.CircuitOp.exp_i")()                                                | Return Operator exponentiation, equaling e^(-i \* op)                                                                                                                         |
| [`CircuitOp.log_i`](qiskit.aqua.operators.primitive_ops.CircuitOp.log_i "qiskit.aqua.operators.primitive_ops.CircuitOp.log_i")(\[massive])                                      | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`CircuitOp.mul`](qiskit.aqua.operators.primitive_ops.CircuitOp.mul "qiskit.aqua.operators.primitive_ops.CircuitOp.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`CircuitOp.neg`](qiskit.aqua.operators.primitive_ops.CircuitOp.neg "qiskit.aqua.operators.primitive_ops.CircuitOp.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`CircuitOp.permute`](qiskit.aqua.operators.primitive_ops.CircuitOp.permute "qiskit.aqua.operators.primitive_ops.CircuitOp.permute")(permutation)                               | Permute the qubits of the circuit.                                                                                                                                            |
| [`CircuitOp.power`](qiskit.aqua.operators.primitive_ops.CircuitOp.power "qiskit.aqua.operators.primitive_ops.CircuitOp.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`CircuitOp.primitive_strings`](qiskit.aqua.operators.primitive_ops.CircuitOp.primitive_strings "qiskit.aqua.operators.primitive_ops.CircuitOp.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`CircuitOp.reduce`](qiskit.aqua.operators.primitive_ops.CircuitOp.reduce "qiskit.aqua.operators.primitive_ops.CircuitOp.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`CircuitOp.tensor`](qiskit.aqua.operators.primitive_ops.CircuitOp.tensor "qiskit.aqua.operators.primitive_ops.CircuitOp.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`CircuitOp.tensorpower`](qiskit.aqua.operators.primitive_ops.CircuitOp.tensorpower "qiskit.aqua.operators.primitive_ops.CircuitOp.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`CircuitOp.to_circuit`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_circuit "qiskit.aqua.operators.primitive_ops.CircuitOp.to_circuit")()                                 | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`CircuitOp.to_circuit_op`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_circuit_op "qiskit.aqua.operators.primitive_ops.CircuitOp.to_circuit_op")()                        | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`CircuitOp.to_instruction`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_instruction "qiskit.aqua.operators.primitive_ops.CircuitOp.to_instruction")()                     | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`CircuitOp.to_legacy_op`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_legacy_op "qiskit.aqua.operators.primitive_ops.CircuitOp.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`CircuitOp.to_matrix`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_matrix "qiskit.aqua.operators.primitive_ops.CircuitOp.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`CircuitOp.to_matrix_op`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_matrix_op "qiskit.aqua.operators.primitive_ops.CircuitOp.to_matrix_op")(\[massive])                 | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`CircuitOp.to_pauli_op`](qiskit.aqua.operators.primitive_ops.CircuitOp.to_pauli_op "qiskit.aqua.operators.primitive_ops.CircuitOp.to_pauli_op")(\[massive])                    | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`CircuitOp.__mul__`](qiskit.aqua.operators.primitive_ops.CircuitOp.__mul__ "qiskit.aqua.operators.primitive_ops.CircuitOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

