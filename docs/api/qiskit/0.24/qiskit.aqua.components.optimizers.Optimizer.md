---
title: Optimizer
description: API reference for qiskit.aqua.components.optimizers.Optimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.Optimizer
---

<span id="qiskit-aqua-components-optimizers-optimizer" />

# qiskit.aqua.components.optimizers.Optimizer

<span id="qiskit.aqua.components.optimizers.Optimizer" />

`Optimizer` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/optimizers/optimizer.py "view source code")

Base class for optimization algorithm.

Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options.

### \_\_init\_\_

<span id="qiskit.aqua.components.optimizers.Optimizer.__init__" />

`abstract __init__()`

Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options.

## Methods

|                                                                                                                                                                                    |                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`__init__`](#qiskit.aqua.components.optimizers.Optimizer.__init__ "qiskit.aqua.components.optimizers.Optimizer.__init__")()                                                       | Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options. |
| [`get_support_level`](#qiskit.aqua.components.optimizers.Optimizer.get_support_level "qiskit.aqua.components.optimizers.Optimizer.get_support_level")()                            | Return support level dictionary                                                                                                                                                |
| [`gradient_num_diff`](#qiskit.aqua.components.optimizers.Optimizer.gradient_num_diff "qiskit.aqua.components.optimizers.Optimizer.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.                                                                      |
| [`optimize`](#qiskit.aqua.components.optimizers.Optimizer.optimize "qiskit.aqua.components.optimizers.Optimizer.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                                                                                          |
| [`print_options`](#qiskit.aqua.components.optimizers.Optimizer.print_options "qiskit.aqua.components.optimizers.Optimizer.print_options")()                                        | Print algorithm-specific options.                                                                                                                                              |
| [`set_max_evals_grouped`](#qiskit.aqua.components.optimizers.Optimizer.set_max_evals_grouped "qiskit.aqua.components.optimizers.Optimizer.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                                                                                          |
| [`set_options`](#qiskit.aqua.components.optimizers.Optimizer.set_options "qiskit.aqua.components.optimizers.Optimizer.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                                                                                              |
| [`wrap_function`](#qiskit.aqua.components.optimizers.Optimizer.wrap_function "qiskit.aqua.components.optimizers.Optimizer.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                                                                                                   |

## Attributes

|                                                                                                                                                                                     |                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.aqua.components.optimizers.Optimizer.bounds_support_level "qiskit.aqua.components.optimizers.Optimizer.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.aqua.components.optimizers.Optimizer.gradient_support_level "qiskit.aqua.components.optimizers.Optimizer.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.aqua.components.optimizers.Optimizer.initial_point_support_level "qiskit.aqua.components.optimizers.Optimizer.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.aqua.components.optimizers.Optimizer.is_bounds_ignored "qiskit.aqua.components.optimizers.Optimizer.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.aqua.components.optimizers.Optimizer.is_bounds_required "qiskit.aqua.components.optimizers.Optimizer.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.aqua.components.optimizers.Optimizer.is_bounds_supported "qiskit.aqua.components.optimizers.Optimizer.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.aqua.components.optimizers.Optimizer.is_gradient_ignored "qiskit.aqua.components.optimizers.Optimizer.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.aqua.components.optimizers.Optimizer.is_gradient_required "qiskit.aqua.components.optimizers.Optimizer.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.aqua.components.optimizers.Optimizer.is_gradient_supported "qiskit.aqua.components.optimizers.Optimizer.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.aqua.components.optimizers.Optimizer.is_initial_point_ignored "qiskit.aqua.components.optimizers.Optimizer.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.aqua.components.optimizers.Optimizer.is_initial_point_required "qiskit.aqua.components.optimizers.Optimizer.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.aqua.components.optimizers.Optimizer.is_initial_point_supported "qiskit.aqua.components.optimizers.Optimizer.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.aqua.components.optimizers.Optimizer.setting "qiskit.aqua.components.optimizers.Optimizer.setting")                                                             | Return setting                      |

### bounds\_support\_level

<span id="qiskit.aqua.components.optimizers.Optimizer.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.Optimizer.get_support_level" />

`abstract get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.Optimizer.gradient_num_diff" />

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

<span id="qiskit.aqua.components.optimizers.Optimizer.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.aqua.components.optimizers.Optimizer.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.aqua.components.optimizers.Optimizer.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.aqua.components.optimizers.Optimizer.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.aqua.components.optimizers.Optimizer.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.aqua.components.optimizers.Optimizer.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.aqua.components.optimizers.Optimizer.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.aqua.components.optimizers.Optimizer.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.aqua.components.optimizers.Optimizer.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.aqua.components.optimizers.Optimizer.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.aqua.components.optimizers.Optimizer.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### optimize

<span id="qiskit.aqua.components.optimizers.Optimizer.optimize" />

`abstract optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

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

<span id="qiskit.aqua.components.optimizers.Optimizer.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.Optimizer.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.Optimizer.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.aqua.components.optimizers.Optimizer.setting" />

`property setting`

Return setting

### wrap\_function

<span id="qiskit.aqua.components.optimizers.Optimizer.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

