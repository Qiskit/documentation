# SLSQP[¶](#slsqp "Permalink to this headline")

<span id="undefined" />

`SLSQP(maxiter=100, disp=False, ftol=1e-06, tol=None, eps=1.4901161193847656e-08, options=None, max_evals_grouped=1, **kwargs)`

Bases: `qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer`

Sequential Least SQuares Programming optimizer.

SLSQP minimizes a function of several variables with any combination of bounds, equality and inequality constraints. The method wraps the SLSQP Optimization subroutine originally implemented by Dieter Kraft.

SLSQP is ideal for mathematical problems for which the objective function and the constraints are twice continuously differentiable. Note that the wrapper handles infinite values in bounds by converting them into large floating values.

Uses scipy.optimize.minimize SLSQP. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **ftol** (`float`) – Precision goal for the value of f in the stopping criterion.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – Step size used for numerical approximation of the Jacobian.
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Methods

|                                                                                                                                                                                                         |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.SLSQP.get_support_level#qiskit.algorithms.optimizers.SLSQP.get_support_level "qiskit.algorithms.optimizers.SLSQP.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.SLSQP.gradient_num_diff#qiskit.algorithms.optimizers.SLSQP.gradient_num_diff "qiskit.algorithms.optimizers.SLSQP.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.SLSQP.minimize#qiskit.algorithms.optimizers.SLSQP.minimize "qiskit.algorithms.optimizers.SLSQP.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.SLSQP.optimize#qiskit.algorithms.optimizers.SLSQP.optimize "qiskit.algorithms.optimizers.SLSQP.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.SLSQP.print_options#qiskit.algorithms.optimizers.SLSQP.print_options "qiskit.algorithms.optimizers.SLSQP.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.SLSQP.set_max_evals_grouped#qiskit.algorithms.optimizers.SLSQP.set_max_evals_grouped "qiskit.algorithms.optimizers.SLSQP.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.SLSQP.set_options#qiskit.algorithms.optimizers.SLSQP.set_options "qiskit.algorithms.optimizers.SLSQP.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.SLSQP.wrap_function#qiskit.algorithms.optimizers.SLSQP.wrap_function "qiskit.algorithms.optimizers.SLSQP.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
