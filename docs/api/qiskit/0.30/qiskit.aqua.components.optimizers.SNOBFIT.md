# SNOBFIT

`SNOBFIT(maxiter=1000, maxfail=10, maxmp=None, verbose=False)`

Bases: `qiskit.aqua.components.optimizers.optimizer.Optimizer`

Stable Noisy Optimization by Branch and FIT algorithm.

SnobFit is used for the optimization of derivative-free, noisy objective functions providing robust and fast solutions of problems with continuous variables varying within bound.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **maxmp** (`Optional`\[`int`]) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** (`int`) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** (`bool`) – Provide verbose (debugging) output.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant or SQSnobFit not installed

## Methods

|                                                                                                                                                                                                                              |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.aqua.components.optimizers.SNOBFIT.get_support_level#qiskit.aqua.components.optimizers.SNOBFIT.get_support_level "qiskit.aqua.components.optimizers.SNOBFIT.get_support_level")                 | Returns support level dictionary.                                                                         |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.SNOBFIT.gradient_num_diff#qiskit.aqua.components.optimizers.SNOBFIT.gradient_num_diff "qiskit.aqua.components.optimizers.SNOBFIT.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.SNOBFIT.optimize#qiskit.aqua.components.optimizers.SNOBFIT.optimize "qiskit.aqua.components.optimizers.SNOBFIT.optimize")                                                     | Runs the optimization.                                                                                    |
| [`print_options`](qiskit.aqua.components.optimizers.SNOBFIT.print_options#qiskit.aqua.components.optimizers.SNOBFIT.print_options "qiskit.aqua.components.optimizers.SNOBFIT.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.SNOBFIT.set_max_evals_grouped#qiskit.aqua.components.optimizers.SNOBFIT.set_max_evals_grouped "qiskit.aqua.components.optimizers.SNOBFIT.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.SNOBFIT.set_options#qiskit.aqua.components.optimizers.SNOBFIT.set_options "qiskit.aqua.components.optimizers.SNOBFIT.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.SNOBFIT.wrap_function#qiskit.aqua.components.optimizers.SNOBFIT.wrap_function "qiskit.aqua.components.optimizers.SNOBFIT.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
