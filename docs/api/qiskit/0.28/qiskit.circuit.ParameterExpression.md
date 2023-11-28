# qiskit.circuit.ParameterExpression

<span id="undefined" />

`ParameterExpression(symbol_map, expr)`

ParameterExpression class to enable creating expressions of Parameters.

Create a new [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression").

Not intended to be called directly, but to be instantiated via operations on other [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") or [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression") objects.

**Parameters**

*   **symbol\_map** (*Dict\[*[*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*, \[*[*ParameterExpression*](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*, float, or int]]*) – Mapping of [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") instances to the `sympy.Symbol` serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of `sympy.Symbol` s.

<span id="undefined" />

`__init__(symbol_map, expr)`

Create a new [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression").

Not intended to be called directly, but to be instantiated via operations on other [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") or [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression") objects.

**Parameters**

*   **symbol\_map** (*Dict\[*[*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*, \[*[*ParameterExpression*](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*, float, or int]]*) – Mapping of [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") instances to the `sympy.Symbol` serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of `sympy.Symbol` s.

## Methods

|                                                                                                                             |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.circuit.ParameterExpression.__init__ "qiskit.circuit.ParameterExpression.__init__")(symbol\_map, expr) | Create a new [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression"). |
| [`arccos`](#qiskit.circuit.ParameterExpression.arccos "qiskit.circuit.ParameterExpression.arccos")()                        | Arccos of a ParameterExpression                                                                                 |
| [`arcsin`](#qiskit.circuit.ParameterExpression.arcsin "qiskit.circuit.ParameterExpression.arcsin")()                        | Arcsin of a ParameterExpression                                                                                 |
| [`arctan`](#qiskit.circuit.ParameterExpression.arctan "qiskit.circuit.ParameterExpression.arctan")()                        | Arctan of a ParameterExpression                                                                                 |
| [`assign`](#qiskit.circuit.ParameterExpression.assign "qiskit.circuit.ParameterExpression.assign")(parameter, value)        | Assign one parameter to a value, which can either be numeric or another parameter expression.                   |
| [`bind`](#qiskit.circuit.ParameterExpression.bind "qiskit.circuit.ParameterExpression.bind")(parameter\_values)             | Binds the provided set of parameters to their corresponding values.                                             |
| [`conjugate`](#qiskit.circuit.ParameterExpression.conjugate "qiskit.circuit.ParameterExpression.conjugate")()               | Return the conjugate.                                                                                           |
| [`cos`](#qiskit.circuit.ParameterExpression.cos "qiskit.circuit.ParameterExpression.cos")()                                 | Cosine of a ParameterExpression                                                                                 |
| [`exp`](#qiskit.circuit.ParameterExpression.exp "qiskit.circuit.ParameterExpression.exp")()                                 | Exponential of a ParameterExpression                                                                            |
| [`gradient`](#qiskit.circuit.ParameterExpression.gradient "qiskit.circuit.ParameterExpression.gradient")(param)             | Get the derivative of a parameter expression w\.r.t.                                                            |
| [`is_real`](#qiskit.circuit.ParameterExpression.is_real "qiskit.circuit.ParameterExpression.is_real")()                     | Return whether the expression is real                                                                           |
| [`log`](#qiskit.circuit.ParameterExpression.log "qiskit.circuit.ParameterExpression.log")()                                 | Logarithm of a ParameterExpression                                                                              |
| [`sin`](#qiskit.circuit.ParameterExpression.sin "qiskit.circuit.ParameterExpression.sin")()                                 | Sine of a ParameterExpression                                                                                   |
| [`subs`](#qiskit.circuit.ParameterExpression.subs "qiskit.circuit.ParameterExpression.subs")(parameter\_map)                | Returns a new Expression with replacement Parameters.                                                           |
| [`tan`](#qiskit.circuit.ParameterExpression.tan "qiskit.circuit.ParameterExpression.tan")()                                 | Tangent of a ParameterExpression                                                                                |

## Attributes

|                                                                                                                |                                                            |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`parameters`](#qiskit.circuit.ParameterExpression.parameters "qiskit.circuit.ParameterExpression.parameters") | Returns a set of the unbound Parameters in the expression. |

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

*   **parameter** ([*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`]) – The new value to bind to.

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

**param** ([*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `float`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param

<span id="undefined" />

`is_real()`

Return whether the expression is real

<span id="undefined" />

`log()`

Logarithm of a ParameterExpression

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

Returns a new Expression with replacement Parameters.

**Parameters**

**parameter\_map** (`Dict`) – Mapping from Parameters in self to the ParameterExpression instances with which they should be replaced.

**Raises**

**CircuitError** –

*   If parameter\_map contains Parameters outside those in self. - If the replacement Parameters in parameter\_map would result in a name conflict in the generated expression.

**Return type**

`ParameterExpression`

**Returns**

A new expression with the specified parameters replaced.

<span id="undefined" />

`tan()`

Tangent of a ParameterExpression
