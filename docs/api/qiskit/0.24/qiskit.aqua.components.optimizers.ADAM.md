---
title: ADAM
description: API reference for qiskit.aqua.components.optimizers.ADAM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.ADAM
---

<span id="qiskit-aqua-components-optimizers-adam" />

# qiskit.aqua.components.optimizers.ADAM

<span id="qiskit.aqua.components.optimizers.ADAM" />

`ADAM(maxiter=10000, tol=1e-06, lr=0.001, beta_1=0.9, beta_2=0.99, noise_factor=1e-08, eps=1e-10, amsgrad=False, snapshot_dir=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/aqua/components/optimizers/adam_amsgrad.py "view source code")

Adam and AMSGRAD optimizers.

Adam \[1] is a gradient-based optimization algorithm that is relies on adaptive estimates of lower-order moments. The algorithm requires little memory and is invariant to diagonal rescaling of the gradients. Furthermore, it is able to cope with non-stationary objective functions and noisy and/or sparse gradients.

AMSGRAD \[2] (a variant of Adam) uses a ‘long-term memory’ of past gradients and, thereby, improves convergence properties.

**References**

**\[1]: Kingma, Diederik & Ba, Jimmy (2014), Adam: A Method for Stochastic Optimization.**

[arXiv:1412.6980](https://arxiv.org/abs/1412.6980)

**\[2]: Sashank J. Reddi and Satyen Kale and Sanjiv Kumar (2018),**

On the Convergence of Adam and Beyond. [arXiv:1904.09237](https://arxiv.org/abs/1904.09237)

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

### \_\_init\_\_

<span id="qiskit.aqua.components.optimizers.ADAM.__init__" />

`__init__(maxiter=10000, tol=1e-06, lr=0.001, beta_1=0.9, beta_2=0.99, noise_factor=1e-08, eps=1e-10, amsgrad=False, snapshot_dir=None)`

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

## Methods

|                                                                                                                                                                          |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.optimizers.ADAM.__init__ "qiskit.aqua.components.optimizers.ADAM.__init__")(\[maxiter, tol, lr, beta\_1, beta\_2, …])               | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.aqua.components.optimizers.ADAM.get_support_level "qiskit.aqua.components.optimizers.ADAM.get_support_level")()                            | Return support level dictionary                                                                           |
| [`gradient_num_diff`](#qiskit.aqua.components.optimizers.ADAM.gradient_num_diff "qiskit.aqua.components.optimizers.ADAM.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`load_params`](#qiskit.aqua.components.optimizers.ADAM.load_params "qiskit.aqua.components.optimizers.ADAM.load_params")(load\_dir)                                     | Load iteration parameters for a file called `adam_params.csv`.                                            |
| [`minimize`](#qiskit.aqua.components.optimizers.ADAM.minimize "qiskit.aqua.components.optimizers.ADAM.minimize")(objective\_function, initial\_point, …)                 | Run the minimization.                                                                                     |
| [`optimize`](#qiskit.aqua.components.optimizers.ADAM.optimize "qiskit.aqua.components.optimizers.ADAM.optimize")(num\_vars, objective\_function\[, …])                   | Perform optimization.                                                                                     |
| [`print_options`](#qiskit.aqua.components.optimizers.ADAM.print_options "qiskit.aqua.components.optimizers.ADAM.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`save_params`](#qiskit.aqua.components.optimizers.ADAM.save_params "qiskit.aqua.components.optimizers.ADAM.save_params")(snapshot\_dir)                                 | Save the current iteration parameters to a file called `adam_params.csv`.                                 |
| [`set_max_evals_grouped`](#qiskit.aqua.components.optimizers.ADAM.set_max_evals_grouped "qiskit.aqua.components.optimizers.ADAM.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.aqua.components.optimizers.ADAM.set_options "qiskit.aqua.components.optimizers.ADAM.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.aqua.components.optimizers.ADAM.wrap_function "qiskit.aqua.components.optimizers.ADAM.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                           |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.aqua.components.optimizers.ADAM.bounds_support_level "qiskit.aqua.components.optimizers.ADAM.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.aqua.components.optimizers.ADAM.gradient_support_level "qiskit.aqua.components.optimizers.ADAM.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.aqua.components.optimizers.ADAM.initial_point_support_level "qiskit.aqua.components.optimizers.ADAM.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.aqua.components.optimizers.ADAM.is_bounds_ignored "qiskit.aqua.components.optimizers.ADAM.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.aqua.components.optimizers.ADAM.is_bounds_required "qiskit.aqua.components.optimizers.ADAM.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.aqua.components.optimizers.ADAM.is_bounds_supported "qiskit.aqua.components.optimizers.ADAM.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.aqua.components.optimizers.ADAM.is_gradient_ignored "qiskit.aqua.components.optimizers.ADAM.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.aqua.components.optimizers.ADAM.is_gradient_required "qiskit.aqua.components.optimizers.ADAM.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.aqua.components.optimizers.ADAM.is_gradient_supported "qiskit.aqua.components.optimizers.ADAM.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.aqua.components.optimizers.ADAM.is_initial_point_ignored "qiskit.aqua.components.optimizers.ADAM.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.aqua.components.optimizers.ADAM.is_initial_point_required "qiskit.aqua.components.optimizers.ADAM.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.aqua.components.optimizers.ADAM.is_initial_point_supported "qiskit.aqua.components.optimizers.ADAM.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.aqua.components.optimizers.ADAM.setting "qiskit.aqua.components.optimizers.ADAM.setting")                                                             | Return setting                      |

### bounds\_support\_level

<span id="qiskit.aqua.components.optimizers.ADAM.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.ADAM.get_support_level" />

`get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.ADAM.gradient_num_diff" />

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

