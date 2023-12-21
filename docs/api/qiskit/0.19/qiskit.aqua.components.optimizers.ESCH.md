---
title: ESCH
description: API reference for qiskit.aqua.components.optimizers.ESCH
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.ESCH
---

# ESCH

<span id="qiskit.aqua.components.optimizers.ESCH" />

`ESCH(max_evals=1000)`

ESCH evolutionary optimizer.

ESCH is an evolutionary algorithm for global optimization that supports bound constraints only. Specifically, it does not support nonlinear constraints.

NLopt global optimizer, derivative-free. For further detail, please refer to

[http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#esch-evolutionary-algorithm](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#esch-evolutionary-algorithm)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**NameError** – NLopt library not installed.

## Attributes

|                                                                                                                                                                               |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`ESCH.bounds_support_level`](qiskit.aqua.components.optimizers.ESCH.bounds_support_level "qiskit.aqua.components.optimizers.ESCH.bounds_support_level")                      | Returns bounds support level        |
| [`ESCH.gradient_support_level`](qiskit.aqua.components.optimizers.ESCH.gradient_support_level "qiskit.aqua.components.optimizers.ESCH.gradient_support_level")                | Returns gradient support level      |
| [`ESCH.initial_point_support_level`](qiskit.aqua.components.optimizers.ESCH.initial_point_support_level "qiskit.aqua.components.optimizers.ESCH.initial_point_support_level") | Returns initial point support level |
| [`ESCH.is_bounds_ignored`](qiskit.aqua.components.optimizers.ESCH.is_bounds_ignored "qiskit.aqua.components.optimizers.ESCH.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`ESCH.is_bounds_required`](qiskit.aqua.components.optimizers.ESCH.is_bounds_required "qiskit.aqua.components.optimizers.ESCH.is_bounds_required")                            | Returns is bounds required          |
| [`ESCH.is_bounds_supported`](qiskit.aqua.components.optimizers.ESCH.is_bounds_supported "qiskit.aqua.components.optimizers.ESCH.is_bounds_supported")                         | Returns is bounds supported         |
| [`ESCH.is_gradient_ignored`](qiskit.aqua.components.optimizers.ESCH.is_gradient_ignored "qiskit.aqua.components.optimizers.ESCH.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`ESCH.is_gradient_required`](qiskit.aqua.components.optimizers.ESCH.is_gradient_required "qiskit.aqua.components.optimizers.ESCH.is_gradient_required")                      | Returns is gradient required        |
| [`ESCH.is_gradient_supported`](qiskit.aqua.components.optimizers.ESCH.is_gradient_supported "qiskit.aqua.components.optimizers.ESCH.is_gradient_supported")                   | Returns is gradient supported       |
| [`ESCH.is_initial_point_ignored`](qiskit.aqua.components.optimizers.ESCH.is_initial_point_ignored "qiskit.aqua.components.optimizers.ESCH.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`ESCH.is_initial_point_required`](qiskit.aqua.components.optimizers.ESCH.is_initial_point_required "qiskit.aqua.components.optimizers.ESCH.is_initial_point_required")       | Returns is initial point required   |
| [`ESCH.is_initial_point_supported`](qiskit.aqua.components.optimizers.ESCH.is_initial_point_supported "qiskit.aqua.components.optimizers.ESCH.is_initial_point_supported")    | Returns is initial point supported  |
| [`ESCH.setting`](qiskit.aqua.components.optimizers.ESCH.setting "qiskit.aqua.components.optimizers.ESCH.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                        |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`ESCH.get_nlopt_optimizer`](qiskit.aqua.components.optimizers.ESCH.get_nlopt_optimizer "qiskit.aqua.components.optimizers.ESCH.get_nlopt_optimizer")()                | Return NLopt optimizer type                                                                               |
| [`ESCH.get_support_level`](qiskit.aqua.components.optimizers.ESCH.get_support_level "qiskit.aqua.components.optimizers.ESCH.get_support_level")()                      | return support level dictionary                                                                           |
| [`ESCH.gradient_num_diff`](qiskit.aqua.components.optimizers.ESCH.gradient_num_diff "qiskit.aqua.components.optimizers.ESCH.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`ESCH.optimize`](qiskit.aqua.components.optimizers.ESCH.optimize "qiskit.aqua.components.optimizers.ESCH.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`ESCH.print_options`](qiskit.aqua.components.optimizers.ESCH.print_options "qiskit.aqua.components.optimizers.ESCH.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`ESCH.set_max_evals_grouped`](qiskit.aqua.components.optimizers.ESCH.set_max_evals_grouped "qiskit.aqua.components.optimizers.ESCH.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`ESCH.set_options`](qiskit.aqua.components.optimizers.ESCH.set_options "qiskit.aqua.components.optimizers.ESCH.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`ESCH.wrap_function`](qiskit.aqua.components.optimizers.ESCH.wrap_function "qiskit.aqua.components.optimizers.ESCH.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

