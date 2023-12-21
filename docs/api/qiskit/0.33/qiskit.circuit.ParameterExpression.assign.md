# qiskit.circuit.ParameterExpression.assign

`ParameterExpression.assign(parameter, value)`

Assign one parameter to a value, which can either be numeric or another parameter expression.

**Parameters**

*   **parameter** ([*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")) – A parameter in this expression whose value will be updated.
*   **value** (`Union`\[`ParameterExpression`, `float`]) – The new value to bind to.

**Return type**

`ParameterExpression`

**Returns**

A new expression parameterized by any parameters which were not bound by assignment.
