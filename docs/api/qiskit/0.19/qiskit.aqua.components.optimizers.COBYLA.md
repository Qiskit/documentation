---
title: COBYLA
description: API reference for qiskit.aqua.components.optimizers.COBYLA
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.COBYLA
---

# COBYLA

<span id="qiskit.aqua.components.optimizers.COBYLA" />

`COBYLA(maxiter=1000, disp=False, rhobeg=1.0, tol=None)`

Constrained Optimization By Linear Approximation optimizer.

COBYLA is a numerical optimization method for constrained problems where the derivative of the objective function is not known.

Uses scipy.optimize.minimize COBYLA. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **rhobeg** (`float`) – Reasonable initial changes to the variables.
*   **tol** (`Optional`\[`float`]) – Final accuracy in the optimization (not precisely guaranteed). This is a lower bound on the size of the trust region.

## Attributes

|                                                                                                                                                                                     |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`COBYLA.bounds_support_level`](qiskit.aqua.components.optimizers.COBYLA.bounds_support_level "qiskit.aqua.components.optimizers.COBYLA.bounds_support_level")                      | Returns bounds support level        |
| [`COBYLA.gradient_support_level`](qiskit.aqua.components.optimizers.COBYLA.gradient_support_level "qiskit.aqua.components.optimizers.COBYLA.gradient_support_level")                | Returns gradient support level      |
| [`COBYLA.initial_point_support_level`](qiskit.aqua.components.optimizers.COBYLA.initial_point_support_level "qiskit.aqua.components.optimizers.COBYLA.initial_point_support_level") | Returns initial point support level |
| [`COBYLA.is_bounds_ignored`](qiskit.aqua.components.optimizers.COBYLA.is_bounds_ignored "qiskit.aqua.components.optimizers.COBYLA.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`COBYLA.is_bounds_required`](qiskit.aqua.components.optimizers.COBYLA.is_bounds_required "qiskit.aqua.components.optimizers.COBYLA.is_bounds_required")                            | Returns is bounds required          |
| [`COBYLA.is_bounds_supported`](qiskit.aqua.components.optimizers.COBYLA.is_bounds_supported "qiskit.aqua.components.optimizers.COBYLA.is_bounds_supported")                         | Returns is bounds supported         |
| [`COBYLA.is_gradient_ignored`](qiskit.aqua.components.optimizers.COBYLA.is_gradient_ignored "qiskit.aqua.components.optimizers.COBYLA.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`COBYLA.is_gradient_required`](qiskit.aqua.components.optimizers.COBYLA.is_gradient_required "qiskit.aqua.components.optimizers.COBYLA.is_gradient_required")                      | Returns is gradient required        |
| [`COBYLA.is_gradient_supported`](qiskit.aqua.components.optimizers.COBYLA.is_gradient_supported "qiskit.aqua.components.optimizers.COBYLA.is_gradient_supported")                   | Returns is gradient supported       |
| [`COBYLA.is_initial_point_ignored`](qiskit.aqua.components.optimizers.COBYLA.is_initial_point_ignored "qiskit.aqua.components.optimizers.COBYLA.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`COBYLA.is_initial_point_required`](qiskit.aqua.components.optimizers.COBYLA.is_initial_point_required "qiskit.aqua.components.optimizers.COBYLA.is_initial_point_required")       | Returns is initial point required   |
| [`COBYLA.is_initial_point_supported`](qiskit.aqua.components.optimizers.COBYLA.is_initial_point_supported "qiskit.aqua.components.optimizers.COBYLA.is_initial_point_supported")    | Returns is initial point supported  |
| [`COBYLA.setting`](qiskit.aqua.components.optimizers.COBYLA.setting "qiskit.aqua.components.optimizers.COBYLA.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                              |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`COBYLA.get_support_level`](qiskit.aqua.components.optimizers.COBYLA.get_support_level "qiskit.aqua.components.optimizers.COBYLA.get_support_level")()                      | Return support level dictionary                                                                           |
| [`COBYLA.gradient_num_diff`](qiskit.aqua.components.optimizers.COBYLA.gradient_num_diff "qiskit.aqua.components.optimizers.COBYLA.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`COBYLA.optimize`](qiskit.aqua.components.optimizers.COBYLA.optimize "qiskit.aqua.components.optimizers.COBYLA.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`COBYLA.print_options`](qiskit.aqua.components.optimizers.COBYLA.print_options "qiskit.aqua.components.optimizers.COBYLA.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`COBYLA.set_max_evals_grouped`](qiskit.aqua.components.optimizers.COBYLA.set_max_evals_grouped "qiskit.aqua.components.optimizers.COBYLA.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`COBYLA.set_options`](qiskit.aqua.components.optimizers.COBYLA.set_options "qiskit.aqua.components.optimizers.COBYLA.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`COBYLA.wrap_function`](qiskit.aqua.components.optimizers.COBYLA.wrap_function "qiskit.aqua.components.optimizers.COBYLA.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

