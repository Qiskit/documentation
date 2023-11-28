# MinimumEigenOptimizationResult

<span id="undefined" />

`MinimumEigenOptimizationResult(x, fval, variables, status, samples=None, min_eigen_solver_result=None, raw_samples=None)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationResult`

Minimum Eigen Optimizer Result.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found by `MinimumEigensolver`.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **min\_eigen\_solver\_result** (`Optional`\[`MinimumEigensolverResult`]) – the result obtained from the underlying algorithm.
*   **samples** (`Optional`\[`List`\[`SolutionSample`]]) – the x value, the objective function value of the original problem, the probability, and the status of sampling.
*   **raw\_samples** (`Optional`\[`List`\[`SolutionSample`]]) – the x values of the QUBO, the objective function value of the QUBO, and the probability of sampling.

## Methods

|                                                                                                                                                                                                                                                                      |                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`get_correlations`](qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations#qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations "qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations") | Get \<Zi x Zj> correlation matrix from samples. |

## Attributes

<span id="undefined" />

### fval

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

### min\_eigen\_solver\_result

Returns a result object obtained from the instance of `MinimumEigensolver`.

**Return type**

`MinimumEigensolverResult`

<span id="undefined" />

### raw\_results

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="undefined" />

### raw\_samples

Returns the list of raw solution samples of `MinimumEigensolver`.

**Return type**

`Optional`\[`List`\[`SolutionSample`]]

**Returns**

The list of raw solution samples of `MinimumEigensolver`.

<span id="undefined" />

### samples

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

<span id="undefined" />

### status

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

<span id="undefined" />

### variable\_names

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

<span id="undefined" />

### variables

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

<span id="undefined" />

### variables\_dict

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

<span id="undefined" />

### x

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.
