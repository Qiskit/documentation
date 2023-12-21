---
title: reduce
description: API reference for qiskit.aqua.operators.list_ops.SummedOp.reduce
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.list_ops.SummedOp.reduce
---

# reduce

<span id="qiskit.aqua.operators.list_ops.SummedOp.reduce" />

`SummedOp.reduce()`

Try collapsing the Operator structure, usually after some type of conversion, e.g. trying to add Operators in a SummedOp or delete needless IGates in a CircuitOp. If no reduction is available, just returns self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The reduced `OperatorBase`.

