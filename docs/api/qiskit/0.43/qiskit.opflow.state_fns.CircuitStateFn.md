---
title: CircuitStateFn
description: API reference for qiskit.opflow.state_fns.CircuitStateFn
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.state_fns.CircuitStateFn
---

# CircuitStateFn

<span id="qiskit.opflow.state_fns.CircuitStateFn" />

`CircuitStateFn(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/state_fns/circuit_state_fn.py "view source code")

Bases: [`StateFn`](qiskit.opflow.state_fns.StateFn "qiskit.opflow.state_fns.state_fn.StateFn")

Deprecated: A class for state functions and measurements which are defined by the action of a QuantumCircuit starting from |0⟩, and stored using Terra’s `QuantumCircuit` class.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.state_fns.circuit_state_fn.CircuitStateFn` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The `QuantumCircuit` (or `Instruction`, which will be converted) which defines the behavior of the underlying function.
*   **coeff** – A coefficient multiplying the state function.
*   **is\_measurement** – Whether the StateFn is a measurement operator.
*   **from\_operator** – if True the StateFn is derived from OperatorStateFn. (Default: False)

**Raises**

**TypeError** – Unsupported primitive, or primitive has ClassicalRegisters.

**Methods Defined Here**

|                                                                                                                                            |                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.state_fns.CircuitStateFn#add "qiskit.opflow.state_fns.CircuitStateFn.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                                                           |
| [`adjoint`](qiskit.opflow.state_fns.CircuitStateFn#adjoint "qiskit.opflow.state_fns.CircuitStateFn.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                                                          |
| [`assign_parameters`](qiskit.opflow.state_fns.CircuitStateFn#assign_parameters "qiskit.opflow.state_fns.CircuitStateFn.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another.             |
| [`compose`](qiskit.opflow.state_fns.CircuitStateFn#compose "qiskit.opflow.state_fns.CircuitStateFn.compose")                               | Composition (Linear algebra-style: A\@B(x) = A(B(x))) is not well defined for states in the binary function model, but is well defined for measurements. |
| [`eval`](qiskit.opflow.state_fns.CircuitStateFn#eval "qiskit.opflow.state_fns.CircuitStateFn.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                                                              |
| [`from_dict`](qiskit.opflow.state_fns.CircuitStateFn#from_dict "qiskit.opflow.state_fns.CircuitStateFn.from_dict")                         | Construct the CircuitStateFn from a dict mapping strings to probability densities.                                                                       |
| [`from_vector`](qiskit.opflow.state_fns.CircuitStateFn#from_vector "qiskit.opflow.state_fns.CircuitStateFn.from_vector")                   | Construct the CircuitStateFn from a vector representing the statevector.                                                                                 |
| [`permute`](qiskit.opflow.state_fns.CircuitStateFn#permute "qiskit.opflow.state_fns.CircuitStateFn.permute")                               | Permute the qubits of the circuit.                                                                                                                       |
| [`primitive_strings`](qiskit.opflow.state_fns.CircuitStateFn#primitive_strings "qiskit.opflow.state_fns.CircuitStateFn.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                                                             |
| [`reduce`](qiskit.opflow.state_fns.CircuitStateFn#reduce "qiskit.opflow.state_fns.CircuitStateFn.reduce")                                  | Try collapsing the Operator structure, usually after some type of conversion, e.g.                                                                       |
| [`sample`](qiskit.opflow.state_fns.CircuitStateFn#sample "qiskit.opflow.state_fns.CircuitStateFn.sample")                                  | Sample the state function as a normalized probability distribution.                                                                                      |
| [`tensor`](qiskit.opflow.state_fns.CircuitStateFn#tensor "qiskit.opflow.state_fns.CircuitStateFn.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                                                         |
| [`to_circuit`](qiskit.opflow.state_fns.CircuitStateFn#to_circuit "qiskit.opflow.state_fns.CircuitStateFn.to_circuit")                      | Return QuantumCircuit representing StateFn                                                                                                               |
| [`to_circuit_op`](qiskit.opflow.state_fns.CircuitStateFn#to_circuit_op "qiskit.opflow.state_fns.CircuitStateFn.to_circuit_op")             | Return `StateFnCircuit` corresponding to this StateFn.                                                                                                   |
| [`to_density_matrix`](qiskit.opflow.state_fns.CircuitStateFn#to_density_matrix "qiskit.opflow.state_fns.CircuitStateFn.to_density_matrix") | Return numpy matrix of density operator, warn if more than 16 qubits to force the user to set massive=True if they want such a large matrix.             |
| [`to_instruction`](qiskit.opflow.state_fns.CircuitStateFn#to_instruction "qiskit.opflow.state_fns.CircuitStateFn.to_instruction")          | Return Instruction corresponding to primitive.                                                                                                           |
| [`to_matrix`](qiskit.opflow.state_fns.CircuitStateFn#to_matrix "qiskit.opflow.state_fns.CircuitStateFn.to_matrix")                         | Return NumPy representation of the Operator.                                                                                                             |

## Attributes

<span id="qiskit.opflow.state_fns.CircuitStateFn.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.state_fns.CircuitStateFn.coeff" />

### coeff

A coefficient by which the state function is multiplied.

<span id="qiskit.opflow.state_fns.CircuitStateFn.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.state_fns.CircuitStateFn.is_measurement" />

### is\_measurement

Whether the StateFn object is a measurement Operator.

<span id="qiskit.opflow.state_fns.CircuitStateFn.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.state_fns.CircuitStateFn.parameters" />

### parameters

<span id="qiskit.opflow.state_fns.CircuitStateFn.primitive" />

### primitive

`QuantumCircuit`

The primitive which defines the behavior of the underlying State function.

<span id="qiskit.opflow.state_fns.CircuitStateFn.settings" />

### settings

Return settings.

