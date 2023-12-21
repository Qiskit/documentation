# qiskit.aqua.operators.gradients.Hessian.get\_hessian

`Hessian.get_hessian(operator, params=None)`

Get the Hessian for the given operator w\.r.t. the given parameters

**Parameters**

*   **operator** (`OperatorBase`) – Operator w\.r.t. which we take the Hessian.
*   **params** (`Union`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `None`]) – Parameters w\.r.t. which we compute the Hessian.

**Return type**

`OperatorBase`

**Returns**

Operator which represents the gradient w\.r.t. the given params.

**Raises**

*   **ValueError** – If `params` contains a parameter not present in `operator`.
*   [**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If the coefficient of the operator could not be reduced to 1. AquaError: If the differentiation of a combo\_fn requires JAX but the package is not installed.
*   **TypeError** – If the operator does not include a StateFn given by a quantum circuit
*   **TypeError** – If the parameters were given in an unsupported format.
*   **Exception** – Unintended code is reached
