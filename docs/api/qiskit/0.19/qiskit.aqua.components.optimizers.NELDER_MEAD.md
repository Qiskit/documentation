---
title: NELDER_MEAD
description: API reference for qiskit.aqua.components.optimizers.NELDER_MEAD
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.NELDER_MEAD
---

# NELDER\_MEAD

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD" />

`NELDER_MEAD(maxiter=None, maxfev=1000, disp=False, xatol=0.0001, tol=None, adaptive=False)`

Nelder-Mead optimizer.

The Nelder-Mead algorithm performs unconstrained optimization; it ignores bounds or constraints. It is used to find the minimum or maximum of an objective function in a multidimensional space. It is based on the Simplex algorithm. Nelder-Mead is robust in many applications, especially when the first and second derivatives of the objective function are not known.

However, if the numerical computation of the derivatives can be trusted to be accurate, other algorithms using the first and/or second derivatives information might be preferred to Nelder-Mead for their better performance in the general case, especially in consideration of the fact that the Nelder–Mead technique is a heuristic search method that can converge to non-stationary points.

Uses scipy.optimize.minimize Nelder-Mead. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum allowed number of iterations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **maxfev** (`int`) – Maximum allowed number of function evaluations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **xatol** (`float`) – Absolute error in xopt between iterations that is acceptable for convergence.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **adaptive** (`bool`) – Adapt algorithm parameters to dimensionality of problem.

## Attributes

|                                                                                                                                                                                                    |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`NELDER_MEAD.bounds_support_level`](qiskit.aqua.components.optimizers.NELDER_MEAD.bounds_support_level "qiskit.aqua.components.optimizers.NELDER_MEAD.bounds_support_level")                      | Returns bounds support level        |
| [`NELDER_MEAD.gradient_support_level`](qiskit.aqua.components.optimizers.NELDER_MEAD.gradient_support_level "qiskit.aqua.components.optimizers.NELDER_MEAD.gradient_support_level")                | Returns gradient support level      |
| [`NELDER_MEAD.initial_point_support_level`](qiskit.aqua.components.optimizers.NELDER_MEAD.initial_point_support_level "qiskit.aqua.components.optimizers.NELDER_MEAD.initial_point_support_level") | Returns initial point support level |
| [`NELDER_MEAD.is_bounds_ignored`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_bounds_ignored "qiskit.aqua.components.optimizers.NELDER_MEAD.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`NELDER_MEAD.is_bounds_required`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_bounds_required "qiskit.aqua.components.optimizers.NELDER_MEAD.is_bounds_required")                            | Returns is bounds required          |
| [`NELDER_MEAD.is_bounds_supported`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_bounds_supported "qiskit.aqua.components.optimizers.NELDER_MEAD.is_bounds_supported")                         | Returns is bounds supported         |
| [`NELDER_MEAD.is_gradient_ignored`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_gradient_ignored "qiskit.aqua.components.optimizers.NELDER_MEAD.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`NELDER_MEAD.is_gradient_required`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_gradient_required "qiskit.aqua.components.optimizers.NELDER_MEAD.is_gradient_required")                      | Returns is gradient required        |
| [`NELDER_MEAD.is_gradient_supported`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_gradient_supported "qiskit.aqua.components.optimizers.NELDER_MEAD.is_gradient_supported")                   | Returns is gradient supported       |
| [`NELDER_MEAD.is_initial_point_ignored`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_initial_point_ignored "qiskit.aqua.components.optimizers.NELDER_MEAD.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`NELDER_MEAD.is_initial_point_required`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_initial_point_required "qiskit.aqua.components.optimizers.NELDER_MEAD.is_initial_point_required")       | Returns is initial point required   |
| [`NELDER_MEAD.is_initial_point_supported`](qiskit.aqua.components.optimizers.NELDER_MEAD.is_initial_point_supported "qiskit.aqua.components.optimizers.NELDER_MEAD.is_initial_point_supported")    | Returns is initial point supported  |
| [`NELDER_MEAD.setting`](qiskit.aqua.components.optimizers.NELDER_MEAD.setting "qiskit.aqua.components.optimizers.NELDER_MEAD.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                                         |                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`NELDER_MEAD.get_support_level`](qiskit.aqua.components.optimizers.NELDER_MEAD.get_support_level "qiskit.aqua.components.optimizers.NELDER_MEAD.get_support_level")()                  | Return support level dictionary                                                                           |
| [`NELDER_MEAD.gradient_num_diff`](qiskit.aqua.components.optimizers.NELDER_MEAD.gradient_num_diff "qiskit.aqua.components.optimizers.NELDER_MEAD.gradient_num_diff")(x\_center, f, …)   | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`NELDER_MEAD.optimize`](qiskit.aqua.components.optimizers.NELDER_MEAD.optimize "qiskit.aqua.components.optimizers.NELDER_MEAD.optimize")(num\_vars, …\[, …])                           | Perform optimization.                                                                                     |
| [`NELDER_MEAD.print_options`](qiskit.aqua.components.optimizers.NELDER_MEAD.print_options "qiskit.aqua.components.optimizers.NELDER_MEAD.print_options")()                              | Print algorithm-specific options.                                                                         |
| [`NELDER_MEAD.set_max_evals_grouped`](qiskit.aqua.components.optimizers.NELDER_MEAD.set_max_evals_grouped "qiskit.aqua.components.optimizers.NELDER_MEAD.set_max_evals_grouped")(limit) | Set max evals grouped                                                                                     |
| [`NELDER_MEAD.set_options`](qiskit.aqua.components.optimizers.NELDER_MEAD.set_options "qiskit.aqua.components.optimizers.NELDER_MEAD.set_options")(\*\*kwargs)                          | Sets or updates values in the options dictionary.                                                         |
| [`NELDER_MEAD.wrap_function`](qiskit.aqua.components.optimizers.NELDER_MEAD.wrap_function "qiskit.aqua.components.optimizers.NELDER_MEAD.wrap_function")(function, args)                | Wrap the function to implicitly inject the args at the call of the function.                              |

