---
title: NFT
description: API reference for qiskit.aqua.components.optimizers.NFT
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.NFT
---

# NFT

<span id="qiskit.aqua.components.optimizers.NFT" />

`NFT(maxiter=None, maxfev=1024, disp=False, reset_interval=32)`

Nakanishi-Fujii-Todo algorithm.

See [https://arxiv.org/abs/1903.12166](https://arxiv.org/abs/1903.12166)

Built out using scipy framework, for details, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html).

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum number of iterations to perform.
*   **maxfev** (`int`) – Maximum number of function evaluations to perform.
*   **disp** (`bool`) – disp
*   **reset\_interval** (`int`) – The minimum estimates directly once in `reset_interval` times.

## Notes

In this optimization method, the optimization function have to satisfy three conditions written in [1](#id2).

## References

**[1](#id1)**

K. M. Nakanishi, K. Fujii, and S. Todo. 2019. Sequential minimal optimization for quantum-classical hybrid algorithms. arXiv preprint arXiv:1903.12166.

## Attributes

|                                                                                                                                                                            |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`NFT.bounds_support_level`](qiskit.aqua.components.optimizers.NFT.bounds_support_level "qiskit.aqua.components.optimizers.NFT.bounds_support_level")                      | Returns bounds support level        |
| [`NFT.gradient_support_level`](qiskit.aqua.components.optimizers.NFT.gradient_support_level "qiskit.aqua.components.optimizers.NFT.gradient_support_level")                | Returns gradient support level      |
| [`NFT.initial_point_support_level`](qiskit.aqua.components.optimizers.NFT.initial_point_support_level "qiskit.aqua.components.optimizers.NFT.initial_point_support_level") | Returns initial point support level |
| [`NFT.is_bounds_ignored`](qiskit.aqua.components.optimizers.NFT.is_bounds_ignored "qiskit.aqua.components.optimizers.NFT.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`NFT.is_bounds_required`](qiskit.aqua.components.optimizers.NFT.is_bounds_required "qiskit.aqua.components.optimizers.NFT.is_bounds_required")                            | Returns is bounds required          |
| [`NFT.is_bounds_supported`](qiskit.aqua.components.optimizers.NFT.is_bounds_supported "qiskit.aqua.components.optimizers.NFT.is_bounds_supported")                         | Returns is bounds supported         |
| [`NFT.is_gradient_ignored`](qiskit.aqua.components.optimizers.NFT.is_gradient_ignored "qiskit.aqua.components.optimizers.NFT.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`NFT.is_gradient_required`](qiskit.aqua.components.optimizers.NFT.is_gradient_required "qiskit.aqua.components.optimizers.NFT.is_gradient_required")                      | Returns is gradient required        |
| [`NFT.is_gradient_supported`](qiskit.aqua.components.optimizers.NFT.is_gradient_supported "qiskit.aqua.components.optimizers.NFT.is_gradient_supported")                   | Returns is gradient supported       |
| [`NFT.is_initial_point_ignored`](qiskit.aqua.components.optimizers.NFT.is_initial_point_ignored "qiskit.aqua.components.optimizers.NFT.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`NFT.is_initial_point_required`](qiskit.aqua.components.optimizers.NFT.is_initial_point_required "qiskit.aqua.components.optimizers.NFT.is_initial_point_required")       | Returns is initial point required   |
| [`NFT.is_initial_point_supported`](qiskit.aqua.components.optimizers.NFT.is_initial_point_supported "qiskit.aqua.components.optimizers.NFT.is_initial_point_supported")    | Returns is initial point supported  |
| [`NFT.setting`](qiskit.aqua.components.optimizers.NFT.setting "qiskit.aqua.components.optimizers.NFT.setting")                                                             | Return setting                      |

## Methods

|                                                                                                                                                                     |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`NFT.get_support_level`](qiskit.aqua.components.optimizers.NFT.get_support_level "qiskit.aqua.components.optimizers.NFT.get_support_level")()                      | return support level dictionary                                                                           |
| [`NFT.gradient_num_diff`](qiskit.aqua.components.optimizers.NFT.gradient_num_diff "qiskit.aqua.components.optimizers.NFT.gradient_num_diff")(x\_center, f, epsilon) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`NFT.optimize`](qiskit.aqua.components.optimizers.NFT.optimize "qiskit.aqua.components.optimizers.NFT.optimize")(num\_vars, objective\_function\[, …])             | Perform optimization.                                                                                     |
| [`NFT.print_options`](qiskit.aqua.components.optimizers.NFT.print_options "qiskit.aqua.components.optimizers.NFT.print_options")()                                  | Print algorithm-specific options.                                                                         |
| [`NFT.set_max_evals_grouped`](qiskit.aqua.components.optimizers.NFT.set_max_evals_grouped "qiskit.aqua.components.optimizers.NFT.set_max_evals_grouped")(limit)     | Set max evals grouped                                                                                     |
| [`NFT.set_options`](qiskit.aqua.components.optimizers.NFT.set_options "qiskit.aqua.components.optimizers.NFT.set_options")(\*\*kwargs)                              | Sets or updates values in the options dictionary.                                                         |
| [`NFT.wrap_function`](qiskit.aqua.components.optimizers.NFT.wrap_function "qiskit.aqua.components.optimizers.NFT.wrap_function")(function, args)                    | Wrap the function to implicitly inject the args at the call of the function.                              |

