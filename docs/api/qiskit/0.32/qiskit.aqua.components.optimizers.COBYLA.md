# COBYLA

<span id="undefined" />

`COBYLA(maxiter=1000, disp=False, rhobeg=1.0, tol=None)`

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

Constrained Optimization By Linear Approximation optimizer.

COBYLA is a numerical optimization method for constrained problems where the derivative of the objective function is not known.

Uses scipy.optimize.minimize COBYLA. For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **disp** (`bool`) – Set to True to print convergence messages.
*   **rhobeg** (`float`) – Reasonable initial changes to the variables.
*   **tol** (`Optional`\[`float`]) – Final accuracy in the optimization (not precisely guaranteed). This is a lower bound on the size of the trust region.

## Methods

|                                                                                                                                                                                                                           |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.aqua.components.optimizers.COBYLA.get_support_level#qiskit.aqua.components.optimizers.COBYLA.get_support_level "qiskit.aqua.components.optimizers.COBYLA.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.COBYLA.gradient_num_diff#qiskit.aqua.components.optimizers.COBYLA.gradient_num_diff "qiskit.aqua.components.optimizers.COBYLA.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.COBYLA.optimize#qiskit.aqua.components.optimizers.COBYLA.optimize "qiskit.aqua.components.optimizers.COBYLA.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.aqua.components.optimizers.COBYLA.print_options#qiskit.aqua.components.optimizers.COBYLA.print_options "qiskit.aqua.components.optimizers.COBYLA.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.COBYLA.set_max_evals_grouped#qiskit.aqua.components.optimizers.COBYLA.set_max_evals_grouped "qiskit.aqua.components.optimizers.COBYLA.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.COBYLA.set_options#qiskit.aqua.components.optimizers.COBYLA.set_options "qiskit.aqua.components.optimizers.COBYLA.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.COBYLA.wrap_function#qiskit.aqua.components.optimizers.COBYLA.wrap_function "qiskit.aqua.components.optimizers.COBYLA.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
