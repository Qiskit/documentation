---
title: PauliOp
description: API reference for qiskit.aqua.operators.primitive_ops.PauliOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.primitive_ops.PauliOp
---

# PauliOp

<span id="qiskit.aqua.operators.primitive_ops.PauliOp" />

`PauliOp(primitive=None, coeff=1.0)`

Class for Operators backed by Terra’s `Pauli` module.

**Parameters**

*   **primitive** (`Optional`\[[`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.pauli.Pauli")]) – The Pauli which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `None`]) – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

## Attributes

|                                                                                                                                         |                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`PauliOp.coeff`](qiskit.aqua.operators.primitive_ops.PauliOp.coeff "qiskit.aqua.operators.primitive_ops.PauliOp.coeff")                | The scalar coefficient multiplying the Operator.                |
| [`PauliOp.num_qubits`](qiskit.aqua.operators.primitive_ops.PauliOp.num_qubits "qiskit.aqua.operators.primitive_ops.PauliOp.num_qubits") | The number of qubits over which the Operator is defined.        |
| [`PauliOp.primitive`](qiskit.aqua.operators.primitive_ops.PauliOp.primitive "qiskit.aqua.operators.primitive_ops.PauliOp.primitive")    | The primitive defining the underlying function of the Operator. |

## Methods

|                                                                                                                                                                           |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`PauliOp.__mul__`](qiskit.aqua.operators.primitive_ops.PauliOp.__mul__ "qiskit.aqua.operators.primitive_ops.PauliOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`PauliOp.add`](qiskit.aqua.operators.primitive_ops.PauliOp.add "qiskit.aqua.operators.primitive_ops.PauliOp.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`PauliOp.adjoint`](qiskit.aqua.operators.primitive_ops.PauliOp.adjoint "qiskit.aqua.operators.primitive_ops.PauliOp.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`PauliOp.assign_parameters`](qiskit.aqua.operators.primitive_ops.PauliOp.assign_parameters "qiskit.aqua.operators.primitive_ops.PauliOp.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`PauliOp.bind_parameters`](qiskit.aqua.operators.primitive_ops.PauliOp.bind_parameters "qiskit.aqua.operators.primitive_ops.PauliOp.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`PauliOp.commutes`](qiskit.aqua.operators.primitive_ops.PauliOp.commutes "qiskit.aqua.operators.primitive_ops.PauliOp.commutes")(other\_op)                              | Returns whether self commutes with other\_op.                                                                                                                                 |
| [`PauliOp.compose`](qiskit.aqua.operators.primitive_ops.PauliOp.compose "qiskit.aqua.operators.primitive_ops.PauliOp.compose")(other)                                     | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`PauliOp.equals`](qiskit.aqua.operators.primitive_ops.PauliOp.equals "qiskit.aqua.operators.primitive_ops.PauliOp.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`PauliOp.eval`](qiskit.aqua.operators.primitive_ops.PauliOp.eval "qiskit.aqua.operators.primitive_ops.PauliOp.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`PauliOp.exp_i`](qiskit.aqua.operators.primitive_ops.PauliOp.exp_i "qiskit.aqua.operators.primitive_ops.PauliOp.exp_i")()                                                | Return a `CircuitOp` equivalent to e^-iH for this operator H.                                                                                                                 |
| [`PauliOp.log_i`](qiskit.aqua.operators.primitive_ops.PauliOp.log_i "qiskit.aqua.operators.primitive_ops.PauliOp.log_i")(\[massive])                                      | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`PauliOp.mul`](qiskit.aqua.operators.primitive_ops.PauliOp.mul "qiskit.aqua.operators.primitive_ops.PauliOp.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`PauliOp.neg`](qiskit.aqua.operators.primitive_ops.PauliOp.neg "qiskit.aqua.operators.primitive_ops.PauliOp.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`PauliOp.power`](qiskit.aqua.operators.primitive_ops.PauliOp.power "qiskit.aqua.operators.primitive_ops.PauliOp.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`PauliOp.primitive_strings`](qiskit.aqua.operators.primitive_ops.PauliOp.primitive_strings "qiskit.aqua.operators.primitive_ops.PauliOp.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`PauliOp.reduce`](qiskit.aqua.operators.primitive_ops.PauliOp.reduce "qiskit.aqua.operators.primitive_ops.PauliOp.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`PauliOp.tensor`](qiskit.aqua.operators.primitive_ops.PauliOp.tensor "qiskit.aqua.operators.primitive_ops.PauliOp.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`PauliOp.tensorpower`](qiskit.aqua.operators.primitive_ops.PauliOp.tensorpower "qiskit.aqua.operators.primitive_ops.PauliOp.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`PauliOp.to_circuit`](qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit "qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit")()                                 | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`PauliOp.to_circuit_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_circuit_op")()                        | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`PauliOp.to_instruction`](qiskit.aqua.operators.primitive_ops.PauliOp.to_instruction "qiskit.aqua.operators.primitive_ops.PauliOp.to_instruction")()                     | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`PauliOp.to_legacy_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_legacy_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`PauliOp.to_matrix`](qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix "qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`PauliOp.to_matrix_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_matrix_op")(\[massive])                 | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`PauliOp.to_pauli_op`](qiskit.aqua.operators.primitive_ops.PauliOp.to_pauli_op "qiskit.aqua.operators.primitive_ops.PauliOp.to_pauli_op")(\[massive])                    | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`PauliOp.to_spmatrix`](qiskit.aqua.operators.primitive_ops.PauliOp.to_spmatrix "qiskit.aqua.operators.primitive_ops.PauliOp.to_spmatrix")()                              | Returns SciPy sparse matrix representation of the Operator.                                                                                                                   |
| [`PauliOp.__mul__`](qiskit.aqua.operators.primitive_ops.PauliOp.__mul__ "qiskit.aqua.operators.primitive_ops.PauliOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

