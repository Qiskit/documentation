# qiskit.algorithms.optimizers.COBYLA

<span id="undefined" />

`COBYLA(maxiter=1000, disp=False, rhobeg=1.0, tol=None)`

Constrained Optimization By Linear Approximation optimizer.

COBYLA is a numerical optimization method for constrained problems where the derivative of the objective function is not known.

Uses scipy.optimize.minimize COBYLA. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **rhobeg** (`float`) – Reasonable initial changes to the variables.
*   **tol** (`Optional`\[`float`]) – Final accuracy in the optimization (not precisely guaranteed). This is a lower bound on the size of the trust region.

<span id="undefined" />

`__init__(maxiter=1000, disp=False, rhobeg=1.0, tol=None)`

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **rhobeg** (`float`) – Reasonable initial changes to the variables.
*   **tol** (`Optional`\[`float`]) – Final accuracy in the optimization (not precisely guaranteed). This is a lower bound on the size of the trust region.

## Methods

|                                                                                                                                                                    |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.COBYLA.__init__ "qiskit.algorithms.optimizers.COBYLA.__init__")(\[maxiter, disp, rhobeg, tol])                          | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.algorithms.optimizers.COBYLA.get_support_level "qiskit.algorithms.optimizers.COBYLA.get_support_level")()                            | Return support level dictionary                                                                           |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.COBYLA.gradient_num_diff "qiskit.algorithms.optimizers.COBYLA.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.algorithms.optimizers.COBYLA.optimize "qiskit.algorithms.optimizers.COBYLA.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.algorithms.optimizers.COBYLA.print_options "qiskit.algorithms.optimizers.COBYLA.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.COBYLA.set_max_evals_grouped "qiskit.algorithms.optimizers.COBYLA.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.algorithms.optimizers.COBYLA.set_options "qiskit.algorithms.optimizers.COBYLA.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.algorithms.optimizers.COBYLA.wrap_function "qiskit.algorithms.optimizers.COBYLA.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                     |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.COBYLA.bounds_support_level "qiskit.algorithms.optimizers.COBYLA.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.COBYLA.gradient_support_level "qiskit.algorithms.optimizers.COBYLA.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.COBYLA.initial_point_support_level "qiskit.algorithms.optimizers.COBYLA.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.COBYLA.is_bounds_ignored "qiskit.algorithms.optimizers.COBYLA.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.COBYLA.is_bounds_required "qiskit.algorithms.optimizers.COBYLA.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.COBYLA.is_bounds_supported "qiskit.algorithms.optimizers.COBYLA.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.COBYLA.is_gradient_ignored "qiskit.algorithms.optimizers.COBYLA.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.COBYLA.is_gradient_required "qiskit.algorithms.optimizers.COBYLA.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.COBYLA.is_gradient_supported "qiskit.algorithms.optimizers.COBYLA.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.COBYLA.is_initial_point_ignored "qiskit.algorithms.optimizers.COBYLA.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.COBYLA.is_initial_point_required "qiskit.algorithms.optimizers.COBYLA.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.COBYLA.is_initial_point_supported "qiskit.algorithms.optimizers.COBYLA.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.algorithms.optimizers.COBYLA.setting "qiskit.algorithms.optimizers.COBYLA.setting")                                                             | Return setting                      |

<span id="undefined" />

`property bounds_support_level`

Returns bounds support level

<span id="undefined" />

`get_support_level()`

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
