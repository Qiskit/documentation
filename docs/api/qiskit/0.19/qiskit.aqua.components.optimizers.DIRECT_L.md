---
title: DIRECT_L
description: API reference for qiskit.aqua.components.optimizers.DIRECT_L
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.DIRECT_L
---

# DIRECT\_L

<span id="qiskit.aqua.components.optimizers.DIRECT_L" />

`DIRECT_L(max_evals=1000)`

DIviding RECTangles Locally-biased optimizer.

DIviding RECTangles (DIRECT) is a deterministic-search algorithms based on systematic division of the search domain into increasingly smaller hyper-rectangles. The DIRECT-L version is a “locally biased” variant of DIRECT that makes the algorithm more biased towards local search, so that it is more efficient for functions with few local minima.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#direct-and-direct-l](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#direct-and-direct-l)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**NameError** – NLopt library not installed.

## Attributes

|                                                                                                                                                                                           |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`DIRECT_L.bounds_support_level`](qiskit.aqua.components.optimizers.DIRECT_L.bounds_support_level "qiskit.aqua.components.optimizers.DIRECT_L.bounds_support_level")                      | Returns bounds support level        |
| [`DIRECT_L.gradient_support_level`](qiskit.aqua.components.optimizers.DIRECT_L.gradient_support_level "qiskit.aqua.components.optimizers.DIRECT_L.gradient_support_level")                | Returns gradient support level      |
| [`DIRECT_L.initial_point_support_level`](qiskit.aqua.components.optimizers.DIRECT_L.initial_point_support_level "qiskit.aqua.components.optimizers.DIRECT_L.initial_point_support_level") | Returns initial point support level |
| [`DIRECT_L.is_bounds_ignored`](qiskit.aqua.components.optimizers.DIRECT_L.is_bounds_ignored "qiskit.aqua.components.optimizers.DIRECT_L.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`DIRECT_L.is_bounds_required`](qiskit.aqua.components.optimizers.DIRECT_L.is_bounds_required "qiskit.aqua.components.optimizers.DIRECT_L.is_bounds_required")                            | Returns is bounds required          |
| [`DIRECT_L.is_bounds_supported`](qiskit.aqua.components.optimizers.DIRECT_L.is_bounds_supported "qiskit.aqua.components.optimizers.DIRECT_L.is_bounds_supported")                         | Returns is bounds supported         |
| [`DIRECT_L.is_gradient_ignored`](qiskit.aqua.components.optimizers.DIRECT_L.is_gradient_ignored "qiskit.aqua.components.optimizers.DIRECT_L.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`DIRECT_L.is_gradient_required`](qiskit.aqua.components.optimizers.DIRECT_L.is_gradient_required "qiskit.aqua.components.optimizers.DIRECT_L.is_gradient_required")                      | Returns is gradient required        |
| [`DIRECT_L.is_gradient_supported`](qiskit.aqua.components.optimizers.DIRECT_L.is_gradient_supported "qiskit.aqua.components.optimizers.DIRECT_L.is_gradient_supported")                   | Returns is gradient supported       |
| [`DIRECT_L.is_initial_point_ignored`](qiskit.aqua.components.optimizers.DIRECT_L.is_initial_point_ignored "qiskit.aqua.components.optimizers.DIRECT_L.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`DIRECT_L.is_initial_point_required`](qiskit.aqua.components.optimizers.DIRECT_L.is_initial_point_required "qiskit.aqua.components.optimizers.DIRECT_L.is_initial_point_required")       | Returns is initial point required   |
| [`DIRECT_L.is_initial_point_supported`](qiskit.aqua.components.optimizers.DIRECT_L.is_initial_point_supported "qiskit.aqua.components.optimizers.DIRECT_L.is_initial_point_supported")    | Returns is initial point supported  |
| [`DIRECT_L.setting`](qiskit.aqua.components.optimizers.DIRECT_L.setting "qiskit.aqua.components.optimizers.DIRECT_L.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                                    |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`DIRECT_L.get_nlopt_optimizer`](qiskit.aqua.components.optimizers.DIRECT_L.get_nlopt_optimizer "qiskit.aqua.components.optimizers.DIRECT_L.get_nlopt_optimizer")()                | Return NLopt optimizer type                                                                               |
| [`DIRECT_L.get_support_level`](qiskit.aqua.components.optimizers.DIRECT_L.get_support_level "qiskit.aqua.components.optimizers.DIRECT_L.get_support_level")()                      | return support level dictionary                                                                           |
| [`DIRECT_L.gradient_num_diff`](qiskit.aqua.components.optimizers.DIRECT_L.gradient_num_diff "qiskit.aqua.components.optimizers.DIRECT_L.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`DIRECT_L.optimize`](qiskit.aqua.components.optimizers.DIRECT_L.optimize "qiskit.aqua.components.optimizers.DIRECT_L.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`DIRECT_L.print_options`](qiskit.aqua.components.optimizers.DIRECT_L.print_options "qiskit.aqua.components.optimizers.DIRECT_L.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`DIRECT_L.set_max_evals_grouped`](qiskit.aqua.components.optimizers.DIRECT_L.set_max_evals_grouped "qiskit.aqua.components.optimizers.DIRECT_L.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`DIRECT_L.set_options`](qiskit.aqua.components.optimizers.DIRECT_L.set_options "qiskit.aqua.components.optimizers.DIRECT_L.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`DIRECT_L.wrap_function`](qiskit.aqua.components.optimizers.DIRECT_L.wrap_function "qiskit.aqua.components.optimizers.DIRECT_L.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

