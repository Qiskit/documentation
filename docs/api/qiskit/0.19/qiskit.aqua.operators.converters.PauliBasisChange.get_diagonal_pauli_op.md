---
title: get_diagonal_pauli_op
description: API reference for qiskit.aqua.operators.converters.PauliBasisChange.get_diagonal_pauli_op
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.PauliBasisChange.get_diagonal_pauli_op
---

# get\_diagonal\_pauli\_op

<span id="qiskit.aqua.operators.converters.PauliBasisChange.get_diagonal_pauli_op" />

`PauliBasisChange.get_diagonal_pauli_op(pauli_op)`

Get the diagonal `PualiOp` to which `pauli_op` could be rotated with only single-qubit operations.

**Parameters**

**pauli\_op** ([`PauliOp`](qiskit.aqua.operators.primitive_ops.PauliOp "qiskit.aqua.operators.primitive_ops.pauli_op.PauliOp")) – The `PauliOp` whose diagonal to compute.

**Return type**

[`PauliOp`](qiskit.aqua.operators.primitive_ops.PauliOp "qiskit.aqua.operators.primitive_ops.pauli_op.PauliOp")

**Returns**

The diagonal `PauliOp`.

