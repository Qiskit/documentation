---
title: to_matrix_op
description: API reference for qiskit.aqua.operators.state_fns.StateFn.to_matrix_op
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.state_fns.StateFn.to_matrix_op
---

# to\_matrix\_op

<span id="qiskit.aqua.operators.state_fns.StateFn.to_matrix_op" />

`StateFn.to_matrix_op(massive=False)`

Return a `VectorStateFn` for this `StateFn`.

**Parameters**

**massive** (`bool`) – Whether to allow large conversions, e.g. creating a matrix representing over 16 qubits.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

A VectorStateFn equivalent to self.

