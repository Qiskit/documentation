# qiskit.circuit.ParameterExpression.subs

`ParameterExpression.subs(parameter_map)`

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
