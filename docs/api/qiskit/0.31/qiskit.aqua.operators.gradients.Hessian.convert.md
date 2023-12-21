# qiskit.aqua.operators.gradients.Hessian.convert

`Hessian.convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator for which we compute the Hessian
*   **params** (`Union`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `List`\[`ParameterExpression`], `ParameterVector`, `None`]) – The parameters we are computing the Hessian with respect to Either give directly the tuples/list of tuples for which the second order derivative is to be computed or give a list of parameters to build the full Hessian for those parameters.

**Returns**

An operator whose evaluation yields the Hessian

**Return type**

[OperatorBase](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")

**Raises**

**ValueError** – If params is not set.
