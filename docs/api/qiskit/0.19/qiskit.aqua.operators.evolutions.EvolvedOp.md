---
title: EvolvedOp
description: API reference for qiskit.aqua.operators.evolutions.EvolvedOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.EvolvedOp
---

# EvolvedOp

<span id="qiskit.aqua.operators.evolutions.EvolvedOp" />

`EvolvedOp(primitive, coeff=1.0)`

Class for wrapping Operator Evolutions for compilation (`convert`) by an EvolutionBase method later, essentially acting as a placeholder. Note that EvolvedOp is a weird case of PrimitiveOp. It happens to be that it fits into the PrimitiveOp interface nearly perfectly, and it essentially represents a placeholder for a PrimitiveOp later, even though it doesn’t actually hold a primitive object. We could have chosen for it to be an OperatorBase, but would have ended up copying and pasting a lot of code from PrimitiveOp.

**Parameters**

*   **primitive** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The operator being wrapped to signify evolution later.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression"), `None`]) – A coefficient multiplying the operator

## Attributes

|                                                                                                                                         |                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`EvolvedOp.coeff`](qiskit.aqua.operators.evolutions.EvolvedOp.coeff "qiskit.aqua.operators.evolutions.EvolvedOp.coeff")                | The scalar coefficient multiplying the Operator.                |
| [`EvolvedOp.num_qubits`](qiskit.aqua.operators.evolutions.EvolvedOp.num_qubits "qiskit.aqua.operators.evolutions.EvolvedOp.num_qubits") | The number of qubits over which the Operator is defined.        |
| [`EvolvedOp.primitive`](qiskit.aqua.operators.evolutions.EvolvedOp.primitive "qiskit.aqua.operators.evolutions.EvolvedOp.primitive")    | The primitive defining the underlying function of the Operator. |

## Methods

|                                                                                                                                                                           |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`EvolvedOp.__mul__`](qiskit.aqua.operators.evolutions.EvolvedOp.__mul__ "qiskit.aqua.operators.evolutions.EvolvedOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`EvolvedOp.add`](qiskit.aqua.operators.evolutions.EvolvedOp.add "qiskit.aqua.operators.evolutions.EvolvedOp.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`EvolvedOp.adjoint`](qiskit.aqua.operators.evolutions.EvolvedOp.adjoint "qiskit.aqua.operators.evolutions.EvolvedOp.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`EvolvedOp.assign_parameters`](qiskit.aqua.operators.evolutions.EvolvedOp.assign_parameters "qiskit.aqua.operators.evolutions.EvolvedOp.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`EvolvedOp.bind_parameters`](qiskit.aqua.operators.evolutions.EvolvedOp.bind_parameters "qiskit.aqua.operators.evolutions.EvolvedOp.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`EvolvedOp.compose`](qiskit.aqua.operators.evolutions.EvolvedOp.compose "qiskit.aqua.operators.evolutions.EvolvedOp.compose")(other)                                     | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`EvolvedOp.equals`](qiskit.aqua.operators.evolutions.EvolvedOp.equals "qiskit.aqua.operators.evolutions.EvolvedOp.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`EvolvedOp.eval`](qiskit.aqua.operators.evolutions.EvolvedOp.eval "qiskit.aqua.operators.evolutions.EvolvedOp.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`EvolvedOp.exp_i`](qiskit.aqua.operators.evolutions.EvolvedOp.exp_i "qiskit.aqua.operators.evolutions.EvolvedOp.exp_i")()                                                | Return Operator exponentiation, equaling e^(-i \* op)                                                                                                                         |
| [`EvolvedOp.log_i`](qiskit.aqua.operators.evolutions.EvolvedOp.log_i "qiskit.aqua.operators.evolutions.EvolvedOp.log_i")(\[massive])                                      | Return a `MatrixOp` equivalent to log(H)/-i for this operator H.                                                                                                              |
| [`EvolvedOp.mul`](qiskit.aqua.operators.evolutions.EvolvedOp.mul "qiskit.aqua.operators.evolutions.EvolvedOp.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`EvolvedOp.neg`](qiskit.aqua.operators.evolutions.EvolvedOp.neg "qiskit.aqua.operators.evolutions.EvolvedOp.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`EvolvedOp.power`](qiskit.aqua.operators.evolutions.EvolvedOp.power "qiskit.aqua.operators.evolutions.EvolvedOp.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`EvolvedOp.primitive_strings`](qiskit.aqua.operators.evolutions.EvolvedOp.primitive_strings "qiskit.aqua.operators.evolutions.EvolvedOp.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`EvolvedOp.reduce`](qiskit.aqua.operators.evolutions.EvolvedOp.reduce "qiskit.aqua.operators.evolutions.EvolvedOp.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`EvolvedOp.tensor`](qiskit.aqua.operators.evolutions.EvolvedOp.tensor "qiskit.aqua.operators.evolutions.EvolvedOp.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`EvolvedOp.tensorpower`](qiskit.aqua.operators.evolutions.EvolvedOp.tensorpower "qiskit.aqua.operators.evolutions.EvolvedOp.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`EvolvedOp.to_circuit`](qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit "qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit")()                                 | Returns a `QuantumCircuit` equivalent to this Operator.                                                                                                                       |
| [`EvolvedOp.to_circuit_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_circuit_op")()                        | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`EvolvedOp.to_instruction`](qiskit.aqua.operators.evolutions.EvolvedOp.to_instruction "qiskit.aqua.operators.evolutions.EvolvedOp.to_instruction")(\[massive])           | Returns an `Instruction` equivalent to this Operator.                                                                                                                         |
| [`EvolvedOp.to_legacy_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_legacy_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`EvolvedOp.to_matrix`](qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix "qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`EvolvedOp.to_matrix_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_matrix_op")(\[massive])                 | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`EvolvedOp.to_pauli_op`](qiskit.aqua.operators.evolutions.EvolvedOp.to_pauli_op "qiskit.aqua.operators.evolutions.EvolvedOp.to_pauli_op")(\[massive])                    | Returns a sum of `PauliOp` s equivalent to this Operator.                                                                                                                     |
| [`EvolvedOp.__mul__`](qiskit.aqua.operators.evolutions.EvolvedOp.__mul__ "qiskit.aqua.operators.evolutions.EvolvedOp.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

