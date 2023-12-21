---
title: OperatorBase
description: API reference for qiskit.aqua.operators.OperatorBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.OperatorBase
---

# OperatorBase

<span id="qiskit.aqua.operators.OperatorBase" />

`OperatorBase`

A base class for all Operators: PrimitiveOps, StateFns, ListOps, etc. Operators are defined as functions which take one complex binary function to another. These complex binary functions are represented by StateFns, which are themselves a special class of Operators taking only the `Zero` StateFn to the complex binary function they represent.

Operators can be used to construct complicated functions and computation, and serve as the building blocks for algorithms in Aqua.

## Attributes

|                                                                                                                            |                                                          |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`OperatorBase.num_qubits`](qiskit.aqua.operators.OperatorBase.num_qubits "qiskit.aqua.operators.OperatorBase.num_qubits") | The number of qubits over which the Operator is defined. |

## Methods

|                                                                                                                                                              |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`OperatorBase.__mul__`](qiskit.aqua.operators.OperatorBase.__mul__ "qiskit.aqua.operators.OperatorBase.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`OperatorBase.add`](qiskit.aqua.operators.OperatorBase.add "qiskit.aqua.operators.OperatorBase.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`OperatorBase.adjoint`](qiskit.aqua.operators.OperatorBase.adjoint "qiskit.aqua.operators.OperatorBase.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`OperatorBase.assign_parameters`](qiskit.aqua.operators.OperatorBase.assign_parameters "qiskit.aqua.operators.OperatorBase.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`OperatorBase.bind_parameters`](qiskit.aqua.operators.OperatorBase.bind_parameters "qiskit.aqua.operators.OperatorBase.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`OperatorBase.compose`](qiskit.aqua.operators.OperatorBase.compose "qiskit.aqua.operators.OperatorBase.compose")(other)                                     | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`OperatorBase.equals`](qiskit.aqua.operators.OperatorBase.equals "qiskit.aqua.operators.OperatorBase.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`OperatorBase.eval`](qiskit.aqua.operators.OperatorBase.eval "qiskit.aqua.operators.OperatorBase.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`OperatorBase.mul`](qiskit.aqua.operators.OperatorBase.mul "qiskit.aqua.operators.OperatorBase.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`OperatorBase.neg`](qiskit.aqua.operators.OperatorBase.neg "qiskit.aqua.operators.OperatorBase.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`OperatorBase.power`](qiskit.aqua.operators.OperatorBase.power "qiskit.aqua.operators.OperatorBase.power")(exponent)                                        | Return Operator composed with self multiple times, overloaded by `**`.                                                                                                        |
| [`OperatorBase.primitive_strings`](qiskit.aqua.operators.OperatorBase.primitive_strings "qiskit.aqua.operators.OperatorBase.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`OperatorBase.reduce`](qiskit.aqua.operators.OperatorBase.reduce "qiskit.aqua.operators.OperatorBase.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`OperatorBase.tensor`](qiskit.aqua.operators.OperatorBase.tensor "qiskit.aqua.operators.OperatorBase.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`OperatorBase.tensorpower`](qiskit.aqua.operators.OperatorBase.tensorpower "qiskit.aqua.operators.OperatorBase.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`OperatorBase.to_legacy_op`](qiskit.aqua.operators.OperatorBase.to_legacy_op "qiskit.aqua.operators.OperatorBase.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`OperatorBase.to_matrix`](qiskit.aqua.operators.OperatorBase.to_matrix "qiskit.aqua.operators.OperatorBase.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |

