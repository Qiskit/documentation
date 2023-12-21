---
title: ADAM
description: API reference for qiskit.aqua.components.optimizers.ADAM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.ADAM
---

# ADAM

<span id="qiskit.aqua.components.optimizers.ADAM" />

`ADAM(maxiter=10000, tol=1e-06, lr=0.001, beta_1=0.9, beta_2=0.99, noise_factor=1e-08, eps=1e-10, amsgrad=False, snapshot_dir=None)`

Adam and AMSGRAD optimizer.

**Adam**

*Kingma, Diederik & Ba, Jimmy. (2014).*

Adam: A Method for Stochastic Optimization. International Conference on Learning Representations.

Adam is a gradient-based optimization algorithm that is relies on adaptive estimates of lower-order moments. The algorithm requires little memory and is invariant to diagonal rescaling of the gradients. Furthermore, it is able to cope with non-stationary objective functions and noisy and/or sparse gradients.

**AMSGRAD**

*Sashank J. Reddi and Satyen Kale and Sanjiv Kumar. (2018).*

On the Convergence of Adam and Beyond. International Conference on Learning Representations.

AMSGRAD (a variant of ADAM) uses a ‘long-term memory’ of past gradients and, thereby, improves convergence properties.

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations
*   **tol** (`float`) – Tolerance for termination
*   **lr** (`float`) – Value >= 0, Learning rate.
*   **beta\_1** (`float`) – Value in range 0 to 1, Generally close to 1.
*   **beta\_2** (`float`) – Value in range 0 to 1, Generally close to 1.
*   **noise\_factor** (`float`) – Value >= 0, Noise factor
*   **eps** (`float`) – Value >=0, Epsilon to be used for finite differences if no analytic gradient method is given.
*   **amsgrad** (`bool`) – True to use AMSGRAD, False if not
*   **snapshot\_dir** (`Optional`\[`str`]) – If not None save the optimizer’s parameter after every step to the given directory

## Attributes

|                                                                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`ADAM.bounds_support_level`](qiskit.aqua.components.optimizers.ADAM.bounds_support_level "qiskit.aqua.components.optimizers.ADAM.bounds_support_level")                      | Returns bounds support level        |
| [`ADAM.gradient_support_level`](qiskit.aqua.components.optimizers.ADAM.gradient_support_level "qiskit.aqua.components.optimizers.ADAM.gradient_support_level")                | Returns gradient support level      |
| [`ADAM.initial_point_support_level`](qiskit.aqua.components.optimizers.ADAM.initial_point_support_level "qiskit.aqua.components.optimizers.ADAM.initial_point_support_level") | Returns initial point support level |
| [`ADAM.is_bounds_ignored`](qiskit.aqua.components.optimizers.ADAM.is_bounds_ignored "qiskit.aqua.components.optimizers.ADAM.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`ADAM.is_bounds_required`](qiskit.aqua.components.optimizers.ADAM.is_bounds_required "qiskit.aqua.components.optimizers.ADAM.is_bounds_required")                            | Returns is bounds required          |
| [`ADAM.is_bounds_supported`](qiskit.aqua.components.optimizers.ADAM.is_bounds_supported "qiskit.aqua.components.optimizers.ADAM.is_bounds_supported")                         | Returns is bounds supported         |
| [`ADAM.is_gradient_ignored`](qiskit.aqua.components.optimizers.ADAM.is_gradient_ignored "qiskit.aqua.components.optimizers.ADAM.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`ADAM.is_gradient_required`](qiskit.aqua.components.optimizers.ADAM.is_gradient_required "qiskit.aqua.components.optimizers.ADAM.is_gradient_required")                      | Returns is gradient required        |
| [`ADAM.is_gradient_supported`](qiskit.aqua.components.optimizers.ADAM.is_gradient_supported "qiskit.aqua.components.optimizers.ADAM.is_gradient_supported")                   | Returns is gradient supported       |
| [`ADAM.is_initial_point_ignored`](qiskit.aqua.components.optimizers.ADAM.is_initial_point_ignored "qiskit.aqua.components.optimizers.ADAM.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`ADAM.is_initial_point_required`](qiskit.aqua.components.optimizers.ADAM.is_initial_point_required "qiskit.aqua.components.optimizers.ADAM.is_initial_point_required")       | Returns is initial point required   |
| [`ADAM.is_initial_point_supported`](qiskit.aqua.components.optimizers.ADAM.is_initial_point_supported "qiskit.aqua.components.optimizers.ADAM.is_initial_point_supported")    | Returns is initial point supported  |
| [`ADAM.setting`](qiskit.aqua.components.optimizers.ADAM.setting "qiskit.aqua.components.optimizers.ADAM.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                        |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`ADAM.get_support_level`](qiskit.aqua.components.optimizers.ADAM.get_support_level "qiskit.aqua.components.optimizers.ADAM.get_support_level")()                      | Return support level dictionary                                                                           |
| [`ADAM.gradient_num_diff`](qiskit.aqua.components.optimizers.ADAM.gradient_num_diff "qiskit.aqua.components.optimizers.ADAM.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`ADAM.load_params`](qiskit.aqua.components.optimizers.ADAM.load_params "qiskit.aqua.components.optimizers.ADAM.load_params")(load\_dir)                               | load params                                                                                               |
| [`ADAM.minimize`](qiskit.aqua.components.optimizers.ADAM.minimize "qiskit.aqua.components.optimizers.ADAM.minimize")(objective\_function, …)                           |                                                                                                           |
| [`ADAM.optimize`](qiskit.aqua.components.optimizers.ADAM.optimize "qiskit.aqua.components.optimizers.ADAM.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`ADAM.print_options`](qiskit.aqua.components.optimizers.ADAM.print_options "qiskit.aqua.components.optimizers.ADAM.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`ADAM.save_params`](qiskit.aqua.components.optimizers.ADAM.save_params "qiskit.aqua.components.optimizers.ADAM.save_params")(snapshot\_dir)                           | save params                                                                                               |
| [`ADAM.set_max_evals_grouped`](qiskit.aqua.components.optimizers.ADAM.set_max_evals_grouped "qiskit.aqua.components.optimizers.ADAM.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`ADAM.set_options`](qiskit.aqua.components.optimizers.ADAM.set_options "qiskit.aqua.components.optimizers.ADAM.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`ADAM.wrap_function`](qiskit.aqua.components.optimizers.ADAM.wrap_function "qiskit.aqua.components.optimizers.ADAM.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

