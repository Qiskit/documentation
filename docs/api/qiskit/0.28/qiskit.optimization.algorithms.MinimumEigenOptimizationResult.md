# qiskit.optimization.algorithms.MinimumEigenOptimizationResult

<span id="undefined" />

`MinimumEigenOptimizationResult(x, fval, variables, status, samples=None, min_eigen_solver_result=None, raw_samples=None)`

Minimum Eigen Optimizer Result.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found by `MinimumEigensolver`.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **min\_eigen\_solver\_result** (`Optional`\[`MinimumEigensolverResult`]) – the result obtained from the underlying algorithm.
*   **samples** (`Optional`\[`List`\[`SolutionSample`]]) – the x value, the objective function value of the original problem, the probability, and the status of sampling.
*   **raw\_samples** (`Optional`\[`List`\[`SolutionSample`]]) – the x values of the QUBO, the objective function value of the QUBO, and the probability of sampling.

<span id="undefined" />

`__init__(x, fval, variables, status, samples=None, min_eigen_solver_result=None, raw_samples=None)`

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found by `MinimumEigensolver`.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **min\_eigen\_solver\_result** (`Optional`\[`MinimumEigensolverResult`]) – the result obtained from the underlying algorithm.
*   **samples** (`Optional`\[`List`\[`SolutionSample`]]) – the x value, the objective function value of the original problem, the probability, and the status of sampling.
*   **raw\_samples** (`Optional`\[`List`\[`SolutionSample`]]) – the x values of the QUBO, the objective function value of the QUBO, and the probability of sampling.

## Methods

|                                                                                                                                                                                                  |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.__init__ "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.__init__")(x, fval, variables, status\[, …]) | **type x**`Union`\[`List`\[`float`], `ndarray`] |
| [`get_correlations`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations")()         | Get \<Zi x Zj> correlation matrix from samples. |

## Attributes

|                                                                                                                                                                                                             |                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`fval`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.fval "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.fval")                                                          | Returns the optimal function value.                                                     |
| [`min_eigen_solver_result`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.min_eigen_solver_result "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.min_eigen_solver_result") | Returns a result object obtained from the instance of `MinimumEigensolver`.             |
| [`raw_results`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_results "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_results")                                     | Return the original results object from the optimization algorithm.                     |
| [`raw_samples`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_samples "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_samples")                                     | Returns the list of raw solution samples of `MinimumEigensolver`.                       |
| [`samples`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.samples "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.samples")                                                 | Returns the list of solution samples                                                    |
| [`status`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.status "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.status")                                                    | Returns the termination status of the optimization algorithm.                           |
| [`variable_names`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variable_names "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variable_names")                            | Returns the list of variable names of the optimization problem.                         |
| [`variables`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables")                                           | Returns the list of variables of the optimization problem.                              |
| [`variables_dict`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables_dict "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables_dict")                            | Returns the optimal value as a dictionary of the variable name and corresponding value. |
| [`x`](#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.x "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.x")                                                                   | Returns the optimal value found in the optimization or None in case of FAILURE.         |

<span id="undefined" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

`get_correlations()`

Get \<Zi x Zj> correlation matrix from samples.

**Return type**

`ndarray`

<span id="undefined" />

`property min_eigen_solver_result`

Returns a result object obtained from the instance of `MinimumEigensolver`.

**Return type**

`MinimumEigensolverResult`

<span id="undefined" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="undefined" />

`property raw_samples`

Returns the list of raw solution samples of `MinimumEigensolver`.

**Return type**

`Optional`\[`List`\[`SolutionSample`]]

**Returns**

The list of raw solution samples of `MinimumEigensolver`.

<span id="undefined" />

`property samples`

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

<span id="undefined" />

`property status`

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

<span id="undefined" />

`property variable_names`

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

<span id="undefined" />

`property variables`

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

<span id="undefined" />

`property variables_dict`

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

<span id="undefined" />

`property x`

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.
