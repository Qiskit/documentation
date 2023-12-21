---
title: subs
description: API reference for qiskit.circuit.ParameterExpression.subs
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.ParameterExpression.subs
---

# subs

<span id="qiskit.circuit.ParameterExpression.subs" />

`ParameterExpression.subs(parameter_map)`

Returns a new Expression with replacement Parameters.

**Parameters**

**parameter\_map** (*dict*) – Mapping from Parameters in self to the Parameter instances with which they should be replaced.

**Raises**

**CircuitError** –

*   If parameter\_map contains Parameters outside those in self. - If the replacement Parameters in parameter\_map would result in a name conflict in the generated expression.

**Returns**

**a new expression with the specified parameters**

replaced.

**Return type**

[ParameterExpression](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")

