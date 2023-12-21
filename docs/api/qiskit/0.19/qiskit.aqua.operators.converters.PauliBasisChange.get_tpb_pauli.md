---
title: get_tpb_pauli
description: API reference for qiskit.aqua.operators.converters.PauliBasisChange.get_tpb_pauli
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.PauliBasisChange.get_tpb_pauli
---

# get\_tpb\_pauli

<span id="qiskit.aqua.operators.converters.PauliBasisChange.get_tpb_pauli" />

`PauliBasisChange.get_tpb_pauli(list_op)`

Gets the Pauli (not `PauliOp`!) whose diagonalizing single-qubit rotations is a superset of the diagonalizing single-qubit rotations for each of the Paulis in `list_op`. TBP stands for Tensor Product Basis.

**Parameters**

**list\_op** ([`ListOp`](qiskit.aqua.operators.list_ops.ListOp "qiskit.aqua.operators.list_ops.list_op.ListOp")) – the `ListOp` whose TBP Pauli to return.

**Return type**

[`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.pauli.Pauli")

**Returns**

The TBP Pauli.

