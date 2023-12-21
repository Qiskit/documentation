---
title: PrimitiveOp
description: API reference for qiskit.aqua.operators.primitive_ops.PrimitiveOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.primitive_ops.PrimitiveOp
---

# PrimitiveOp

<span id="qiskit.aqua.operators.primitive_ops.PrimitiveOp" />

`PrimitiveOp(primitive=None, coeff=1.0)`

A class for representing basic Operators, backed by Operator primitives from Terra. This class (and inheritors) primarily serves to allow the underlying primitives to “flow” - i.e. interoperability and adherence to the Operator formalism - while the core computational logic mostly remains in the underlying primitives. For example, we would not produce an interface in Terra in which `QuantumCircuit1 + QuantumCircuit2` equaled the Operator sum of the circuit unitaries, rather than simply appending the circuits. However, within the Operator flow summing the unitaries is the expected behavior.

Note that all mathematical methods are not in-place, meaning that they return a new object, but the underlying primitives are not copied.

**Parameters**

*   \*\*(\*\***Instruction** (*primitive*) – MatrixOperator, Pauli): The operator primitive being wrapped.
*   **QuantumCircuit** – MatrixOperator, Pauli): The operator primitive being wrapped.
*   **list** – MatrixOperator, Pauli): The operator primitive being wrapped.
*   **np.ndarray** – MatrixOperator, Pauli): The operator primitive being wrapped.
*   **spmatrix** – MatrixOperator, Pauli): The operator primitive being wrapped.

:param : MatrixOperator, Pauli): The operator primitive being wrapped. :type coeff: `Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `None`] :param coeff: A coefficient multiplying

> the primitive.

## Attributes

|                                                                                                                                                     |                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`PrimitiveOp.coeff`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.coeff "qiskit.aqua.operators.primitive_ops.PrimitiveOp.coeff")                | The scalar coefficient multiplying the Operator.                |
| [`PrimitiveOp.num_qubits`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.num_qubits "qiskit.aqua.operators.primitive_ops.PrimitiveOp.num_qubits") | The number of qubits over which the Operator is defined.        |
| [`PrimitiveOp.primitive`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.primitive "qiskit.aqua.operators.primitive_ops.PrimitiveOp.primitive")    | The primitive defining the underlying function of the Operator. |

## Methods

|                                                                                                                                                                                       |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`PrimitiveOp.__mul__`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.__mul__ "qiskit.aqua.operators.primitive_ops.PrimitiveOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`PrimitiveOp.add`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.add "qiskit.aqua.operators.primitive_ops.PrimitiveOp.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`PrimitiveOp.adjoint`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.adjoint "qiskit.aqua.operators.primitive_ops.PrimitiveOp.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`PrimitiveOp.assign_parameters`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.assign_parameters "qiskit.aqua.operators.primitive_ops.PrimitiveOp.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`PrimitiveOp.bind_parameters`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.bind_parameters "qiskit.aqua.operators.primitive_ops.PrimitiveOp.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`PrimitiveOp.compose`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.compose "qiskit.aqua.operators.primitive_ops.PrimitiveOp.compose")(other)                                     | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`PrimitiveOp.equals`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.equals "qiskit.aqua.operators.primitive_ops.PrimitiveOp.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`PrimitiveOp.eval`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.eval "qiskit.aqua.operators.primitive_ops.PrimitiveOp.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`PrimitiveOp.exp_i`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.exp_i "qiskit.aqua.operators.primitive_ops.PrimitiveOp.exp_i")()                                                | Return Operator exponentiation, equaling e^(-i \* op)                                                                                                                         |
| [`PrimitiveOp.log_i`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.log_i "qiskit.aqua.operators.primitive_ops.PrimitiveOp.log_i")(\[massive])                                      | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`PrimitiveOp.mul`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.mul "qiskit.aqua.operators.primitive_ops.PrimitiveOp.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`PrimitiveOp.neg`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.neg "qiskit.aqua.operators.primitive_ops.PrimitiveOp.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`PrimitiveOp.power`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.power "qiskit.aqua.operators.primitive_ops.PrimitiveOp.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`PrimitiveOp.primitive_strings`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.primitive_strings "qiskit.aqua.operators.primitive_ops.PrimitiveOp.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`PrimitiveOp.reduce`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.reduce "qiskit.aqua.operators.primitive_ops.PrimitiveOp.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`PrimitiveOp.tensor`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.tensor "qiskit.aqua.operators.primitive_ops.PrimitiveOp.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`PrimitiveOp.tensorpower`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.tensorpower "qiskit.aqua.operators.primitive_ops.PrimitiveOp.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`PrimitiveOp.to_circuit`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_circuit "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_circuit")()                                 | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`PrimitiveOp.to_circuit_op`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_circuit_op "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_circuit_op")()                        | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`PrimitiveOp.to_instruction`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_instruction "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_instruction")()                     | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`PrimitiveOp.to_legacy_op`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_legacy_op "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`PrimitiveOp.to_matrix`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_matrix "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`PrimitiveOp.to_matrix_op`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_matrix_op "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_matrix_op")(\[massive])                 | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`PrimitiveOp.to_pauli_op`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_pauli_op "qiskit.aqua.operators.primitive_ops.PrimitiveOp.to_pauli_op")(\[massive])                    | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`PrimitiveOp.__mul__`](qiskit.aqua.operators.primitive_ops.PrimitiveOp.__mul__ "qiskit.aqua.operators.primitive_ops.PrimitiveOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

