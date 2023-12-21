---
title: convert
description: API reference for qiskit.aqua.operators.expectations.AerPauliExpectation.convert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.expectations.AerPauliExpectation.convert
---

# convert

<span id="qiskit.aqua.operators.expectations.AerPauliExpectation.convert" />

`AerPauliExpectation.convert(operator)`

Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The operator to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted operator.

