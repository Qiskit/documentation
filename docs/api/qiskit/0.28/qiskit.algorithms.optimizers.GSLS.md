---
title: GSLS
description: API reference for qiskit.algorithms.optimizers.GSLS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.GSLS
---

# qiskit.algorithms.optimizers.GSLS

<span id="qiskit.algorithms.optimizers.GSLS" />

`GSLS(maxiter=10000, max_eval=10000, disp=False, sampling_radius=1e-06, sample_size_factor=1, initial_step_size=0.01, min_step_size=1e-10, step_size_multiplier=0.4, armijo_parameter=0.1, min_gradient_norm=1e-08, max_failed_rejection_sampling=50)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/optimizers/gsls.py "view source code")

Gaussian-smoothed Line Search.

An implementation of the line search algorithm described in [https://arxiv.org/pdf/1905.01332.pdf](https://arxiv.org/pdf/1905.01332.pdf), using gradient approximation based on Gaussian-smoothed samples on a sphere.

<Admonition title="Note" type="note">
  This component has some function that is normally random. If you want to reproduce behavior then you should set the random number generator seed in the algorithm\_globals (`qiskit.utils.algorithm_globals.random_seed = seed`).
</Admonition>

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations.
*   **max\_eval** (`int`) – Maximum number of evaluations.
*   **disp** (`bool`) – Set to True to display convergence messages.
*   **sampling\_radius** (`float`) – Sampling radius to determine gradient estimate.
*   **sample\_size\_factor** (`int`) – The size of the sample set at each iteration is this number multiplied by the dimension of the problem, rounded to the nearest integer.
*   **initial\_step\_size** (`float`) – Initial step size for the descent algorithm.
*   **min\_step\_size** (`float`) – Minimum step size for the descent algorithm.
*   **step\_size\_multiplier** (`float`) – Step size reduction after unsuccessful steps, in the interval (0, 1).
*   **armijo\_parameter** (`float`) – Armijo parameter for sufficient decrease criterion, in the interval (0, 1).
*   **min\_gradient\_norm** (`float`) – If the gradient norm is below this threshold, the algorithm stops.
*   **max\_failed\_rejection\_sampling** (`int`) – Maximum number of attempts to sample points within bounds.

### \_\_init\_\_

<span id="qiskit.algorithms.optimizers.GSLS.__init__" />

`__init__(maxiter=10000, max_eval=10000, disp=False, sampling_radius=1e-06, sample_size_factor=1, initial_step_size=0.01, min_step_size=1e-10, step_size_multiplier=0.4, armijo_parameter=0.1, min_gradient_norm=1e-08, max_failed_rejection_sampling=50)`

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations.
*   **max\_eval** (`int`) – Maximum number of evaluations.
*   **disp** (`bool`) – Set to True to display convergence messages.
*   **sampling\_radius** (`float`) – Sampling radius to determine gradient estimate.
*   **sample\_size\_factor** (`int`) – The size of the sample set at each iteration is this number multiplied by the dimension of the problem, rounded to the nearest integer.
*   **initial\_step\_size** (`float`) – Initial step size for the descent algorithm.
*   **min\_step\_size** (`float`) – Minimum step size for the descent algorithm.
*   **step\_size\_multiplier** (`float`) – Step size reduction after unsuccessful steps, in the interval (0, 1).
*   **armijo\_parameter** (`float`) – Armijo parameter for sufficient decrease criterion, in the interval (0, 1).
*   **min\_gradient\_norm** (`float`) – If the gradient norm is below this threshold, the algorithm stops.
*   **max\_failed\_rejection\_sampling** (`int`) – Maximum number of attempts to sample points within bounds.

## Methods

|                                                                                                                                                                     |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.GSLS.__init__ "qiskit.algorithms.optimizers.GSLS.__init__")(\[maxiter, max\_eval, disp, …])                              | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.algorithms.optimizers.GSLS.get_support_level "qiskit.algorithms.optimizers.GSLS.get_support_level")()                                 | Return support level dictionary.                                                                          |
| [`gradient_approximation`](#qiskit.algorithms.optimizers.GSLS.gradient_approximation "qiskit.algorithms.optimizers.GSLS.gradient_approximation")(n, x, x\_value, …) | Construct gradient approximation from given sample.                                                       |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.GSLS.gradient_num_diff "qiskit.algorithms.optimizers.GSLS.gradient_num_diff")(x\_center, f, epsilon\[, …])      | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`ls_optimize`](#qiskit.algorithms.optimizers.GSLS.ls_optimize "qiskit.algorithms.optimizers.GSLS.ls_optimize")(n, obj\_fun, initial\_point, …)                     | Run the line search optimization.                                                                         |
| [`optimize`](#qiskit.algorithms.optimizers.GSLS.optimize "qiskit.algorithms.optimizers.GSLS.optimize")(num\_vars, objective\_function\[, …])                        | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.algorithms.optimizers.GSLS.print_options "qiskit.algorithms.optimizers.GSLS.print_options")()                                             | Print algorithm-specific options.                                                                         |
| [`sample_points`](#qiskit.algorithms.optimizers.GSLS.sample_points "qiskit.algorithms.optimizers.GSLS.sample_points")(n, x, num\_points)                            | Sample `num_points` points around `x` on the `n`-sphere of specified radius.                              |
| [`sample_set`](#qiskit.algorithms.optimizers.GSLS.sample_set "qiskit.algorithms.optimizers.GSLS.sample_set")(n, x, var\_lb, var\_ub, num\_points)                   | Construct sample set of given size.                                                                       |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.GSLS.set_max_evals_grouped "qiskit.algorithms.optimizers.GSLS.set_max_evals_grouped")(limit)                | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.algorithms.optimizers.GSLS.set_options "qiskit.algorithms.optimizers.GSLS.set_options")(\*\*kwargs)                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.algorithms.optimizers.GSLS.wrap_function "qiskit.algorithms.optimizers.GSLS.wrap_function")(function, args)                               | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                 |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.GSLS.bounds_support_level "qiskit.algorithms.optimizers.GSLS.bounds_support_level")                      | Returns bounds support level                   |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.GSLS.gradient_support_level "qiskit.algorithms.optimizers.GSLS.gradient_support_level")                | Returns gradient support level                 |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.GSLS.initial_point_support_level "qiskit.algorithms.optimizers.GSLS.initial_point_support_level") | Returns initial point support level            |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.GSLS.is_bounds_ignored "qiskit.algorithms.optimizers.GSLS.is_bounds_ignored")                               | Returns is bounds ignored                      |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.GSLS.is_bounds_required "qiskit.algorithms.optimizers.GSLS.is_bounds_required")                            | Returns is bounds required                     |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.GSLS.is_bounds_supported "qiskit.algorithms.optimizers.GSLS.is_bounds_supported")                         | Returns is bounds supported                    |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.GSLS.is_gradient_ignored "qiskit.algorithms.optimizers.GSLS.is_gradient_ignored")                         | Returns is gradient ignored                    |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.GSLS.is_gradient_required "qiskit.algorithms.optimizers.GSLS.is_gradient_required")                      | Returns is gradient required                   |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.GSLS.is_gradient_supported "qiskit.algorithms.optimizers.GSLS.is_gradient_supported")                   | Returns is gradient supported                  |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.GSLS.is_initial_point_ignored "qiskit.algorithms.optimizers.GSLS.is_initial_point_ignored")          | Returns is initial point ignored               |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.GSLS.is_initial_point_required "qiskit.algorithms.optimizers.GSLS.is_initial_point_required")       | Returns is initial point required              |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.GSLS.is_initial_point_supported "qiskit.algorithms.optimizers.GSLS.is_initial_point_supported")    | Returns is initial point supported             |
| [`setting`](#qiskit.algorithms.optimizers.GSLS.setting "qiskit.algorithms.optimizers.GSLS.setting")                                                             | Return setting                                 |
| [`settings`](#qiskit.algorithms.optimizers.GSLS.settings "qiskit.algorithms.optimizers.GSLS.settings")                                                          | The optimizer settings in a dictionary format. |

### bounds\_support\_level

<span id="qiskit.algorithms.optimizers.GSLS.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_support\_level

<span id="qiskit.algorithms.optimizers.GSLS.get_support_level" />

`get_support_level()`

Return support level dictionary.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

A dictionary containing the support levels for different options.

### gradient\_approximation

<span id="qiskit.algorithms.optimizers.GSLS.gradient_approximation" />

`gradient_approximation(n, x, x_value, directions, sample_set_x, sample_set_y)`

Construct gradient approximation from given sample.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **x** (`ndarray`) – Point around which the sample set was constructed.
*   **x\_value** (`float`) – Objective function value at x.
*   **directions** (`ndarray`) – Directions of the sample points wrt the central point x, as a 2D array.
*   **sample\_set\_x** (`ndarray`) – x-coordinates of the sample set, one point per row, as a 2D array.
*   **sample\_set\_y** (`ndarray`) – Objective function values of the points in sample\_set\_x, as a 1D array.

**Return type**

`ndarray`

**Returns**

Gradient approximation at x, as a 1D array.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.GSLS.gradient_num_diff" />

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

<span id="qiskit.algorithms.optimizers.GSLS.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.algorithms.optimizers.GSLS.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.algorithms.optimizers.GSLS.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.algorithms.optimizers.GSLS.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.algorithms.optimizers.GSLS.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.algorithms.optimizers.GSLS.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.algorithms.optimizers.GSLS.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.algorithms.optimizers.GSLS.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.algorithms.optimizers.GSLS.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.algorithms.optimizers.GSLS.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.algorithms.optimizers.GSLS.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### ls\_optimize

<span id="qiskit.algorithms.optimizers.GSLS.ls_optimize" />

`ls_optimize(n, obj_fun, initial_point, var_lb, var_ub)`

Run the line search optimization.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **obj\_fun** (`Callable`) – Objective function.
*   **initial\_point** (`ndarray`) – Initial point.
*   **var\_lb** (`ndarray`) – Vector of lower bounds on the decision variables. Vector elements can be -np.inf if the corresponding variable is unbounded from below.
*   **var\_ub** (`ndarray`) – Vector of upper bounds on the decision variables. Vector elements can be np.inf if the corresponding variable is unbounded from below.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`, `float`]

