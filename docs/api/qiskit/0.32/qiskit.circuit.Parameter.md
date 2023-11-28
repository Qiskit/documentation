# Parameter

<span id="undefined" />

`Parameter(name)`

Bases: `qiskit.circuit.parameterexpression.ParameterExpression`

Parameter Class for variable parameters.

Create a new named [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

**Parameters**

**name** (`str`) – name of the `Parameter`, used for visual representation. This can be any unicode string, e.g. “ϕ”.

## Methods

|                                                                                                                           |                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`arccos`](qiskit.circuit.Parameter.arccos#qiskit.circuit.Parameter.arccos "qiskit.circuit.Parameter.arccos")             | Arccos of a ParameterExpression                                                               |
| [`arcsin`](qiskit.circuit.Parameter.arcsin#qiskit.circuit.Parameter.arcsin "qiskit.circuit.Parameter.arcsin")             | Arcsin of a ParameterExpression                                                               |
| [`arctan`](qiskit.circuit.Parameter.arctan#qiskit.circuit.Parameter.arctan "qiskit.circuit.Parameter.arctan")             | Arctan of a ParameterExpression                                                               |
| [`assign`](qiskit.circuit.Parameter.assign#qiskit.circuit.Parameter.assign "qiskit.circuit.Parameter.assign")             | Assign one parameter to a value, which can either be numeric or another parameter expression. |
| [`bind`](qiskit.circuit.Parameter.bind#qiskit.circuit.Parameter.bind "qiskit.circuit.Parameter.bind")                     | Binds the provided set of parameters to their corresponding values.                           |
| [`conjugate`](qiskit.circuit.Parameter.conjugate#qiskit.circuit.Parameter.conjugate "qiskit.circuit.Parameter.conjugate") | Return the conjugate.                                                                         |
| [`cos`](qiskit.circuit.Parameter.cos#qiskit.circuit.Parameter.cos "qiskit.circuit.Parameter.cos")                         | Cosine of a ParameterExpression                                                               |
| [`exp`](qiskit.circuit.Parameter.exp#qiskit.circuit.Parameter.exp "qiskit.circuit.Parameter.exp")                         | Exponential of a ParameterExpression                                                          |
| [`gradient`](qiskit.circuit.Parameter.gradient#qiskit.circuit.Parameter.gradient "qiskit.circuit.Parameter.gradient")     | Get the derivative of a parameter expression w\.r.t.                                          |
| [`is_real`](qiskit.circuit.Parameter.is_real#qiskit.circuit.Parameter.is_real "qiskit.circuit.Parameter.is_real")         | Return whether the expression is real                                                         |
| [`log`](qiskit.circuit.Parameter.log#qiskit.circuit.Parameter.log "qiskit.circuit.Parameter.log")                         | Logarithm of a ParameterExpression                                                            |
| [`sin`](qiskit.circuit.Parameter.sin#qiskit.circuit.Parameter.sin "qiskit.circuit.Parameter.sin")                         | Sine of a ParameterExpression                                                                 |
| [`subs`](qiskit.circuit.Parameter.subs#qiskit.circuit.Parameter.subs "qiskit.circuit.Parameter.subs")                     | Substitute self with the corresponding parameter in `parameter_map`.                          |
| [`tan`](qiskit.circuit.Parameter.tan#qiskit.circuit.Parameter.tan "qiskit.circuit.Parameter.tan")                         | Tangent of a ParameterExpression                                                              |

## Attributes

<span id="undefined" />

### name

Returns the name of the [`Parameter`](#qiskit.circuit.Parameter "qiskit.circuit.Parameter").

<span id="undefined" />

### parameters

Returns a set of the unbound Parameters in the expression.

**Return type**

`Set`
