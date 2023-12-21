---
title: convert
description: API reference for qiskit.aqua.operators.evolutions.EvolutionBase.convert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.evolutions.EvolutionBase.convert
---

# convert

<span id="qiskit.aqua.operators.evolutions.EvolutionBase.convert" />

`EvolutionBase.convert(operator)`

Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`.

> ## Args:
>
> operator: The Operator to convert.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The converted Operator, with `EvolutionOps` replaced by `CircuitOps`.

