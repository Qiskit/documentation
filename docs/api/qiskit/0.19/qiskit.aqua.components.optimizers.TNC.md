---
title: TNC
description: API reference for qiskit.aqua.components.optimizers.TNC
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.TNC
---

# TNC

<span id="qiskit.aqua.components.optimizers.TNC" />

`TNC(maxiter=100, disp=False, accuracy=0, ftol=- 1, xtol=- 1, gtol=- 1, tol=None, eps=1e-08)`

Truncated Newton (TNC) optimizer.

TNC uses a truncated Newton algorithm to minimize a function with variables subject to bounds. This algorithm uses gradient information; it is also called Newton Conjugate-Gradient. It differs from the [`CG`](qiskit.aqua.components.optimizers.CG "qiskit.aqua.components.optimizers.CG") method as it wraps a C implementation and allows each variable to be given upper and lower bounds.

Uses scipy.optimize.minimize TNC For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluation.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **accuracy** (`float`) – Relative precision for finite difference calculations. If \<= machine\_precision, set to sqrt(machine\_precision). Defaults to 0.
*   **ftol** (`float`) – Precision goal for the value of f in the stopping criterion. If ftol \< 0.0, ftol is set to 0.0 defaults to -1.
*   **xtol** (`float`) – Precision goal for the value of x in the stopping criterion (after applying x scaling factors). If xtol \< 0.0, xtol is set to sqrt(machine\_precision). Defaults to -1.
*   **gtol** (`float`) – Precision goal for the value of the projected gradient in the stopping criterion (after applying x scaling factors). If gtol \< 0.0, gtol is set to 1e-2 \* sqrt(accuracy). Setting it to 0.0 is not recommended. Defaults to -1.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – Step size used for numerical approximation of the Jacobian.

## Attributes

|                                                                                                                                                                            |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`TNC.bounds_support_level`](qiskit.aqua.components.optimizers.TNC.bounds_support_level "qiskit.aqua.components.optimizers.TNC.bounds_support_level")                      | Returns bounds support level        |
| [`TNC.gradient_support_level`](qiskit.aqua.components.optimizers.TNC.gradient_support_level "qiskit.aqua.components.optimizers.TNC.gradient_support_level")                | Returns gradient support level      |
| [`TNC.initial_point_support_level`](qiskit.aqua.components.optimizers.TNC.initial_point_support_level "qiskit.aqua.components.optimizers.TNC.initial_point_support_level") | Returns initial point support level |
| [`TNC.is_bounds_ignored`](qiskit.aqua.components.optimizers.TNC.is_bounds_ignored "qiskit.aqua.components.optimizers.TNC.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`TNC.is_bounds_required`](qiskit.aqua.components.optimizers.TNC.is_bounds_required "qiskit.aqua.components.optimizers.TNC.is_bounds_required")                            | Returns is bounds required          |
| [`TNC.is_bounds_supported`](qiskit.aqua.components.optimizers.TNC.is_bounds_supported "qiskit.aqua.components.optimizers.TNC.is_bounds_supported")                         | Returns is bounds supported         |
| [`TNC.is_gradient_ignored`](qiskit.aqua.components.optimizers.TNC.is_gradient_ignored "qiskit.aqua.components.optimizers.TNC.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`TNC.is_gradient_required`](qiskit.aqua.components.optimizers.TNC.is_gradient_required "qiskit.aqua.components.optimizers.TNC.is_gradient_required")                      | Returns is gradient required        |
| [`TNC.is_gradient_supported`](qiskit.aqua.components.optimizers.TNC.is_gradient_supported "qiskit.aqua.components.optimizers.TNC.is_gradient_supported")                   | Returns is gradient supported       |
| [`TNC.is_initial_point_ignored`](qiskit.aqua.components.optimizers.TNC.is_initial_point_ignored "qiskit.aqua.components.optimizers.TNC.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`TNC.is_initial_point_required`](qiskit.aqua.components.optimizers.TNC.is_initial_point_required "qiskit.aqua.components.optimizers.TNC.is_initial_point_required")       | Returns is initial point required   |
| [`TNC.is_initial_point_supported`](qiskit.aqua.components.optimizers.TNC.is_initial_point_supported "qiskit.aqua.components.optimizers.TNC.is_initial_point_supported")    | Returns is initial point supported  |
| [`TNC.setting`](qiskit.aqua.components.optimizers.TNC.setting "qiskit.aqua.components.optimizers.TNC.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                     |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`TNC.get_support_level`](qiskit.aqua.components.optimizers.TNC.get_support_level "qiskit.aqua.components.optimizers.TNC.get_support_level")()                      | return support level dictionary                                                                           |
| [`TNC.gradient_num_diff`](qiskit.aqua.components.optimizers.TNC.gradient_num_diff "qiskit.aqua.components.optimizers.TNC.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`TNC.optimize`](qiskit.aqua.components.optimizers.TNC.optimize "qiskit.aqua.components.optimizers.TNC.optimize")(num\_vars, objective\_function\[, …])             | Perform optimization.                                                                                     |
| [`TNC.print_options`](qiskit.aqua.components.optimizers.TNC.print_options "qiskit.aqua.components.optimizers.TNC.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`TNC.set_max_evals_grouped`](qiskit.aqua.components.optimizers.TNC.set_max_evals_grouped "qiskit.aqua.components.optimizers.TNC.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`TNC.set_options`](qiskit.aqua.components.optimizers.TNC.set_options "qiskit.aqua.components.optimizers.TNC.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`TNC.wrap_function`](qiskit.aqua.components.optimizers.TNC.wrap_function "qiskit.aqua.components.optimizers.TNC.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

