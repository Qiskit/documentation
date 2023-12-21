---
title: Optimizer
description: API reference for qiskit.aqua.components.optimizers.Optimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.Optimizer
---

# Optimizer

<span id="qiskit.aqua.components.optimizers.Optimizer" />

`Optimizer`

Base class for optimization algorithm.

Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options.

## Attributes

|                                                                                                                                                                                              |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`Optimizer.bounds_support_level`](qiskit.aqua.components.optimizers.Optimizer.bounds_support_level "qiskit.aqua.components.optimizers.Optimizer.bounds_support_level")                      | Returns bounds support level        |
| [`Optimizer.gradient_support_level`](qiskit.aqua.components.optimizers.Optimizer.gradient_support_level "qiskit.aqua.components.optimizers.Optimizer.gradient_support_level")                | Returns gradient support level      |
| [`Optimizer.initial_point_support_level`](qiskit.aqua.components.optimizers.Optimizer.initial_point_support_level "qiskit.aqua.components.optimizers.Optimizer.initial_point_support_level") | Returns initial point support level |
| [`Optimizer.is_bounds_ignored`](qiskit.aqua.components.optimizers.Optimizer.is_bounds_ignored "qiskit.aqua.components.optimizers.Optimizer.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`Optimizer.is_bounds_required`](qiskit.aqua.components.optimizers.Optimizer.is_bounds_required "qiskit.aqua.components.optimizers.Optimizer.is_bounds_required")                            | Returns is bounds required          |
| [`Optimizer.is_bounds_supported`](qiskit.aqua.components.optimizers.Optimizer.is_bounds_supported "qiskit.aqua.components.optimizers.Optimizer.is_bounds_supported")                         | Returns is bounds supported         |
| [`Optimizer.is_gradient_ignored`](qiskit.aqua.components.optimizers.Optimizer.is_gradient_ignored "qiskit.aqua.components.optimizers.Optimizer.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`Optimizer.is_gradient_required`](qiskit.aqua.components.optimizers.Optimizer.is_gradient_required "qiskit.aqua.components.optimizers.Optimizer.is_gradient_required")                      | Returns is gradient required        |
| [`Optimizer.is_gradient_supported`](qiskit.aqua.components.optimizers.Optimizer.is_gradient_supported "qiskit.aqua.components.optimizers.Optimizer.is_gradient_supported")                   | Returns is gradient supported       |
| [`Optimizer.is_initial_point_ignored`](qiskit.aqua.components.optimizers.Optimizer.is_initial_point_ignored "qiskit.aqua.components.optimizers.Optimizer.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`Optimizer.is_initial_point_required`](qiskit.aqua.components.optimizers.Optimizer.is_initial_point_required "qiskit.aqua.components.optimizers.Optimizer.is_initial_point_required")       | Returns is initial point required   |
| [`Optimizer.is_initial_point_supported`](qiskit.aqua.components.optimizers.Optimizer.is_initial_point_supported "qiskit.aqua.components.optimizers.Optimizer.is_initial_point_supported")    | Returns is initial point supported  |
| [`Optimizer.setting`](qiskit.aqua.components.optimizers.Optimizer.setting "qiskit.aqua.components.optimizers.Optimizer.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                                       |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`Optimizer.get_support_level`](qiskit.aqua.components.optimizers.Optimizer.get_support_level "qiskit.aqua.components.optimizers.Optimizer.get_support_level")()                      | Return support level dictionary                                                                           |
| [`Optimizer.gradient_num_diff`](qiskit.aqua.components.optimizers.Optimizer.gradient_num_diff "qiskit.aqua.components.optimizers.Optimizer.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`Optimizer.optimize`](qiskit.aqua.components.optimizers.Optimizer.optimize "qiskit.aqua.components.optimizers.Optimizer.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`Optimizer.print_options`](qiskit.aqua.components.optimizers.Optimizer.print_options "qiskit.aqua.components.optimizers.Optimizer.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`Optimizer.set_max_evals_grouped`](qiskit.aqua.components.optimizers.Optimizer.set_max_evals_grouped "qiskit.aqua.components.optimizers.Optimizer.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`Optimizer.set_options`](qiskit.aqua.components.optimizers.Optimizer.set_options "qiskit.aqua.components.optimizers.Optimizer.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`Optimizer.wrap_function`](qiskit.aqua.components.optimizers.Optimizer.wrap_function "qiskit.aqua.components.optimizers.Optimizer.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

