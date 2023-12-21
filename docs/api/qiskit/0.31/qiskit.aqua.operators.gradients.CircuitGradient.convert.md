# qiskit.aqua.operators.gradients.CircuitGradient.convert

`abstract CircuitGradient.convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator we are taking the gradient of
*   **params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`], `Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `None`]) – The parameters we are taking the gradient wrt: ω If a ParameterExpression, ParameterVector or List\[ParameterExpression] is given, then the 1st order derivative of the operator is calculated. If a Tuple\[ParameterExpression, ParameterExpression] or List\[Tuple\[ParameterExpression, ParameterExpression]] is given, then the 2nd order derivative of the operator is calculated.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the Gradient.

**Raises**

**ValueError** – If `params` contains a parameter not present in `operator`.
