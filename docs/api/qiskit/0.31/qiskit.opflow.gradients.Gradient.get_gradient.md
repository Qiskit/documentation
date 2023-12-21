# qiskit.opflow\.gradients.Gradient.get\_gradient

`Gradient.get_gradient(operator, params)`

Get the gradient for the given operator w\.r.t. the given parameters

**Parameters**

*   **operator** (`OperatorBase`) – Operator w\.r.t. which we take the gradient.
*   **params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`]]) – Parameters w\.r.t. which we compute the gradient.

**Return type**

`OperatorBase`

**Returns**

Operator which represents the gradient w\.r.t. the given params.

**Raises**

*   **ValueError** – If `params` contains a parameter not present in `operator`.
*   [**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If the coefficient of the operator could not be reduced to 1.
*   [**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If the differentiation of a combo\_fn requires JAX but the package is not installed.
*   **TypeError** – If the operator does not include a StateFn given by a quantum circuit
*   **Exception** – Unintended code is reached
*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – jax not installed
