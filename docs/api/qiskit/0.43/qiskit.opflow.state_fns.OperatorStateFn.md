---
title: OperatorStateFn
description: API reference for qiskit.opflow.state_fns.OperatorStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.OperatorStateFn
---

# OperatorStateFn

<span id="qiskit.opflow.state_fns.OperatorStateFn" />

`OperatorStateFn(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/state_fns/operator_state_fn.py "view source code")

Bases: [`StateFn`](qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.state_fn.StateFn")

Deprecated: A class for state functions and measurements which are defined by a density Operator, stored using an `OperatorBase`.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.state_fns.operator_state_fn.OperatorStateFn` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The `OperatorBase` which defines the behavior of the underlying State function.
*   **coeff** – A coefficient by which to multiply the state function
*   **is\_measurement** – Whether the StateFn is a measurement operator

**Methods Defined Here**

|                                                                                                                                              |                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.OperatorStateFn#add "qiskit.opflow.state_fns.OperatorStateFn.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                                                                                      |
| [`adjoint`](qiskit.opflow.state_fns.OperatorStateFn#adjoint "qiskit.opflow.state_fns.OperatorStateFn.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                                                                                     |
| [`eval`](qiskit.opflow.state_fns.OperatorStateFn#eval "qiskit.opflow.state_fns.OperatorStateFn.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                                                                         |
| [`permute`](qiskit.opflow.state_fns.OperatorStateFn#permute "qiskit.opflow.state_fns.OperatorStateFn.permute")                               | Permute the qubits of the state function.                                                                                                                                                           |
| [`primitive_strings`](qiskit.opflow.state_fns.OperatorStateFn#primitive_strings "qiskit.opflow.state_fns.OperatorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                                                                        |
| [`sample`](qiskit.opflow.state_fns.OperatorStateFn#sample "qiskit.opflow.state_fns.OperatorStateFn.sample")                                  | Sample the state function as a normalized probability distribution.                                                                                                                                 |
| [`tensor`](qiskit.opflow.state_fns.OperatorStateFn#tensor "qiskit.opflow.state_fns.OperatorStateFn.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                                                                                    |
| [`to_circuit_op`](qiskit.opflow.state_fns.OperatorStateFn#to_circuit_op "qiskit.opflow.state_fns.OperatorStateFn.to_circuit_op")             | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                                                              |
| [`to_density_matrix`](qiskit.opflow.state_fns.OperatorStateFn#to_density_matrix "qiskit.opflow.state_fns.OperatorStateFn.to_density_matrix") | Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix.                                                        |
| [`to_matrix`](qiskit.opflow.state_fns.OperatorStateFn#to_matrix "qiskit.opflow.state_fns.OperatorStateFn.to_matrix")                         | Note: this does not return a density matrix, it returns a classical matrix containing the quantum or classical vector representing the evaluation of the state function on each binary basis state. |
| [`to_matrix_op`](qiskit.opflow.state_fns.OperatorStateFn#to_matrix_op "qiskit.opflow.state_fns.OperatorStateFn.to_matrix_op")                | Return a MatrixOp for this operator.                                                                                                                                                                |

## Attributes

<span id="qiskit.opflow.state_fns.OperatorStateFn.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.OperatorStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

<span id="qiskit.opflow.state_fns.OperatorStateFn.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.state_fns.OperatorStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

<span id="qiskit.opflow.state_fns.OperatorStateFn.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.state_fns.OperatorStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.OperatorStateFn.primitive" />

### primitive

`OperatorBase`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.OperatorStateFn.settings" />

### settings

Return settings.

