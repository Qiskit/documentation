---
title: distributive
description: API reference for qiskit.aqua.operators.list_ops.ComposedOp.distributive
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.aqua.operators.list_ops.ComposedOp.distributive
---

# distributive

<span id="qiskit.aqua.operators.list_ops.ComposedOp.distributive" />

`bool`

Indicates whether the ListOp or subclass is distributive under composition. ListOp and SummedOp are, meaning that (opv @ op) = (opv\[0] @ op + opv\[1] @ op) (using plus for SummedOp, list for ListOp, etc.), while ComposedOp and TensoredOp do not behave this way.

**Return type**

`bool`

**Returns**

A bool indicating whether the ListOp is distributive under composition.

