# qiskit.circuit.Parameter

<span id="undefined" />

`Parameter(name)`

Parameter Class for variable parameters.

Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

**Parameters**

**name** (`str`) – name of the `Parameter`, used for visual representation. This can be any unicode string, e.g. “ϕ”.

<span id="undefined" />

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

<span id="undefined" />

`arccos()`

Arccos of a ParameterExpression

<span id="undefined" />

`arcsin()`

Arcsin of a ParameterExpression

<span id="undefined" />

`arctan()`

Arctan of a ParameterExpression

<span id="undefined" />

`assign(parameter, value)`

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Parameters**

*   **parameter** ([*Parameter*](#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`, `int`]) – The new value to bind to.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by assignment.

<span id="undefined" />

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

<span id="undefined" />

`conjugate()`

Return the conjugate.

**Return type**

`ParameterExpression`

<span id="undefined" />

`cos()`

Cosine of a ParameterExpression

<span id="undefined" />

`exp()`

Exponential of a ParameterExpression

<span id="undefined" />

`gradient(param)`

Get the derivative of a parameter expression w\.r.t. a specified parameter expression.

**Parameters**

**param** ([*Parameter*](#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `float`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param

<span id="undefined" />

`log()`

Logarithm of a ParameterExpression

<span id="undefined" />

`property name`

Returns the name of the [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

<span id="undefined" />

`property parameters`

Returns a set of the unbound Parameters in the expression.

**Return type**

`Set`

<span id="undefined" />

`sin()`

Sine of a ParameterExpression

<span id="undefined" />

`subs(parameter_map)`

Substitute self with the corresponding parameter in `parameter_map`.

<span id="undefined" />

`tan()`

Tangent of a ParameterExpression
