---
title: ISRES
description: API reference for qiskit.aqua.components.optimizers.ISRES
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.ISRES
---

# qiskit.aqua.components.optimizers.ISRES

<span id="qiskit.aqua.components.optimizers.ISRES" />

`ISRES(max_evals=1000)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/optimizers/nlopts/isres.py "view source code")

Improved Stochastic Ranking Evolution Strategy optimizer.

Improved Stochastic Ranking Evolution Strategy (ISRES) is an algorithm for non-linearly constrained global optimization. It has heuristics to escape local optima, even though convergence to a global optima is not guaranteed. The evolution strategy is based on a combination of a mutation rule and differential variation. The fitness ranking is simply via the objective function for problems without nonlinear constraints. When nonlinear constraints are included, the [stochastic ranking proposed by Runarsson and Yao](https://notendur.hi.is/tpr/software/sres/Tec311r.pdf) is employed. This method supports arbitrary nonlinear inequality and equality constraints, in addition to the bound constraints.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#isres-improved-stochastic-ranking-evolution-strategy](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#isres-improved-stochastic-ranking-evolution-strategy)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – NLopt library not installed.

### \_\_init\_\_

<span id="qiskit.aqua.components.optimizers.ISRES.__init__" />

`__init__(max_evals=1000)`

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – NLopt library not installed.

## Methods

|                                                                                                                                                                            |                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.optimizers.ISRES.__init__ "qiskit.aqua.components.optimizers.ISRES.__init__")(\[max\_evals])                                          | **type max\_evals**`int`                                                                                  |
| [`get_nlopt_optimizer`](#qiskit.aqua.components.optimizers.ISRES.get_nlopt_optimizer "qiskit.aqua.components.optimizers.ISRES.get_nlopt_optimizer")()                      | Return NLopt optimizer type                                                                               |
| [`get_support_level`](#qiskit.aqua.components.optimizers.ISRES.get_support_level "qiskit.aqua.components.optimizers.ISRES.get_support_level")()                            | return support level dictionary                                                                           |
| [`gradient_num_diff`](#qiskit.aqua.components.optimizers.ISRES.gradient_num_diff "qiskit.aqua.components.optimizers.ISRES.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.aqua.components.optimizers.ISRES.optimize "qiskit.aqua.components.optimizers.ISRES.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.aqua.components.optimizers.ISRES.print_options "qiskit.aqua.components.optimizers.ISRES.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.aqua.components.optimizers.ISRES.set_max_evals_grouped "qiskit.aqua.components.optimizers.ISRES.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.aqua.components.optimizers.ISRES.set_options "qiskit.aqua.components.optimizers.ISRES.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.aqua.components.optimizers.ISRES.wrap_function "qiskit.aqua.components.optimizers.ISRES.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                             |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.aqua.components.optimizers.ISRES.bounds_support_level "qiskit.aqua.components.optimizers.ISRES.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.aqua.components.optimizers.ISRES.gradient_support_level "qiskit.aqua.components.optimizers.ISRES.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.aqua.components.optimizers.ISRES.initial_point_support_level "qiskit.aqua.components.optimizers.ISRES.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.aqua.components.optimizers.ISRES.is_bounds_ignored "qiskit.aqua.components.optimizers.ISRES.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.aqua.components.optimizers.ISRES.is_bounds_required "qiskit.aqua.components.optimizers.ISRES.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.aqua.components.optimizers.ISRES.is_bounds_supported "qiskit.aqua.components.optimizers.ISRES.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.aqua.components.optimizers.ISRES.is_gradient_ignored "qiskit.aqua.components.optimizers.ISRES.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.aqua.components.optimizers.ISRES.is_gradient_required "qiskit.aqua.components.optimizers.ISRES.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.aqua.components.optimizers.ISRES.is_gradient_supported "qiskit.aqua.components.optimizers.ISRES.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.aqua.components.optimizers.ISRES.is_initial_point_ignored "qiskit.aqua.components.optimizers.ISRES.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.aqua.components.optimizers.ISRES.is_initial_point_required "qiskit.aqua.components.optimizers.ISRES.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.aqua.components.optimizers.ISRES.is_initial_point_supported "qiskit.aqua.components.optimizers.ISRES.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.aqua.components.optimizers.ISRES.setting "qiskit.aqua.components.optimizers.ISRES.setting")                                                             | Return setting                      |

### bounds\_support\_level

<span id="qiskit.aqua.components.optimizers.ISRES.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_nlopt\_optimizer

<span id="qiskit.aqua.components.optimizers.ISRES.get_nlopt_optimizer" />

`get_nlopt_optimizer()`

Return NLopt optimizer type

**Return type**

`NLoptOptimizerType`

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.ISRES.get_support_level" />

`get_support_level()`

return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.ISRES.gradient_num_diff" />

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

<span id="qiskit.aqua.components.optimizers.ISRES.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.aqua.components.optimizers.ISRES.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.aqua.components.optimizers.ISRES.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.aqua.components.optimizers.ISRES.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.aqua.components.optimizers.ISRES.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.aqua.components.optimizers.ISRES.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.aqua.components.optimizers.ISRES.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.aqua.components.optimizers.ISRES.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.aqua.components.optimizers.ISRES.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.aqua.components.optimizers.ISRES.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.aqua.components.optimizers.ISRES.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### optimize

<span id="qiskit.aqua.components.optimizers.ISRES.optimize" />

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

<span id="qiskit.aqua.components.optimizers.ISRES.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.ISRES.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.ISRES.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.aqua.components.optimizers.ISRES.setting" />

`property setting`

Return setting

### wrap\_function

<span id="qiskit.aqua.components.optimizers.ISRES.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

