---
title: Parameter
description: API reference for qiskit.circuit.Parameter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Parameter
---

# Parameter

<span id="qiskit.circuit.Parameter" />

`Parameter(_, uuid=None)`

Parameter Class for variable parameters.

Create a new ParameterExpression.

Not intended to be called directly, but to be instantiated via operations on other Parameter or ParameterExpression objects.

**Parameters**

*   **symbol\_map** (*dict*) – Mapping of Parameter instances to the sympy.Symbol serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of sympy.Symbols.

## Attributes

|                                                                                                     |                                                            |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`Parameter.name`](qiskit.circuit.Parameter.name "qiskit.circuit.Parameter.name")                   | Returns the name of the Parameter.                         |
| [`Parameter.parameters`](qiskit.circuit.Parameter.parameters "qiskit.circuit.Parameter.parameters") | Returns a set of the unbound Parameters in the expression. |

## Methods

|                                                                                                      |                                                                     |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`Parameter.__mul__`](qiskit.circuit.Parameter.__mul__ "qiskit.circuit.Parameter.__mul__")(other)    |                                                                     |
| [`Parameter.bind`](qiskit.circuit.Parameter.bind "qiskit.circuit.Parameter.bind")(parameter\_values) | Binds the provided set of parameters to their corresponding values. |
| [`Parameter.subs`](qiskit.circuit.Parameter.subs "qiskit.circuit.Parameter.subs")(parameter\_map)    | Substitute self with the corresponding parameter in parameter\_map. |
| [`Parameter.__mul__`](qiskit.circuit.Parameter.__mul__ "qiskit.circuit.Parameter.__mul__")(other)    |                                                                     |

