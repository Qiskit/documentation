---
title: SPSA
description: API reference for qiskit.algorithms.optimizers.SPSA
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.SPSA
---

# qiskit.algorithms.optimizers.SPSA

<span id="qiskit.algorithms.optimizers.SPSA" />

`SPSA(maxiter=100, blocking=False, allowed_increase=None, trust_region=False, learning_rate=None, perturbation=None, last_avg=1, resamplings=1, perturbation_dims=None, callback=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/algorithms/optimizers/spsa.py "view source code")

Simultaneous Perturbation Stochastic Approximation (SPSA) optimizer.

SPSA \[1] is an algorithmic method for optimizing systems with multiple unknown parameters. As an optimization method, it is appropriately suited to large-scale population models, adaptive modeling, and simulation optimization.

<Admonition title="See also" type="note">
  Many examples are presented at the [SPSA Web site](http://www.jhuapl.edu/SPSA).
</Admonition>

SPSA is a descent method capable of finding global minima, sharing this property with other methods as simulated annealing. Its main feature is the gradient approximation, which requires only two measurements of the objective function, regardless of the dimension of the optimization problem.

<Admonition title="Note" type="note">
  SPSA can be used in the presence of noise, and it is therefore indicated in situations involving measurement uncertainty on a quantum computation when finding a minimum. If you are executing a variational algorithm using a Quantum ASseMbly Language (QASM) simulator or a real device, SPSA would be the most recommended choice among the optimizers provided here.
</Admonition>

The optimization process can includes a calibration phase if neither the `learning_rate` nor `perturbation` is provided, which requires additional functional evaluations. (Note that either both or none must be set.) For further details on the automatic calibration, please refer to the supplementary information section IV. of \[2].

**References**

\[1]: J. C. Spall (1998). An Overview of the Simultaneous Perturbation Method for Efficient Optimization, Johns Hopkins APL Technical Digest, 19(4), 482–492. [Online.](https://www.jhuapl.edu/SPSA/PDF-SPSA/Spall_An_Overview.PDF)

\[2]: A. Kandala et al. (2017). Hardware-efficient Variational Quantum Eigensolver for Small Molecules and Quantum Magnets. Nature 549, pages242–246(2017). [arXiv:1704.05018v2](https://arxiv.org/pdf/1704.05018v2.pdf#section*.11)

**Parameters**

*   **maxiter** (`int`) – The maximum number of iterations.
*   **blocking** (`bool`) – If True, only accepts updates that improve the loss (minus some allowed increase, see next argument).
*   **allowed\_increase** (`Optional`\[`float`]) – If blocking is True, this sets by how much the loss can increase and still be accepted. If None, calibrated automatically to be twice the standard deviation of the loss function.
*   **trust\_region** (`bool`) – If True, restricts norm of the random direction to be $\leq 1$.
*   **learning\_rate** (`Union`\[`float`, `Callable`\[\[], `Iterator`], `None`]) – A generator yielding learning rates for the parameter updates, $a_k$. If set, also `perturbation` must be provided.
*   **perturbation** (`Union`\[`float`, `Callable`\[\[], `Iterator`], `None`]) – A generator yielding the perturbation magnitudes $c_k$. If set, also `learning_rate` must be provided.
*   **last\_avg** (`int`) – Return the average of the `last_avg` parameters instead of just the last parameter values.
*   **resamplings** (`Union`\[`int`, `Dict`\[`int`, `int`]]) – The number of times the gradient is sampled using a random direction to construct a gradient estimate. Per default the gradient is estimated using only one random direction. If an integer, all iterations use the same number of resamplings. If a dictionary, this is interpreted as `{iteration: number of resamplings per iteration}`.
*   **perturbation\_dims** (`Optional`\[`int`]) – The number of perturbed dimensions. Per default, all dimensions are perturbed, but a smaller, fixed number can be perturbed. If set, the perturbed dimensions are chosen uniformly at random.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`, `bool`], `None`]]) – A callback function passed information in each iteration step. The information is, in this order: the number of function evaluations, the parameters, the function value, the stepsize, whether the step was accepted.

