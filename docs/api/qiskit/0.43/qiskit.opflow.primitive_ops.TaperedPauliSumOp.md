---
title: TaperedPauliSumOp
description: API reference for qiskit.opflow.primitive_ops.TaperedPauliSumOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.TaperedPauliSumOp
---

# TaperedPauliSumOp

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp" />

`TaperedPauliSumOp(*args, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/primitive_ops/tapered_pauli_sum_op.py "view source code")

Bases: [`PauliSumOp`](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.pauli_sum_op.PauliSumOp")

Deprecated: Class for PauliSumOp after tapering

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.primitive_ops.tapered_pauli_sum_op.TaperedPauliSumOp` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **primitive** – The SparsePauliOp which defines the behavior of the underlying function.
*   **z2\_symmetries** – Z2 symmetries which the Operator has.
*   **coeff** – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

**Methods Defined Here**

|                                                                                                                                                          |                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`assign_parameters`](qiskit.opflow.primitive_ops.TaperedPauliSumOp#assign_parameters "qiskit.opflow.primitive_ops.TaperedPauliSumOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. |

## Attributes

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Returns**

The coefficient.

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.coeffs" />

### coeffs

Return the Pauli coefficients.

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.grouping_type" />

### grouping\_type

Type of Grouping

**Type**

Returns

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.instance_id" />

### instance\_id

Return the unique instance id.

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.num_qubits" />

### num\_qubits

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.primitive" />

### primitive

`SparsePauliOp`

The primitive defining the underlying function of the Operator.

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.settings" />

### settings

Return operator settings.

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.z2_symmetries" />

### z2\_symmetries

Z2 symmetries which the Operator has.

**Returns**

The Z2 Symmetries.

