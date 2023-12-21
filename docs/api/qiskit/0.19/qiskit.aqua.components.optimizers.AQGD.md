---
title: AQGD
description: API reference for qiskit.aqua.components.optimizers.AQGD
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.AQGD
---

# AQGD

<span id="qiskit.aqua.components.optimizers.AQGD" />

`AQGD(maxiter=1000, eta=3.0, tol=1e-06, disp=False, momentum=0.25)`

Analytic Quantum Gradient Descent (AQGD) optimizer.

Performs gradient descent optimization with a momentum term and analytic gradients for parametrized quantum gates, i.e. Pauli Rotations. See, for example:

*   K. Mitarai, M. Negoro, M. Kitagawa, and K. Fujii. (2018). Quantum circuit learning. Phys. Rev. A 98, 032309. [https://arxiv.org/abs/1803.00745](https://arxiv.org/abs/1803.00745)
*   Maria Schuld, Ville Bergholm, Christian Gogolin, Josh Izaac, Nathan Killoran. (2019). Evaluating analytic gradients on quantum hardware. Phys. Rev. A 99, 032331. [https://arxiv.org/abs/1811.11184](https://arxiv.org/abs/1811.11184)

for further details on analytic gradients of parametrized quantum gates.

Gradients are computed “analytically” using the quantum circuit when evaluating the objective function.

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations, each iteration evaluation gradient.
*   **eta** (`float`) – The coefficient of the gradient update. Increasing this value results in larger step sizes: param = previous\_param - eta \* deriv
*   **tol** (`float`) – The convergence criteria that must be reached before stopping. Optimization stops when: absolute(loss - previous\_loss) \< tol
*   **disp** (`bool`) – Set to True to display convergence messages.
*   **momentum** (`float`) – Bias towards the previous gradient momentum in current update. Must be within the bounds: \[0,1)

## Attributes

|                                                                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`AQGD.bounds_support_level`](qiskit.aqua.components.optimizers.AQGD.bounds_support_level "qiskit.aqua.components.optimizers.AQGD.bounds_support_level")                      | Returns bounds support level        |
| [`AQGD.gradient_support_level`](qiskit.aqua.components.optimizers.AQGD.gradient_support_level "qiskit.aqua.components.optimizers.AQGD.gradient_support_level")                | Returns gradient support level      |
| [`AQGD.initial_point_support_level`](qiskit.aqua.components.optimizers.AQGD.initial_point_support_level "qiskit.aqua.components.optimizers.AQGD.initial_point_support_level") | Returns initial point support level |
| [`AQGD.is_bounds_ignored`](qiskit.aqua.components.optimizers.AQGD.is_bounds_ignored "qiskit.aqua.components.optimizers.AQGD.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`AQGD.is_bounds_required`](qiskit.aqua.components.optimizers.AQGD.is_bounds_required "qiskit.aqua.components.optimizers.AQGD.is_bounds_required")                            | Returns is bounds required          |
| [`AQGD.is_bounds_supported`](qiskit.aqua.components.optimizers.AQGD.is_bounds_supported "qiskit.aqua.components.optimizers.AQGD.is_bounds_supported")                         | Returns is bounds supported         |
| [`AQGD.is_gradient_ignored`](qiskit.aqua.components.optimizers.AQGD.is_gradient_ignored "qiskit.aqua.components.optimizers.AQGD.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`AQGD.is_gradient_required`](qiskit.aqua.components.optimizers.AQGD.is_gradient_required "qiskit.aqua.components.optimizers.AQGD.is_gradient_required")                      | Returns is gradient required        |
| [`AQGD.is_gradient_supported`](qiskit.aqua.components.optimizers.AQGD.is_gradient_supported "qiskit.aqua.components.optimizers.AQGD.is_gradient_supported")                   | Returns is gradient supported       |
| [`AQGD.is_initial_point_ignored`](qiskit.aqua.components.optimizers.AQGD.is_initial_point_ignored "qiskit.aqua.components.optimizers.AQGD.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`AQGD.is_initial_point_required`](qiskit.aqua.components.optimizers.AQGD.is_initial_point_required "qiskit.aqua.components.optimizers.AQGD.is_initial_point_required")       | Returns is initial point required   |
| [`AQGD.is_initial_point_supported`](qiskit.aqua.components.optimizers.AQGD.is_initial_point_supported "qiskit.aqua.components.optimizers.AQGD.is_initial_point_supported")    | Returns is initial point supported  |
| [`AQGD.setting`](qiskit.aqua.components.optimizers.AQGD.setting "qiskit.aqua.components.optimizers.AQGD.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                        |                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [`AQGD.converged`](qiskit.aqua.components.optimizers.AQGD.converged "qiskit.aqua.components.optimizers.AQGD.converged")(objval\[, n])                                  | Determines if the objective function has converged by finding the difference between the current value and the previous n values. |
| [`AQGD.deriv`](qiskit.aqua.components.optimizers.AQGD.deriv "qiskit.aqua.components.optimizers.AQGD.deriv")(j, params, obj)                                            | Obtains the analytical quantum derivative of the objective function with respect to the jth parameter.                            |
| [`AQGD.get_support_level`](qiskit.aqua.components.optimizers.AQGD.get_support_level "qiskit.aqua.components.optimizers.AQGD.get_support_level")()                      | Return support level dictionary                                                                                                   |
| [`AQGD.gradient_num_diff`](qiskit.aqua.components.optimizers.AQGD.gradient_num_diff "qiskit.aqua.components.optimizers.AQGD.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.                         |
| [`AQGD.optimize`](qiskit.aqua.components.optimizers.AQGD.optimize "qiskit.aqua.components.optimizers.AQGD.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                                             |
| [`AQGD.print_options`](qiskit.aqua.components.optimizers.AQGD.print_options "qiskit.aqua.components.optimizers.AQGD.print_options")()                                  | Print algorithm-specific options.                                                                                                 |
| [`AQGD.set_max_evals_grouped`](qiskit.aqua.components.optimizers.AQGD.set_max_evals_grouped "qiskit.aqua.components.optimizers.AQGD.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                                             |
| [`AQGD.set_options`](qiskit.aqua.components.optimizers.AQGD.set_options "qiskit.aqua.components.optimizers.AQGD.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                                                 |
| [`AQGD.update`](qiskit.aqua.components.optimizers.AQGD.update "qiskit.aqua.components.optimizers.AQGD.update")(j, params, deriv, mprev)                                | Updates the jth parameter based on the derivative and previous momentum                                                           |
| [`AQGD.wrap_function`](qiskit.aqua.components.optimizers.AQGD.wrap_function "qiskit.aqua.components.optimizers.AQGD.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                                                      |

