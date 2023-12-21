---
title: ParameterExpression
description: API reference for qiskit.circuit.ParameterExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ParameterExpression
---

# ParameterExpression

<span id="qiskit.circuit.ParameterExpression" />

`ParameterExpression(symbol_map, expr)`

ParameterExpression class to enable creating expressions of Parameters.

Create a new ParameterExpression.

Not intended to be called directly, but to be instantiated via operations on other Parameter or ParameterExpression objects.

**Parameters**

*   **symbol\_map** (*dict*) – Mapping of Parameter instances to the sympy.Symbol serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of sympy.Symbols.

## Attributes

|                                                                                                                                   |                                                            |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`ParameterExpression.parameters`](qiskit.circuit.ParameterExpression.parameters "qiskit.circuit.ParameterExpression.parameters") | Returns a set of the unbound Parameters in the expression. |

## Methods

|                                                                                                                                    |                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`ParameterExpression.__mul__`](qiskit.circuit.ParameterExpression.__mul__ "qiskit.circuit.ParameterExpression.__mul__")(other)    |                                                                     |
| [`ParameterExpression.bind`](qiskit.circuit.ParameterExpression.bind "qiskit.circuit.ParameterExpression.bind")(parameter\_values) | Binds the provided set of parameters to their corresponding values. |
| [`ParameterExpression.subs`](qiskit.circuit.ParameterExpression.subs "qiskit.circuit.ParameterExpression.subs")(parameter\_map)    | Returns a new Expression with replacement Parameters.               |

