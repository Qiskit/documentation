---
title: Gradient
description: API reference for qiskit.opflow.gradients.Gradient
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.Gradient
---

# Gradient

<span id="qiskit.opflow.gradients.Gradient" />

`Gradient(grad_method='param_shift', **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/gradient.py "view source code")

Bases: [`GradientBase`](qiskit.opflow.gradients.GradientBase "qiskit.opflow.gradients.gradient_base.GradientBase")

Deprecated: Convert an operator expression to the first-order gradient.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.gradient.Gradient` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                                 |                                                               |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.Gradient#convert "qiskit.opflow.gradients.Gradient.convert")                | **param operator**The operator we are taking the gradient of. |
| [`get_gradient`](qiskit.opflow.gradients.Gradient#get_gradient "qiskit.opflow.gradients.Gradient.get_gradient") | Get the gradient for the given operator w\.r.t.               |

## Attributes

<span id="qiskit.opflow.gradients.Gradient.grad_method" />

### grad\_method

Returns `CircuitGradient`.

**Returns**

`CircuitGradient`.

