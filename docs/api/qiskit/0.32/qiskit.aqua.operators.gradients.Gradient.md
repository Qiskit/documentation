# Gradient

<span id="undefined" />

`Gradient(grad_method='param_shift', **kwargs)`

Bases: `qiskit.aqua.operators.gradients.gradient_base.GradientBase`

Convert an operator expression to the first-order gradient.

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods

|                                                                                                                                                                                                                                           |                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.Gradient.convert#qiskit.aqua.operators.gradients.Gradient.convert "qiskit.aqua.operators.gradients.Gradient.convert")                                                                         | **type operator**`OperatorBase`                                                                            |
| [`get_gradient`](qiskit.aqua.operators.gradients.Gradient.get_gradient#qiskit.aqua.operators.gradients.Gradient.get_gradient "qiskit.aqua.operators.gradients.Gradient.get_gradient")                                                     | Get the gradient for the given operator w\.r.t.                                                            |
| [`gradient_wrapper`](qiskit.aqua.operators.gradients.Gradient.gradient_wrapper#qiskit.aqua.operators.gradients.Gradient.gradient_wrapper "qiskit.aqua.operators.gradients.Gradient.gradient_wrapper")                                     | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.aqua.operators.gradients.Gradient.parameter_expression_grad#qiskit.aqua.operators.gradients.Gradient.parameter_expression_grad "qiskit.aqua.operators.gradients.Gradient.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

<span id="undefined" />

### grad\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
