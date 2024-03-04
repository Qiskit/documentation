---
title: GSLS
description: API reference for qiskit.algorithms.optimizers.GSLS
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.GSLS
---

# GSLS

<span id="qiskit.algorithms.optimizers.GSLS" />

`GSLS(maxiter=10000, max_eval=10000, disp=False, sampling_radius=1e-06, sample_size_factor=1, initial_step_size=0.01, min_step_size=1e-10, step_size_multiplier=0.4, armijo_parameter=0.1, min_gradient_norm=1e-08, max_failed_rejection_sampling=50)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/optimizers/gsls.py "view source code")

Bases: [`qiskit.algorithms.optimizers.optimizer.Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.optimizer.Optimizer")

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

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.GSLS.get_support_level" />

`GSLS.get_support_level()`

Return support level dictionary.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

A dictionary containing the support levels for different options.

### gradient\_approximation

<span id="qiskit.algorithms.optimizers.GSLS.gradient_approximation" />

`GSLS.gradient_approximation(n, x, x_value, directions, sample_set_x, sample_set_y)`

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

`static GSLS.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped, defaults to 1 (i.e. no batching).

**Returns**

the gradient computed

**Return type**

grad

### ls\_optimize

<span id="qiskit.algorithms.optimizers.GSLS.ls_optimize" />

`GSLS.ls_optimize(n, obj_fun, initial_point, var_lb, var_ub)`

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

### minimize

<span id="qiskit.algorithms.optimizers.GSLS.minimize" />

`GSLS.minimize(fun, x0, jac=None, bounds=None)`

Minimize the scalar function.

**Parameters**

*   **fun** (`Callable`\[\[`Union`\[`float`, `ndarray`]], `float`]) – The scalar function to minimize.
*   **x0** (`Union`\[`float`, `ndarray`]) – The initial point for the minimization.
*   **jac** (`Optional`\[`Callable`\[\[`Union`\[`float`, `ndarray`]], `Union`\[`float`, `ndarray`]]]) – The gradient of the scalar function `fun`.
*   **bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – Bounds for the variables of `fun`. This argument might be ignored if the optimizer does not support bounds.

**Return type**

[`OptimizerResult`](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.optimizer.OptimizerResult")

**Returns**

The result of the optimization, containing e.g. the result as attribute `x`.

### print\_options

<span id="qiskit.algorithms.optimizers.GSLS.print_options" />

`GSLS.print_options()`

Print algorithm-specific options.

### sample\_points

<span id="qiskit.algorithms.optimizers.GSLS.sample_points" />

`GSLS.sample_points(n, x, num_points)`

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

`GSLS.sample_set(n, x, var_lb, var_ub, num_points)`

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

`GSLS.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.GSLS.set_options" />

`GSLS.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.GSLS.wrap_function" />

`static GSLS.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.GSLS.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.GSLS.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.GSLS.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.GSLS.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.GSLS.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.GSLS.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.GSLS.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.GSLS.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.GSLS.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.GSLS.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.GSLS.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.GSLS.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.GSLS.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.GSLS.settings" />

### settings

**Return type**

`Dict`\[`str`, `Any`]

