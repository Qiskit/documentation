# Gradient

<span id="undefined" />

`Gradient(grad_method='param_shift', **kwargs)`

Bases: `qiskit.opflow.gradients.gradient_base.GradientBase`

Convert an operator expression to the first-order gradient.

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods Defined Here

|                                                                                                                                                               |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.Gradient.convert#qiskit.opflow.gradients.Gradient.convert "qiskit.opflow.gradients.Gradient.convert")                     | **type operator**`OperatorBase`                 |
| [`get_gradient`](qiskit.opflow.gradients.Gradient.get_gradient#qiskit.opflow.gradients.Gradient.get_gradient "qiskit.opflow.gradients.Gradient.get_gradient") | Get the gradient for the given operator w\.r.t. |

## Attributes

<span id="undefined" />

### grad\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
