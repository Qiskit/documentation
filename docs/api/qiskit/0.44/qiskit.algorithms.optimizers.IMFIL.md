---
title: IMFIL
description: API reference for qiskit.algorithms.optimizers.IMFIL
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.IMFIL
---

# IMFIL

<span id="qiskit.algorithms.optimizers.IMFIL" />

`qiskit.algorithms.optimizers.IMFIL(maxiter=1000)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/algorithms/optimizers/imfil.py "view source code")

Bases: [`Optimizer`](qiskit.algorithms.optimizers.Optimizer "qiskit.algorithms.optimizers.optimizer.Optimizer")

IMplicit FILtering algorithm.

Implicit filtering is a way to solve bound-constrained optimization problems for which derivatives are not available. In comparison to methods that use interpolation to reconstruct the function and its higher derivatives, implicit filtering builds upon coordinate search followed by interpolation to get an approximate gradient.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

**maxiter** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Maximum number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](exceptions#qiskit.exceptions.MissingOptionalLibraryError "qiskit.exceptions.MissingOptionalLibraryError") – scikit-quant not installed

## Attributes

<span id="qiskit.algorithms.optimizers.IMFIL.bounds_support_level" />

### bounds\_support\_level

Returns bounds support level

<span id="qiskit.algorithms.optimizers.IMFIL.gradient_support_level" />

### gradient\_support\_level

Returns gradient support level

<span id="qiskit.algorithms.optimizers.IMFIL.initial_point_support_level" />

### initial\_point\_support\_level

Returns initial point support level

<span id="qiskit.algorithms.optimizers.IMFIL.is_bounds_ignored" />

### is\_bounds\_ignored

Returns is bounds ignored

<span id="qiskit.algorithms.optimizers.IMFIL.is_bounds_required" />

### is\_bounds\_required

Returns is bounds required

<span id="qiskit.algorithms.optimizers.IMFIL.is_bounds_supported" />

### is\_bounds\_supported

Returns is bounds supported

<span id="qiskit.algorithms.optimizers.IMFIL.is_gradient_ignored" />

### is\_gradient\_ignored

Returns is gradient ignored

<span id="qiskit.algorithms.optimizers.IMFIL.is_gradient_required" />

### is\_gradient\_required

Returns is gradient required

<span id="qiskit.algorithms.optimizers.IMFIL.is_gradient_supported" />

### is\_gradient\_supported

Returns is gradient supported

<span id="qiskit.algorithms.optimizers.IMFIL.is_initial_point_ignored" />

### is\_initial\_point\_ignored

Returns is initial point ignored

<span id="qiskit.algorithms.optimizers.IMFIL.is_initial_point_required" />

### is\_initial\_point\_required

Returns is initial point required

<span id="qiskit.algorithms.optimizers.IMFIL.is_initial_point_supported" />

### is\_initial\_point\_supported

Returns is initial point supported

<span id="qiskit.algorithms.optimizers.IMFIL.setting" />

### setting

Return setting

<span id="qiskit.algorithms.optimizers.IMFIL.settings" />

### settings

## Methods

### get\_support\_level

<span id="qiskit.algorithms.optimizers.IMFIL.get_support_level" />

`get_support_level()`

Returns support level dictionary.

### gradient\_num\_diff

<span id="qiskit.algorithms.optimizers.IMFIL.gradient_num_diff" />

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

<span id="qiskit.algorithms.optimizers.IMFIL.minimize" />

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

<span id="qiskit.algorithms.optimizers.IMFIL.print_options" />

`print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.algorithms.optimizers.IMFIL.set_max_evals_grouped" />

`set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.algorithms.optimizers.IMFIL.set_options" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** ([*dict*](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.12)")) – options, given as name=value.

### wrap\_function

<span id="qiskit.algorithms.optimizers.IMFIL.wrap_function" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** ([*tuple*](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.12)")) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

