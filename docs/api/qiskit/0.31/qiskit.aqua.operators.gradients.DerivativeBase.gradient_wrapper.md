# qiskit.aqua.operators.gradients.DerivativeBase.gradient\_wrapper

`DerivativeBase.gradient_wrapper(operator, bind_params, grad_params=None, backend=None)`

Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. This callable can be used as gradient function for optimizers.

**Parameters**

*   **operator** (`OperatorBase`) – The operator for which we want to get the gradient, Hessian or QFI.
*   **bind\_params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`]]) – The operator parameters to which the parameter values are assigned.
*   **grad\_params** (`Union`\[`ParameterExpression`, `ParameterVector`, `List`\[`ParameterExpression`], `Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `None`]) – The parameters with respect to which we are taking the gradient, Hessian or QFI. If grad\_params = None, then grad\_params = bind\_params
*   **backend** (`Union`\[`BaseBackend`, `QuantumInstance`, `None`]) – The quantum backend or QuantumInstance to use to evaluate the gradient, Hessian or QFI.

**Returns**

Function to compute a gradient, Hessian or QFI. The function takes an iterable as argument which holds the parameter values.

**Return type**

callable(param\_values)
