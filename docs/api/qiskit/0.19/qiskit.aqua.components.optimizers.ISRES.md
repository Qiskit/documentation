---
title: ISRES
description: API reference for qiskit.aqua.components.optimizers.ISRES
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.ISRES
---

# ISRES

<span id="qiskit.aqua.components.optimizers.ISRES" />

`ISRES(max_evals=1000)`

Improved Stochastic Ranking Evolution Strategy optimizer.

Improved Stochastic Ranking Evolution Strategy (ISRES) is an algorithm for non-linearly constrained global optimization. It has heuristics to escape local optima, even though convergence to a global optima is not guaranteed. The evolution strategy is based on a combination of a mutation rule and differential variation. The fitness ranking is simply via the objective function for problems without nonlinear constraints. When nonlinear constraints are included, the [stochastic ranking proposed by Runarsson and Yao](https://notendur.hi.is/tpr/software/sres/Tec311r.pdf) is employed. This method supports arbitrary nonlinear inequality and equality constraints, in addition to the bound constraints.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#isres-improved-stochastic-ranking-evolution-strategy](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#isres-improved-stochastic-ranking-evolution-strategy)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**NameError** – NLopt library not installed.

## Attributes

|                                                                                                                                                                                  |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`ISRES.bounds_support_level`](qiskit.aqua.components.optimizers.ISRES.bounds_support_level "qiskit.aqua.components.optimizers.ISRES.bounds_support_level")                      | Returns bounds support level        |
| [`ISRES.gradient_support_level`](qiskit.aqua.components.optimizers.ISRES.gradient_support_level "qiskit.aqua.components.optimizers.ISRES.gradient_support_level")                | Returns gradient support level      |
| [`ISRES.initial_point_support_level`](qiskit.aqua.components.optimizers.ISRES.initial_point_support_level "qiskit.aqua.components.optimizers.ISRES.initial_point_support_level") | Returns initial point support level |
| [`ISRES.is_bounds_ignored`](qiskit.aqua.components.optimizers.ISRES.is_bounds_ignored "qiskit.aqua.components.optimizers.ISRES.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`ISRES.is_bounds_required`](qiskit.aqua.components.optimizers.ISRES.is_bounds_required "qiskit.aqua.components.optimizers.ISRES.is_bounds_required")                            | Returns is bounds required          |
| [`ISRES.is_bounds_supported`](qiskit.aqua.components.optimizers.ISRES.is_bounds_supported "qiskit.aqua.components.optimizers.ISRES.is_bounds_supported")                         | Returns is bounds supported         |
| [`ISRES.is_gradient_ignored`](qiskit.aqua.components.optimizers.ISRES.is_gradient_ignored "qiskit.aqua.components.optimizers.ISRES.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`ISRES.is_gradient_required`](qiskit.aqua.components.optimizers.ISRES.is_gradient_required "qiskit.aqua.components.optimizers.ISRES.is_gradient_required")                      | Returns is gradient required        |
| [`ISRES.is_gradient_supported`](qiskit.aqua.components.optimizers.ISRES.is_gradient_supported "qiskit.aqua.components.optimizers.ISRES.is_gradient_supported")                   | Returns is gradient supported       |
| [`ISRES.is_initial_point_ignored`](qiskit.aqua.components.optimizers.ISRES.is_initial_point_ignored "qiskit.aqua.components.optimizers.ISRES.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`ISRES.is_initial_point_required`](qiskit.aqua.components.optimizers.ISRES.is_initial_point_required "qiskit.aqua.components.optimizers.ISRES.is_initial_point_required")       | Returns is initial point required   |
| [`ISRES.is_initial_point_supported`](qiskit.aqua.components.optimizers.ISRES.is_initial_point_supported "qiskit.aqua.components.optimizers.ISRES.is_initial_point_supported")    | Returns is initial point supported  |
| [`ISRES.setting`](qiskit.aqua.components.optimizers.ISRES.setting "qiskit.aqua.components.optimizers.ISRES.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                           |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`ISRES.get_nlopt_optimizer`](qiskit.aqua.components.optimizers.ISRES.get_nlopt_optimizer "qiskit.aqua.components.optimizers.ISRES.get_nlopt_optimizer")()                | Return NLopt optimizer type                                                                               |
| [`ISRES.get_support_level`](qiskit.aqua.components.optimizers.ISRES.get_support_level "qiskit.aqua.components.optimizers.ISRES.get_support_level")()                      | return support level dictionary                                                                           |
| [`ISRES.gradient_num_diff`](qiskit.aqua.components.optimizers.ISRES.gradient_num_diff "qiskit.aqua.components.optimizers.ISRES.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`ISRES.optimize`](qiskit.aqua.components.optimizers.ISRES.optimize "qiskit.aqua.components.optimizers.ISRES.optimize")(num\_vars, objective\_function)                   | Perform optimization.                                                                                     |
| [`ISRES.print_options`](qiskit.aqua.components.optimizers.ISRES.print_options "qiskit.aqua.components.optimizers.ISRES.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`ISRES.set_max_evals_grouped`](qiskit.aqua.components.optimizers.ISRES.set_max_evals_grouped "qiskit.aqua.components.optimizers.ISRES.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`ISRES.set_options`](qiskit.aqua.components.optimizers.ISRES.set_options "qiskit.aqua.components.optimizers.ISRES.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`ISRES.wrap_function`](qiskit.aqua.components.optimizers.ISRES.wrap_function "qiskit.aqua.components.optimizers.ISRES.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

