# NFT



`NFT(maxiter=None, maxfev=1024, disp=False, reset_interval=32, options=None, **kwargs)`

Bases: `qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer`

Nakanishi-Fujii-Todo algorithm.

See [https://arxiv.org/abs/1903.12166](https://arxiv.org/abs/1903.12166)

Built out using scipy framework, for details, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html).

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum number of iterations to perform.
*   **maxfev** (`int`) – Maximum number of function evaluations to perform.
*   **disp** (`bool`) – disp
*   **reset\_interval** (`int`) – The minimum estimates directly once in `reset_interval` times.
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Notes

In this optimization method, the optimization function have to satisfy three conditions written in [1](#id2).

## References

**[1](#id1)**

K. M. Nakanishi, K. Fujii, and S. Todo. 2019. Sequential minimal optimization for quantum-classical hybrid algorithms. arXiv preprint arXiv:1903.12166.

## Methods

|                                                                                                                                                                                                   |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.NFT.get_support_level#qiskit.algorithms.optimizers.NFT.get_support_level "qiskit.algorithms.optimizers.NFT.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.NFT.gradient_num_diff#qiskit.algorithms.optimizers.NFT.gradient_num_diff "qiskit.algorithms.optimizers.NFT.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.algorithms.optimizers.NFT.optimize#qiskit.algorithms.optimizers.NFT.optimize "qiskit.algorithms.optimizers.NFT.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.NFT.print_options#qiskit.algorithms.optimizers.NFT.print_options "qiskit.algorithms.optimizers.NFT.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.NFT.set_max_evals_grouped#qiskit.algorithms.optimizers.NFT.set_max_evals_grouped "qiskit.algorithms.optimizers.NFT.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.NFT.set_options#qiskit.algorithms.optimizers.NFT.set_options "qiskit.algorithms.optimizers.NFT.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.NFT.wrap_function#qiskit.algorithms.optimizers.NFT.wrap_function "qiskit.algorithms.optimizers.NFT.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes



### bounds\_support\_level

Returns bounds support level



### gradient\_support\_level

Returns gradient support level



### initial\_point\_support\_level

Returns initial point support level



### is\_bounds\_ignored

Returns is bounds ignored



### is\_bounds\_required

Returns is bounds required



### is\_bounds\_supported

Returns is bounds supported



### is\_gradient\_ignored

Returns is gradient ignored



### is\_gradient\_required

Returns is gradient required



### is\_gradient\_supported

Returns is gradient supported



### is\_initial\_point\_ignored

Returns is initial point ignored



### is\_initial\_point\_required

Returns is initial point required



### is\_initial\_point\_supported

Returns is initial point supported



### setting

Return setting



### settings

**Return type**

`Dict`\[`str`, `Any`]
