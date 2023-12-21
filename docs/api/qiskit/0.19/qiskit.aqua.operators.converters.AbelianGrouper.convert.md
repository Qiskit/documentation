---
title: convert
description: API reference for qiskit.aqua.operators.converters.AbelianGrouper.convert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.AbelianGrouper.convert
---

# convert

<span id="qiskit.aqua.operators.converters.AbelianGrouper.convert" />

`AbelianGrouper.convert(operator)`

Check if operator is a SummedOp, in which case covert it into a sum of mutually commuting sums, or if the Operator contains sub-Operators and `traverse` is True, attempt to convert any sub-Operators.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to attempt to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted Operator.

