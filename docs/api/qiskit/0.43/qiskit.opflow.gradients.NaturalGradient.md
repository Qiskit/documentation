---
title: NaturalGradient
description: API reference for qiskit.opflow.gradients.NaturalGradient
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.gradients.NaturalGradient
---

# NaturalGradient

<span id="qiskit.opflow.gradients.NaturalGradient" />

`NaturalGradient(grad_method='lin_comb', qfi_method='lin_comb_full', regularization=None, **kwargs)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/gradients/natural_gradient.py "view source code")

Bases: [`GradientBase`](qiskit.opflow.gradients.GradientBase "qiskit.opflow.gradients.gradient_base.GradientBase")

Deprecated: Convert an operator expression to the first-order gradient.

Given an ill-posed inverse problem

> x = arg min\{||Ax-C||^2} (1)

one can use regularization schemes can be used to stabilize the system and find a numerical solution

> x\_lambda = arg min\{||Ax-C||^2 + lambda\*R(x)} (2)

where R(x) represents the penalization term.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.gradients.natural_gradient.NaturalGradient` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

*   **grad\_method** (*str |* [*CircuitGradient*](qiskit.opflow.gradients.CircuitGradient "qiskit.opflow.gradients.circuit_gradients.circuit_gradient.CircuitGradient")) – The method used to compute the state gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`.
*   **qfi\_method** (*str |* [*CircuitQFI*](qiskit.opflow.gradients.CircuitQFI "qiskit.opflow.gradients.circuit_qfis.circuit_qfi.CircuitQFI")) – The method used to compute the QFI. Can be either `'lin_comb_full'` or `'overlap_block_diag'` or `'overlap_diag'`.
*   **regularization** (*str | None*) – Use the following regularization with a least square method to solve the underlying system of linear equations Can be either None or `'ridge'` or `'lasso'` or `'perturb_diag'` `'ridge'` and `'lasso'` use an automatic optimal parameter search If regularization is None but the metric is ill-conditioned or singular then a least square solver is used without regularization
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

**Methods Defined Here**

|                                                                                                                                              |                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`convert`](qiskit.opflow.gradients.NaturalGradient#convert "qiskit.opflow.gradients.NaturalGradient.convert")                               | **param operator**The operator we are taking the gradient of. |
| [`nat_grad_combo_fn`](qiskit.opflow.gradients.NaturalGradient#nat_grad_combo_fn "qiskit.opflow.gradients.NaturalGradient.nat_grad_combo_fn") | Natural Gradient Function Implementation.                     |

## Attributes

<span id="qiskit.opflow.gradients.NaturalGradient.grad_method" />

### grad\_method

Returns `CircuitGradient`.

**Returns**

`CircuitGradient`.

<span id="qiskit.opflow.gradients.NaturalGradient.qfi_method" />

### qfi\_method

Returns `CircuitQFI`.

Returns: `CircuitQFI`.

<span id="qiskit.opflow.gradients.NaturalGradient.regularization" />

### regularization

Returns the regularization option.

Returns: the regularization option.

