# GradientDescent

<span id="undefined" />

`GradientDescent(maxiter=100, learning_rate=0.01, tol=1e-07, callback=None, perturbation=None)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

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

## Methods

|                                                                                                                                                                                                                                       |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.GradientDescent.get_support_level#qiskit.algorithms.optimizers.GradientDescent.get_support_level "qiskit.algorithms.optimizers.GradientDescent.get_support_level")                 | Get the support level dictionary.                                                                         |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.GradientDescent.gradient_num_diff#qiskit.algorithms.optimizers.GradientDescent.gradient_num_diff "qiskit.algorithms.optimizers.GradientDescent.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.GradientDescent.minimize#qiskit.algorithms.optimizers.GradientDescent.minimize "qiskit.algorithms.optimizers.GradientDescent.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.GradientDescent.optimize#qiskit.algorithms.optimizers.GradientDescent.optimize "qiskit.algorithms.optimizers.GradientDescent.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.GradientDescent.print_options#qiskit.algorithms.optimizers.GradientDescent.print_options "qiskit.algorithms.optimizers.GradientDescent.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.GradientDescent.set_max_evals_grouped#qiskit.algorithms.optimizers.GradientDescent.set_max_evals_grouped "qiskit.algorithms.optimizers.GradientDescent.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.GradientDescent.set_options#qiskit.algorithms.optimizers.GradientDescent.set_options "qiskit.algorithms.optimizers.GradientDescent.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.GradientDescent.wrap_function#qiskit.algorithms.optimizers.GradientDescent.wrap_function "qiskit.algorithms.optimizers.GradientDescent.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

<span id="undefined" />

### bounds\_support\_level

Returns bounds support level

<span id="undefined" />

### gradient\_support\_level

Returns gradient support level

<span id="undefined" />

### initial\_point\_support\_level

Returns initial point support level

<span id="undefined" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="undefined" />

### is\_bounds\_required

Returns is bounds required

<span id="undefined" />

### is\_bounds\_supported

Returns is bounds supported

<span id="undefined" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="undefined" />

### is\_gradient\_required

Returns is gradient required

<span id="undefined" />

### is\_gradient\_supported

Returns is gradient supported

<span id="undefined" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="undefined" />

### is\_initial\_point\_required

Returns is initial point required

<span id="undefined" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="undefined" />

### setting

Return setting

<span id="undefined" />

### settings

**Return type**

`Dict`\[`str`, `Any`]
