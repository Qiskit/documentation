---
title: NELDER_MEAD
description: API reference for qiskit.aqua.components.optimizers.NELDER_MEAD
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.optimizers.NELDER_MEAD
---

# NELDER\_MEAD

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD" />

`NELDER_MEAD(maxiter=None, maxfev=1000, disp=False, xatol=0.0001, tol=None, adaptive=False)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/components/optimizers/nelder_mead.py "view source code")

Nelder-Mead optimizer.

The Nelder-Mead algorithm performs unconstrained optimization; it ignores bounds or constraints. It is used to find the minimum or maximum of an objective function in a multidimensional space. It is based on the Simplex algorithm. Nelder-Mead is robust in many applications, especially when the first and second derivatives of the objective function are not known.

However, if the numerical computation of the derivatives can be trusted to be accurate, other algorithms using the first and/or second derivatives information might be preferred to Nelder-Mead for their better performance in the general case, especially in consideration of the fact that the Nelder–Mead technique is a heuristic search method that can converge to non-stationary points.

Uses scipy.optimize.minimize Nelder-Mead. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum allowed number of iterations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **maxfev** (`int`) – Maximum allowed number of function evaluations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **xatol** (`float`) – Absolute error in xopt between iterations that is acceptable for convergence.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **adaptive** (`bool`) – Adapt algorithm parameters to dimensionality of problem.

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

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.get_support_level" />

`NELDER_MEAD.get_support_level()`

Return support level dictionary

### gradient\_num\_diff

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.gradient_num_diff" />

`static NELDER_MEAD.gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

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

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.optimize" />

`NELDER_MEAD.optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

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

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.print_options" />

`NELDER_MEAD.print_options()`

Print algorithm-specific options.

### set\_max\_evals\_grouped

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.set_max_evals_grouped" />

`NELDER_MEAD.set_max_evals_grouped(limit)`

Set max evals grouped

### set\_options

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.set_options" />

`NELDER_MEAD.set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

### wrap\_function

<span id="qiskit.aqua.components.optimizers.NELDER_MEAD.wrap_function" />

`static NELDER_MEAD.wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper

