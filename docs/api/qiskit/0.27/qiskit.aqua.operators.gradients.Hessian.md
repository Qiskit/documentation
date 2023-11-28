# qiskit.aqua.operators.gradients.Hessian

<span id="undefined" />

`Hessian(hess_method='param_shift', **kwargs)`

Compute the Hessian of an expected value.

**Parameters**

*   **hess\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

<span id="undefined" />

`__init__(hess_method='param_shift', **kwargs)`

**Parameters**

*   **hess\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods

|                                                                                                                                                                                           |                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.gradients.Hessian.__init__ "qiskit.aqua.operators.gradients.Hessian.__init__")(\[hess\_method])                                                       | **type hess\_method**`Union`\[`str`, `CircuitGradient`]                                                    |
| [`convert`](#qiskit.aqua.operators.gradients.Hessian.convert "qiskit.aqua.operators.gradients.Hessian.convert")(operator\[, params])                                                      | **type operator**`OperatorBase`                                                                            |
| [`get_hessian`](#qiskit.aqua.operators.gradients.Hessian.get_hessian "qiskit.aqua.operators.gradients.Hessian.get_hessian")(operator\[, params])                                          | Get the Hessian for the given operator w\.r.t.                                                             |
| [`gradient_wrapper`](#qiskit.aqua.operators.gradients.Hessian.gradient_wrapper "qiskit.aqua.operators.gradients.Hessian.gradient_wrapper")(operator, bind\_params\[, …])                  | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](#qiskit.aqua.operators.gradients.Hessian.parameter_expression_grad "qiskit.aqua.operators.gradients.Hessian.parameter_expression_grad")(param\_expr, param) | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

|                                                                                                                             |                            |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`hess_method`](#qiskit.aqua.operators.gradients.Hessian.hess_method "qiskit.aqua.operators.gradients.Hessian.hess_method") | Returns `CircuitGradient`. |

<span id="undefined" />

`convert(operator, params=None)`

**Parameters**

*   **operator** (`OperatorBase`) – The operator for which we compute the Hessian
*   **params** (`Union`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`], `List`\[`Tuple`\[`ParameterExpression`, `ParameterExpression`]], `List`\[`ParameterExpression`], `ParameterVector`, `None`]) – The parameters we are computing the Hessian with respect to Either give directly the tuples/list of tuples for which the second order derivative is to be computed or give a list of parameters to build the full Hessian for those parameters.

**Returns**

An operator whose evaluation yields the Hessian

**Return type**

[OperatorBase](qiskit.aqua.operators.OperatorBase#qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")

**Raises**

**ValueError** – If params is not set.

<span id="undefined" />

`get_hessian(operator, params=None)`

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

<span id="undefined" />

`gradient_wrapper(operator, bind_params, grad_params=None, backend=None)`

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

<span id="undefined" />

`property hess_method`

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.

<span id="undefined" />

`static parameter_expression_grad(param_expr, param)`

Get the derivative of a parameter expression w\.r.t. the given parameter.

**Parameters**

*   **param\_expr** (`ParameterExpression`) – The Parameter Expression for which we compute the derivative
*   **param** (`ParameterExpression`) – Parameter w\.r.t. which we want to take the derivative

**Return type**

`Union`\[`ParameterExpression`, `float`]

**Returns**

ParameterExpression representing the gradient of param\_expr w\.r.t. param
