---
title: POWELL
description: API reference for qiskit.aqua.components.optimizers.POWELL
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.POWELL
---

# POWELL

<span id="qiskit.aqua.components.optimizers.POWELL" />

`POWELL(maxiter=None, maxfev=1000, disp=False, xtol=0.0001, tol=None)`

Powell optimizer.

The Powell algorithm performs unconstrained optimization; it ignores bounds or constraints. Powell is a *conjugate direction method*: it performs sequential one-dimensional minimization along each directional vector, which is updated at each iteration of the main minimization loop. The function being minimized need not be differentiable, and no derivatives are taken.

Uses scipy.optimize.minimize Powell. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum allowed number of iterations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **maxfev** (`int`) – Maximum allowed number of function evaluations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **xtol** (`float`) – Relative error in solution xopt acceptable for convergence.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.

## Attributes

|                                                                                                                                                                                     |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`POWELL.bounds_support_level`](qiskit.aqua.components.optimizers.POWELL.bounds_support_level "qiskit.aqua.components.optimizers.POWELL.bounds_support_level")                      | Returns bounds support level        |
| [`POWELL.gradient_support_level`](qiskit.aqua.components.optimizers.POWELL.gradient_support_level "qiskit.aqua.components.optimizers.POWELL.gradient_support_level")                | Returns gradient support level      |
| [`POWELL.initial_point_support_level`](qiskit.aqua.components.optimizers.POWELL.initial_point_support_level "qiskit.aqua.components.optimizers.POWELL.initial_point_support_level") | Returns initial point support level |
| [`POWELL.is_bounds_ignored`](qiskit.aqua.components.optimizers.POWELL.is_bounds_ignored "qiskit.aqua.components.optimizers.POWELL.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`POWELL.is_bounds_required`](qiskit.aqua.components.optimizers.POWELL.is_bounds_required "qiskit.aqua.components.optimizers.POWELL.is_bounds_required")                            | Returns is bounds required          |
| [`POWELL.is_bounds_supported`](qiskit.aqua.components.optimizers.POWELL.is_bounds_supported "qiskit.aqua.components.optimizers.POWELL.is_bounds_supported")                         | Returns is bounds supported         |
| [`POWELL.is_gradient_ignored`](qiskit.aqua.components.optimizers.POWELL.is_gradient_ignored "qiskit.aqua.components.optimizers.POWELL.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`POWELL.is_gradient_required`](qiskit.aqua.components.optimizers.POWELL.is_gradient_required "qiskit.aqua.components.optimizers.POWELL.is_gradient_required")                      | Returns is gradient required        |
| [`POWELL.is_gradient_supported`](qiskit.aqua.components.optimizers.POWELL.is_gradient_supported "qiskit.aqua.components.optimizers.POWELL.is_gradient_supported")                   | Returns is gradient supported       |
| [`POWELL.is_initial_point_ignored`](qiskit.aqua.components.optimizers.POWELL.is_initial_point_ignored "qiskit.aqua.components.optimizers.POWELL.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`POWELL.is_initial_point_required`](qiskit.aqua.components.optimizers.POWELL.is_initial_point_required "qiskit.aqua.components.optimizers.POWELL.is_initial_point_required")       | Returns is initial point required   |
| [`POWELL.is_initial_point_supported`](qiskit.aqua.components.optimizers.POWELL.is_initial_point_supported "qiskit.aqua.components.optimizers.POWELL.is_initial_point_supported")    | Returns is initial point supported  |
| [`POWELL.setting`](qiskit.aqua.components.optimizers.POWELL.setting "qiskit.aqua.components.optimizers.POWELL.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                              |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`POWELL.get_support_level`](qiskit.aqua.components.optimizers.POWELL.get_support_level "qiskit.aqua.components.optimizers.POWELL.get_support_level")()                      | Return support level dictionary                                                                           |
| [`POWELL.gradient_num_diff`](qiskit.aqua.components.optimizers.POWELL.gradient_num_diff "qiskit.aqua.components.optimizers.POWELL.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`POWELL.optimize`](qiskit.aqua.components.optimizers.POWELL.optimize "qiskit.aqua.components.optimizers.POWELL.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`POWELL.print_options`](qiskit.aqua.components.optimizers.POWELL.print_options "qiskit.aqua.components.optimizers.POWELL.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`POWELL.set_max_evals_grouped`](qiskit.aqua.components.optimizers.POWELL.set_max_evals_grouped "qiskit.aqua.components.optimizers.POWELL.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`POWELL.set_options`](qiskit.aqua.components.optimizers.POWELL.set_options "qiskit.aqua.components.optimizers.POWELL.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`POWELL.wrap_function`](qiskit.aqua.components.optimizers.POWELL.wrap_function "qiskit.aqua.components.optimizers.POWELL.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

