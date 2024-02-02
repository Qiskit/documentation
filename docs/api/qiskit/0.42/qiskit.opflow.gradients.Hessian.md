---
title: Hessian
description: API reference for qiskit.opflow.gradients.Hessian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.Hessian
---

# Hessian

<span id="qiskit.opflow.gradients.Hessian" />

`Hessian(hess_method='param_shift', **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/gradients/hessian.py "view source code")

Bases: [`qiskit.opflow.gradients.hessian_base.HessianBase`](qiskit.opflow.gradients.HessianBase "qiskit.opflow.gradients.hessian_base.HessianBase")

Compute the Hessian of an expected value.

**Parameters**

*   **hess\_method** (`Union`\[`str`, [`CircuitGradient`](qiskit.opflow.gradients.CircuitGradient "qiskit.opflow.gradients.circuit_gradients.circuit_gradient.CircuitGradient")]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

**Methods Defined Here**

|                                                                                                            |                                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.Hessian#convert "qiskit.opflow.gradients.Hessian.convert")             | **type operator**[`OperatorBase`](qiskit.opflow.OperatorBase "qiskit.opflow.operator_base.OperatorBase") |
| [`get_hessian`](qiskit.opflow.gradients.Hessian#get_hessian "qiskit.opflow.gradients.Hessian.get_hessian") | Get the Hessian for the given operator w\.r.t.                                                           |

## Attributes

<span id="qiskit.opflow.gradients.Hessian.hess_method" />

### hess\_method

Returns `CircuitGradient`.

**Return type**

[`CircuitGradient`](qiskit.opflow.gradients.CircuitGradient "qiskit.opflow.gradients.circuit_gradients.circuit_gradient.CircuitGradient")

**Returns**

`CircuitGradient`.

