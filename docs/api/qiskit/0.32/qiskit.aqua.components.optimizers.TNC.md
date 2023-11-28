# TNC

<span id="undefined" />

`TNC(maxiter=100, disp=False, accuracy=0, ftol=- 1, xtol=- 1, gtol=- 1, tol=None, eps=1e-08)`

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

Truncated Newton (TNC) optimizer.

TNC uses a truncated Newton algorithm to minimize a function with variables subject to bounds. This algorithm uses gradient information; it is also called Newton Conjugate-Gradient. It differs from the [`CG`](qiskit.aqua.components.optimizers.CG#qiskit.aqua.components.optimizers.CG "qiskit.aqua.components.optimizers.CG") method as it wraps a C implementation and allows each variable to be given upper and lower bounds.

Uses scipy.optimize.minimize TNC For further detail, please refer to See [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluation.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **accuracy** (`float`) – Relative precision for finite difference calculations. If \<= machine\_precision, set to sqrt(machine\_precision). Defaults to 0.
*   **ftol** (`float`) – Precision goal for the value of f in the stopping criterion. If ftol \< 0.0, ftol is set to 0.0 defaults to -1.
*   **xtol** (`float`) – Precision goal for the value of x in the stopping criterion (after applying x scaling factors). If xtol \< 0.0, xtol is set to sqrt(machine\_precision). Defaults to -1.
*   **gtol** (`float`) – Precision goal for the value of the projected gradient in the stopping criterion (after applying x scaling factors). If gtol \< 0.0, gtol is set to 1e-2 \* sqrt(accuracy). Setting it to 0.0 is not recommended. Defaults to -1.
*   **tol** (`Optional`\[`float`]) – Tolerance for termination.
*   **eps** (`float`) – Step size used for numerical approximation of the Jacobian.

## Methods

|                                                                                                                                                                                                                  |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.aqua.components.optimizers.TNC.get_support_level#qiskit.aqua.components.optimizers.TNC.get_support_level "qiskit.aqua.components.optimizers.TNC.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.TNC.gradient_num_diff#qiskit.aqua.components.optimizers.TNC.gradient_num_diff "qiskit.aqua.components.optimizers.TNC.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.TNC.optimize#qiskit.aqua.components.optimizers.TNC.optimize "qiskit.aqua.components.optimizers.TNC.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.aqua.components.optimizers.TNC.print_options#qiskit.aqua.components.optimizers.TNC.print_options "qiskit.aqua.components.optimizers.TNC.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.TNC.set_max_evals_grouped#qiskit.aqua.components.optimizers.TNC.set_max_evals_grouped "qiskit.aqua.components.optimizers.TNC.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.TNC.set_options#qiskit.aqua.components.optimizers.TNC.set_options "qiskit.aqua.components.optimizers.TNC.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.TNC.wrap_function#qiskit.aqua.components.optimizers.TNC.wrap_function "qiskit.aqua.components.optimizers.TNC.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
