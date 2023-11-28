# ParameterExpression

<span id="undefined" />

`ParameterExpression(symbol_map, expr)`

Bases: `object`

ParameterExpression class to enable creating expressions of Parameters.

Create a new [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression").

Not intended to be called directly, but to be instantiated via operations on other [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") or [`ParameterExpression`](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression") objects.

**Parameters**

*   **symbol\_map** (*Dict\[*[*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*, \[*[*ParameterExpression*](#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*, float, or int]]*) – Mapping of [`Parameter`](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter") instances to the `sympy.Symbol` serving as their placeholder in expr.
*   **expr** (*sympy.Expr*) – Expression of `sympy.Symbol` s.

## Methods

|                                                                                                                                                         |                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`arccos`](qiskit.circuit.ParameterExpression.arccos#qiskit.circuit.ParameterExpression.arccos "qiskit.circuit.ParameterExpression.arccos")             | Arccos of a ParameterExpression                                                               |
| [`arcsin`](qiskit.circuit.ParameterExpression.arcsin#qiskit.circuit.ParameterExpression.arcsin "qiskit.circuit.ParameterExpression.arcsin")             | Arcsin of a ParameterExpression                                                               |
| [`arctan`](qiskit.circuit.ParameterExpression.arctan#qiskit.circuit.ParameterExpression.arctan "qiskit.circuit.ParameterExpression.arctan")             | Arctan of a ParameterExpression                                                               |
| [`assign`](qiskit.circuit.ParameterExpression.assign#qiskit.circuit.ParameterExpression.assign "qiskit.circuit.ParameterExpression.assign")             | Assign one parameter to a value, which can either be numeric or another parameter expression. |
| [`bind`](qiskit.circuit.ParameterExpression.bind#qiskit.circuit.ParameterExpression.bind "qiskit.circuit.ParameterExpression.bind")                     | Binds the provided set of parameters to their corresponding values.                           |
| [`conjugate`](qiskit.circuit.ParameterExpression.conjugate#qiskit.circuit.ParameterExpression.conjugate "qiskit.circuit.ParameterExpression.conjugate") | Return the conjugate.                                                                         |
| [`cos`](qiskit.circuit.ParameterExpression.cos#qiskit.circuit.ParameterExpression.cos "qiskit.circuit.ParameterExpression.cos")                         | Cosine of a ParameterExpression                                                               |
| [`exp`](qiskit.circuit.ParameterExpression.exp#qiskit.circuit.ParameterExpression.exp "qiskit.circuit.ParameterExpression.exp")                         | Exponential of a ParameterExpression                                                          |
| [`gradient`](qiskit.circuit.ParameterExpression.gradient#qiskit.circuit.ParameterExpression.gradient "qiskit.circuit.ParameterExpression.gradient")     | Get the derivative of a parameter expression w\.r.t.                                          |
| [`is_real`](qiskit.circuit.ParameterExpression.is_real#qiskit.circuit.ParameterExpression.is_real "qiskit.circuit.ParameterExpression.is_real")         | Return whether the expression is real                                                         |
| [`log`](qiskit.circuit.ParameterExpression.log#qiskit.circuit.ParameterExpression.log "qiskit.circuit.ParameterExpression.log")                         | Logarithm of a ParameterExpression                                                            |
| [`sin`](qiskit.circuit.ParameterExpression.sin#qiskit.circuit.ParameterExpression.sin "qiskit.circuit.ParameterExpression.sin")                         | Sine of a ParameterExpression                                                                 |
| [`subs`](qiskit.circuit.ParameterExpression.subs#qiskit.circuit.ParameterExpression.subs "qiskit.circuit.ParameterExpression.subs")                     | Returns a new Expression with replacement Parameters.                                         |
| [`sympify`](qiskit.circuit.ParameterExpression.sympify#qiskit.circuit.ParameterExpression.sympify "qiskit.circuit.ParameterExpression.sympify")         | Return symbolic expression as a raw Sympy or Symengine object.                                |
| [`tan`](qiskit.circuit.ParameterExpression.tan#qiskit.circuit.ParameterExpression.tan "qiskit.circuit.ParameterExpression.tan")                         | Tangent of a ParameterExpression                                                              |

## Attributes

<span id="undefined" />

### parameters

Returns a set of the unbound Parameters in the expression.

**Return type**

`Set`
