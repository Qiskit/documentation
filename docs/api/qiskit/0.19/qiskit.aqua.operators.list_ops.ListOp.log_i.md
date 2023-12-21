---
title: log_i
description: API reference for qiskit.aqua.operators.list_ops.ListOp.log_i
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.list_ops.ListOp.log_i
---

# log\_i

<span id="qiskit.aqua.operators.list_ops.ListOp.log_i" />

`ListOp.log_i(massive=False)`

Return a `MatrixOp` equivalent to log(H)/-i for this operator H. This function is the effective inverse of exp\_i, equivalent to finding the Hermitian Operator which produces self when exponentiated. For proper ListOps, applies `log_i` to all ops in oplist.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

