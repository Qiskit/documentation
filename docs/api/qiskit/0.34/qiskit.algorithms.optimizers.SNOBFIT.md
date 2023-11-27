# SNOBFIT[¶](#snobfit "Permalink to this headline")

<span id="undefined" />

`SNOBFIT(maxiter=1000, maxfail=10, maxmp=None, verbose=False)`

Bases: `qiskit.algorithms.optimizers.optimizer.Optimizer`

Stable Noisy Optimization by Branch and FIT algorithm.

SnobFit is used for the optimization of derivative-free, noisy objective functions providing robust and fast solutions of problems with continuous variables varying within bound.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **maxmp** (`Optional`\[`int`]) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** (`int`) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** (`bool`) – Provide verbose (debugging) output.

**Raises**

**MissingOptionalLibraryError** – scikit-quant or SQSnobFit not installed

## Methods

|                                                                                                                                                                                                               |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_support_level`](qiskit.algorithms.optimizers.SNOBFIT.get_support_level#qiskit.algorithms.optimizers.SNOBFIT.get_support_level "qiskit.algorithms.optimizers.SNOBFIT.get_support_level")                 | Returns support level dictionary.                                                                         |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff#qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff "qiskit.algorithms.optimizers.SNOBFIT.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.SNOBFIT.minimize#qiskit.algorithms.optimizers.SNOBFIT.minimize "qiskit.algorithms.optimizers.SNOBFIT.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.SNOBFIT.optimize#qiskit.algorithms.optimizers.SNOBFIT.optimize "qiskit.algorithms.optimizers.SNOBFIT.optimize")                                                     | Runs the optimization.                                                                                    |
| [`print_options`](qiskit.algorithms.optimizers.SNOBFIT.print_options#qiskit.algorithms.optimizers.SNOBFIT.print_options "qiskit.algorithms.optimizers.SNOBFIT.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.SNOBFIT.set_max_evals_grouped#qiskit.algorithms.optimizers.SNOBFIT.set_max_evals_grouped "qiskit.algorithms.optimizers.SNOBFIT.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.SNOBFIT.set_options#qiskit.algorithms.optimizers.SNOBFIT.set_options "qiskit.algorithms.optimizers.SNOBFIT.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.SNOBFIT.wrap_function#qiskit.algorithms.optimizers.SNOBFIT.wrap_function "qiskit.algorithms.optimizers.SNOBFIT.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
