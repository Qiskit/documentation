---
title: MatrixOp
description: API reference for qiskit.aqua.operators.primitive_ops.MatrixOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.primitive_ops.MatrixOp
---

# MatrixOp

<span id="qiskit.aqua.operators.primitive_ops.MatrixOp" />

`MatrixOp(primitive=None, coeff=1.0)`

Class for Operators represented by matrices, backed by Terra’s `Operator` module.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, `spmatrix`, [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.operators.operator.Operator"), `None`]) – The matrix-like object which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `None`]) – A coefficient multiplying the primitive

**Raises**

*   **TypeError** – invalid parameters.
*   **ValueError** – invalid parameters.

## Attributes

|                                                                                                                                            |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`MatrixOp.coeff`](qiskit.aqua.operators.primitive_ops.MatrixOp.coeff "qiskit.aqua.operators.primitive_ops.MatrixOp.coeff")                | The scalar coefficient multiplying the Operator.                |
| [`MatrixOp.num_qubits`](qiskit.aqua.operators.primitive_ops.MatrixOp.num_qubits "qiskit.aqua.operators.primitive_ops.MatrixOp.num_qubits") | The number of qubits over which the Operator is defined.        |
| [`MatrixOp.primitive`](qiskit.aqua.operators.primitive_ops.MatrixOp.primitive "qiskit.aqua.operators.primitive_ops.MatrixOp.primitive")    | The primitive defining the underlying function of the Operator. |

## Methods

|                                                                                                                                                                              |                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`MatrixOp.__mul__`](qiskit.aqua.operators.primitive_ops.MatrixOp.__mul__ "qiskit.aqua.operators.primitive_ops.MatrixOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`MatrixOp.add`](qiskit.aqua.operators.primitive_ops.MatrixOp.add "qiskit.aqua.operators.primitive_ops.MatrixOp.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`MatrixOp.adjoint`](qiskit.aqua.operators.primitive_ops.MatrixOp.adjoint "qiskit.aqua.operators.primitive_ops.MatrixOp.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`MatrixOp.assign_parameters`](qiskit.aqua.operators.primitive_ops.MatrixOp.assign_parameters "qiskit.aqua.operators.primitive_ops.MatrixOp.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`MatrixOp.bind_parameters`](qiskit.aqua.operators.primitive_ops.MatrixOp.bind_parameters "qiskit.aqua.operators.primitive_ops.MatrixOp.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`MatrixOp.compose`](qiskit.aqua.operators.primitive_ops.MatrixOp.compose "qiskit.aqua.operators.primitive_ops.MatrixOp.compose")(other)                                     | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`MatrixOp.equals`](qiskit.aqua.operators.primitive_ops.MatrixOp.equals "qiskit.aqua.operators.primitive_ops.MatrixOp.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`MatrixOp.eval`](qiskit.aqua.operators.primitive_ops.MatrixOp.eval "qiskit.aqua.operators.primitive_ops.MatrixOp.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`MatrixOp.exp_i`](qiskit.aqua.operators.primitive_ops.MatrixOp.exp_i "qiskit.aqua.operators.primitive_ops.MatrixOp.exp_i")()                                                | Return a `CircuitOp` equivalent to e^-iH for this operator H                                                                                                                  |
| [`MatrixOp.log_i`](qiskit.aqua.operators.primitive_ops.MatrixOp.log_i "qiskit.aqua.operators.primitive_ops.MatrixOp.log_i")(\[massive])                                      | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`MatrixOp.mul`](qiskit.aqua.operators.primitive_ops.MatrixOp.mul "qiskit.aqua.operators.primitive_ops.MatrixOp.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`MatrixOp.neg`](qiskit.aqua.operators.primitive_ops.MatrixOp.neg "qiskit.aqua.operators.primitive_ops.MatrixOp.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`MatrixOp.power`](qiskit.aqua.operators.primitive_ops.MatrixOp.power "qiskit.aqua.operators.primitive_ops.MatrixOp.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`MatrixOp.primitive_strings`](qiskit.aqua.operators.primitive_ops.MatrixOp.primitive_strings "qiskit.aqua.operators.primitive_ops.MatrixOp.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`MatrixOp.reduce`](qiskit.aqua.operators.primitive_ops.MatrixOp.reduce "qiskit.aqua.operators.primitive_ops.MatrixOp.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`MatrixOp.tensor`](qiskit.aqua.operators.primitive_ops.MatrixOp.tensor "qiskit.aqua.operators.primitive_ops.MatrixOp.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`MatrixOp.tensorpower`](qiskit.aqua.operators.primitive_ops.MatrixOp.tensorpower "qiskit.aqua.operators.primitive_ops.MatrixOp.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`MatrixOp.to_circuit`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_circuit "qiskit.aqua.operators.primitive_ops.MatrixOp.to_circuit")()                                 | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`MatrixOp.to_circuit_op`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_circuit_op "qiskit.aqua.operators.primitive_ops.MatrixOp.to_circuit_op")()                        | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`MatrixOp.to_instruction`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_instruction "qiskit.aqua.operators.primitive_ops.MatrixOp.to_instruction")()                     | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`MatrixOp.to_legacy_op`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_legacy_op "qiskit.aqua.operators.primitive_ops.MatrixOp.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`MatrixOp.to_matrix`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_matrix "qiskit.aqua.operators.primitive_ops.MatrixOp.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`MatrixOp.to_matrix_op`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_matrix_op "qiskit.aqua.operators.primitive_ops.MatrixOp.to_matrix_op")(\[massive])                 | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`MatrixOp.to_pauli_op`](qiskit.aqua.operators.primitive_ops.MatrixOp.to_pauli_op "qiskit.aqua.operators.primitive_ops.MatrixOp.to_pauli_op")(\[massive])                    | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`MatrixOp.__mul__`](qiskit.aqua.operators.primitive_ops.MatrixOp.__mul__ "qiskit.aqua.operators.primitive_ops.MatrixOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

