---
title: evolution_for_pauli
description: API reference for qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli
---

# evolution\_for\_pauli

<span id="qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution_for_pauli" />

`PauliTrotterEvolution.evolution_for_pauli(pauli_op)`

Compute evolution Operator for a single Pauli using a `PauliBasisChange`.

**Parameters**

**pauli\_op** ([`PauliOp`](qiskit.aqua.operators.primitive_ops.PauliOp "qiskit.aqua.operators.primitive_ops.pauli_op.PauliOp")) – The `PauliOp` to evolve.

**Return type**

[`PrimitiveOp`](qiskit.aqua.operators.primitive_ops.PrimitiveOp "qiskit.aqua.operators.primitive_ops.primitive_op.PrimitiveOp")

**Returns**

A `PrimitiveOp`, either the evolution `CircuitOp` or a `PauliOp` equal to the identity if pauli\_op is the identity.

