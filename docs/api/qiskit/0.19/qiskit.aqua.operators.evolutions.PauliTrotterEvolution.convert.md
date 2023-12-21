---
title: convert
description: API reference for qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert
---

# convert

<span id="qiskit.aqua.operators.evolutions.PauliTrotterEvolution.convert" />

`PauliTrotterEvolution.convert(operator)`

Traverse the operator, replacing `EvolvedOps` with `CircuitOps` containing trotterized evolutions equalling the exponentiation of -i \* operator.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The Operator to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted operator.

