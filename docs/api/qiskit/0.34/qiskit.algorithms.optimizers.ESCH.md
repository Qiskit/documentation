# ESCH

<span id="undefined" />

`ESCH(max_evals=1000)`

Bases: `qiskit.algorithms.optimizers.nlopts.nloptimizer.NLoptOptimizer`

ESCH evolutionary optimizer.

ESCH is an evolutionary algorithm for global optimization that supports bound constraints only. Specifically, it does not support nonlinear constraints.

NLopt global optimizer, derivative-free. For further detail, please refer to

[http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#esch-evolutionary-algorithm](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#esch-evolutionary-algorithm)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**MissingOptionalLibraryError** – NLopt library not installed.

## Methods

|                                                                                                                                                                                                      |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_nlopt_optimizer`](qiskit.algorithms.optimizers.ESCH.get_nlopt_optimizer#qiskit.algorithms.optimizers.ESCH.get_nlopt_optimizer "qiskit.algorithms.optimizers.ESCH.get_nlopt_optimizer")         | Return NLopt optimizer type                                                                               |
| [`get_support_level`](qiskit.algorithms.optimizers.ESCH.get_support_level#qiskit.algorithms.optimizers.ESCH.get_support_level "qiskit.algorithms.optimizers.ESCH.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.ESCH.gradient_num_diff#qiskit.algorithms.optimizers.ESCH.gradient_num_diff "qiskit.algorithms.optimizers.ESCH.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.ESCH.minimize#qiskit.algorithms.optimizers.ESCH.minimize "qiskit.algorithms.optimizers.ESCH.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.ESCH.optimize#qiskit.algorithms.optimizers.ESCH.optimize "qiskit.algorithms.optimizers.ESCH.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.ESCH.print_options#qiskit.algorithms.optimizers.ESCH.print_options "qiskit.algorithms.optimizers.ESCH.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.ESCH.set_max_evals_grouped#qiskit.algorithms.optimizers.ESCH.set_max_evals_grouped "qiskit.algorithms.optimizers.ESCH.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.ESCH.set_options#qiskit.algorithms.optimizers.ESCH.set_options "qiskit.algorithms.optimizers.ESCH.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.ESCH.wrap_function#qiskit.algorithms.optimizers.ESCH.wrap_function "qiskit.algorithms.optimizers.ESCH.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
