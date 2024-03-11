---
title: Parameter
description: API reference for qiskit.circuit.Parameter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Parameter
---

# Parameter

<span id="qiskit.circuit.Parameter" />

`Parameter(_, uuid=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/parameter.py "view source code")

Parameter Class for variable parameters.

Create a new ParameterExpression.

Not intended to be called directly, but to be instantiated via operations on other Parameter or ParameterExpression objects.

**Parameters**

*   **symbol\_map** (*dict*) – Mapping of Parameter instances to the sympy.Symbol serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of sympy.Symbols.

## Attributes

### name

Returns the name of the Parameter.

### parameters

Returns a set of the unbound Parameters in the expression.

## Methods

### \_\_mul\_\_

<span id="qiskit.circuit.Parameter.__mul__" />

`Parameter.__mul__(other)`

### bind

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

### subs

<span id="qiskit.circuit.Parameter.subs" />

`Parameter.subs(parameter_map)`

Substitute self with the corresponding parameter in parameter\_map.

