---
title: ADAM
description: API reference for qiskit.aqua.components.optimizers.ADAM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.ADAM
---

# ADAM

<span id="qiskit.aqua.components.optimizers.ADAM" />

`ADAM(maxiter=10000, tol=1e-06, lr=0.001, beta_1=0.9, beta_2=0.99, noise_factor=1e-08, eps=1e-10, amsgrad=False, snapshot_dir=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/optimizers/adam_amsgrad.py "view source code")

Adam and AMSGRAD optimizer.

**Adam**

*Kingma, Diederik & Ba, Jimmy. (2014).*

Adam: A Method for Stochastic Optimization. International Conference on Learning Representations.

Adam is a gradient-based optimization algorithm that is relies on adaptive estimates of lower-order moments. The algorithm requires little memory and is invariant to diagonal rescaling of the gradients. Furthermore, it is able to cope with non-stationary objective functions and noisy and/or sparse gradients.

**AMSGRAD**

*Sashank J. Reddi and Satyen Kale and Sanjiv Kumar. (2018).*

On the Convergence of Adam and Beyond. International Conference on Learning Representations.

AMSGRAD (a variant of ADAM) uses a ‘long-term memory’ of past gradients and, thereby, improves convergence properties.

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations
*   **tol** (`float`) – Tolerance for termination
*   **lr** (`float`) – Value >= 0, Learning rate.
*   **beta\_1** (`float`) – Value in range 0 to 1, Generally close to 1.
*   **beta\_2** (`float`) – Value in range 0 to 1, Generally close to 1.
*   **noise\_factor** (`float`) – Value >= 0, Noise factor
*   **eps** (`float`) – Value >=0, Epsilon to be used for finite differences if no analytic gradient method is given.
*   **amsgrad** (`bool`) – True to use AMSGRAD, False if not
*   **snapshot\_dir** (`Optional`\[`str`]) – If not None save the optimizer’s parameter after every step to the given directory

## Attributes

### bounds\_support\_level

Returns bounds support level

### gradient\_support\_level

Returns gradient support level

### initial\_point\_support\_level

Returns initial point support level

### is\_bounds\_ignored

Returns is bounds ignored

### is\_bounds\_required

Returns is bounds required

### is\_bounds\_supported

Returns is bounds supported

### is\_gradient\_ignored

Returns is gradient ignored

### is\_gradient\_required

Returns is gradient required

### is\_gradient\_supported

Returns is gradient supported

### is\_initial\_point\_ignored

Returns is initial point ignored

### is\_initial\_point\_required

Returns is initial point required

### is\_initial\_point\_supported

Returns is initial point supported

### setting

Return setting

## Methods

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.ADAM.get_support_level" />

`ADAM.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.ADAM.gradient_num_diff" />

`static ADAM.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

### load\_params

<span id="qiskit.aqua.components.optimizers.ADAM.load_params" />

`ADAM.load_params(load_dir)`

load params

### minimize

<span id="qiskit.aqua.components.optimizers.ADAM.minimize" />

`ADAM.minimize(objective_function, initial_point, gradient_function)`

### optimize

<span id="qiskit.aqua.components.optimizers.ADAM.optimize" />

`ADAM.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (*int*) – number of parameters to be optimized.
*   **objective\_function** (*callable*) – handle to a function that computes the objective function.
*   **gradient\_function** (*callable*) – handle to a function that computes the gradient of the objective function, or None if not available.
*   **variable\_bounds** (*list\[(float, float)]*) – deprecated
*   **initial\_point** (*numpy.ndarray\[float]*) – initial point.

**Returns**

tuple has (point, value, nfev) where

> point: is a 1D numpy.ndarray\[float] containing the solution
>
> value: is a float with the objective function value
>
> nfev: number of objective function calls made if available or None

**Return type**

tuple(numpy.ndarray, float, int)

### print\_options

<span id="qiskit.aqua.components.optimizers.ADAM.print_options" />

`ADAM.print_options()`

Print algorithm-specific options.

### save\_params

<span id="qiskit.aqua.components.optimizers.ADAM.save_params" />

`ADAM.save_params(snapshot_dir)`

save params

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.ADAM.set_max_evals_grouped" />

`ADAM.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.ADAM.set_options" />

`ADAM.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.ADAM.wrap_function" />

`static ADAM.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

