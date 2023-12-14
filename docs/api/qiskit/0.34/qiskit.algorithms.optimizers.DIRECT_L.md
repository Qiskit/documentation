# DIRECT\_L



`DIRECT_L(max_evals=1000)`

Bases: `qiskit.algorithms.optimizers.nlopts.nloptimizer.NLoptOptimizer`

DIviding RECTangles Locally-biased optimizer.

DIviding RECTangles (DIRECT) is a deterministic-search algorithms based on systematic division of the search domain into increasingly smaller hyper-rectangles. The DIRECT-L version is a “locally biased” variant of DIRECT that makes the algorithm more biased towards local search, so that it is more efficient for functions with few local minima.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#direct-and-direct-l](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#direct-and-direct-l)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**MissingOptionalLibraryError** – NLopt library not installed.

## Methods

|                                                                                                                                                                                                                  |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_nlopt_optimizer`](qiskit.algorithms.optimizers.DIRECT_L.get_nlopt_optimizer#qiskit.algorithms.optimizers.DIRECT_L.get_nlopt_optimizer "qiskit.algorithms.optimizers.DIRECT_L.get_nlopt_optimizer")         | Return NLopt optimizer type                                                                               |
| [`get_support_level`](qiskit.algorithms.optimizers.DIRECT_L.get_support_level#qiskit.algorithms.optimizers.DIRECT_L.get_support_level "qiskit.algorithms.optimizers.DIRECT_L.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.DIRECT_L.gradient_num_diff#qiskit.algorithms.optimizers.DIRECT_L.gradient_num_diff "qiskit.algorithms.optimizers.DIRECT_L.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.DIRECT_L.minimize#qiskit.algorithms.optimizers.DIRECT_L.minimize "qiskit.algorithms.optimizers.DIRECT_L.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.DIRECT_L.optimize#qiskit.algorithms.optimizers.DIRECT_L.optimize "qiskit.algorithms.optimizers.DIRECT_L.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.DIRECT_L.print_options#qiskit.algorithms.optimizers.DIRECT_L.print_options "qiskit.algorithms.optimizers.DIRECT_L.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.DIRECT_L.set_max_evals_grouped#qiskit.algorithms.optimizers.DIRECT_L.set_max_evals_grouped "qiskit.algorithms.optimizers.DIRECT_L.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.DIRECT_L.set_options#qiskit.algorithms.optimizers.DIRECT_L.set_options "qiskit.algorithms.optimizers.DIRECT_L.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.DIRECT_L.wrap_function#qiskit.algorithms.optimizers.DIRECT_L.wrap_function "qiskit.algorithms.optimizers.DIRECT_L.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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



### settings
