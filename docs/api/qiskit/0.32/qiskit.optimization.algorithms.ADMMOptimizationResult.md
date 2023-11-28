# ADMMOptimizationResult

<span id="undefined" />

`ADMMOptimizationResult(x, fval, variables, state, status)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationResult`

ADMMOptimization Result.

**Parameters**

*   **x** (`ndarray`) – the optimal value found by ADMM.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **state** (`ADMMState`) – the internal computation state of ADMM.
*   **status** (`OptimizationResultStatus`) – Termination status of an optimization algorithm

## Attributes

<span id="undefined" />

### fval

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

### raw\_results

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="undefined" />

### samples

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

<span id="undefined" />

### state

returns state

**Return type**

`ADMMState`

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
