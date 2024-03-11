---
title: HessianBase
description: API reference for qiskit.opflow.gradients.HessianBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.HessianBase
---

# HessianBase

<span id="qiskit.opflow.gradients.HessianBase" />

`HessianBase(hess_method='param_shift', **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/opflow/gradients/hessian_base.py "view source code")

Bases: `qiskit.opflow.gradients.derivative_base.DerivativeBase`

Base class for the Hessian of an expected value.

**Parameters**

*   **hess\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state/probability gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`. Ignored for gradients w\.r.t observable parameters.
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Raises**

**ValueError** – If method != `fin_diff` and `epsilon` is not None.

## Attributes

<span id="qiskit.opflow.gradients.HessianBase.hess_method" />

### hess\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.

