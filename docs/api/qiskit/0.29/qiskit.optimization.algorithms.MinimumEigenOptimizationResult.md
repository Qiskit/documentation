---
title: MinimumEigenOptimizationResult
description: API reference for qiskit.optimization.algorithms.MinimumEigenOptimizationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.MinimumEigenOptimizationResult
---

# MinimumEigenOptimizationResult

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult" />

`MinimumEigenOptimizationResult(x, fval, variables, status, samples=None, min_eigen_solver_result=None, raw_samples=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/algorithms/minimum_eigen_optimizer.py "view source code")

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

### get\_correlations

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations" />

`MinimumEigenOptimizationResult.get_correlations()`

Get \<Zi x Zj> correlation matrix from samples.

**Return type**

`ndarray`

## Attributes

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.fval" />

### fval

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.min_eigen_solver_result" />

### min\_eigen\_solver\_result

Returns a result object obtained from the instance of `MinimumEigensolver`.

**Return type**

`MinimumEigensolverResult`

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_results" />

### raw\_results

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_samples" />

### raw\_samples

Returns the list of raw solution samples of `MinimumEigensolver`.

**Return type**

`Optional`\[`List`\[`SolutionSample`]]

**Returns**

The list of raw solution samples of `MinimumEigensolver`.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.samples" />

### samples

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.status" />

### status

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variable_names" />

### variable\_names

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables" />

### variables

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables_dict" />

### variables\_dict

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.x" />

### x

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.

