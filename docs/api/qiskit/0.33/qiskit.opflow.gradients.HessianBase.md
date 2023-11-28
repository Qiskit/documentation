# HessianBase[¶](#hessianbase "Permalink to this headline")

<span id="undefined" />

`HessianBase(hess_method='param_shift', **kwargs)`

Bases: `qiskit.opflow.gradients.derivative_base.DerivativeBase`

Base class for the Hessian of an expected value.

**Parameters**

*   **hess\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Attributes

<span id="undefined" />

### hess\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
