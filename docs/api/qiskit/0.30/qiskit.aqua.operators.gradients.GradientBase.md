# GradientBase

<span id="undefined" />

`GradientBase(grad_method='param_shift', **kwargs)`

Bases: `qiskit.aqua.operators.gradients.derivative_base.DerivativeBase`

Base class for first-order operator gradient.

Convert an operator expression to the first-order gradient.

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods

|                                                                                                                                                                                                                                                       |                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.aqua.operators.gradients.GradientBase.convert#qiskit.aqua.operators.gradients.GradientBase.convert "qiskit.aqua.operators.gradients.GradientBase.convert")                                                                         | **type operator**`OperatorBase`                                                                            |
| [`gradient_wrapper`](qiskit.aqua.operators.gradients.GradientBase.gradient_wrapper#qiskit.aqua.operators.gradients.GradientBase.gradient_wrapper "qiskit.aqua.operators.gradients.GradientBase.gradient_wrapper")                                     | Get a callable function which provides the respective gradient, Hessian or QFI for given parameter values. |
| [`parameter_expression_grad`](qiskit.aqua.operators.gradients.GradientBase.parameter_expression_grad#qiskit.aqua.operators.gradients.GradientBase.parameter_expression_grad "qiskit.aqua.operators.gradients.GradientBase.parameter_expression_grad") | Get the derivative of a parameter expression w\.r.t.                                                       |

## Attributes

<span id="undefined" />

### grad\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
