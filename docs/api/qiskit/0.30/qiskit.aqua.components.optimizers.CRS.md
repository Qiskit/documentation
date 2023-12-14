# CRS



`CRS(max_evals=1000)`

Bases: `qiskit.aqua.components.optimizers.nlopts.nloptimizer.NLoptOptimizer`

Controlled Random Search (CRS) with local mutation optimizer.

Controlled Random Search (CRS) with local mutation is part of the family of the CRS optimizers. The CRS optimizers start with a random population of points, and randomly evolve these points by heuristic rules. In the case of CRS with local mutation, the evolution is a randomized version of the [`NELDER_MEAD`](qiskit.aqua.components.optimizers.NELDER_MEAD#qiskit.aqua.components.optimizers.NELDER_MEAD "qiskit.aqua.components.optimizers.NELDER_MEAD") local optimizer.

NLopt global optimizer, derivative-free. For further detail, please refer to [https://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#controlled-random-search-crs-with-local-mutation](https://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#controlled-random-search-crs-with-local-mutation)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – NLopt library not installed.

## Methods

|                                                                                                                                                                                                                  |                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_nlopt_optimizer`](qiskit.aqua.components.optimizers.CRS.get_nlopt_optimizer#qiskit.aqua.components.optimizers.CRS.get_nlopt_optimizer "qiskit.aqua.components.optimizers.CRS.get_nlopt_optimizer")         | Return NLopt optimizer type                                                                               |
| [`get_support_level`](qiskit.aqua.components.optimizers.CRS.get_support_level#qiskit.aqua.components.optimizers.CRS.get_support_level "qiskit.aqua.components.optimizers.CRS.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.aqua.components.optimizers.CRS.gradient_num_diff#qiskit.aqua.components.optimizers.CRS.gradient_num_diff "qiskit.aqua.components.optimizers.CRS.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](qiskit.aqua.components.optimizers.CRS.optimize#qiskit.aqua.components.optimizers.CRS.optimize "qiskit.aqua.components.optimizers.CRS.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.aqua.components.optimizers.CRS.print_options#qiskit.aqua.components.optimizers.CRS.print_options "qiskit.aqua.components.optimizers.CRS.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.aqua.components.optimizers.CRS.set_max_evals_grouped#qiskit.aqua.components.optimizers.CRS.set_max_evals_grouped "qiskit.aqua.components.optimizers.CRS.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.aqua.components.optimizers.CRS.set_options#qiskit.aqua.components.optimizers.CRS.set_options "qiskit.aqua.components.optimizers.CRS.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.aqua.components.optimizers.CRS.wrap_function#qiskit.aqua.components.optimizers.CRS.wrap_function "qiskit.aqua.components.optimizers.CRS.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