### \_\_init\_\_

<span id="qiskit.algorithms.optimizers.SPSA.__init__" />

`__init__(maxiter=100, blocking=False, allowed_increase=None, trust_region=False, learning_rate=None, perturbation=None, last_avg=1, resamplings=1, perturbation_dims=None, callback=None)`

**Parameters**

*   **maxiter** (`int`) – The maximum number of iterations.
*   **blocking** (`bool`) – If True, only accepts updates that improve the loss (minus some allowed increase, see next argument).
*   **allowed\_increase** (`Optional`\[`float`]) – If blocking is True, this sets by how much the loss can increase and still be accepted. If None, calibrated automatically to be twice the standard deviation of the loss function.
*   **trust\_region** (`bool`) – If True, restricts norm of the random direction to be $\leq 1$.
*   **learning\_rate** (`Union`\[`float`, `Callable`\[\[], `Iterator`], `None`]) – A generator yielding learning rates for the parameter updates, $a_k$. If set, also `perturbation` must be provided.
*   **perturbation** (`Union`\[`float`, `Callable`\[\[], `Iterator`], `None`]) – A generator yielding the perturbation magnitudes $c_k$. If set, also `learning_rate` must be provided.
*   **last\_avg** (`int`) – Return the average of the `last_avg` parameters instead of just the last parameter values.
*   **resamplings** (`Union`\[`int`, `Dict`\[`int`, `int`]]) – The number of times the gradient is sampled using a random direction to construct a gradient estimate. Per default the gradient is estimated using only one random direction. If an integer, all iterations use the same number of resamplings. If a dictionary, this is interpreted as `{iteration: number of resamplings per iteration}`.
*   **perturbation\_dims** (`Optional`\[`int`]) – The number of perturbed dimensions. Per default, all dimensions are perturbed, but a smaller, fixed number can be perturbed. If set, the perturbed dimensions are chosen uniformly at random.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`, `bool`], `None`]]) – A callback function passed information in each iteration step. The information is, in this order: the number of function evaluations, the parameters, the function value, the stepsize, whether the step was accepted.

## Methods

|                                                                                                                                                                |                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.SPSA.__init__ "qiskit.algorithms.optimizers.SPSA.__init__")(\[maxiter, blocking, …])                                | **type maxiter**`int`                                                                                     |
| [`calibrate`](#qiskit.algorithms.optimizers.SPSA.calibrate "qiskit.algorithms.optimizers.SPSA.calibrate")(loss, initial\_point\[, c, …])                       | Calibrate SPSA parameters with a powerseries as learning rate and perturbation coeffs.                    |
| [`estimate_stddev`](#qiskit.algorithms.optimizers.SPSA.estimate_stddev "qiskit.algorithms.optimizers.SPSA.estimate_stddev")(loss, initial\_point\[, avg])      | Estimate the standard deviation of the loss function.                                                     |
| [`get_support_level`](#qiskit.algorithms.optimizers.SPSA.get_support_level "qiskit.algorithms.optimizers.SPSA.get_support_level")()                            | Get the support level dictionary.                                                                         |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.SPSA.gradient_num_diff "qiskit.algorithms.optimizers.SPSA.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.algorithms.optimizers.SPSA.optimize "qiskit.algorithms.optimizers.SPSA.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.algorithms.optimizers.SPSA.print_options "qiskit.algorithms.optimizers.SPSA.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.SPSA.set_max_evals_grouped "qiskit.algorithms.optimizers.SPSA.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.algorithms.optimizers.SPSA.set_options "qiskit.algorithms.optimizers.SPSA.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.algorithms.optimizers.SPSA.wrap_function "qiskit.algorithms.optimizers.SPSA.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                 |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.SPSA.bounds_support_level "qiskit.algorithms.optimizers.SPSA.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.SPSA.gradient_support_level "qiskit.algorithms.optimizers.SPSA.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.SPSA.initial_point_support_level "qiskit.algorithms.optimizers.SPSA.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.SPSA.is_bounds_ignored "qiskit.algorithms.optimizers.SPSA.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.SPSA.is_bounds_required "qiskit.algorithms.optimizers.SPSA.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.SPSA.is_bounds_supported "qiskit.algorithms.optimizers.SPSA.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.SPSA.is_gradient_ignored "qiskit.algorithms.optimizers.SPSA.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.SPSA.is_gradient_required "qiskit.algorithms.optimizers.SPSA.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.SPSA.is_gradient_supported "qiskit.algorithms.optimizers.SPSA.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.SPSA.is_initial_point_ignored "qiskit.algorithms.optimizers.SPSA.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.SPSA.is_initial_point_required "qiskit.algorithms.optimizers.SPSA.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.SPSA.is_initial_point_supported "qiskit.algorithms.optimizers.SPSA.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.algorithms.optimizers.SPSA.setting "qiskit.algorithms.optimizers.SPSA.setting")                                                             | Return setting                      |

### bounds\_support\_level

<span id="qiskit.algorithms.optimizers.SPSA.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### calibrate

<span id="qiskit.algorithms.optimizers.SPSA.calibrate" />

`static calibrate(loss, initial_point, c=0.2, stability_constant=0, target_magnitude=None, alpha=0.602, gamma=0.101, modelspace=False)`

Calibrate SPSA parameters with a powerseries as learning rate and perturbation coeffs.

The powerseries are:

$$
a_k = \frac{a}{(A + k + 1)^\alpha}, c_k = \frac{c}{(k + 1)^\gamma}
$$

**Parameters**

*   **loss** (`Callable`\[\[`ndarray`], `float`]) – The loss function.
*   **initial\_point** (`ndarray`) – The initial guess of the iteration.
*   **c** (`float`) – The initial perturbation magnitude.
*   **stability\_constant** (`float`) – The value of A.
*   **target\_magnitude** (`Optional`\[`float`]) – The target magnitude for the first update step, defaults to $2\pi / 10$.
*   **alpha** (`float`) – The exponent of the learning rate powerseries.
*   **gamma** (`float`) – The exponent of the perturbation powerseries.
*   **modelspace** (`bool`) – Whether the target magnitude is the difference of parameter values or function values (= model space).

**Returns**

**A tuple of powerseries generators, the first one for the**

learning rate and the second one for the perturbation.

**Return type**

tuple(generator, generator)

### estimate\_stddev

<span id="qiskit.algorithms.optimizers.SPSA.estimate_stddev" />

`static estimate_stddev(loss, initial_point, avg=25)`

Estimate the standard deviation of the loss function.

**Return type**

`float`

### get\_support\_level

<span id="qiskit.algorithms.optimizers.SPSA.get_support_level" />

`get_support_level()`

Get the support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.SPSA.gradient_num_diff" />

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

<span id="qiskit.algorithms.optimizers.SPSA.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.algorithms.optimizers.SPSA.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.algorithms.optimizers.SPSA.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.algorithms.optimizers.SPSA.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.algorithms.optimizers.SPSA.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.algorithms.optimizers.SPSA.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.algorithms.optimizers.SPSA.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.algorithms.optimizers.SPSA.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.algorithms.optimizers.SPSA.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.algorithms.optimizers.SPSA.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.algorithms.optimizers.SPSA.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### optimize

<span id="qiskit.algorithms.optimizers.SPSA.optimize" />

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

<span id="qiskit.algorithms.optimizers.SPSA.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.SPSA.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.SPSA.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.algorithms.optimizers.SPSA.setting" />

`property setting`

Return setting

### wrap\_function

<span id="qiskit.algorithms.optimizers.SPSA.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

