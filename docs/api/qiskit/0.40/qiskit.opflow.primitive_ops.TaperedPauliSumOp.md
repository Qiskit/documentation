---
title: TaperedPauliSumOp
description: API reference for qiskit.opflow.primitive_ops.TaperedPauliSumOp
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.primitive_ops.TaperedPauliSumOp
---

# TaperedPauliSumOp

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp" />

`TaperedPauliSumOp(primitive, z2_symmetries, coeff=1.0)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/primitive_ops/tapered_pauli_sum_op.py "view source code")

Bases: [`qiskit.opflow.primitive_ops.pauli_sum_op.PauliSumOp`](qiskit.opflow.primitive_ops.PauliSumOp "qiskit.opflow.primitive_ops.pauli_sum_op.PauliSumOp")

Class for PauliSumOp after tapering

**Parameters**

*   **primitive** ([`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp")) – The SparsePauliOp which defines the behavior of the underlying function.
*   **z2\_symmetries** ([`Z2Symmetries`](qiskit.opflow.primitive_ops.Z2Symmetries "qiskit.opflow.primitive_ops.tapered_pauli_sum_op.Z2Symmetries")) – Z2 symmetries which the Operator has.
*   **coeff** (`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]) – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

## Methods Defined Here

### assign\_parameters

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.assign_parameters" />

`TaperedPauliSumOp.assign_parameters(param_dict)`

Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. This method differs from Terra’s `assign_parameters` in that it also supports lists of values to assign for a give `Parameter`, in which case self will be copied for each parameterization in the binding list(s), and all the copies will be returned in an `OpList`. If lists of parameterizations are used, every `Parameter` in the param\_dict must have the same length list of parameterizations.

**Parameters**

**param\_dict** (`dict`) – The dictionary of `Parameters` to replace, and values or lists of values by which to replace them.

**Return type**

[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")

**Returns**

The `OperatorBase` with the `Parameters` in self replaced by the values or `Parameters` in param\_dict. If param\_dict contains parameterization lists, this `OperatorBase` is an `OpList`.

## Attributes

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.INDENTATION" />

### INDENTATION

`= '  '`

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.coeff" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, [`ParameterExpression`](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")]

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

**Return type**

`str`

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.instance_id" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.num_qubits" />

### num\_qubits

**Return type**

`int`

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.parameters" />

### parameters

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.primitive" />

### primitive

`qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.operators.operator.Operator"), [`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.symplectic.pauli.Pauli"), [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp"), [`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase")]

**Returns**

The primitive object.

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.settings" />

### settings

Return operator settings.

**Return type**

`Dict`

<span id="qiskit.opflow.primitive_ops.TaperedPauliSumOp.z2_symmetries" />

### z2\_symmetries

Z2 symmetries which the Operator has.

**Return type**

[`Z2Symmetries`](qiskit.opflow.primitive_ops.Z2Symmetries "qiskit.opflow.primitive_ops.tapered_pauli_sum_op.Z2Symmetries")

**Returns**

The Z2 Symmetries.

