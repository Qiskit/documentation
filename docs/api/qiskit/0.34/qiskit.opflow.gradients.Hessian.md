# Hessian[¶](#hessian "Permalink to this headline")

<span id="undefined" />

`Hessian(hess_method='param_shift', **kwargs)`

Bases: `qiskit.opflow.gradients.hessian_base.HessianBase`

Compute the Hessian of an expected value.

**Parameters**

*   **hess\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Methods Defined Here

|                                                                                                                                                        |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.Hessian.convert#qiskit.opflow.gradients.Hessian.convert "qiskit.opflow.gradients.Hessian.convert")                 | **type operator**`OperatorBase`                |
| [`get_hessian`](qiskit.opflow.gradients.Hessian.get_hessian#qiskit.opflow.gradients.Hessian.get_hessian "qiskit.opflow.gradients.Hessian.get_hessian") | Get the Hessian for the given operator w\.r.t. |

## Attributes

<span id="undefined" />

### hess\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.
