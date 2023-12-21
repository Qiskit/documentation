---
title: CG
description: API reference for qiskit.aqua.components.optimizers.CG
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.CG
---

# CG

<span id="qiskit.aqua.components.optimizers.CG" />

`CG(maxiter=20, disp=False, gtol=1e-05, tol=None, eps=1.4901161193847656e-08)`

Conjugate Gradient optimizer.

CG is an algorithm for the numerical solution of systems of linear equations whose matrices are symmetric and positive-definite. It is an *iterative algorithm* in that it uses an initial guess to generate a sequence of improving approximate solutions for a problem, in which each approximation is derived from the previous ones. It is often used to solve unconstrained optimization problems, such as energy minimization.

Uses scipy.optimize.minimize CG. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations to perform.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **gtol** (`float`) – Gradient norm must be less than gtol before successful termination.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – If jac is approximated, use this value for the step size.

## Attributes

|                                                                                                                                                                         |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`CG.bounds_support_level`](qiskit.aqua.components.optimizers.CG.bounds_support_level "qiskit.aqua.components.optimizers.CG.bounds_support_level")                      | Returns bounds support level        |
| [`CG.gradient_support_level`](qiskit.aqua.components.optimizers.CG.gradient_support_level "qiskit.aqua.components.optimizers.CG.gradient_support_level")                | Returns gradient support level      |
| [`CG.initial_point_support_level`](qiskit.aqua.components.optimizers.CG.initial_point_support_level "qiskit.aqua.components.optimizers.CG.initial_point_support_level") | Returns initial point support level |
| [`CG.is_bounds_ignored`](qiskit.aqua.components.optimizers.CG.is_bounds_ignored "qiskit.aqua.components.optimizers.CG.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`CG.is_bounds_required`](qiskit.aqua.components.optimizers.CG.is_bounds_required "qiskit.aqua.components.optimizers.CG.is_bounds_required")                            | Returns is bounds required          |
| [`CG.is_bounds_supported`](qiskit.aqua.components.optimizers.CG.is_bounds_supported "qiskit.aqua.components.optimizers.CG.is_bounds_supported")                         | Returns is bounds supported         |
| [`CG.is_gradient_ignored`](qiskit.aqua.components.optimizers.CG.is_gradient_ignored "qiskit.aqua.components.optimizers.CG.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`CG.is_gradient_required`](qiskit.aqua.components.optimizers.CG.is_gradient_required "qiskit.aqua.components.optimizers.CG.is_gradient_required")                      | Returns is gradient required        |
| [`CG.is_gradient_supported`](qiskit.aqua.components.optimizers.CG.is_gradient_supported "qiskit.aqua.components.optimizers.CG.is_gradient_supported")                   | Returns is gradient supported       |
| [`CG.is_initial_point_ignored`](qiskit.aqua.components.optimizers.CG.is_initial_point_ignored "qiskit.aqua.components.optimizers.CG.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`CG.is_initial_point_required`](qiskit.aqua.components.optimizers.CG.is_initial_point_required "qiskit.aqua.components.optimizers.CG.is_initial_point_required")       | Returns is initial point required   |
| [`CG.is_initial_point_supported`](qiskit.aqua.components.optimizers.CG.is_initial_point_supported "qiskit.aqua.components.optimizers.CG.is_initial_point_supported")    | Returns is initial point supported  |
| [`CG.setting`](qiskit.aqua.components.optimizers.CG.setting "qiskit.aqua.components.optimizers.CG.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                        |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`CG.get_support_level`](qiskit.aqua.components.optimizers.CG.get_support_level "qiskit.aqua.components.optimizers.CG.get_support_level")()                            | Return support level dictionary                                                                           |
| [`CG.gradient_num_diff`](qiskit.aqua.components.optimizers.CG.gradient_num_diff "qiskit.aqua.components.optimizers.CG.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`CG.optimize`](qiskit.aqua.components.optimizers.CG.optimize "qiskit.aqua.components.optimizers.CG.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`CG.print_options`](qiskit.aqua.components.optimizers.CG.print_options "qiskit.aqua.components.optimizers.CG.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`CG.set_max_evals_grouped`](qiskit.aqua.components.optimizers.CG.set_max_evals_grouped "qiskit.aqua.components.optimizers.CG.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`CG.set_options`](qiskit.aqua.components.optimizers.CG.set_options "qiskit.aqua.components.optimizers.CG.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`CG.wrap_function`](qiskit.aqua.components.optimizers.CG.wrap_function "qiskit.aqua.components.optimizers.CG.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

