---
title: StateFn
description: API reference for qiskit.opflow.state_fns.StateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.StateFn
---

# StateFn

<span id="qiskit.opflow.state_fns.StateFn" />

`StateFn(primitive=None, coeff=1.0, is_measurement=False)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/state_fns/state_fn.py "view source code")

Bases: [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

Deprecated: A class for representing state functions and measurements.

State functions are defined to be complex functions over a single binary string (as compared to an operator, which is defined as a function over two binary strings, or a function taking a binary function to another binary function). This function may be called by the eval() method.

Measurements are defined to be functionals over StateFns, taking them to real values. Generally, this real value is interpreted to represent the probability of some classical state (binary string) being observed from a probabilistic or quantum system represented by a StateFn. This leads to the equivalent definition, which is that a measurement m is a function over binary strings producing StateFns, such that the probability of measuring a given binary string b from a system with StateFn f is equal to the inner product between f and m(b).

NOTE: State functions here are not restricted to wave functions, as there is no requirement of normalization.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.state_fns.state_fn.StateFn` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** (*str | dict |* [*Result*](qiskit.result.Result "qiskit.result.result.Result")  *| list |*[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)")  *|*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.states.statevector.Statevector")  *|*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")  *|*[*Instruction*](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")  *|*[*OperatorBase*](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")) – The primitive which defines the behavior of the underlying State function.
*   **coeff** (*complex |* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – A coefficient by which the state function is multiplied.
*   **is\_measurement** (*bool*) – Whether the StateFn is a measurement operator

**Return type**

[StateFn](#qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.StateFn")

**Methods Defined Here**

|                                                                                                                              |                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.StateFn#add "qiskit.opflow.state_fns.StateFn.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.opflow.state_fns.StateFn#adjoint "qiskit.opflow.state_fns.StateFn.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.opflow.state_fns.StateFn#assign_parameters "qiskit.opflow.state_fns.StateFn.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`compose`](qiskit.opflow.state_fns.StateFn#compose "qiskit.opflow.state_fns.StateFn.compose")                               | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements.                      |
| [`equals`](qiskit.opflow.state_fns.StateFn#equals "qiskit.opflow.state_fns.StateFn.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.opflow.state_fns.StateFn#eval "qiskit.opflow.state_fns.StateFn.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                                                   |
| [`mul`](qiskit.opflow.state_fns.StateFn#mul "qiskit.opflow.state_fns.StateFn.mul")                                           | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra's `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`permute`](qiskit.opflow.state_fns.StateFn#permute "qiskit.opflow.state_fns.StateFn.permute")                               | Permute the qubits of the state function.                                                                                                                                     |
| [`power`](qiskit.opflow.state_fns.StateFn#power "qiskit.opflow.state_fns.StateFn.power")                                     | Compose with Self Multiple Times, undefined for StateFns.                                                                                                                     |
| [`primitive_strings`](qiskit.opflow.state_fns.StateFn#primitive_strings "qiskit.opflow.state_fns.StateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.opflow.state_fns.StateFn#reduce "qiskit.opflow.state_fns.StateFn.reduce")                                  | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`sample`](qiskit.opflow.state_fns.StateFn#sample "qiskit.opflow.state_fns.StateFn.sample")                                  | Sample the state function as a normalized probability distribution.                                                                                                           |
| [`tensor`](qiskit.opflow.state_fns.StateFn#tensor "qiskit.opflow.state_fns.StateFn.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.opflow.state_fns.StateFn#tensorpower "qiskit.opflow.state_fns.StateFn.tensorpower")                   | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit_op`](qiskit.opflow.state_fns.StateFn#to_circuit_op "qiskit.opflow.state_fns.StateFn.to_circuit_op")             | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`to_density_matrix`](qiskit.opflow.state_fns.StateFn#to_density_matrix "qiskit.opflow.state_fns.StateFn.to_density_matrix") | Return matrix representing product of StateFn evaluated on pairs of basis states.                                                                                             |
| [`to_matrix`](qiskit.opflow.state_fns.StateFn#to_matrix "qiskit.opflow.state_fns.StateFn.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.opflow.state_fns.StateFn#to_matrix_op "qiskit.opflow.state_fns.StateFn.to_matrix_op")                | Return a `VectorStateFn` for this `StateFn`.                                                                                                                                  |
| [`traverse`](qiskit.opflow.state_fns.StateFn#traverse "qiskit.opflow.state_fns.StateFn.traverse")                            | Apply the convert\_fn to the internal primitive if the primitive is an Operator (as in the case of `OperatorStateFn`).                                                        |

## Attributes

<span id="qiskit.opflow.state_fns.StateFn.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.StateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

<span id="qiskit.opflow.state_fns.StateFn.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.state_fns.StateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

<span id="qiskit.opflow.state_fns.StateFn.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.state_fns.StateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.StateFn.primitive" />

### primitive

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.StateFn.settings" />

### settings

Return settings.