<span id="qiskit.aqua.components.optimizers.ADAM.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.aqua.components.optimizers.ADAM.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.aqua.components.optimizers.ADAM.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.aqua.components.optimizers.ADAM.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.aqua.components.optimizers.ADAM.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.aqua.components.optimizers.ADAM.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.aqua.components.optimizers.ADAM.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.aqua.components.optimizers.ADAM.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.aqua.components.optimizers.ADAM.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.aqua.components.optimizers.ADAM.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.aqua.components.optimizers.ADAM.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### load\_params

<span id="qiskit.aqua.components.optimizers.ADAM.load_params" />

`load_params(load_dir)`

Load iteration parameters for a file called `adam_params.csv`.

**Parameters**

**load\_dir** (`str`) – The directory containing `adam_params.csv`.

**Return type**

`None`

### minimize

<span id="qiskit.aqua.components.optimizers.ADAM.minimize" />

`minimize(objective_function, initial_point, gradient_function)`

Run the minimization.

**Parameters**

*   **objective\_function** (`Callable`\[\[`ndarray`], `float`]) – A function handle to the objective function.
*   **initial\_point** (`ndarray`) – The initial iteration point.
*   **gradient\_function** (`Callable`\[\[`ndarray`], `float`]) – A function handle to the gradient of the objective function.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`]

**Returns**

A tuple of (optimal parameters, optimal value, number of iterations).

### optimize

<span id="qiskit.aqua.components.optimizers.ADAM.optimize" />

`optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Perform optimization.

**Parameters**

*   **num\_vars** (`int`) – Number of parameters to be optimized.
*   **objective\_function** (`Callable`\[\[`ndarray`], `float`]) – Handle to a function that computes the objective function.
*   **gradient\_function** (`Optional`\[`Callable`\[\[`ndarray`], `float`]]) – Handle to a function that computes the gradient of the objective function.
*   **variable\_bounds** (`Optional`\[`List`\[`Tuple`\[`float`, `float`]]]) – deprecated
*   **initial\_point** (`Optional`\[`ndarray`]) – The initial point for the optimization.

**Return type**

`Tuple`\[`ndarray`, `float`, `int`]

**Returns**

A tuple (point, value, nfev) where

> point: is a 1D numpy.ndarray\[float] containing the solution
>
> value: is a float with the objective function value
>
> nfev: is the number of objective function calls

### print\_options

<span id="qiskit.aqua.components.optimizers.ADAM.print_options" />

`print_options()`

Print algorithm-specific options.

### save\_params

<span id="qiskit.aqua.components.optimizers.ADAM.save_params" />

`save_params(snapshot_dir)`

Save the current iteration parameters to a file called `adam_params.csv`.

<Admonition title="Note" type="note">
  The current parameters are appended to the file, if it exists already. The file is not overwritten.
</Admonition>

**Parameters**

**snapshot\_dir** (`str`) – The directory to store the file in.

**Return type**

`None`

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.ADAM.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.ADAM.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.aqua.components.optimizers.ADAM.setting" />

`property setting`

Return setting

### wrap\_function

<span id="qiskit.aqua.components.optimizers.ADAM.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

