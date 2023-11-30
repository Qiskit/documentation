# DIRECT\_L

<span id="undefined" />

`DIRECT_L(max_evals=1000)`

Bases: `qiskit.aqua.components.optimizers.nlopts.nloptimizer.NLoptOptimizer`

DIviding RECTangles Locally-biased optimizer.

DIviding RECTangles (DIRECT) is a deterministic-search algorithms based on systematic division of the search domain into increasingly smaller hyper-rectangles. The DIRECT-L version is a “locally biased” variant of DIRECT that makes the algorithm more biased towards local search, so that it is more efficient for functions with few local minima.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#direct-and-direct-l](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#direct-and-direct-l)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – NLopt library not installed.

## Methods

|                                                                                                                                                                                                                                 |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_nlopt_optimizer`](qiskit.aqua.components.optimizers.DIRECT_L.get_nlopt_optimizer#qiskit.aqua.components.optimizers.DIRECT_L.get_nlopt_optimizer "qiskit.aqua.components.optimizers.DIRECT_L.get_nlopt_optimizer")         | Return NLopt optimizer type                                                                               |
| [`get_support_level`](qiskit.aqua.components.optimizers.DIRECT_L.get_support_level#qiskit.aqua.components.optimizers.DIRECT_L.get_support_level "qiskit.aqua.components.optimizers.DIRECT_L.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.DIRECT_L.gradient_num_diff#qiskit.aqua.components.optimizers.DIRECT_L.gradient_num_diff "qiskit.aqua.components.optimizers.DIRECT_L.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.DIRECT_L.optimize#qiskit.aqua.components.optimizers.DIRECT_L.optimize "qiskit.aqua.components.optimizers.DIRECT_L.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.aqua.components.optimizers.DIRECT_L.print_options#qiskit.aqua.components.optimizers.DIRECT_L.print_options "qiskit.aqua.components.optimizers.DIRECT_L.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.DIRECT_L.set_max_evals_grouped#qiskit.aqua.components.optimizers.DIRECT_L.set_max_evals_grouped "qiskit.aqua.components.optimizers.DIRECT_L.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.DIRECT_L.set_options#qiskit.aqua.components.optimizers.DIRECT_L.set_options "qiskit.aqua.components.optimizers.DIRECT_L.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.DIRECT_L.wrap_function#qiskit.aqua.components.optimizers.DIRECT_L.wrap_function "qiskit.aqua.components.optimizers.DIRECT_L.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
