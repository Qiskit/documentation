# ISRES

<span id="undefined" />

`ISRES(max_evals=1000)`

Bases: `qiskit.algorithms.optimizers.nlopts.nloptimizer.NLoptOptimizer`

Improved Stochastic Ranking Evolution Strategy optimizer.

Improved Stochastic Ranking Evolution Strategy (ISRES) is an algorithm for non-linearly constrained global optimization. It has heuristics to escape local optima, even though convergence to a global optima is not guaranteed. The evolution strategy is based on a combination of a mutation rule and differential variation. The fitness ranking is simply via the objective function for problems without nonlinear constraints. When nonlinear constraints are included, the [stochastic ranking proposed by Runarsson and Yao](https://notendur.hi.is/tpr/software/sres/Tec311r.pdf) is employed. This method supports arbitrary nonlinear inequality and equality constraints, in addition to the bound constraints.

NLopt global optimizer, derivative-free. For further detail, please refer to [http://nlopt.readthedocs.io/en/latest/NLopt\_Algorithms/#isres-improved-stochastic-ranking-evolution-strategy](http://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#isres-improved-stochastic-ranking-evolution-strategy)

**Parameters**

**max\_evals** (`int`) – Maximum allowed number of function evaluations.

**Raises**

**MissingOptionalLibraryError** – NLopt library not installed.

## Methods

|                                                                                                                                                                                                         |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`get_nlopt_optimizer`](qiskit.algorithms.optimizers.ISRES.get_nlopt_optimizer#qiskit.algorithms.optimizers.ISRES.get_nlopt_optimizer "qiskit.algorithms.optimizers.ISRES.get_nlopt_optimizer")         | Return NLopt optimizer type                                                                               |
| [`get_support_level`](qiskit.algorithms.optimizers.ISRES.get_support_level#qiskit.algorithms.optimizers.ISRES.get_support_level "qiskit.algorithms.optimizers.ISRES.get_support_level")                 | return support level dictionary                                                                           |
| [`gradient_num_diff`](qiskit.algorithms.optimizers.ISRES.gradient_num_diff#qiskit.algorithms.optimizers.ISRES.gradient_num_diff "qiskit.algorithms.optimizers.ISRES.gradient_num_diff")                 | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`minimize`](qiskit.algorithms.optimizers.ISRES.minimize#qiskit.algorithms.optimizers.ISRES.minimize "qiskit.algorithms.optimizers.ISRES.minimize")                                                     | Minimize the scalar function.                                                                             |
| [`optimize`](qiskit.algorithms.optimizers.ISRES.optimize#qiskit.algorithms.optimizers.ISRES.optimize "qiskit.algorithms.optimizers.ISRES.optimize")                                                     | Perform optimization.                                                                                     |
| [`print_options`](qiskit.algorithms.optimizers.ISRES.print_options#qiskit.algorithms.optimizers.ISRES.print_options "qiskit.algorithms.optimizers.ISRES.print_options")                                 | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](qiskit.algorithms.optimizers.ISRES.set_max_evals_grouped#qiskit.algorithms.optimizers.ISRES.set_max_evals_grouped "qiskit.algorithms.optimizers.ISRES.set_max_evals_grouped") | Set max evals grouped                                                                                     |
| [`set_options`](qiskit.algorithms.optimizers.ISRES.set_options#qiskit.algorithms.optimizers.ISRES.set_options "qiskit.algorithms.optimizers.ISRES.set_options")                                         | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](qiskit.algorithms.optimizers.ISRES.wrap_function#qiskit.algorithms.optimizers.ISRES.wrap_function "qiskit.algorithms.optimizers.ISRES.wrap_function")                                 | Wrap the function to implicitly inject the args at the call of the function.                              |

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
