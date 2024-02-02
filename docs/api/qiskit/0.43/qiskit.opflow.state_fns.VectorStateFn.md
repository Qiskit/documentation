---
title: VectorStateFn
description: API reference for qiskit.opflow.state_fns.VectorStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.VectorStateFn
---

# VectorStateFn

<span id="qiskit.opflow.state_fns.VectorStateFn" />

`VectorStateFn(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/state_fns/vector_state_fn.py "view source code")

Bases: [`StateFn`](qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.state_fn.StateFn")

Deprecated: A class for state functions and measurements which are defined in vector representation, and stored using Terra’s `Statevector` class.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.state_fns.vector_state_fn.VectorStateFn` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The `Statevector`, NumPy array, or list, which defines the behavior of the underlying function.
*   **coeff** – A coefficient multiplying the state function.
*   **is\_measurement** – Whether the StateFn is a measurement operator

**Methods Defined Here**

|                                                                                                                                          |                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.VectorStateFn#add "qiskit.opflow.state_fns.VectorStateFn.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                  |
| [`adjoint`](qiskit.opflow.state_fns.VectorStateFn#adjoint "qiskit.opflow.state_fns.VectorStateFn.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`. |
| [`eval`](qiskit.opflow.state_fns.VectorStateFn#eval "qiskit.opflow.state_fns.VectorStateFn.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.     |
| [`permute`](qiskit.opflow.state_fns.VectorStateFn#permute "qiskit.opflow.state_fns.VectorStateFn.permute")                               | Permute the qubits of the state function.                                                       |
| [`primitive_strings`](qiskit.opflow.state_fns.VectorStateFn#primitive_strings "qiskit.opflow.state_fns.VectorStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                    |
| [`sample`](qiskit.opflow.state_fns.VectorStateFn#sample "qiskit.opflow.state_fns.VectorStateFn.sample")                                  | Sample the state function as a normalized probability distribution.                             |
| [`tensor`](qiskit.opflow.state_fns.VectorStateFn#tensor "qiskit.opflow.state_fns.VectorStateFn.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                |
| [`to_circuit_op`](qiskit.opflow.state_fns.VectorStateFn#to_circuit_op "qiskit.opflow.state_fns.VectorStateFn.to_circuit_op")             | Return `StateFnCircuit` corresponding to this StateFn.                                          |
| [`to_density_matrix`](qiskit.opflow.state_fns.VectorStateFn#to_density_matrix "qiskit.opflow.state_fns.VectorStateFn.to_density_matrix") | Return matrix representing product of StateFn evaluated on pairs of basis states.               |
| [`to_dict_fn`](qiskit.opflow.state_fns.VectorStateFn#to_dict_fn "qiskit.opflow.state_fns.VectorStateFn.to_dict_fn")                      | Creates the equivalent state function of type DictStateFn.                                      |
| [`to_matrix`](qiskit.opflow.state_fns.VectorStateFn#to_matrix "qiskit.opflow.state_fns.VectorStateFn.to_matrix")                         | Return NumPy representation of the Operator.                                                    |
| [`to_matrix_op`](qiskit.opflow.state_fns.VectorStateFn#to_matrix_op "qiskit.opflow.state_fns.VectorStateFn.to_matrix_op")                | Return a `VectorStateFn` for this `StateFn`.                                                    |

## Attributes

<span id="qiskit.opflow.state_fns.VectorStateFn.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.VectorStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

<span id="qiskit.opflow.state_fns.VectorStateFn.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.state_fns.VectorStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

<span id="qiskit.opflow.state_fns.VectorStateFn.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.state_fns.VectorStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.VectorStateFn.primitive" />

### primitive

`Statevector`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.VectorStateFn.settings" />

### settings

Return settings.

