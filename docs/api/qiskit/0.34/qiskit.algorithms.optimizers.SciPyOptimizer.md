# SciPyOptimizer[¶](#scipyoptimizer "Permalink to this headline")

<span id="undefined" />

`SciPyOptimizer(method, options=None, max_evals_grouped=1, **kwargs)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

A general Qiskit Optimizer wrapping scipy.optimize.minimize.

For further detail, please refer to [https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html)

**Parameters**

*   **method** (`Union`\[`str`, `Callable`]) – Type of solver.
*   **options** (`Optional`\[`Dict`\[`str`, `Any`]]) – A dictionary of solver options.
*   **kwargs** – additional kwargs for scipy.optimize.minimize.
*   **max\_evals\_grouped** (`int`) – Max number of default gradient evaluations performed simultaneously.

## Methods

|                                                                                                                                                                                                                                    |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.SciPyOptimizer.get_support_level#qiskit.algorithms.optimizers.SciPyOptimizer.get_support_level "qiskit.algorithms.optimizers.SciPyOptimizer.get_support_level")                 | Return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.SciPyOptimizer.gradient_num_diff#qiskit.algorithms.optimizers.SciPyOptimizer.gradient_num_diff "qiskit.algorithms.optimizers.SciPyOptimizer.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.SciPyOptimizer.minimize#qiskit.algorithms.optimizers.SciPyOptimizer.minimize "qiskit.algorithms.optimizers.SciPyOptimizer.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.SciPyOptimizer.optimize#qiskit.algorithms.optimizers.SciPyOptimizer.optimize "qiskit.algorithms.optimizers.SciPyOptimizer.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.SciPyOptimizer.print_options#qiskit.algorithms.optimizers.SciPyOptimizer.print_options "qiskit.algorithms.optimizers.SciPyOptimizer.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.SciPyOptimizer.set_max_evals_grouped#qiskit.algorithms.optimizers.SciPyOptimizer.set_max_evals_grouped "qiskit.algorithms.optimizers.SciPyOptimizer.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.SciPyOptimizer.set_options#qiskit.algorithms.optimizers.SciPyOptimizer.set_options "qiskit.algorithms.optimizers.SciPyOptimizer.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.SciPyOptimizer.wrap_function#qiskit.algorithms.optimizers.SciPyOptimizer.wrap_function "qiskit.algorithms.optimizers.SciPyOptimizer.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
