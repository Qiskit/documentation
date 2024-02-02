---
title: Hessian
description: API reference for qiskit.opflow.gradients.Hessian
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.Hessian
---

# Hessian

<span id="qiskit.opflow.gradients.Hessian" />

`Hessian(hess_method='param_shift', **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/hessian.py "view source code")

Bases: [`HessianBase`](qiskit.opflow.gradients.HessianBase "qiskit.opflow.gradients.hessian_base.HessianBase")

Deprecated: Compute the Hessian of an expected value.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.hessian.Hessian` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                            |                                                                 |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.Hessian#convert "qiskit.opflow.gradients.Hessian.convert")             | **param operator**The operator for which we compute the Hessian |
| [`get_hessian`](qiskit.opflow.gradients.Hessian#get_hessian "qiskit.opflow.gradients.Hessian.get_hessian") | Get the Hessian for the given operator w\.r.t.                  |

## Attributes

<span id="qiskit.opflow.gradients.Hessian.hess_method" />

### hess\_method

Returns `CircuitGradient`.

**Returns**

`CircuitGradient`.

