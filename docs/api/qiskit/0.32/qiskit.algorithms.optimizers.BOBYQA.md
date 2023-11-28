# BOBYQA

<span id="undefined" />

`BOBYQA(maxiter=1000)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

Bound Optimization BY Quadratic Approximation algorithm.

BOBYQA finds local solutions to nonlinear, non-convex minimization problems with optional bound constraints, without requirement of derivatives of the objective function.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

**maxiter** (`int`) – Maximum number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant not installed

## Methods

|                                                                                                                                                                                                            |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.BOBYQA.get_support_level#qiskit.algorithms.optimizers.BOBYQA.get_support_level "qiskit.algorithms.optimizers.BOBYQA.get_support_level")                 | Returns support level dictionary.                                                                         |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.BOBYQA.gradient_num_diff#qiskit.algorithms.optimizers.BOBYQA.gradient_num_diff "qiskit.algorithms.optimizers.BOBYQA.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.algorithms.optimizers.BOBYQA.optimize#qiskit.algorithms.optimizers.BOBYQA.optimize "qiskit.algorithms.optimizers.BOBYQA.optimize")                                                     | Runs the optimization.                                                                                    |
| [`print_options`](qiskit.algorithms.optimizers.BOBYQA.print_options#qiskit.algorithms.optimizers.BOBYQA.print_options "qiskit.algorithms.optimizers.BOBYQA.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.BOBYQA.set_max_evals_grouped#qiskit.algorithms.optimizers.BOBYQA.set_max_evals_grouped "qiskit.algorithms.optimizers.BOBYQA.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.BOBYQA.set_options#qiskit.algorithms.optimizers.BOBYQA.set_options "qiskit.algorithms.optimizers.BOBYQA.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.BOBYQA.wrap_function#qiskit.algorithms.optimizers.BOBYQA.wrap_function "qiskit.algorithms.optimizers.BOBYQA.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
