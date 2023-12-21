---
title: add
description: API reference for qiskit.aqua.operators.state_fns.VectorStateFn.add
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.VectorStateFn.add
---

# add

<span id="qiskit.aqua.operators.state_fns.VectorStateFn.add" />

`VectorStateFn.add(other)`

Return Operator addition of self and other, overloaded by `+`.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – An `OperatorBase` with the same number of qubits as self, and in the same ‘Operator’, ‘State function’, or ‘Measurement’ category as self (i.e. the same type of underlying function).

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the sum of self and other.

