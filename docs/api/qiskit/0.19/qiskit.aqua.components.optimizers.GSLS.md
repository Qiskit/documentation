---
title: GSLS
description: API reference for qiskit.aqua.components.optimizers.GSLS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.GSLS
---

# GSLS

<span id="qiskit.aqua.components.optimizers.GSLS" />

`GSLS(max_iter=10000, max_eval=10000, disp=False, sampling_radius=1e-06, sample_size_factor=1, initial_step_size=0.01, min_step_size=1e-10, step_size_multiplier=0.4, armijo_parameter=0.1, min_gradient_norm=1e-08, max_failed_rejection_sampling=50)`

Gaussian-smoothed Line Search.

An implementation of the line search algorithm described in [https://arxiv.org/pdf/1905.01332.pdf](https://arxiv.org/pdf/1905.01332.pdf), using gradient approximation based on Gaussian-smoothed samples on a sphere.

**Parameters**

*   **max\_iter** (`int`) – Maximum number of iterations.
*   **max\_eval** (`int`) – Maximum number of evaluations.
*   **disp** (`bool`) – Set to True to display convergence messages.
*   **sampling\_radius** (`float`) – Sampling radius to determine gradient estimate.
*   **sample\_size\_factor** (`int`) – The size of the sample set at each iteration is this number multiplied by the dimension of the problem, rounded to the nearest integer.
*   **initial\_step\_size** (`float`) – Initial step size for the descent algorithm.
*   **min\_step\_size** (`float`) – Minimum step size for the descent algorithm.
*   **step\_size\_multiplier** (`float`) – Step size reduction after unsuccessful steps, in the interval (0, 1).
*   **armijo\_parameter** (`float`) – Armijo parameter for sufficient decrease criterion, in the interval (0, 1).
*   **min\_gradient\_norm** (`float`) – If the gradient norm is below this threshold, the algorithm stops.
*   **max\_failed\_rejection\_sampling** (`int`) – Maximum number of attempts to sample points within bounds.

## Attributes

|                                                                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`GSLS.bounds_support_level`](qiskit.aqua.components.optimizers.GSLS.bounds_support_level "qiskit.aqua.components.optimizers.GSLS.bounds_support_level")                      | Returns bounds support level        |
| [`GSLS.gradient_support_level`](qiskit.aqua.components.optimizers.GSLS.gradient_support_level "qiskit.aqua.components.optimizers.GSLS.gradient_support_level")                | Returns gradient support level      |
| [`GSLS.initial_point_support_level`](qiskit.aqua.components.optimizers.GSLS.initial_point_support_level "qiskit.aqua.components.optimizers.GSLS.initial_point_support_level") | Returns initial point support level |
| [`GSLS.is_bounds_ignored`](qiskit.aqua.components.optimizers.GSLS.is_bounds_ignored "qiskit.aqua.components.optimizers.GSLS.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`GSLS.is_bounds_required`](qiskit.aqua.components.optimizers.GSLS.is_bounds_required "qiskit.aqua.components.optimizers.GSLS.is_bounds_required")                            | Returns is bounds required          |
| [`GSLS.is_bounds_supported`](qiskit.aqua.components.optimizers.GSLS.is_bounds_supported "qiskit.aqua.components.optimizers.GSLS.is_bounds_supported")                         | Returns is bounds supported         |
| [`GSLS.is_gradient_ignored`](qiskit.aqua.components.optimizers.GSLS.is_gradient_ignored "qiskit.aqua.components.optimizers.GSLS.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`GSLS.is_gradient_required`](qiskit.aqua.components.optimizers.GSLS.is_gradient_required "qiskit.aqua.components.optimizers.GSLS.is_gradient_required")                      | Returns is gradient required        |
| [`GSLS.is_gradient_supported`](qiskit.aqua.components.optimizers.GSLS.is_gradient_supported "qiskit.aqua.components.optimizers.GSLS.is_gradient_supported")                   | Returns is gradient supported       |
| [`GSLS.is_initial_point_ignored`](qiskit.aqua.components.optimizers.GSLS.is_initial_point_ignored "qiskit.aqua.components.optimizers.GSLS.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`GSLS.is_initial_point_required`](qiskit.aqua.components.optimizers.GSLS.is_initial_point_required "qiskit.aqua.components.optimizers.GSLS.is_initial_point_required")       | Returns is initial point required   |
| [`GSLS.is_initial_point_supported`](qiskit.aqua.components.optimizers.GSLS.is_initial_point_supported "qiskit.aqua.components.optimizers.GSLS.is_initial_point_supported")    | Returns is initial point supported  |
| [`GSLS.setting`](qiskit.aqua.components.optimizers.GSLS.setting "qiskit.aqua.components.optimizers.GSLS.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                                   |                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`GSLS.get_support_level`](qiskit.aqua.components.optimizers.GSLS.get_support_level "qiskit.aqua.components.optimizers.GSLS.get_support_level")()                                 | Return support level dictionary.                                                                          |
| [`GSLS.gradient_approximation`](qiskit.aqua.components.optimizers.GSLS.gradient_approximation "qiskit.aqua.components.optimizers.GSLS.gradient_approximation")(n, x, x\_value, …) | Construct gradient approximation from given sample.                                                       |
| [`GSLS.gradient_num_diff`](qiskit.aqua.components.optimizers.GSLS.gradient_num_diff "qiskit.aqua.components.optimizers.GSLS.gradient_num_diff")(x\_center, f, epsilon)            | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`GSLS.ls_optimize`](qiskit.aqua.components.optimizers.GSLS.ls_optimize "qiskit.aqua.components.optimizers.GSLS.ls_optimize")(n, obj\_fun, initial\_point, …)                     | Run the line search optimization.                                                                         |
| [`GSLS.optimize`](qiskit.aqua.components.optimizers.GSLS.optimize "qiskit.aqua.components.optimizers.GSLS.optimize")(num\_vars, objective\_function)                              | Perform optimization.                                                                                     |
| [`GSLS.print_options`](qiskit.aqua.components.optimizers.GSLS.print_options "qiskit.aqua.components.optimizers.GSLS.print_options")()                                             | Print algorithm-specific options.                                                                         |
| [`GSLS.sample_points`](qiskit.aqua.components.optimizers.GSLS.sample_points "qiskit.aqua.components.optimizers.GSLS.sample_points")(n, x, num\_points)                            | Sample `num_points` points around `x` on the `n`-sphere of specified radius.                              |
| [`GSLS.sample_set`](qiskit.aqua.components.optimizers.GSLS.sample_set "qiskit.aqua.components.optimizers.GSLS.sample_set")(n, x, var\_lb, var\_ub, num\_points)                   | Construct sample set of given size.                                                                       |
| [`GSLS.set_max_evals_grouped`](qiskit.aqua.components.optimizers.GSLS.set_max_evals_grouped "qiskit.aqua.components.optimizers.GSLS.set_max_evals_grouped")(limit)                | Set max evals grouped                                                                                     |
| [`GSLS.set_options`](qiskit.aqua.components.optimizers.GSLS.set_options "qiskit.aqua.components.optimizers.GSLS.set_options")(\*\*kwargs)                                         | Sets or updates values in the options dictionary.                                                         |
| [`GSLS.wrap_function`](qiskit.aqua.components.optimizers.GSLS.wrap_function "qiskit.aqua.components.optimizers.GSLS.wrap_function")(function, args)                               | Wrap the function to implicitly inject the args at the call of the function.                              |

