---
title: SciPyOptimizer
description: API reference for qiskit.algorithms.optimizers.SciPyOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.SciPyOptimizer
---

# qiskit.algorithms.optimizers.SciPyOptimizer

<span id="qiskit.algorithms.optimizers.SciPyOptimizer" />

`SciPyOptimizer(method, options=None, max_evals_grouped=1, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/optimizers/scipy_optimizer.py "view source code")

A general Qiskit Optimizer wrapping scipy.optimize.minimize.

For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **method** (`Union`\[`str`, `Callable`]) – Type of solver.
*   **options** (`Optional`\[`Dict`\[`str`, `Any`]]) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.

### \_\_init\_\_

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.__init__" />

`__init__(method, options=None, max_evals_grouped=1, **kwargs)`

**Parameters**

*   **method** (`Union`\[`str`, `Callable`]) – Type of solver.
*   **options** (`Optional`\[`Dict`\[`str`, `Any`]]) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.

## Methods

|                                                                                                                                                                                    |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.SciPyOptimizer.__init__ "qiskit.algorithms.optimizers.SciPyOptimizer.__init__")(method\[, options, max\_evals\_grouped])                | **type method**`Union`\[`str`, `Callable`]                                                                |
| [`get_support_level`](#qiskit.algorithms.optimizers.SciPyOptimizer.get_support_level "qiskit.algorithms.optimizers.SciPyOptimizer.get_support_level")()                            | Return support level dictionary                                                                           |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.SciPyOptimizer.gradient_num_diff "qiskit.algorithms.optimizers.SciPyOptimizer.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.algorithms.optimizers.SciPyOptimizer.optimize "qiskit.algorithms.optimizers.SciPyOptimizer.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.algorithms.optimizers.SciPyOptimizer.print_options "qiskit.algorithms.optimizers.SciPyOptimizer.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.SciPyOptimizer.set_max_evals_grouped "qiskit.algorithms.optimizers.SciPyOptimizer.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.algorithms.optimizers.SciPyOptimizer.set_options "qiskit.algorithms.optimizers.SciPyOptimizer.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.algorithms.optimizers.SciPyOptimizer.wrap_function "qiskit.algorithms.optimizers.SciPyOptimizer.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                                     |                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.SciPyOptimizer.bounds_support_level "qiskit.algorithms.optimizers.SciPyOptimizer.bounds_support_level")                      | Returns bounds support level                   |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.SciPyOptimizer.gradient_support_level "qiskit.algorithms.optimizers.SciPyOptimizer.gradient_support_level")                | Returns gradient support level                 |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.SciPyOptimizer.initial_point_support_level "qiskit.algorithms.optimizers.SciPyOptimizer.initial_point_support_level") | Returns initial point support level            |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_ignored "qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_ignored")                               | Returns is bounds ignored                      |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_required "qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_required")                            | Returns is bounds required                     |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_supported "qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_supported")                         | Returns is bounds supported                    |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_ignored "qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_ignored")                         | Returns is gradient ignored                    |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_required "qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_required")                      | Returns is gradient required                   |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_supported "qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_supported")                   | Returns is gradient supported                  |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_ignored "qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_ignored")          | Returns is initial point ignored               |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_required "qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_required")       | Returns is initial point required              |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_supported "qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_supported")    | Returns is initial point supported             |
| [`setting`](#qiskit.algorithms.optimizers.SciPyOptimizer.setting "qiskit.algorithms.optimizers.SciPyOptimizer.setting")                                                             | Return setting                                 |
| [`settings`](#qiskit.algorithms.optimizers.SciPyOptimizer.settings "qiskit.algorithms.optimizers.SciPyOptimizer.settings")                                                          | The optimizer settings in a dictionary format. |

### bounds\_support\_level

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_support\_level

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.get_support_level" />

`get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.gradient_num_diff" />

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

### gradient\_support\_level

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### optimize

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.optimize" />

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

### print\_options

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.setting" />

`property setting`

Return setting

### settings

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.settings" />

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

### wrap\_function

<span id="qiskit.algorithms.optimizers.SciPyOptimizer.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

