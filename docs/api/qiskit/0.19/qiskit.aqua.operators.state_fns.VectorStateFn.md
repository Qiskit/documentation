---
title: VectorStateFn
description: API reference for qiskit.aqua.operators.state_fns.VectorStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.state_fns.VectorStateFn
---

# VectorStateFn

<span id="qiskit.aqua.operators.state_fns.VectorStateFn" />

`VectorStateFn(primitive=None, coeff=1.0, is_measurement=False)`

A class for state functions and measurements which are defined in vector representation, and stored using Terra’s `Statevector` class.

**Parameters**

*   **primitive** (`Union`\[`list`, `ndarray`, [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector"), `None`]) – The `Statevector`, NumPy array, or list, which defines the behavior of the underlying function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient multiplying the state function.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Attributes

|                                                                                                                                                               |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`VectorStateFn.coeff`](qiskit.aqua.operators.state_fns.VectorStateFn.coeff "qiskit.aqua.operators.state_fns.VectorStateFn.coeff")                            | A coefficient by which the state function is multiplied.                   |
| [`VectorStateFn.is_measurement`](qiskit.aqua.operators.state_fns.VectorStateFn.is_measurement "qiskit.aqua.operators.state_fns.VectorStateFn.is_measurement") | Whether the StateFn object is a measurement Operator.                      |
| [`VectorStateFn.num_qubits`](qiskit.aqua.operators.state_fns.VectorStateFn.num_qubits "qiskit.aqua.operators.state_fns.VectorStateFn.num_qubits")             | The number of qubits over which the Operator is defined.                   |
| [`VectorStateFn.primitive`](qiskit.aqua.operators.state_fns.VectorStateFn.primitive "qiskit.aqua.operators.state_fns.VectorStateFn.primitive")                | The primitive which defines the behavior of the underlying State function. |

## Methods

|                                                                                                                                                                                     |                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`VectorStateFn.__mul__`](qiskit.aqua.operators.state_fns.VectorStateFn.__mul__ "qiskit.aqua.operators.state_fns.VectorStateFn.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`VectorStateFn.add`](qiskit.aqua.operators.state_fns.VectorStateFn.add "qiskit.aqua.operators.state_fns.VectorStateFn.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`VectorStateFn.adjoint`](qiskit.aqua.operators.state_fns.VectorStateFn.adjoint "qiskit.aqua.operators.state_fns.VectorStateFn.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`VectorStateFn.assign_parameters`](qiskit.aqua.operators.state_fns.VectorStateFn.assign_parameters "qiskit.aqua.operators.state_fns.VectorStateFn.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`VectorStateFn.bind_parameters`](qiskit.aqua.operators.state_fns.VectorStateFn.bind_parameters "qiskit.aqua.operators.state_fns.VectorStateFn.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`VectorStateFn.compose`](qiskit.aqua.operators.state_fns.VectorStateFn.compose "qiskit.aqua.operators.state_fns.VectorStateFn.compose")(other)                                     | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                      |
| [`VectorStateFn.equals`](qiskit.aqua.operators.state_fns.VectorStateFn.equals "qiskit.aqua.operators.state_fns.VectorStateFn.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`VectorStateFn.eval`](qiskit.aqua.operators.state_fns.VectorStateFn.eval "qiskit.aqua.operators.state_fns.VectorStateFn.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`VectorStateFn.mul`](qiskit.aqua.operators.state_fns.VectorStateFn.mul "qiskit.aqua.operators.state_fns.VectorStateFn.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`VectorStateFn.neg`](qiskit.aqua.operators.state_fns.VectorStateFn.neg "qiskit.aqua.operators.state_fns.VectorStateFn.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`VectorStateFn.power`](qiskit.aqua.operators.state_fns.VectorStateFn.power "qiskit.aqua.operators.state_fns.VectorStateFn.power")(exponent)                                        | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                     |
| [`VectorStateFn.primitive_strings`](qiskit.aqua.operators.state_fns.VectorStateFn.primitive_strings "qiskit.aqua.operators.state_fns.VectorStateFn.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`VectorStateFn.reduce`](qiskit.aqua.operators.state_fns.VectorStateFn.reduce "qiskit.aqua.operators.state_fns.VectorStateFn.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`VectorStateFn.sample`](qiskit.aqua.operators.state_fns.VectorStateFn.sample "qiskit.aqua.operators.state_fns.VectorStateFn.sample")(\[shots, massive, …])                         | Sample the state function as a normalized probability distribution.                                                                                                           |
| [`VectorStateFn.tensor`](qiskit.aqua.operators.state_fns.VectorStateFn.tensor "qiskit.aqua.operators.state_fns.VectorStateFn.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`VectorStateFn.tensorpower`](qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower "qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`VectorStateFn.to_circuit_op`](qiskit.aqua.operators.state_fns.VectorStateFn.to_circuit_op "qiskit.aqua.operators.state_fns.VectorStateFn.to_circuit_op")()                        | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                        |
| [`VectorStateFn.to_density_matrix`](qiskit.aqua.operators.state_fns.VectorStateFn.to_density_matrix "qiskit.aqua.operators.state_fns.VectorStateFn.to_density_matrix")(\[massive])  | Return matrix representing product of StateFn evaluated on pairs of basis states.                                                                                             |
| [`VectorStateFn.to_legacy_op`](qiskit.aqua.operators.state_fns.VectorStateFn.to_legacy_op "qiskit.aqua.operators.state_fns.VectorStateFn.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`VectorStateFn.to_matrix`](qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix "qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`VectorStateFn.to_matrix_op`](qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix_op "qiskit.aqua.operators.state_fns.VectorStateFn.to_matrix_op")(\[massive])                 | Return a `VectorStateFn` for this `StateFn`.                                                                                                                                  |
| [`VectorStateFn.traverse`](qiskit.aqua.operators.state_fns.VectorStateFn.traverse "qiskit.aqua.operators.state_fns.VectorStateFn.traverse")(convert\_fn\[, coeff])                  | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                        |
| [`VectorStateFn.__mul__`](qiskit.aqua.operators.state_fns.VectorStateFn.__mul__ "qiskit.aqua.operators.state_fns.VectorStateFn.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

