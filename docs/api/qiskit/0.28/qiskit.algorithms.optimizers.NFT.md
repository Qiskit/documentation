# qiskit.algorithms.optimizers.NFT



`NFT(maxiter=None, maxfev=1024, disp=False, reset_interval=32, options=None, **kwargs)`

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

In this optimization method, the optimization function have to satisfy three conditions written in [\[1\]\_](#id5).

## References

**1**

K. M. Nakanishi, K. Fujii, and S. Todo. 2019. Sequential minimal optimization for quantum-classical hybrid algorithms. arXiv preprint arXiv:1903.12166.



`__init__(maxiter=None, maxfev=1024, disp=False, reset_interval=32, options=None, **kwargs)`

Built out using scipy framework, for details, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html).

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum number of iterations to perform.
*   **maxfev** (`int`) – Maximum number of function evaluations to perform.
*   **disp** (`bool`) – disp
*   **reset\_interval** (`int`) – The minimum estimates directly once in `reset_interval` times.
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Notes

In this optimization method, the optimization function have to satisfy three conditions written in [\[1\]\_](#id6).

## References

**1**

K. M. Nakanishi, K. Fujii, and S. Todo. 2019. Sequential minimal optimization for quantum-classical hybrid algorithms. arXiv preprint arXiv:1903.12166.

## Methods

|                                                                                                                                                              |                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.NFT.__init__ "qiskit.algorithms.optimizers.NFT.__init__")(\[maxiter, maxfev, disp, …])                            | Built out using scipy framework, for details, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html). |
| [`get_support_level`](#qiskit.algorithms.optimizers.NFT.get_support_level "qiskit.algorithms.optimizers.NFT.get_support_level")()                            | Return support level dictionary                                                                                                                                                                                                       |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.NFT.gradient_num_diff "qiskit.algorithms.optimizers.NFT.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.                                                                                                                             |
| [`optimize`](#qiskit.algorithms.optimizers.NFT.optimize "qiskit.algorithms.optimizers.NFT.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                                                                                                                                                 |
| [`print_options`](#qiskit.algorithms.optimizers.NFT.print_options "qiskit.algorithms.optimizers.NFT.print_options")()                                        | Print algorithm-specific options.                                                                                                                                                                                                     |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.NFT.set_max_evals_grouped "qiskit.algorithms.optimizers.NFT.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                                                                                                                                                 |
| [`set_options`](#qiskit.algorithms.optimizers.NFT.set_options "qiskit.algorithms.optimizers.NFT.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                                                                                                                                                     |
| [`wrap_function`](#qiskit.algorithms.optimizers.NFT.wrap_function "qiskit.algorithms.optimizers.NFT.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                                                                                                                                                          |

## Attributes

|                                                                                                                                                               |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.NFT.bounds_support_level "qiskit.algorithms.optimizers.NFT.bounds_support_level")                      | Returns bounds support level                   |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.NFT.gradient_support_level "qiskit.algorithms.optimizers.NFT.gradient_support_level")                | Returns gradient support level                 |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.NFT.initial_point_support_level "qiskit.algorithms.optimizers.NFT.initial_point_support_level") | Returns initial point support level            |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.NFT.is_bounds_ignored "qiskit.algorithms.optimizers.NFT.is_bounds_ignored")                               | Returns is bounds ignored                      |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.NFT.is_bounds_required "qiskit.algorithms.optimizers.NFT.is_bounds_required")                            | Returns is bounds required                     |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.NFT.is_bounds_supported "qiskit.algorithms.optimizers.NFT.is_bounds_supported")                         | Returns is bounds supported                    |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.NFT.is_gradient_ignored "qiskit.algorithms.optimizers.NFT.is_gradient_ignored")                         | Returns is gradient ignored                    |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.NFT.is_gradient_required "qiskit.algorithms.optimizers.NFT.is_gradient_required")                      | Returns is gradient required                   |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.NFT.is_gradient_supported "qiskit.algorithms.optimizers.NFT.is_gradient_supported")                   | Returns is gradient supported                  |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.NFT.is_initial_point_ignored "qiskit.algorithms.optimizers.NFT.is_initial_point_ignored")          | Returns is initial point ignored               |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.NFT.is_initial_point_required "qiskit.algorithms.optimizers.NFT.is_initial_point_required")       | Returns is initial point required              |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.NFT.is_initial_point_supported "qiskit.algorithms.optimizers.NFT.is_initial_point_supported")    | Returns is initial point supported             |
| [`setting`](#qiskit.algorithms.optimizers.NFT.setting "qiskit.algorithms.optimizers.NFT.setting")                                                             | Return setting                                 |
| [`settings`](#qiskit.algorithms.optimizers.NFT.settings "qiskit.algorithms.optimizers.NFT.settings")                                                          | The optimizer settings in a dictionary format. |



`property bounds_support_level`

Returns bounds support level



`get_support_level()`

Return support level dictionary



`static gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped

**Returns**

the gradient computed

**Return type**

grad



`property gradient_support_level`

Returns gradient support level



`property initial_point_support_level`

Returns initial point support level



`property is_bounds_ignored`

Returns is bounds ignored



`property is_bounds_required`

Returns is bounds required



`property is_bounds_supported`

Returns is bounds supported



`property is_gradient_ignored`

Returns is gradient ignored



`property is_gradient_required`

Returns is gradient required



`property is_gradient_supported`

Returns is gradient supported



`property is_initial_point_ignored`

Returns is initial point ignored



`property is_initial_point_required`

Returns is initial point required



`property is_initial_point_supported`

Returns is initial point supported



`optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – Number of parameters to be optimized.
*   **objective\_function** (*callable*) – A function that computes the objective function.
*   **gradient\_function** (*callable*) – A function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – List of variable bounds, given as pairs (lower, upper). None means unbounded.
*   **initial\_point** (*numpy.ndarray\[float]*) – Initial point.

**Returns**

**point, value, nfev**

point: is a 1D numpy.ndarray\[float] containing the solution value: is a float with the objective function value nfev: number of objective function calls made if available or None

**Raises**

**ValueError** – invalid input



`print_options()`

Print algorithm-specific options.



`set_max_evals_grouped(limit)`

Set max evals grouped



`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.



`property setting`

Return setting



`property settings`

The optimizer settings in a dictionary format.

The settings can for instance be used for JSON-serialization (if all settings are serializable, which e.g. doesn’t hold per default for callables), such that the optimizer object can be reconstructed as

```python
settings = optimizer.settings
# JSON serialize and send to another server
optimizer = OptimizerClass(**settings)
```

**Return type**

`Dict`\[`str`, `Any`]



`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper
