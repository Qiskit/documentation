---
title: GradientDescent
description: API reference for qiskit.algorithms.optimizers.GradientDescent
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.GradientDescent
---

# GradientDescent

<span id="qiskit.algorithms.optimizers.GradientDescent" />

`GradientDescent(maxiter=100, learning_rate=0.01, tol=1e-07, callback=None, perturbation=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/algorithms/optimizers/gradient_descent.py "view source code")

Bases: [`qiskit.algorithms.optimizers.optimizer.Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.optimizer.Optimizer")

The gradient descent minimization routine.

For a function $f$ and an initial point $\vec\theta_0$, the standard (or “vanilla”) gradient descent method is an iterative scheme to find the minimum $\vec\theta^*$ of $f$ by updating the parameters in the direction of the negative gradient of $f$

$$
\vec\theta_{n+1} = \vec\theta_{n} - \vec\eta\nabla f(\vec\theta_{n}),
$$

for a small learning rate $\eta > 0$.

You can either provide the analytic gradient $\vec\nabla f$ as `gradient_function` in the `optimize` method, or, if you do not provide it, use a finite difference approximation of the gradient. To adapt the size of the perturbation in the finite difference gradients, set the `perturbation` property in the initializer.

This optimizer supports a callback function. If provided in the initializer, the optimizer will call the callback in each iteration with the following information in this order: current number of function values, current parameters, current function value, norm of current gradient.

**Examples**

A minimum example that will use finite difference gradients with a default perturbation of 0.01 and a default learning rate of 0.01.

```python
from qiskit.algorithms.optimizers import GradientDescent

def f(x):
    return (np.linalg.norm(x) - 1) ** 2

initial_point = np.array([1, 0.5, -0.2])

optimizer = GradientDescent(maxiter=100)
x_opt, fx_opt, nfevs = optimizer.optimize(initial_point.size,
                                          f,
                                          initial_point=initial_point)

print(f"Found minimum {x_opt} at a value of {fx_opt} using {nfevs} evaluations.")
```

An example where the learning rate is an iterator and we supply the analytic gradient. Note how much faster this convergences (i.e. less `nfevs`) compared to the previous example.

```python
from qiskit.algorithms.optimizers import GradientDescent

def learning_rate():
    power = 0.6
    constant_coeff = 0.1

    def powerlaw():
        n = 0
        while True:
            yield constant_coeff * (n ** power)
            n += 1

    return powerlaw()

def f(x):
    return (np.linalg.norm(x) - 1) ** 2

def grad_f(x):
    return 2 * (np.linalg.norm(x) - 1) * x / np.linalg.norm(x)

initial_point = np.array([1, 0.5, -0.2])

optimizer = GradientDescent(maxiter=100, learning_rate=learning_rate)
x_opt, fx_opt, nfevs = optimizer.optimize(initial_point.size,
                                          f,
                                          gradient_function=grad_f,
                                          initial_point=initial_point)

print(f"Found minimum {x_opt} at a value of {fx_opt} using {nfevs} evaluations.")
```

**Parameters**

*   **maxiter** (`int`) – The maximum number of iterations.
*   **learning\_rate** (`Union`\[`float`, `Callable`\[\[], `Iterator`]]) – A constant or generator yielding learning rates for the parameter updates. See the docstring for an example.
*   **tol** (`float`) – If the norm of the parameter update is smaller than this threshold, the optimizer is converged.
*   **perturbation** (`Optional`\[`float`]) – If no gradient is passed to `GradientDescent.optimize` the gradient is approximated with a symmetric finite difference scheme with `perturbation` perturbation in both directions (defaults to 1e-2 if required). Ignored if a gradient callable is passed to `GradientDescent.optimize`.

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.GradientDescent.get_support_level" />

`GradientDescent.get_support_level()`

Get the support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.GradientDescent.gradient_num_diff" />

`static GradientDescent.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

### minimize

<span id="qiskit.algorithms.optimizers.GradientDescent.minimize" />

`GradientDescent.minimize(fun, x0, jac=None, bounds=None)`

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

<span id="qiskit.algorithms.optimizers.GradientDescent.print_options" />

`GradientDescent.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.GradientDescent.set_max_evals_grouped" />

`GradientDescent.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.GradientDescent.set_options" />

`GradientDescent.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.GradientDescent.wrap_function" />

`static GradientDescent.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.algorithms.optimizers.GradientDescent.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.GradientDescent.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.GradientDescent.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.GradientDescent.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.GradientDescent.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.GradientDescent.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.GradientDescent.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.GradientDescent.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.GradientDescent.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.GradientDescent.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.GradientDescent.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.GradientDescent.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.GradientDescent.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.GradientDescent.settings" />

### settings

**Return type**

`Dict`\[`str`, `Any`]

