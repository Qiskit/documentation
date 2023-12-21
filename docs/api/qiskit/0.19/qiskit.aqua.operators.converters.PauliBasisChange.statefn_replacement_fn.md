---
title: statefn_replacement_fn
description: API reference for qiskit.aqua.operators.converters.PauliBasisChange.statefn_replacement_fn
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.PauliBasisChange.statefn_replacement_fn
---

# statefn\_replacement\_fn

<span id="qiskit.aqua.operators.converters.PauliBasisChange.statefn_replacement_fn" />

`static PauliBasisChange.statefn_replacement_fn(cob_instr_op, dest_pauli_op)`

A built-in convenience replacement function which produces state functions isomorphic to an `OperatorStateFn` state function holding the origin `PauliOp`.

**Parameters**

*   **cob\_instr\_op** ([`CircuitOp`](qiskit.aqua.operators.primitive_ops.CircuitOp "qiskit.aqua.operators.primitive_ops.circuit_op.CircuitOp")) – The basis-change `CircuitOp`.
*   **dest\_pauli\_op** ([`PauliOp`](qiskit.aqua.operators.primitive_ops.PauliOp "qiskit.aqua.operators.primitive_ops.pauli_op.PauliOp")) – The destination `PauliOp`.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The `~CircuitOp @ StateFn` composition equivalent to a state function defined by the original `PauliOp`.

