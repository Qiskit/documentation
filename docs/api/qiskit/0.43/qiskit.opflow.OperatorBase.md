---
title: OperatorBase
description: API reference for qiskit.opflow.OperatorBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.OperatorBase
---

# OperatorBase

<span id="qiskit.opflow.OperatorBase" />

`OperatorBase`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/operator_base.py "view source code")

Bases: `StarAlgebraMixin`, `TensorMixin`, `ABC`

Deprecated: A base class for all Operators: PrimitiveOps, StateFns, ListOps, etc. Operators are defined as functions which take one complex binary function to another. These complex binary functions are represented by StateFns, which are themselves a special class of Operators taking only the `Zero` StateFn to the complex binary function they represent.

Operators can be used to construct complicated functions and computation, and serve as the building blocks for algorithms.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.operator_base.OperatorBase` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                                    |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.OperatorBase#add "qiskit.opflow.OperatorBase.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                                                                |
| [`adjoint`](qiskit.opflow.OperatorBase#adjoint "qiskit.opflow.OperatorBase.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                                                               |
| [`assign_parameters`](qiskit.opflow.OperatorBase#assign_parameters "qiskit.opflow.OperatorBase.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.                                  |
| [`bind_parameters`](qiskit.opflow.OperatorBase#bind_parameters "qiskit.opflow.OperatorBase.bind_parameters")       | Same as assign\_parameters, but maintained for consistency with QuantumCircuit in Terra (which has both assign\_parameters and bind\_parameters).                             |
| [`compose`](qiskit.opflow.OperatorBase#compose "qiskit.opflow.OperatorBase.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.                                                              |
| [`copy`](qiskit.opflow.OperatorBase#copy "qiskit.opflow.OperatorBase.copy")                                        | Return a deep copy of the Operator.                                                                                                                                           |
| [`equals`](qiskit.opflow.OperatorBase#equals "qiskit.opflow.OperatorBase.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                                                                                      |
| [`eval`](qiskit.opflow.OperatorBase#eval "qiskit.opflow.OperatorBase.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                                                   |
| [`is_hermitian`](qiskit.opflow.OperatorBase#is_hermitian "qiskit.opflow.OperatorBase.is_hermitian")                | Return True if the operator is hermitian.                                                                                                                                     |
| [`mul`](qiskit.opflow.OperatorBase#mul "qiskit.opflow.OperatorBase.mul")                                           | Returns the scalar multiplication of the Operator, overloaded by `*`, including support for Terra's `Parameters`, which can be bound to values later (via `bind_parameters`). |
| [`neg`](qiskit.opflow.OperatorBase#neg "qiskit.opflow.OperatorBase.neg")                                           | Return the Operator's negation, effectively just multiplying by -1.0, overloaded by `-`.                                                                                      |
| [`permute`](qiskit.opflow.OperatorBase#permute "qiskit.opflow.OperatorBase.permute")                               | Permutes the qubits of the operator.                                                                                                                                          |
| [`primitive_strings`](qiskit.opflow.OperatorBase#primitive_strings "qiskit.opflow.OperatorBase.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                  |
| [`reduce`](qiskit.opflow.OperatorBase#reduce "qiskit.opflow.OperatorBase.reduce")                                  | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                                            |
| [`tensor`](qiskit.opflow.OperatorBase#tensor "qiskit.opflow.OperatorBase.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                                                              |
| [`tensorpower`](qiskit.opflow.OperatorBase#tensorpower "qiskit.opflow.OperatorBase.tensorpower")                   | Return tensor product with self multiple times, overloaded by `^`.                                                                                                            |
| [`to_circuit_op`](qiskit.opflow.OperatorBase#to_circuit_op "qiskit.opflow.OperatorBase.to_circuit_op")             | Returns a `CircuitOp` equivalent to this Operator.                                                                                                                            |
| [`to_matrix`](qiskit.opflow.OperatorBase#to_matrix "qiskit.opflow.OperatorBase.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                                                  |
| [`to_matrix_op`](qiskit.opflow.OperatorBase#to_matrix_op "qiskit.opflow.OperatorBase.to_matrix_op")                | Returns a `MatrixOp` equivalent to this Operator.                                                                                                                             |
| [`to_spmatrix`](qiskit.opflow.OperatorBase#to_spmatrix "qiskit.opflow.OperatorBase.to_spmatrix")                   | Return SciPy sparse matrix representation of the Operator.                                                                                                                    |

## Attributes

<span id="qiskit.opflow.OperatorBase.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.OperatorBase.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.OperatorBase.num_qubits" />

### num\_qubits

The number of qubits over which the Operator is defined. If `op.num_qubits == 5`, then `op.eval('1' * 5)` will be valid, but `op.eval('11')` will not.

**Returns**

The number of qubits accepted by the Operator’s underlying function.

<span id="qiskit.opflow.OperatorBase.parameters" />

### parameters

Return a set of Parameter objects contained in the Operator.

<span id="qiskit.opflow.OperatorBase.settings" />

### settings

Return settings of this object in a dictionary.

You can, for example, use this `settings` dictionary to serialize the object in JSON format, if the JSON encoder you use supports all types in the dictionary.

**Returns**

Object settings in a dictionary.

