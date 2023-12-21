---
title: combo_fn
description: API reference for qiskit.aqua.operators.list_ops.ComposedOp.combo_fn
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.aqua.operators.list_ops.ComposedOp.combo_fn
---

# combo\_fn

<span id="qiskit.aqua.operators.list_ops.ComposedOp.combo_fn" />

`Callable`

The function defining how to combine `oplist` (or Numbers, or NumPy arrays) to produce the Operator’s underlying function. For example, SummedOp’s combination function is to add all of the Operators in `oplist`.

**Return type**

`Callable`

**Returns**

The combination function.

