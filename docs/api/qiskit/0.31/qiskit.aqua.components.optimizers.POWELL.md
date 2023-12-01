# POWELL

<span id="undefined" />

`POWELL(maxiter=None, maxfev=1000, disp=False, xtol=0.0001, tol=None)`

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

Powell optimizer.

The Powell algorithm performs unconstrained optimization; it ignores bounds or constraints. Powell is a *conjugate direction method*: it performs sequential one-dimensional minimization along each directional vector, which is updated at each iteration of the main minimization loop. The function being minimized need not be differentiable, and no derivatives are taken.

Uses scipy.optimize.minimize Powell. For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`Optional`\[`int`]) – Maximum allowed number of iterations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **maxfev** (`int`) – Maximum allowed number of function evaluations. If both maxiter and maxfev are set, minimization will stop at the first reached.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **xtol** (`float`) – Relative error in solution xopt acceptable for convergence.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.

## Methods

|                                                                                                                                                                                                                           |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.aqua.components.optimizers.POWELL.get_support_level#qiskit.aqua.components.optimizers.POWELL.get_support_level "qiskit.aqua.components.optimizers.POWELL.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.POWELL.gradient_num_diff#qiskit.aqua.components.optimizers.POWELL.gradient_num_diff "qiskit.aqua.components.optimizers.POWELL.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.POWELL.optimize#qiskit.aqua.components.optimizers.POWELL.optimize "qiskit.aqua.components.optimizers.POWELL.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.aqua.components.optimizers.POWELL.print_options#qiskit.aqua.components.optimizers.POWELL.print_options "qiskit.aqua.components.optimizers.POWELL.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.POWELL.set_max_evals_grouped#qiskit.aqua.components.optimizers.POWELL.set_max_evals_grouped "qiskit.aqua.components.optimizers.POWELL.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.POWELL.set_options#qiskit.aqua.components.optimizers.POWELL.set_options "qiskit.aqua.components.optimizers.POWELL.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.POWELL.wrap_function#qiskit.aqua.components.optimizers.POWELL.wrap_function "qiskit.aqua.components.optimizers.POWELL.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
