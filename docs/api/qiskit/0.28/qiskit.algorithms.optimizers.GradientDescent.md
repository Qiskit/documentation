# qiskit.algorithms.optimizers.GradientDescent

<span id="undefined" />

`GradientDescent(maxiter=100, learning_rate=0.01, tol=1e-07, callback=None, perturbation=None)`

The gradient descent minimization routine.

For a function $f$ and an initial point $\vec\theta_0$, the standard (or “vanilla”) gradient descent method is an iterative scheme to find the minimum $\vec\theta^*$ of $f$ by updating the parameters in the direction of the negative gradient of $f$

$$
\vec\theta_{n+1} = \vec\theta_{n} - \vec\eta\nabla f(\vec\theta_{n}),
$$

for a small learning rate $\eta > 0$.

You can either provide the analytic gradient $\vec\nabla f$ as `gradient_function` in the `optimize` method, or, if you do not provide it, use a finite difference approximation of the gradient. To adapt the size of the perturbation in the finite difference gradients, set the `perturbation` property in the initializer.

This optimizer supports a callback function. If provided in the initializer, the optimizer will call the callback in each iteration with the following information in this order: current number of function values, current parameters, current function value, norm of current gradient.

## Examples

A minimum example that will use finite difference gradients with a default perturbation of 0.01 and a default learning rate of 0.01.

An example where the learning rate is an iterator and we supply the analytic gradient. Note how much faster this convergences (i.e. less `nfevs`) compared to the previous example.

**Parameters**

*   **maxiter** (`int`) – The maximum number of iterations.
*   **learning\_rate** (`Union`\[`float`, `Callable`\[\[], `Iterator`]]) – A constant or generator yielding learning rates for the parameter updates. See the docstring for an example.
*   **tol** (`float`) – If the norm of the parameter update is smaller than this threshold, the optimizer is converged.
*   **perturbation** (`Optional`\[`float`]) – If no gradient is passed to `GradientDescent.optimize` the gradient is approximated with a symmetric finite difference scheme with `perturbation` perturbation in both directions (defaults to 1e-2 if required). Ignored if a gradient callable is passed to `GradientDescent.optimize`.

<span id="undefined" />

`__init__(maxiter=100, learning_rate=0.01, tol=1e-07, callback=None, perturbation=None)`

**Parameters**

*   **maxiter** (`int`) – The maximum number of iterations.
*   **learning\_rate** (`Union`\[`float`, `Callable`\[\[], `Iterator`]]) – A constant or generator yielding learning rates for the parameter updates. See the docstring for an example.
*   **tol** (`float`) – If the norm of the parameter update is smaller than this threshold, the optimizer is converged.
*   **perturbation** (`Optional`\[`float`]) – If no gradient is passed to `GradientDescent.optimize` the gradient is approximated with a symmetric finite difference scheme with `perturbation` perturbation in both directions (defaults to 1e-2 if required). Ignored if a gradient callable is passed to `GradientDescent.optimize`.

## Methods

|                                                                                                                                                                                      |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.GradientDescent.__init__ "qiskit.algorithms.optimizers.GradientDescent.__init__")(\[maxiter, learning\_rate, tol, …])                     | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.algorithms.optimizers.GradientDescent.get_support_level "qiskit.algorithms.optimizers.GradientDescent.get_support_level")()                            | Get the support level dictionary.                                                                         |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.GradientDescent.gradient_num_diff "qiskit.algorithms.optimizers.GradientDescent.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.algorithms.optimizers.GradientDescent.optimize "qiskit.algorithms.optimizers.GradientDescent.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.algorithms.optimizers.GradientDescent.print_options "qiskit.algorithms.optimizers.GradientDescent.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.GradientDescent.set_max_evals_grouped "qiskit.algorithms.optimizers.GradientDescent.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.algorithms.optimizers.GradientDescent.set_options "qiskit.algorithms.optimizers.GradientDescent.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.algorithms.optimizers.GradientDescent.wrap_function "qiskit.algorithms.optimizers.GradientDescent.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                                       |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.GradientDescent.bounds_support_level "qiskit.algorithms.optimizers.GradientDescent.bounds_support_level")                      | Returns bounds support level                   |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.GradientDescent.gradient_support_level "qiskit.algorithms.optimizers.GradientDescent.gradient_support_level")                | Returns gradient support level                 |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.GradientDescent.initial_point_support_level "qiskit.algorithms.optimizers.GradientDescent.initial_point_support_level") | Returns initial point support level            |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.GradientDescent.is_bounds_ignored "qiskit.algorithms.optimizers.GradientDescent.is_bounds_ignored")                               | Returns is bounds ignored                      |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.GradientDescent.is_bounds_required "qiskit.algorithms.optimizers.GradientDescent.is_bounds_required")                            | Returns is bounds required                     |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.GradientDescent.is_bounds_supported "qiskit.algorithms.optimizers.GradientDescent.is_bounds_supported")                         | Returns is bounds supported                    |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.GradientDescent.is_gradient_ignored "qiskit.algorithms.optimizers.GradientDescent.is_gradient_ignored")                         | Returns is gradient ignored                    |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.GradientDescent.is_gradient_required "qiskit.algorithms.optimizers.GradientDescent.is_gradient_required")                      | Returns is gradient required                   |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.GradientDescent.is_gradient_supported "qiskit.algorithms.optimizers.GradientDescent.is_gradient_supported")                   | Returns is gradient supported                  |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.GradientDescent.is_initial_point_ignored "qiskit.algorithms.optimizers.GradientDescent.is_initial_point_ignored")          | Returns is initial point ignored               |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.GradientDescent.is_initial_point_required "qiskit.algorithms.optimizers.GradientDescent.is_initial_point_required")       | Returns is initial point required              |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.GradientDescent.is_initial_point_supported "qiskit.algorithms.optimizers.GradientDescent.is_initial_point_supported")    | Returns is initial point supported             |
| [`setting`](#qiskit.algorithms.optimizers.GradientDescent.setting "qiskit.algorithms.optimizers.GradientDescent.setting")                                                             | Return setting                                 |
| [`settings`](#qiskit.algorithms.optimizers.GradientDescent.settings "qiskit.algorithms.optimizers.GradientDescent.settings")                                                          | The optimizer settings in a dictionary format. |

<span id="undefined" />

`property bounds_support_level`

Returns bounds support level

<span id="undefined" />

`get_support_level()`

Get the support level dictionary.

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
