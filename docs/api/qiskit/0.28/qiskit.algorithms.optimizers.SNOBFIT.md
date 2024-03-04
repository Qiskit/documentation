---
title: SNOBFIT
description: API reference for qiskit.algorithms.optimizers.SNOBFIT
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.SNOBFIT
---

# qiskit.algorithms.optimizers.SNOBFIT

<span id="qiskit.algorithms.optimizers.SNOBFIT" />

`SNOBFIT(maxiter=1000, maxfail=10, maxmp=None, verbose=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/algorithms/optimizers/snobfit.py "view source code")

Stable Noisy Optimization by Branch and FIT algorithm.

SnobFit is used for the optimization of derivative-free, noisy objective functions providing robust and fast solutions of problems with continuous variables varying within bound.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **maxmp** (`Optional`\[`int`]) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** (`int`) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** (`bool`) – Provide verbose (debugging) output.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant or SQSnobFit not installed

### \_\_init\_\_

<span id="qiskit.algorithms.optimizers.SNOBFIT.__init__" />

`__init__(maxiter=1000, maxfail=10, maxmp=None, verbose=False)`

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **maxmp** (`Optional`\[`int`]) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** (`int`) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** (`bool`) – Provide verbose (debugging) output.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant or SQSnobFit not installed

## Methods

|                                                                                                                                                                      |                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.algorithms.optimizers.SNOBFIT.__init__ "qiskit.algorithms.optimizers.SNOBFIT.__init__")(\[maxiter, maxfail, maxmp, verbose])                    | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.algorithms.optimizers.SNOBFIT.get_support_level "qiskit.algorithms.optimizers.SNOBFIT.get_support_level")()                            | Returns support level dictionary.                                                                         |
| [`gradient_num_diff`](#qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff "qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.algorithms.optimizers.SNOBFIT.optimize "qiskit.algorithms.optimizers.SNOBFIT.optimize")(num\_vars, objective\_function\[, …])                   | Runs the optimization.                                                                                    |
| [`print_options`](#qiskit.algorithms.optimizers.SNOBFIT.print_options "qiskit.algorithms.optimizers.SNOBFIT.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.algorithms.optimizers.SNOBFIT.set_max_evals_grouped "qiskit.algorithms.optimizers.SNOBFIT.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.algorithms.optimizers.SNOBFIT.set_options "qiskit.algorithms.optimizers.SNOBFIT.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.algorithms.optimizers.SNOBFIT.wrap_function "qiskit.algorithms.optimizers.SNOBFIT.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                       |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`bounds_support_level`](#qiskit.algorithms.optimizers.SNOBFIT.bounds_support_level "qiskit.algorithms.optimizers.SNOBFIT.bounds_support_level")                      | Returns bounds support level                   |
| [`gradient_support_level`](#qiskit.algorithms.optimizers.SNOBFIT.gradient_support_level "qiskit.algorithms.optimizers.SNOBFIT.gradient_support_level")                | Returns gradient support level                 |
| [`initial_point_support_level`](#qiskit.algorithms.optimizers.SNOBFIT.initial_point_support_level "qiskit.algorithms.optimizers.SNOBFIT.initial_point_support_level") | Returns initial point support level            |
| [`is_bounds_ignored`](#qiskit.algorithms.optimizers.SNOBFIT.is_bounds_ignored "qiskit.algorithms.optimizers.SNOBFIT.is_bounds_ignored")                               | Returns is bounds ignored                      |
| [`is_bounds_required`](#qiskit.algorithms.optimizers.SNOBFIT.is_bounds_required "qiskit.algorithms.optimizers.SNOBFIT.is_bounds_required")                            | Returns is bounds required                     |
| [`is_bounds_supported`](#qiskit.algorithms.optimizers.SNOBFIT.is_bounds_supported "qiskit.algorithms.optimizers.SNOBFIT.is_bounds_supported")                         | Returns is bounds supported                    |
| [`is_gradient_ignored`](#qiskit.algorithms.optimizers.SNOBFIT.is_gradient_ignored "qiskit.algorithms.optimizers.SNOBFIT.is_gradient_ignored")                         | Returns is gradient ignored                    |
| [`is_gradient_required`](#qiskit.algorithms.optimizers.SNOBFIT.is_gradient_required "qiskit.algorithms.optimizers.SNOBFIT.is_gradient_required")                      | Returns is gradient required                   |
| [`is_gradient_supported`](#qiskit.algorithms.optimizers.SNOBFIT.is_gradient_supported "qiskit.algorithms.optimizers.SNOBFIT.is_gradient_supported")                   | Returns is gradient supported                  |
| [`is_initial_point_ignored`](#qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_ignored "qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_ignored")          | Returns is initial point ignored               |
| [`is_initial_point_required`](#qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_required "qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_required")       | Returns is initial point required              |
| [`is_initial_point_supported`](#qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_supported "qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_supported")    | Returns is initial point supported             |
| [`setting`](#qiskit.algorithms.optimizers.SNOBFIT.setting "qiskit.algorithms.optimizers.SNOBFIT.setting")                                                             | Return setting                                 |
| [`settings`](#qiskit.algorithms.optimizers.SNOBFIT.settings "qiskit.algorithms.optimizers.SNOBFIT.settings")                                                          | The optimizer settings in a dictionary format. |

### bounds\_support\_level

<span id="qiskit.algorithms.optimizers.SNOBFIT.bounds_support_level" />

`property bounds_support_level`

Returns bounds support level

### get\_support\_level

<span id="qiskit.algorithms.optimizers.SNOBFIT.get_support_level" />

`get_support_level()`

Returns support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff" />

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

<span id="qiskit.algorithms.optimizers.SNOBFIT.gradient_support_level" />

`property gradient_support_level`

Returns gradient support level

### initial\_point\_support\_level

<span id="qiskit.algorithms.optimizers.SNOBFIT.initial_point_support_level" />

`property initial_point_support_level`

Returns initial point support level

### is\_bounds\_ignored

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_bounds_ignored" />

`property is_bounds_ignored`

Returns is bounds ignored

### is\_bounds\_required

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_bounds_required" />

`property is_bounds_required`

Returns is bounds required

### is\_bounds\_supported

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_bounds_supported" />

`property is_bounds_supported`

Returns is bounds supported

### is\_gradient\_ignored

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_gradient_ignored" />

`property is_gradient_ignored`

Returns is gradient ignored

### is\_gradient\_required

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_gradient_required" />

`property is_gradient_required`

Returns is gradient required

### is\_gradient\_supported

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_gradient_supported" />

`property is_gradient_supported`

Returns is gradient supported

### is\_initial\_point\_ignored

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_ignored" />

`property is_initial_point_ignored`

Returns is initial point ignored

### is\_initial\_point\_required

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_required" />

`property is_initial_point_required`

Returns is initial point required

### is\_initial\_point\_supported

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_supported" />

`property is_initial_point_supported`

Returns is initial point supported

### optimize

<span id="qiskit.algorithms.optimizers.SNOBFIT.optimize" />

`optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Runs the optimization.

### print\_options

<span id="qiskit.algorithms.optimizers.SNOBFIT.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.SNOBFIT.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.SNOBFIT.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### setting

<span id="qiskit.algorithms.optimizers.SNOBFIT.setting" />

`property setting`

Return setting

### settings

<span id="qiskit.algorithms.optimizers.SNOBFIT.settings" />

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

<span id="qiskit.algorithms.optimizers.SNOBFIT.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

