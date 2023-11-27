# GradientBase[¶](#gradientbase "Permalink to this headline")

<span id="undefined" />

`GradientBase(grad_method='param_shift', **kwargs)`

Bases: `qiskit.opflow.gradients.derivative_base.DerivativeBase`

Base class for first-order operator gradient.

Convert an operator expression to the first-order gradient.

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Attributes

<span id="undefined" />

### grad\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
