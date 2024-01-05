---
title: MinimumEigenOptimizationResult
description: API reference for qiskit.optimization.algorithms.MinimumEigenOptimizationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.MinimumEigenOptimizationResult
---

<span id="qiskit-optimization-algorithms-minimumeigenoptimizationresult" />

# qiskit.optimization.algorithms.MinimumEigenOptimizationResult

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult" />

`MinimumEigenOptimizationResult(x, fval, variables, status, samples, min_eigen_solver_result=None)`

Minimum Eigen Optimizer Result.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found by `MinimumEigensolver`.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **samples** (`List`\[`Tuple`\[`str`, `float`, `float`]]) – the basis state as bitstring, the QUBO value, and the probability of sampling.
*   **min\_eigen\_solver\_result** (`Optional`\[`MinimumEigensolverResult`]) – the result obtained from the underlying algorithm.

### \_\_init\_\_

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.__init__" />

`__init__(x, fval, variables, status, samples, min_eigen_solver_result=None)`

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found by `MinimumEigensolver`.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **samples** (`List`\[`Tuple`\[`str`, `float`, `float`]]) – the basis state as bitstring, the QUBO value, and the probability of sampling.
*   **min\_eigen\_solver\_result** (`Optional`\[`MinimumEigensolverResult`]) – the result obtained from the underlying algorithm.

## Methods

## Attributes

### fval

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.fval" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

### get\_correlations

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.get_correlations" />

`get_correlations()`

Get \<Zi x Zj> correlation matrix from samples.

**Return type**

`ndarray`

### min\_eigen\_solver\_result

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.min_eigen_solver_result" />

`property min_eigen_solver_result`

Returns a result object obtained from the instance of `MinimumEigensolver`.

**Return type**

`MinimumEigensolverResult`

### raw\_results

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.raw_results" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

### samples

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.samples" />

`property samples`

Returns samples.

**Return type**

`List`\[`Tuple`\[`str`, `float`, `float`]]

### status

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.status" />

`property status`

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

### variable\_names

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variable_names" />

`property variable_names`

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

### variables

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables" />

`property variables`

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

### variables\_dict

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.variables_dict" />

`property variables_dict`

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

### x

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizationResult.x" />

`property x`

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.

