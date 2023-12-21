# qiskit.opflow\.gradients.Gradient.convert

`Gradient.convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator we are taking the gradient of.
*   **params** (`Union`\[`ParameterVector`, `ParameterExpression`, `List`\[`ParameterExpression`], `None`]) – The parameters we are taking the gradient with respect to. If not explicitly passed, they are inferred from the operator and sorted by name.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the Gradient.

**Raises**

*   **ValueError** – If `params` contains a parameter not present in `operator`.
*   **ValueError** – If `operator` is not parameterized.
