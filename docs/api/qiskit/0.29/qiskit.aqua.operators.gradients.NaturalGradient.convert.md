# qiskit.aqua.operators.gradients.NaturalGradient.convert

`NaturalGradient.convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator we are taking the gradient of.
*   **params** (`Union`\[`ParameterVector`, `ParameterExpression`, `List`\[`ParameterExpression`], `None`]) – The parameters we are taking the gradient with respect to.

**Return type**

`OperatorBase`

**Returns**

An operator whose evaluation yields the NaturalGradient.

**Raises**

*   **TypeError** – If `operator` does not represent an expectation value or the quantum state is not `CircuitStateFn`.
*   **ValueError** – If `params` contains a parameter not present in `operator`.
