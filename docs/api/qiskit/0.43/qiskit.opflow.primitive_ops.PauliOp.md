---
title: PauliOp
description: API reference for qiskit.opflow.primitive_ops.PauliOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.PauliOp
---

# PauliOp

<span id="qiskit.opflow.primitive_ops.PauliOp" />

`PauliOp(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/primitive_ops/pauli_op.py "view source code")

Bases: [`PrimitiveOp`](qiskit.opflow.primitive_ops.PrimitiveOp "qiskit.opflow.primitive_ops.primitive_op.PrimitiveOp")

Deprecated: Class for Operators backed by Terra’s `Pauli` module.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.primitive_ops.pauli_op.PauliOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The Pauli which defines the behavior of the underlying function.
*   **coeff** – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

**Methods Defined Here**

|                                                                                                                                      |                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.opflow.primitive_ops.PauliOp#add "qiskit.opflow.primitive_ops.PauliOp.add")                                           | Return Operator addition of self and other, overloaded by `+`.                                                   |
| [`adjoint`](qiskit.opflow.primitive_ops.PauliOp#adjoint "qiskit.opflow.primitive_ops.PauliOp.adjoint")                               | Return a new Operator equal to the Operator's adjoint (conjugate transpose), overloaded by `~`.                  |
| [`compose`](qiskit.opflow.primitive_ops.PauliOp#compose "qiskit.opflow.primitive_ops.PauliOp.compose")                               | Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`. |
| [`equals`](qiskit.opflow.primitive_ops.PauliOp#equals "qiskit.opflow.primitive_ops.PauliOp.equals")                                  | Evaluate Equality between Operators, overloaded by `==`.                                                         |
| [`eval`](qiskit.opflow.primitive_ops.PauliOp#eval "qiskit.opflow.primitive_ops.PauliOp.eval")                                        | Evaluate the Operator's underlying function, either on a binary string or another Operator.                      |
| [`exp_i`](qiskit.opflow.primitive_ops.PauliOp#exp_i "qiskit.opflow.primitive_ops.PauliOp.exp_i")                                     | Return a `CircuitOp` equivalent to e^-iH for this operator H.                                                    |
| [`permute`](qiskit.opflow.primitive_ops.PauliOp#permute "qiskit.opflow.primitive_ops.PauliOp.permute")                               | Permutes the sequence of Pauli matrices.                                                                         |
| [`primitive_strings`](qiskit.opflow.primitive_ops.PauliOp#primitive_strings "qiskit.opflow.primitive_ops.PauliOp.primitive_strings") | Return a set of strings describing the primitives contained in the Operator.                                     |
| [`tensor`](qiskit.opflow.primitive_ops.PauliOp#tensor "qiskit.opflow.primitive_ops.PauliOp.tensor")                                  | Return tensor product between self and other, overloaded by `^`.                                                 |
| [`to_circuit`](qiskit.opflow.primitive_ops.PauliOp#to_circuit "qiskit.opflow.primitive_ops.PauliOp.to_circuit")                      | Returns a `QuantumCircuit` equivalent to this Operator.                                                          |
| [`to_instruction`](qiskit.opflow.primitive_ops.PauliOp#to_instruction "qiskit.opflow.primitive_ops.PauliOp.to_instruction")          | Returns an `Instruction` equivalent to this Operator.                                                            |
| [`to_matrix`](qiskit.opflow.primitive_ops.PauliOp#to_matrix "qiskit.opflow.primitive_ops.PauliOp.to_matrix")                         | Return NumPy representation of the Operator.                                                                     |
| [`to_pauli_op`](qiskit.opflow.primitive_ops.PauliOp#to_pauli_op "qiskit.opflow.primitive_ops.PauliOp.to_pauli_op")                   | Returns a sum of `PauliOp` s equivalent to this Operator.                                                        |
| [`to_spmatrix`](qiskit.opflow.primitive_ops.PauliOp#to_spmatrix "qiskit.opflow.primitive_ops.PauliOp.to_spmatrix")                   | Returns SciPy sparse matrix representation of the Operator.                                                      |

## Attributes

<span id="qiskit.opflow.primitive_ops.PauliOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.PauliOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.PauliOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.primitive_ops.PauliOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.primitive_ops.PauliOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.PauliOp.primitive" />

### primitive

`Pauli`

The primitive defining the underlying function of the Operator.

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.PauliOp.settings" />

### settings

Return operator settings.

