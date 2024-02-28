---
title: Parameter
description: API reference for qiskit.circuit.Parameter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Parameter
---

# qiskit.circuit.Parameter

<span id="qiskit.circuit.Parameter" />

`Parameter(name)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/circuit/parameter.py "view source code")

Parameter Class for variable parameters.

Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

**Parameters**

**name** (`str`) – name of the `Parameter`, used for visual representation. This can be any unicode string, e.g. “ϕ”.

### \_\_init\_\_

<span id="qiskit.circuit.Parameter.__init__" />

`__init__(name)`

Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

**Parameters**

**name** (`str`) – name of the `Parameter`, used for visual representation. This can be any unicode string, e.g. “ϕ”.

## Methods

|                                                                                                  |                                                                                               |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.circuit.Parameter.__init__ "qiskit.circuit.Parameter.__init__")(name)       | Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").       |
| [`arccos`](#qiskit.circuit.Parameter.arccos "qiskit.circuit.Parameter.arccos")()                 | Arccos of a ParameterExpression                                                               |
| [`arcsin`](#qiskit.circuit.Parameter.arcsin "qiskit.circuit.Parameter.arcsin")()                 | Arcsin of a ParameterExpression                                                               |
| [`arctan`](#qiskit.circuit.Parameter.arctan "qiskit.circuit.Parameter.arctan")()                 | Arctan of a ParameterExpression                                                               |
| [`assign`](#qiskit.circuit.Parameter.assign "qiskit.circuit.Parameter.assign")(parameter, value) | Assign one parameter to a value, which can either be numeric or another parameter expression. |
| [`bind`](#qiskit.circuit.Parameter.bind "qiskit.circuit.Parameter.bind")(parameter\_values)      | Binds the provided set of parameters to their corresponding values.                           |
| [`conjugate`](#qiskit.circuit.Parameter.conjugate "qiskit.circuit.Parameter.conjugate")()        | Return the conjugate.                                                                         |
| [`cos`](#qiskit.circuit.Parameter.cos "qiskit.circuit.Parameter.cos")()                          | Cosine of a ParameterExpression                                                               |
| [`exp`](#qiskit.circuit.Parameter.exp "qiskit.circuit.Parameter.exp")()                          | Exponential of a ParameterExpression                                                          |
| [`gradient`](#qiskit.circuit.Parameter.gradient "qiskit.circuit.Parameter.gradient")(param)      | Get the derivative of a parameter expression w\.r.t.                                          |
| [`log`](#qiskit.circuit.Parameter.log "qiskit.circuit.Parameter.log")()                          | Logarithm of a ParameterExpression                                                            |
| [`sin`](#qiskit.circuit.Parameter.sin "qiskit.circuit.Parameter.sin")()                          | Sine of a ParameterExpression                                                                 |
| [`subs`](#qiskit.circuit.Parameter.subs "qiskit.circuit.Parameter.subs")(parameter\_map)         | Substitute self with the corresponding parameter in `parameter_map`.                          |
| [`tan`](#qiskit.circuit.Parameter.tan "qiskit.circuit.Parameter.tan")()                          | Tangent of a ParameterExpression                                                              |

## Attributes

|                                                                                            |                                                                                              |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| [`name`](#qiskit.circuit.Parameter.name "qiskit.circuit.Parameter.name")                   | Returns the name of the [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter"). |
| [`parameters`](#qiskit.circuit.Parameter.parameters "qiskit.circuit.Parameter.parameters") | Returns a set of the unbound Parameters in the expression.                                   |

### arccos

<span id="qiskit.circuit.Parameter.arccos" />

`arccos()`

Arccos of a ParameterExpression

### arcsin

<span id="qiskit.circuit.Parameter.arcsin" />

`arcsin()`

Arcsin of a ParameterExpression

### arctan

<span id="qiskit.circuit.Parameter.arctan" />

`arctan()`

Arctan of a ParameterExpression

### assign

<span id="qiskit.circuit.Parameter.assign" />

`assign(parameter, value)`

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Parameters**

*   **parameter** ([*Parameter*](#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`, `int`]) – The new value to bind to.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by assignment.

### bind

<span id="qiskit.circuit.Parameter.bind" />

`bind(parameter_values)`

Binds the provided set of parameters to their corresponding values.

**Parameters**

**parameter\_values** (`Dict`) – Mapping of Parameter instances to the numeric value to which they will be bound.

**Raises**

*   **CircuitError** –

    *   If parameter\_values contains Parameters outside those in self. - If a non-numeric value is passed in parameter\_values.

*   **ZeroDivisionError** –

    *   If binding the provided values requires division by zero.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by parameter\_values.

### conjugate

<span id="qiskit.circuit.Parameter.conjugate" />

`conjugate()`

Return the conjugate.

**Return type**

`ParameterExpression`

### cos

<span id="qiskit.circuit.Parameter.cos" />

`cos()`

Cosine of a ParameterExpression

### exp

<span id="qiskit.circuit.Parameter.exp" />

`exp()`

Exponential of a ParameterExpression

### gradient

<span id="qiskit.circuit.Parameter.gradient" />

`gradient(param)`

Get the derivative of a parameter expression w\.r.t. a specified parameter expression.

**Parameters**

**param** ([*Parameter*](#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `float`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param

### log

<span id="qiskit.circuit.Parameter.log" />

`log()`

Logarithm of a ParameterExpression

### name

<span id="qiskit.circuit.Parameter.name" />

`property name`

Returns the name of the [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

### parameters

<span id="qiskit.circuit.Parameter.parameters" />

`property parameters`

Returns a set of the unbound Parameters in the expression.

**Return type**

`Set`

### sin

<span id="qiskit.circuit.Parameter.sin" />

`sin()`

Sine of a ParameterExpression

### subs

<span id="qiskit.circuit.Parameter.subs" />

`subs(parameter_map)`

Substitute self with the corresponding parameter in `parameter_map`.

### tan

<span id="qiskit.circuit.Parameter.tan" />

`tan()`

Tangent of a ParameterExpression

