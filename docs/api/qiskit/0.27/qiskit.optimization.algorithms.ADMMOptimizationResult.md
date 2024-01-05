---
title: ADMMOptimizationResult
description: API reference for qiskit.optimization.algorithms.ADMMOptimizationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.ADMMOptimizationResult
---

# qiskit.optimization.algorithms.ADMMOptimizationResult

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult" />

`ADMMOptimizationResult(x, fval, variables, state, status)`

ADMMOptimization Result.

**Parameters**

*   **x** (`ndarray`) – the optimal value found by ADMM.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **state** (`ADMMState`) – the internal computation state of ADMM.
*   **status** (`OptimizationResultStatus`) – Termination status of an optimization algorithm

### \_\_init\_\_

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.__init__" />

`__init__(x, fval, variables, state, status)`

**Parameters**

*   **x** (`ndarray`) – the optimal value found by ADMM.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **state** (`ADMMState`) – the internal computation state of ADMM.
*   **status** (`OptimizationResultStatus`) – Termination status of an optimization algorithm

## Methods

## Attributes

### fval

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.fval" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

### raw\_results

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.raw_results" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

### samples

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.samples" />

`property samples`

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

### state

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.state" />

`property state`

returns state

**Return type**

`ADMMState`

### status

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.status" />

`property status`

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

### variable\_names

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.variable_names" />

`property variable_names`

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

### variables

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.variables" />

`property variables`

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

### variables\_dict

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.variables_dict" />

`property variables_dict`

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

### x

<span id="qiskit.optimization.algorithms.ADMMOptimizationResult.x" />

`property x`

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.

