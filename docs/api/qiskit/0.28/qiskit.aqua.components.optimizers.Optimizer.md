# qiskit.aqua.components.optimizers.Optimizer

<span id="undefined" />

`Optimizer`

Base class for optimization algorithm.

Initialize the optimization algorithm, setting the support level for \_gradient\_support\_level, \_bound\_support\_level, \_initial\_point\_support\_level, and empty options.

<span id="undefined" />

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

<span id="undefined" />

`property bounds_support_level`

Returns bounds support level

<span id="undefined" />

`abstract get_support_level()`

Return support level dictionary

<span id="undefined" />

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

<span id="undefined" />

`property gradient_support_level`

Returns gradient support level

<span id="undefined" />

`property initial_point_support_level`

Returns initial point support level

<span id="undefined" />

`property is_bounds_ignored`

Returns is bounds ignored

<span id="undefined" />

`property is_bounds_required`

Returns is bounds required

<span id="undefined" />

`property is_bounds_supported`

Returns is bounds supported

<span id="undefined" />

`property is_gradient_ignored`

Returns is gradient ignored

<span id="undefined" />

`property is_gradient_required`

Returns is gradient required

<span id="undefined" />

`property is_gradient_supported`

Returns is gradient supported

<span id="undefined" />

`property is_initial_point_ignored`

Returns is initial point ignored

<span id="undefined" />

`property is_initial_point_required`

Returns is initial point required

<span id="undefined" />

`property is_initial_point_supported`

Returns is initial point supported

<span id="undefined" />

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

<span id="undefined" />

`print_options()`

Print algorithm-specific options.

<span id="undefined" />

`set_max_evals_grouped(limit)`

Set max evals grouped

<span id="undefined" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

<span id="undefined" />

`property setting`

Return setting

<span id="undefined" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper
