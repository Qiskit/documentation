---
title: StateFn
description: API reference for qiskit.aqua.operators.state_fns.StateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.state_fns.StateFn
---

# StateFn

<span id="qiskit.aqua.operators.state_fns.StateFn" />

`StateFn(primitive=None, coeff=1.0, is_measurement=False)`

A class for representing state functions and measurements.

State functions are defined to be complex functions over a single binary string (as compared to an operator, which is defined as a function over two binary strings, or a function taking a binary function to another binary function). This function may be called by the eval() method.

Measurements are defined to be functionals over StateFns, taking them to real values. Generally, this real value is interpreted to represent the probability of some classical state (binary string) being observed from a probabilistic or quantum system represented by a StateFn. This leads to the equivalent definition, which is that a measurement m is a function over binary strings producing StateFns, such that the probability of measuring a given binary string b from a system with StateFn f is equal to the inner product between f and m(b).

NOTE: State functions here are not restricted to wave functions, as there is no requirement of normalization.

**Parameters**

*   **primitive** (`Union`\[`str`, `dict`, [`Result`](qiskit.result.Result "qiskit.result.result.Result"), `list`, `ndarray`, [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector"), [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction"), [`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), `None`]) – The primitive which defines the behavior of the underlying State function.
*   **coeff** (`Union`\[`int`, `float`, `complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient by which the state function is multiplied.
*   **is\_measurement** (`bool`) – Whether the StateFn is a measurement operator

## Attributes

|                                                                                                                                             |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`StateFn.coeff`](qiskit.aqua.operators.state_fns.StateFn.coeff "qiskit.aqua.operators.state_fns.StateFn.coeff")                            | A coefficient by which the state function is multiplied.                   |
| [`StateFn.is_measurement`](qiskit.aqua.operators.state_fns.StateFn.is_measurement "qiskit.aqua.operators.state_fns.StateFn.is_measurement") | Whether the StateFn object is a measurement Operator.                      |
| [`StateFn.num_qubits`](qiskit.aqua.operators.state_fns.StateFn.num_qubits "qiskit.aqua.operators.state_fns.StateFn.num_qubits")             | The number of qubits over which the Operator is defined.                   |
| [`StateFn.primitive`](qiskit.aqua.operators.state_fns.StateFn.primitive "qiskit.aqua.operators.state_fns.StateFn.primitive")                | The primitive which defines the behavior of the underlying State function. |

## Methods

|                                                                                                                                                                   |                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`StateFn.__mul__`](qiskit.aqua.operators.state_fns.StateFn.__mul__ "qiskit.aqua.operators.state_fns.StateFn.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |
| [`StateFn.add`](qiskit.aqua.operators.state_fns.StateFn.add "qiskit.aqua.operators.state_fns.StateFn.add")(other)                                                 | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`StateFn.adjoint`](qiskit.aqua.operators.state_fns.StateFn.adjoint "qiskit.aqua.operators.state_fns.StateFn.adjoint")()                                          | Return a new Operator equal to the Operator’s adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`StateFn.assign_parameters`](qiskit.aqua.operators.state_fns.StateFn.assign_parameters "qiskit.aqua.operators.state_fns.StateFn.assign_parameters")(param\_dict) | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`StateFn.bind_parameters`](qiskit.aqua.operators.state_fns.StateFn.bind_parameters "qiskit.aqua.operators.state_fns.StateFn.bind_parameters")(param\_dict)       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`StateFn.compose`](qiskit.aqua.operators.state_fns.StateFn.compose "qiskit.aqua.operators.state_fns.StateFn.compose")(other)                                     | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                      |
| [`StateFn.equals`](qiskit.aqua.operators.state_fns.StateFn.equals "qiskit.aqua.operators.state_fns.StateFn.equals")(other)                                        | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`StateFn.eval`](qiskit.aqua.operators.state_fns.StateFn.eval "qiskit.aqua.operators.state_fns.StateFn.eval")(\[front])                                           | Evaluate the Operator’s underlying function, either on a binary string or another Operator.                                                                                   |
| [`StateFn.mul`](qiskit.aqua.operators.state_fns.StateFn.mul "qiskit.aqua.operators.state_fns.StateFn.mul")(scalar)                                                | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra’s `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`StateFn.neg`](qiskit.aqua.operators.state_fns.StateFn.neg "qiskit.aqua.operators.state_fns.StateFn.neg")()                                                      | Return the Operator’s negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`StateFn.power`](qiskit.aqua.operators.state_fns.StateFn.power "qiskit.aqua.operators.state_fns.StateFn.power")(exponent)                                        | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                     |
| [`StateFn.primitive_strings`](qiskit.aqua.operators.state_fns.StateFn.primitive_strings "qiskit.aqua.operators.state_fns.StateFn.primitive_strings")()            | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`StateFn.reduce`](qiskit.aqua.operators.state_fns.StateFn.reduce "qiskit.aqua.operators.state_fns.StateFn.reduce")()                                             | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`StateFn.sample`](qiskit.aqua.operators.state_fns.StateFn.sample "qiskit.aqua.operators.state_fns.StateFn.sample")(\[shots, massive, …])                         | Sample the state function as a normalized probability distribution.                                                                                                           |
| [`StateFn.tensor`](qiskit.aqua.operators.state_fns.StateFn.tensor "qiskit.aqua.operators.state_fns.StateFn.tensor")(other)                                        | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`StateFn.tensorpower`](qiskit.aqua.operators.state_fns.StateFn.tensorpower "qiskit.aqua.operators.state_fns.StateFn.tensorpower")(other)                         | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`StateFn.to_density_matrix`](qiskit.aqua.operators.state_fns.StateFn.to_density_matrix "qiskit.aqua.operators.state_fns.StateFn.to_density_matrix")(\[massive])  | Return matrix representing product of StateFn evaluated on pairs of basis states.                                                                                             |
| [`StateFn.to_legacy_op`](qiskit.aqua.operators.state_fns.StateFn.to_legacy_op "qiskit.aqua.operators.state_fns.StateFn.to_legacy_op")(\[massive])                 | Attempt to return the Legacy Operator representation of the Operator.                                                                                                         |
| [`StateFn.to_matrix`](qiskit.aqua.operators.state_fns.StateFn.to_matrix "qiskit.aqua.operators.state_fns.StateFn.to_matrix")(\[massive])                          | Return NumPy representation of the Operator.                                                                                                                                  |
| [`StateFn.to_matrix_op`](qiskit.aqua.operators.state_fns.StateFn.to_matrix_op "qiskit.aqua.operators.state_fns.StateFn.to_matrix_op")(\[massive])                 | Return a `VectorStateFn` for this `StateFn`.                                                                                                                                  |
| [`StateFn.traverse`](qiskit.aqua.operators.state_fns.StateFn.traverse "qiskit.aqua.operators.state_fns.StateFn.traverse")(convert\_fn\[, coeff])                  | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                        |
| [`StateFn.__mul__`](qiskit.aqua.operators.state_fns.StateFn.__mul__ "qiskit.aqua.operators.state_fns.StateFn.__mul__")(other)                                     | Overload `*` for Operator scalar multiplication.                                                                                                                              |

