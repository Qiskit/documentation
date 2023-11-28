# qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult

<span id="undefined" />

`RecursiveMinimumEigenOptimizationResult(x, fval, variables, status, replacements, history)`

Recursive Eigen Optimizer Result.

Constructs an instance of the result class.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found in the optimization.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **replacements** (`Dict`\[`str`, `Tuple`\[`str`, `int`]]) – a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.
*   **history** (`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]) – a tuple containing intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

<span id="undefined" />

`__init__(x, fval, variables, status, replacements, history)`

Constructs an instance of the result class.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – the optimal value found in the optimization.
*   **fval** (`float`) – the optimal function value.
*   **variables** (`List`\[`Variable`]) – the list of variables of the optimization problem.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.
*   **replacements** (`Dict`\[`str`, `Tuple`\[`str`, `int`]]) – a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.
*   **history** (`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]) – a tuple containing intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

## Methods

|                                                                                                                                                                                                                 |                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.__init__ "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.__init__")(x, fval, variables, status, …) | Constructs an instance of the result class. |

## Attributes

|                                                                                                                                                                                                    |                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`fval`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.fval "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.fval")                               | Returns the optimal function value.                                                     |
| [`history`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.history "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.history")                      | Returns intermediate results.                                                           |
| [`raw_results`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.raw_results "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.raw_results")          | Return the original results object from the optimization algorithm.                     |
| [`replacements`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.replacements "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.replacements")       | Returns a dictionary of substituted variables.                                          |
| [`samples`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.samples "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.samples")                      | Returns the list of solution samples                                                    |
| [`status`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.status "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.status")                         | Returns the termination status of the optimization algorithm.                           |
| [`variable_names`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variable_names "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variable_names") | Returns the list of variable names of the optimization problem.                         |
| [`variables`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variables "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variables")                | Returns the list of variables of the optimization problem.                              |
| [`variables_dict`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variables_dict "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.variables_dict") | Returns the optimal value as a dictionary of the variable name and corresponding value. |
| [`x`](#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.x "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizationResult.x")                                        | Returns the optimal value found in the optimization or None in case of FAILURE.         |

<span id="undefined" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

`property history`

Returns intermediate results. The first element is a list of `MinimumEigenOptimizerResult` obtained by invoking [`MinimumEigenOptimizer`](qiskit.optimization.algorithms.MinimumEigenOptimizer#qiskit.optimization.algorithms.MinimumEigenOptimizer "qiskit.optimization.algorithms.MinimumEigenOptimizer") iteratively, the second element is an instance of `OptimizationResult` obtained at the last step via min\_num\_vars\_optimizer.

**Return type**

`Tuple`\[`List`\[`MinimumEigenOptimizationResult`], `OptimizationResult`]

<span id="undefined" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

<span id="undefined" />

`property replacements`

Returns a dictionary of substituted variables. Key is a variable being substituted, value is a tuple of substituting variable and a weight, either 1 or -1.

**Return type**

`Dict`\[`str`, `Tuple`\[`str`, `int`]]

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
