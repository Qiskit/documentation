# qiskit.opflow\.gradients.Hessian.get\_hessian

`Hessian.get_hessian(operator, params=None)`

Get the Hessian for the given operator w\.r.t. the given parameters

**Parameters**

*   **operator** (`OperatorBase`) – Operator w\.r.t. which we take the Hessian.
*   **params** (`Union`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `List`\[`ParameterExpression`], `ParameterVector`, `None`]) – Parameters w\.r.t. which we compute the Hessian. If not explicitly passed, the full Hessian is constructed. The parameters are then inferred from the operator and sorted by name.

**Return type**

`OperatorBase`

**Returns**

Operator which represents the gradient w\.r.t. the given params.

**Raises**

*   **ValueError** – If `params` contains a parameter not present in `operator`.
*   **ValueError** – If `operator` is not parameterized.
*   [**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If the coefficient of the operator could not be reduced to 1.
*   [**OpflowError**](qiskit.opflow.OpflowError#qiskit.opflow.OpflowError "qiskit.opflow.OpflowError") – If the differentiation of a combo\_fn requires JAX but the package is not installed.
*   **TypeError** – If the operator does not include a StateFn given by a quantum circuit
*   **TypeError** – If the parameters were given in an unsupported format.
*   **Exception** – Unintended code is reached
*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – jax not installed
