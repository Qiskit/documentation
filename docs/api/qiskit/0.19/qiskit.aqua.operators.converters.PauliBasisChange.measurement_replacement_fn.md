---
title: measurement_replacement_fn
description: API reference for qiskit.aqua.operators.converters.PauliBasisChange.measurement_replacement_fn
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.PauliBasisChange.measurement_replacement_fn
---

# measurement\_replacement\_fn

<span id="qiskit.aqua.operators.converters.PauliBasisChange.measurement_replacement_fn" />

`static PauliBasisChange.measurement_replacement_fn(cob_instr_op, dest_pauli_op)`

A built-in convenience replacement function which produces measurements isomorphic to an `OperatorStateFn` measurement holding the origin `PauliOp`.

**Parameters**

*   **cob\_instr\_op** ([`CircuitOp`](qiskit.aqua.operators.primitive_ops.CircuitOp "qiskit.aqua.operators.primitive_ops.circuit_op.CircuitOp")) – The basis-change `CircuitOp`.
*   **dest\_pauli\_op** ([`PauliOp`](qiskit.aqua.operators.primitive_ops.PauliOp "qiskit.aqua.operators.primitive_ops.pauli_op.PauliOp")) – The destination `PauliOp`.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The `~StateFn @ CircuitOp` composition equivalent to a measurement by the original `PauliOp`.

