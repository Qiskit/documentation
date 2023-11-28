# RecursiveMinimumEigenOptimizationResult

<span id="undefined" />

`RecursiveMinimumEigenOptimizationResult(x, fval, variables, status, replacements, history)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationResult`

Recursive Eigen Optimizer Result.

Constructs an instance of the result class.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found in the optimization.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **replacements** (`Dict`\[`str`, `Tuple`\[`str`, `int`]]) – a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.
*   **history** (`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]) – a tuple containing intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

## Attributes

<span id="undefined" />

### fval

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

### history

Returns intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

**Return type**

`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]

<span id="undefined" />

### raw\_results

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="undefined" />

### replacements

Returns a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.

**Return type**

`Dict`\[`str`, `Tuple`\[`str`, `int`]]

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
