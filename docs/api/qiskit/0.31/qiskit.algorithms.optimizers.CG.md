# CG

<span id="undefined" />

`CG(maxiter=20, disp=False, gtol=1e-05, tol=None, eps=1.4901161193847656e-08, options=None, max_evals_grouped=1, **kwargs)`

Bases: `qiskit.algorithms.optimizers.scipy_optimizer.SciPyOptimizer`

Conjugate Gradient optimizer.

CG is an algorithm for the numerical solution of systems of linear equations whose matrices are symmetric and positive-definite. It is an *iterative algorithm* in that it uses an initial guess to generate a sequence of improving approximate solutions for a problem, in which each approximation is derived from the previous ones. It is often used to solve unconstrained optimization problems, such as energy minimization.

Uses scipy.optimize.minimize CG. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of iterations to perform.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **gtol** (`float`) – Gradient norm must be less than gtol before successful termination.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – If jac is approximated, use this value for the step size.
*   **options** (`Optional`\[`dict`]) – A dictionary of solver options.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.

## Methods

|                                                                                                                                                                                                |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.CG.get_support_level#qiskit.algorithms.optimizers.CG.get_support_level "qiskit.algorithms.optimizers.CG.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.CG.gradient_num_diff#qiskit.algorithms.optimizers.CG.gradient_num_diff "qiskit.algorithms.optimizers.CG.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.algorithms.optimizers.CG.optimize#qiskit.algorithms.optimizers.CG.optimize "qiskit.algorithms.optimizers.CG.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.CG.print_options#qiskit.algorithms.optimizers.CG.print_options "qiskit.algorithms.optimizers.CG.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.CG.set_max_evals_grouped#qiskit.algorithms.optimizers.CG.set_max_evals_grouped "qiskit.algorithms.optimizers.CG.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.CG.set_options#qiskit.algorithms.optimizers.CG.set_options "qiskit.algorithms.optimizers.CG.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.CG.wrap_function#qiskit.algorithms.optimizers.CG.wrap_function "qiskit.algorithms.optimizers.CG.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
