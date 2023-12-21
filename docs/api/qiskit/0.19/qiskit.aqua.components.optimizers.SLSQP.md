---
title: SLSQP
description: API reference for qiskit.aqua.components.optimizers.SLSQP
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.SLSQP
---

# SLSQP

<span id="qiskit.aqua.components.optimizers.SLSQP" />

`SLSQP(maxiter=100, disp=False, ftol=1e-06, tol=None, eps=1.4901161193847656e-08)`

Sequential Least SQuares Programming optimizer.

SLSQP minimizes a function of several variables with any combination of bounds, equality and inequality constraints. The method wraps the SLSQP Optimization subroutine originally implemented by Dieter Kraft.

SLSQP is ideal for mathematical problems for which the objective function and the constraints are twice continuously differentiable. Note that the wrapper handles infinite values in bounds by converting them into large floating values.

Uses scipy.optimize.minimize SLSQP. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **ftol** (`float`) – Precision goal for the value of f in the stopping criterion.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – Step size used for numerical approximation of the Jacobian.

## Attributes

|                                                                                                                                                                                  |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`SLSQP.bounds_support_level`](qiskit.aqua.components.optimizers.SLSQP.bounds_support_level "qiskit.aqua.components.optimizers.SLSQP.bounds_support_level")                      | Returns bounds support level        |
| [`SLSQP.gradient_support_level`](qiskit.aqua.components.optimizers.SLSQP.gradient_support_level "qiskit.aqua.components.optimizers.SLSQP.gradient_support_level")                | Returns gradient support level      |
| [`SLSQP.initial_point_support_level`](qiskit.aqua.components.optimizers.SLSQP.initial_point_support_level "qiskit.aqua.components.optimizers.SLSQP.initial_point_support_level") | Returns initial point support level |
| [`SLSQP.is_bounds_ignored`](qiskit.aqua.components.optimizers.SLSQP.is_bounds_ignored "qiskit.aqua.components.optimizers.SLSQP.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`SLSQP.is_bounds_required`](qiskit.aqua.components.optimizers.SLSQP.is_bounds_required "qiskit.aqua.components.optimizers.SLSQP.is_bounds_required")                            | Returns is bounds required          |
| [`SLSQP.is_bounds_supported`](qiskit.aqua.components.optimizers.SLSQP.is_bounds_supported "qiskit.aqua.components.optimizers.SLSQP.is_bounds_supported")                         | Returns is bounds supported         |
| [`SLSQP.is_gradient_ignored`](qiskit.aqua.components.optimizers.SLSQP.is_gradient_ignored "qiskit.aqua.components.optimizers.SLSQP.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`SLSQP.is_gradient_required`](qiskit.aqua.components.optimizers.SLSQP.is_gradient_required "qiskit.aqua.components.optimizers.SLSQP.is_gradient_required")                      | Returns is gradient required        |
| [`SLSQP.is_gradient_supported`](qiskit.aqua.components.optimizers.SLSQP.is_gradient_supported "qiskit.aqua.components.optimizers.SLSQP.is_gradient_supported")                   | Returns is gradient supported       |
| [`SLSQP.is_initial_point_ignored`](qiskit.aqua.components.optimizers.SLSQP.is_initial_point_ignored "qiskit.aqua.components.optimizers.SLSQP.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`SLSQP.is_initial_point_required`](qiskit.aqua.components.optimizers.SLSQP.is_initial_point_required "qiskit.aqua.components.optimizers.SLSQP.is_initial_point_required")       | Returns is initial point required   |
| [`SLSQP.is_initial_point_supported`](qiskit.aqua.components.optimizers.SLSQP.is_initial_point_supported "qiskit.aqua.components.optimizers.SLSQP.is_initial_point_supported")    | Returns is initial point supported  |
| [`SLSQP.setting`](qiskit.aqua.components.optimizers.SLSQP.setting "qiskit.aqua.components.optimizers.SLSQP.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                           |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`SLSQP.get_support_level`](qiskit.aqua.components.optimizers.SLSQP.get_support_level "qiskit.aqua.components.optimizers.SLSQP.get_support_level")()                      | Return support level dictionary                                                                           |
| [`SLSQP.gradient_num_diff`](qiskit.aqua.components.optimizers.SLSQP.gradient_num_diff "qiskit.aqua.components.optimizers.SLSQP.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`SLSQP.optimize`](qiskit.aqua.components.optimizers.SLSQP.optimize "qiskit.aqua.components.optimizers.SLSQP.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`SLSQP.print_options`](qiskit.aqua.components.optimizers.SLSQP.print_options "qiskit.aqua.components.optimizers.SLSQP.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`SLSQP.set_max_evals_grouped`](qiskit.aqua.components.optimizers.SLSQP.set_max_evals_grouped "qiskit.aqua.components.optimizers.SLSQP.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`SLSQP.set_options`](qiskit.aqua.components.optimizers.SLSQP.set_options "qiskit.aqua.components.optimizers.SLSQP.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`SLSQP.wrap_function`](qiskit.aqua.components.optimizers.SLSQP.wrap_function "qiskit.aqua.components.optimizers.SLSQP.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

