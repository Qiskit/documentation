---
title: convert
description: API reference for qiskit.aqua.operators.expectations.ExpectationBase.convert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.expectations.ExpectationBase.convert
---

# convert

<span id="qiskit.aqua.operators.expectations.ExpectationBase.convert" />

`abstract ExpectationBase.convert(operator)`

Accept an Operator and return a new Operator with the measurements replaced by alternate methods to compute the expectation value.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The operator to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted operator.

