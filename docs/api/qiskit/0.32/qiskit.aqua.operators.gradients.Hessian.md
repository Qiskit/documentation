# Hessian

<span id="undefined" />

`Hessian(hess_method='param_shift', **kwargs)`

Bases: `qiskit.aqua.operators.gradients.hessian_base.HessianBase`

Compute the Hessian of an expected value.

**Parameters**

*   **hess\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods

|                                                                                                                                                                                                                                        |                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.Hessian.convert#qiskit.aqua.operators.gradients.Hessian.convert "qiskit.aqua.operators.gradients.Hessian.convert")                                                                         | **type operator**`OperatorBase`                                                                            |
| [`get_hessian`](qiskit.aqua.operators.gradients.Hessian.get_hessian#qiskit.aqua.operators.gradients.Hessian.get_hessian "qiskit.aqua.operators.gradients.Hessian.get_hessian")                                                         | Get the Hessian for the given operator w\.r.t.                                                             |
| [`gradient_wrapper`](qiskit.aqua.operators.gradients.Hessian.gradient_wrapper#qiskit.aqua.operators.gradients.Hessian.gradient_wrapper "qiskit.aqua.operators.gradients.Hessian.gradient_wrapper")                                     | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.aqua.operators.gradients.Hessian.parameter_expression_grad#qiskit.aqua.operators.gradients.Hessian.parameter_expression_grad "qiskit.aqua.operators.gradients.Hessian.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

<span id="undefined" />

### hess\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
