---
title: tensorpower
description: API reference for qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower
---

# tensorpower

<span id="qiskit.aqua.operators.state_fns.VectorStateFn.tensorpower" />

`VectorStateFn.tensorpower(other)`

Return tensor product with self multiple times, overloaded by `^`.

**Parameters**

**other** (`int`) – The int number of times to tensor product self with itself via `tensorpower`.

**Return type**

`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), `int`]

**Returns**

An `OperatorBase` equivalent to the tensorpower of self by other.

