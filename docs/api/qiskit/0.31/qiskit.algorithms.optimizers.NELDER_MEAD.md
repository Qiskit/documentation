# NELDER\_MEAD

<span id="undefined" />

`NELDER_MEAD(maxiter=None, maxfev=1000, disp=False, xatol=0.0001, tol=None, adaptive=False, options=None, **kwargs)`

Bases: `qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer`

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
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Methods

|                                                                                                                                                                                                                           |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.NELDER_MEAD.get_support_level#qiskit.algorithms.optimizers.NELDER_MEAD.get_support_level "qiskit.algorithms.optimizers.NELDER_MEAD.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.NELDER_MEAD.gradient_num_diff#qiskit.algorithms.optimizers.NELDER_MEAD.gradient_num_diff "qiskit.algorithms.optimizers.NELDER_MEAD.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.algorithms.optimizers.NELDER_MEAD.optimize#qiskit.algorithms.optimizers.NELDER_MEAD.optimize "qiskit.algorithms.optimizers.NELDER_MEAD.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.NELDER_MEAD.print_options#qiskit.algorithms.optimizers.NELDER_MEAD.print_options "qiskit.algorithms.optimizers.NELDER_MEAD.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.NELDER_MEAD.set_max_evals_grouped#qiskit.algorithms.optimizers.NELDER_MEAD.set_max_evals_grouped "qiskit.algorithms.optimizers.NELDER_MEAD.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.NELDER_MEAD.set_options#qiskit.algorithms.optimizers.NELDER_MEAD.set_options "qiskit.algorithms.optimizers.NELDER_MEAD.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.NELDER_MEAD.wrap_function#qiskit.algorithms.optimizers.NELDER_MEAD.wrap_function "qiskit.algorithms.optimizers.NELDER_MEAD.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
