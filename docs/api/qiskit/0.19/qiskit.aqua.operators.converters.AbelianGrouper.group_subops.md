---
title: group_subops
description: API reference for qiskit.aqua.operators.converters.AbelianGrouper.group_subops
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.AbelianGrouper.group_subops
---

# group\_subops

<span id="qiskit.aqua.operators.converters.AbelianGrouper.group_subops" />

`AbelianGrouper.group_subops(list_op)`

Given a ListOp, attempt to group into Abelian ListOps of the same type.

**Parameters**

**list\_op** ([`ListOp`](qiskit.aqua.operators.list_ops.ListOp "qiskit.aqua.operators.list_ops.list_op.ListOp")) – The Operator to group into Abelian groups

**Return type**

[`ListOp`](qiskit.aqua.operators.list_ops.ListOp "qiskit.aqua.operators.list_ops.list_op.ListOp")

**Returns**

The grouped Operator.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – Any of list\_op’s sub-ops do not have a `commutes` method.

