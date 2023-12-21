---
title: DictStateFn
description: API reference for qiskit.aqua.operators.state_fns.DictStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.state_fns.DictStateFn
---

# DictStateFn

<span id="qiskit.aqua.operators.state_fns.DictStateFn" />

`DictStateFn(primitive=None, coeff=1.0, is_measurement=False)`

A class for state functions and measurements which are defined by a lookup table, stored in a dict.

**Parameters**

*   **primitive** (`Union`\[`str`, `dict`, [`Result`](qiskit.result.Result "qiskit.result.result.Result"), `None`]) – The dict, single bitstring (if defining a basis sate), or Qiskit Result, which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient by which to multiply the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator.

**Raises**

**TypeError** – invalid parameters.

## Attributes

|                                                                                                                                                         |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`DictStateFn.coeff`](qiskit.aqua.operators.state_fns.DictStateFn.coeff "qiskit.aqua.operators.state_fns.DictStateFn.coeff")                            | A coefficient by which the state function is multiplied.                   |
| [`DictStateFn.is_measurement`](qiskit.aqua.operators.state_fns.DictStateFn.is_measurement "qiskit.aqua.operators.state_fns.DictStateFn.is_measurement") | Whether the StateFn object is a measurement Operator.                      |
| [`DictStateFn.num_qubits`](qiskit.aqua.operators.state_fns.DictStateFn.num_qubits "qiskit.aqua.operators.state_fns.DictStateFn.num_qubits")             | The number of qubits over which the Operator is defined.                   |
| [`DictStateFn.primitive`](qiskit.aqua.operators.state_fns.DictStateFn.primitive "qiskit.aqua.operators.state_fns.DictStateFn.primitive")                | The primitive which defines the behavior of the underlying State function. |

## Methods

|                                                                                                                                                                               |                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`DictStateFn.__mul__`](qiskit.aqua.operators.state_fns.DictStateFn.__mul__ "qiskit.aqua.operators.state_fns.DictStateFn.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`DictStateFn.add`](qiskit.aqua.operators.state_fns.DictStateFn.add "qiskit.aqua.operators.state_fns.DictStateFn.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`DictStateFn.adjoint`](qiskit.aqua.operators.state_fns.DictStateFn.adjoint "qiskit.aqua.operators.state_fns.DictStateFn.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`DictStateFn.assign_parameters`](qiskit.aqua.operators.state_fns.DictStateFn.assign_parameters "qiskit.aqua.operators.state_fns.DictStateFn.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`DictStateFn.bind_parameters`](qiskit.aqua.operators.state_fns.DictStateFn.bind_parameters "qiskit.aqua.operators.state_fns.DictStateFn.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`DictStateFn.compose`](qiskit.aqua.operators.state_fns.DictStateFn.compose "qiskit.aqua.operators.state_fns.DictStateFn.compose")(other)                                     | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                      |
| [`DictStateFn.equals`](qiskit.aqua.operators.state_fns.DictStateFn.equals "qiskit.aqua.operators.state_fns.DictStateFn.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`DictStateFn.eval`](qiskit.aqua.operators.state_fns.DictStateFn.eval "qiskit.aqua.operators.state_fns.DictStateFn.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`DictStateFn.mul`](qiskit.aqua.operators.state_fns.DictStateFn.mul "qiskit.aqua.operators.state_fns.DictStateFn.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`DictStateFn.neg`](qiskit.aqua.operators.state_fns.DictStateFn.neg "qiskit.aqua.operators.state_fns.DictStateFn.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`DictStateFn.power`](qiskit.aqua.operators.state_fns.DictStateFn.power "qiskit.aqua.operators.state_fns.DictStateFn.power")(exponent)                                        | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                     |
| [`DictStateFn.primitive_strings`](qiskit.aqua.operators.state_fns.DictStateFn.primitive_strings "qiskit.aqua.operators.state_fns.DictStateFn.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`DictStateFn.reduce`](qiskit.aqua.operators.state_fns.DictStateFn.reduce "qiskit.aqua.operators.state_fns.DictStateFn.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`DictStateFn.sample`](qiskit.aqua.operators.state_fns.DictStateFn.sample "qiskit.aqua.operators.state_fns.DictStateFn.sample")(\[shots, massive, …])                         | Sample the state function as a normalized probability distribution.                                                                                                           |
| [`DictStateFn.tensor`](qiskit.aqua.operators.state_fns.DictStateFn.tensor "qiskit.aqua.operators.state_fns.DictStateFn.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`DictStateFn.tensorpower`](qiskit.aqua.operators.state_fns.DictStateFn.tensorpower "qiskit.aqua.operators.state_fns.DictStateFn.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`DictStateFn.to_circuit_op`](qiskit.aqua.operators.state_fns.DictStateFn.to_circuit_op "qiskit.aqua.operators.state_fns.DictStateFn.to_circuit_op")()                        | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                        |
| [`DictStateFn.to_density_matrix`](qiskit.aqua.operators.state_fns.DictStateFn.to_density_matrix "qiskit.aqua.operators.state_fns.DictStateFn.to_density_matrix")(\[massive])  | Return matrix representing product of StateFn evaluated on pairs of basis states.                                                                                             |
| [`DictStateFn.to_legacy_op`](qiskit.aqua.operators.state_fns.DictStateFn.to_legacy_op "qiskit.aqua.operators.state_fns.DictStateFn.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`DictStateFn.to_matrix`](qiskit.aqua.operators.state_fns.DictStateFn.to_matrix "qiskit.aqua.operators.state_fns.DictStateFn.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`DictStateFn.to_matrix_op`](qiskit.aqua.operators.state_fns.DictStateFn.to_matrix_op "qiskit.aqua.operators.state_fns.DictStateFn.to_matrix_op")(\[massive])                 | Return a `VectorStateFn` for this `StateFn`.                                                                                                                                  |
| [`DictStateFn.to_spmatrix`](qiskit.aqua.operators.state_fns.DictStateFn.to_spmatrix "qiskit.aqua.operators.state_fns.DictStateFn.to_spmatrix")()                              | Same as to\_matrix, but returns csr sparse matrix.                                                                                                                            |
| [`DictStateFn.traverse`](qiskit.aqua.operators.state_fns.DictStateFn.traverse "qiskit.aqua.operators.state_fns.DictStateFn.traverse")(convert\_fn\[, coeff])                  | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                        |
| [`DictStateFn.__mul__`](qiskit.aqua.operators.state_fns.DictStateFn.__mul__ "qiskit.aqua.operators.state_fns.DictStateFn.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

