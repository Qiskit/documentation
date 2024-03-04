---
title: SNOBFIT
description: API reference for qiskit.algorithms.optimizers.SNOBFIT
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.SNOBFIT
---

# SNOBFIT

<span id="qiskit.algorithms.optimizers.SNOBFIT" />

`qiskit.algorithms.optimizers.SNOBFIT(maxiter=1000, maxfail=10, maxmp=None, verbose=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/algorithms/optimizers/snobfit.py "view source code")

Bases: [`Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.optimizer.Optimizer")

Stable Noisy Optimization by Branch and FIT algorithm.

SnobFit is used for the optimization of derivative-free, noisy objective functions providing robust and fast solutions of problems with continuous variables varying within bound.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

*   **maxiter** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Maximum number of function evaluations.
*   **maxmp** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Provide verbose (debugging) output.

**Raises**

*   [**MissingOptionalLibraryError**](exceptions#qiskit.exceptions.MissingOptionalLibraryError "qiskit.exceptions.MissingOptionalLibraryError") – scikit-quant or SQSnobFit not installed
*   [**QiskitError**](exceptions#qiskit.exceptions.QiskitError "qiskit.exceptions.QiskitError") – If NumPy 1.24.0 or above is installed. See [https://github.com/scikit-quant/scikit-quant/issues/24](https://github.com/scikit-quant/scikit-quant/issues/24) for more details.

## Attributes

<span id="qiskit.algorithms.optimizers.SNOBFIT.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.SNOBFIT.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.SNOBFIT.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.SNOBFIT.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.SNOBFIT.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.SNOBFIT.settings" />

### settings

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.SNOBFIT.get_support_level" />

`get_support_level()`

Returns support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff" />

`static gradient_num_diff(x_center, f, epsilon, max_evals_grouped=None)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – max evals grouped, defaults to 1 (i.e. no batching).

**Returns**

the gradient computed

**Return type**

grad

### minimize

<span id="qiskit.algorithms.optimizers.SNOBFIT.minimize" />

`minimize(fun, x0, jac=None, bounds=None)`

Minimize the scalar function.

**Parameters**

*   **fun** (*Callable\[\[POINT],* [*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]*) – The scalar function to minimize.
*   **x0** (*POINT*) – The initial point for the minimization.
*   **jac** (*Callable\[\[POINT], POINT] | None*) – The gradient of the scalar function `fun`.
*   **bounds** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*,* [*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]] | None*) – Bounds for the variables of `fun`. This argument might be ignored if the optimizer does not support bounds.

**Returns**

The result of the optimization, containing e.g. the result as attribute `x`.

**Return type**

[OptimizerResult](qiskit.algorithms.optimizers.OptimizerResult "qiskit.algorithms.optimizers.OptimizerResult")

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

**kwargs** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.SNOBFIT.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

