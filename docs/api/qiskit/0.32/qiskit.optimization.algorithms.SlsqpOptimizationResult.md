# SlsqpOptimizationResult

<span id="undefined" />

`SlsqpOptimizationResult(x, fval, variables, status, fx=None, its=None, imode=None, smode=None)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationResult`

SLSQP optimization result, defines additional properties that may be returned by the optimizer.

Constructs a result object with properties specific to SLSQP.

**Parameters**

*   **x** (`Union`\[`List`\[`float`], `ndarray`]) – The solution of the problem
*   **fval** (`float`) – The value of the objective function of the solution
*   **variables** (`List`\[`Variable`]) – A list of variables defined in the problem
*   **fx** (`Optional`\[`ndarray`]) – The value of the objective function being optimized, may be different from `fval`
*   **its** (`Optional`\[`int`]) – The number of iterations.
*   **imode** (`Optional`\[`int`]) – The exit mode from the optimizer (see the documentation of `scipy.optimize.fmin_slsqp`).
*   **smode** (`Optional`\[`str`]) – Message describing the exit mode from the optimizer.
*   **status** (`OptimizationResultStatus`) – the termination status of the optimization algorithm.

## Attributes

<span id="undefined" />

### fval

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

<span id="undefined" />

### fx

Returns the final value of the objective function being actually optimized.

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### imode

Returns the exit mode from the optimizer.

**Return type**

`Optional`\[`int`]

<span id="undefined" />

### its

Returns the number of iterations

**Return type**

`Optional`\[`int`]

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

### smode

Returns message describing the exit mode from the optimizer.

**Return type**

`Optional`\[`str`]

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
