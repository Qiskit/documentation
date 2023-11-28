# NaturalGradient

<span id="undefined" />

`NaturalGradient(grad_method='lin_comb', qfi_method='lin_comb_full', regularization=None, **kwargs)`

Bases: `qiskit.opflow.gradients.gradient_base.GradientBase`

Convert an operator expression to the first-order gradient.

Given an ill-posed inverse problem

> x = arg min\{||Ax-C||^2} (1)

one can use regularization schemes can be used to stabilize the system and find a numerical solution

> x\_lambda = arg min\{||Ax-C||^2 + lambda\*R(x)} (2)

where R(x) represents the penalization term.

**Parameters**

*   **grad\_method** (`Union`\[`str`, `CircuitGradient`]) – The method used to compute the state gradient. Can be either `'param_shift'` or `'lin_comb'` or `'fin_diff'`.
*   **qfi\_method** (`Union`\[`str`, `CircuitQFI`]) – The method used to compute the QFI. Can be either `'lin_comb_full'` or `'overlap_block_diag'` or `'overlap_diag'`.
*   **regularization** (`Optional`\[`str`]) – Use the following regularization with a least square method to solve the underlying system of linear equations Can be either None or `'ridge'` or `'lasso'` or `'perturb_diag'` `'ridge'` and `'lasso'` use an automatic optimal parameter search If regularization is None but the metric is ill-conditioned or singular then a least square solver is used without regularization
*   **kwargs** (*dict*) – Optional parameters for a CircuitGradient

## Methods Defined Here

|                                                                                                                                                                |                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`convert`](qiskit.opflow.gradients.NaturalGradient.convert#qiskit.opflow.gradients.NaturalGradient.convert "qiskit.opflow.gradients.NaturalGradient.convert") | **type operator**`OperatorBase` |

## Attributes

<span id="undefined" />

### grad\_method

Returns `CircuitGradient`.

**Return type**

`CircuitGradient`

**Returns**

`CircuitGradient`.

<span id="undefined" />

### qfi\_method

Returns `CircuitQFI`.

Returns: `CircuitQFI`

**Return type**

`CircuitQFI`

<span id="undefined" />

### regularization

Returns the regularization option.

Returns: the regularization option.

**Return type**

`Optional`\[`str`]
