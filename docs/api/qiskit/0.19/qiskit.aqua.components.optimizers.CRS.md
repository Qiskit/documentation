---
title: CRS
description: API reference for qiskit.aqua.components.optimizers.CRS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.CRS
---

# CRS

<span id="qiskit.aqua.components.optimizers.CRS" />

`CRS(max_evals=1000)`

Controlled Random Search (CRS) with local mutation optimizer.

Controlled Random Search (CRS) with local mutation is part of the family of the CRS optimizers. The CRS optimizers start with a random population of points, and randomly evolve these points by heuristic rules. In the case of CRS with local mutation, the evolution is a randomized version of the [`NELDER_MEAD`](qiskit.aqua.components.optimizers.NELDER_MEAD "qiskit.aqua.components.optimizers.NELDER_MEAD") local optimizer.

NLopt global optimizer, derivative-free. For further detail, please refer to [https://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#controlled-random-search-crs-with-local-mutation](https://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#controlled-random-search-crs-with-local-mutation)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**NameError** – NLopt library not installed.

## Attributes

|                                                                                                                                                                            |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`CRS.bounds_support_level`](qiskit.aqua.components.optimizers.CRS.bounds_support_level "qiskit.aqua.components.optimizers.CRS.bounds_support_level")                      | Returns bounds support level        |
| [`CRS.gradient_support_level`](qiskit.aqua.components.optimizers.CRS.gradient_support_level "qiskit.aqua.components.optimizers.CRS.gradient_support_level")                | Returns gradient support level      |
| [`CRS.initial_point_support_level`](qiskit.aqua.components.optimizers.CRS.initial_point_support_level "qiskit.aqua.components.optimizers.CRS.initial_point_support_level") | Returns initial point support level |
| [`CRS.is_bounds_ignored`](qiskit.aqua.components.optimizers.CRS.is_bounds_ignored "qiskit.aqua.components.optimizers.CRS.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`CRS.is_bounds_required`](qiskit.aqua.components.optimizers.CRS.is_bounds_required "qiskit.aqua.components.optimizers.CRS.is_bounds_required")                            | Returns is bounds required          |
| [`CRS.is_bounds_supported`](qiskit.aqua.components.optimizers.CRS.is_bounds_supported "qiskit.aqua.components.optimizers.CRS.is_bounds_supported")                         | Returns is bounds supported         |
| [`CRS.is_gradient_ignored`](qiskit.aqua.components.optimizers.CRS.is_gradient_ignored "qiskit.aqua.components.optimizers.CRS.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`CRS.is_gradient_required`](qiskit.aqua.components.optimizers.CRS.is_gradient_required "qiskit.aqua.components.optimizers.CRS.is_gradient_required")                      | Returns is gradient required        |
| [`CRS.is_gradient_supported`](qiskit.aqua.components.optimizers.CRS.is_gradient_supported "qiskit.aqua.components.optimizers.CRS.is_gradient_supported")                   | Returns is gradient supported       |
| [`CRS.is_initial_point_ignored`](qiskit.aqua.components.optimizers.CRS.is_initial_point_ignored "qiskit.aqua.components.optimizers.CRS.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`CRS.is_initial_point_required`](qiskit.aqua.components.optimizers.CRS.is_initial_point_required "qiskit.aqua.components.optimizers.CRS.is_initial_point_required")       | Returns is initial point required   |
| [`CRS.is_initial_point_supported`](qiskit.aqua.components.optimizers.CRS.is_initial_point_supported "qiskit.aqua.components.optimizers.CRS.is_initial_point_supported")    | Returns is initial point supported  |
| [`CRS.setting`](qiskit.aqua.components.optimizers.CRS.setting "qiskit.aqua.components.optimizers.CRS.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                     |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`CRS.get_nlopt_optimizer`](qiskit.aqua.components.optimizers.CRS.get_nlopt_optimizer "qiskit.aqua.components.optimizers.CRS.get_nlopt_optimizer")()                | Return NLopt optimizer type                                                                               |
| [`CRS.get_support_level`](qiskit.aqua.components.optimizers.CRS.get_support_level "qiskit.aqua.components.optimizers.CRS.get_support_level")()                      | return support level dictionary                                                                           |
| [`CRS.gradient_num_diff`](qiskit.aqua.components.optimizers.CRS.gradient_num_diff "qiskit.aqua.components.optimizers.CRS.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`CRS.optimize`](qiskit.aqua.components.optimizers.CRS.optimize "qiskit.aqua.components.optimizers.CRS.optimize")(num\_vars, objective\_function\[, …])             | Perform optimization.                                                                                     |
| [`CRS.print_options`](qiskit.aqua.components.optimizers.CRS.print_options "qiskit.aqua.components.optimizers.CRS.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`CRS.set_max_evals_grouped`](qiskit.aqua.components.optimizers.CRS.set_max_evals_grouped "qiskit.aqua.components.optimizers.CRS.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`CRS.set_options`](qiskit.aqua.components.optimizers.CRS.set_options "qiskit.aqua.components.optimizers.CRS.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`CRS.wrap_function`](qiskit.aqua.components.optimizers.CRS.wrap_function "qiskit.aqua.components.optimizers.CRS.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

