---
title: permute
description: API reference for qiskit.aqua.operators.primitive_ops.CircuitOp.permute
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.primitive_ops.CircuitOp.permute
---

# permute

<span id="qiskit.aqua.operators.primitive_ops.CircuitOp.permute" />

`CircuitOp.permute(permutation)`

Permute the qubits of the circuit.

**Parameters**

**permutation** (`List`\[`int`]) – A list defining where each qubit should be permuted. The qubit at index j of the circuit should be permuted to position permutation\[j].

**Return type**

[`CircuitOp`](qiskit.aqua.operators.primitive_ops.CircuitOp "qiskit.aqua.operators.primitive_ops.circuit_op.CircuitOp")

**Returns**

A new CircuitOp containing the permuted circuit.

