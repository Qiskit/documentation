---
title: bind
description: API reference for qiskit.circuit.Parameter.bind
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.Parameter.bind
---

# bind

<span id="qiskit.circuit.Parameter.bind" />

`Parameter.bind(parameter_values)`

Binds the provided set of parameters to their corresponding values.

**Parameters**

**parameter\_values** (*dict*) – Mapping of Parameter instances to the numeric value to which they will be bound.

**Raises**

*   **CircuitError** –

    *   If parameter\_values contains Parameters outside those in self. - If a non-numeric value is passed in parameter\_values.

*   **ZeroDivisionError** –

    *   If binding the provided values requires division by zero.

**Returns**

**a new expression parameterized by any parameters**

which were not bound by parameter\_values.

**Return type**

[ParameterExpression](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")