**Returns**

Final iterate as a vector, corresponding objective function value, number of evaluations, and norm of the gradient estimate.

**Raises**

**ValueError** – If the number of dimensions mismatches the size of the initial point or the length of the lower or upper bound.

### optimize

<span id="qiskit.algorithms.optimizers.GSLS.optimize" />

`optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – Number of parameters to be optimized.
*   **objective\_function** (*callable*) – A function that computes the objective function.
*   **gradient\_function** (*callable*) – A function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – List of variable bounds, given as pairs (lower, upper). None means unbounded.
*   **initial\_point** (*numpy.ndarray\[float]*) – Initial point.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`]

**Returns**

**point, value, nfev**

point: is a 1D numpy.ndarray\[float] containing the solution value: is a float with the objective function value nfev: number of objective function calls made if available or None

**Raises**

**ValueError** – invalid input

### print\_options

<span id="qiskit.algorithms.optimizers.GSLS.print_options" />

`print_options()`

Print algorithm-specific options.

### sample\_points

<span id="qiskit.algorithms.optimizers.GSLS.sample_points" />

`sample_points(n, x, num_points)`

Sample `num_points` points around `x` on the `n`-sphere of specified radius.

The radius of the sphere is `self._options['sampling_radius']`.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **x** (`ndarray`) – Point around which the sample set is constructed.
*   **num\_points** (`int`) – Number of points in the sample set.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

**Returns**

A tuple containing the sampling points and the directions.

### sample\_set

<span id="qiskit.algorithms.optimizers.GSLS.sample_set" />

`sample_set(n, x, var_lb, var_ub, num_points)`

Construct sample set of given size.

**Parameters**

*   **n** (`int`) – Dimension of the problem.
*   **x** (`ndarray`) – Point around which the sample set is constructed.
*   **var\_lb** (`ndarray`) – Vector of lower bounds on the decision variables. Vector elements can be -np.inf if the corresponding variable is unbounded from below.
*   **var\_ub** (`ndarray`) – Vector of lower bounds on the decision variables. Vector elements can be np.inf if the corresponding variable is unbounded from above.
*   **num\_points** (`int`) – Number of points in the sample set.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

**Returns**

Matrices of (unit-norm) sample directions and sample points, one per row. Both matrices are 2D arrays of floats.

**Raises**

**RuntimeError** – If not enough samples could be generated within the bounds.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.GSLS.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.GSLS.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.algorithms.optimizers.GSLS.setting" />

`property setting`

Return setting

### settings

<span id="qiskit.algorithms.optimizers.GSLS.settings" />

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

<span id="qiskit.algorithms.optimizers.GSLS.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

