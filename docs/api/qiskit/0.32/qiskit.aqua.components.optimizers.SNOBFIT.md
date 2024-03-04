---
title: SNOBFIT
description: API reference for qiskit.aqua.components.optimizers.SNOBFIT
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.SNOBFIT
---

# SNOBFIT

<span id="qiskit.aqua.components.optimizers.SNOBFIT" />

`SNOBFIT(maxiter=1000, maxfail=10, maxmp=None, verbose=False)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/components/optimizers/snobfit.py "view source code")

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

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

## Methods

### get\_support\_level

<span id="qiskit.aqua.components.optimizers.SNOBFIT.get_support_level" />

`SNOBFIT.get_support_level()`

Returns support level dictionary.

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.SNOBFIT.gradient_num_diff" />

`static SNOBFIT.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

### optimize

<span id="qiskit.aqua.components.optimizers.SNOBFIT.optimize" />

`SNOBFIT.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Runs the optimization.

### print\_options

<span id="qiskit.aqua.components.optimizers.SNOBFIT.print_options" />

`SNOBFIT.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.SNOBFIT.set_max_evals_grouped" />

`SNOBFIT.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.SNOBFIT.set_options" />

`SNOBFIT.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.SNOBFIT.wrap_function" />

`static SNOBFIT.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

## Attributes

<span id="qiskit.aqua.components.optimizers.SNOBFIT.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.aqua.components.optimizers.SNOBFIT.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.aqua.components.optimizers.SNOBFIT.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.aqua.components.optimizers.SNOBFIT.setting" />

### setting

Return setting

