---
title: SlsqpOptimizationResult
description: API reference for qiskit.optimization.algorithms.SlsqpOptimizationResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.SlsqpOptimizationResult
---

# qiskit.optimization.algorithms.SlsqpOptimizationResult

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult" />

`SlsqpOptimizationResult(x, fval, variables, status, fx=None, its=None, imode=None, smode=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/algorithms/slsqp_optimizer.py "view source code")

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

### \_\_init\_\_

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.__init__" />

`__init__(x, fval, variables, status, fx=None, its=None, imode=None, smode=None)`

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

## Methods

|                                                                                                                                                                                        |                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.__init__ "qiskit.optimization.algorithms.SlsqpOptimizationResult.__init__")(x, fval, variables, status\[, fx, …]) | Constructs a result object with properties specific to SLSQP. |

## Attributes

|                                                                                                                                                                    |                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`fval`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.fval "qiskit.optimization.algorithms.SlsqpOptimizationResult.fval")                               | Returns the optimal function value.                                                     |
| [`fx`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.fx "qiskit.optimization.algorithms.SlsqpOptimizationResult.fx")                                     | Returns the final value of the objective function being actually optimized.             |
| [`imode`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.imode "qiskit.optimization.algorithms.SlsqpOptimizationResult.imode")                            | Returns the exit mode from the optimizer.                                               |
| [`its`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.its "qiskit.optimization.algorithms.SlsqpOptimizationResult.its")                                  | Returns the number of iterations                                                        |
| [`raw_results`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.raw_results "qiskit.optimization.algorithms.SlsqpOptimizationResult.raw_results")          | Return the original results object from the optimization algorithm.                     |
| [`samples`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.samples "qiskit.optimization.algorithms.SlsqpOptimizationResult.samples")                      | Returns the list of solution samples                                                    |
| [`smode`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.smode "qiskit.optimization.algorithms.SlsqpOptimizationResult.smode")                            | Returns message describing the exit mode from the optimizer.                            |
| [`status`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.status "qiskit.optimization.algorithms.SlsqpOptimizationResult.status")                         | Returns the termination status of the optimization algorithm.                           |
| [`variable_names`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.variable_names "qiskit.optimization.algorithms.SlsqpOptimizationResult.variable_names") | Returns the list of variable names of the optimization problem.                         |
| [`variables`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.variables "qiskit.optimization.algorithms.SlsqpOptimizationResult.variables")                | Returns the list of variables of the optimization problem.                              |
| [`variables_dict`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.variables_dict "qiskit.optimization.algorithms.SlsqpOptimizationResult.variables_dict") | Returns the optimal value as a dictionary of the variable name and corresponding value. |
| [`x`](#qiskit.optimization.algorithms.SlsqpOptimizationResult.x "qiskit.optimization.algorithms.SlsqpOptimizationResult.x")                                        | Returns the optimal value found in the optimization or None in case of FAILURE.         |

### fval

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.fval" />

`property fval`

Returns the optimal function value.

**Return type**

`float`

**Returns**

The function value corresponding to the optimal value found in the optimization.

### fx

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.fx" />

`property fx`

Returns the final value of the objective function being actually optimized.

**Return type**

`Optional`\[`ndarray`]

### imode

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.imode" />

`property imode`

Returns the exit mode from the optimizer.

**Return type**

`Optional`\[`int`]

### its

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.its" />

`property its`

Returns the number of iterations

**Return type**

`Optional`\[`int`]

### raw\_results

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.raw_results" />

`property raw_results`

Return the original results object from the optimization algorithm.

Currently a dump for any leftovers.

**Return type**

`Any`

**Returns**

Additional result information of the optimization algorithm.

### samples

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.samples" />

`property samples`

Returns the list of solution samples

**Return type**

`List`\[`SolutionSample`]

**Returns**

The list of solution samples.

### smode

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.smode" />

`property smode`

Returns message describing the exit mode from the optimizer.

**Return type**

`Optional`\[`str`]

### status

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.status" />

`property status`

Returns the termination status of the optimization algorithm.

**Return type**

`OptimizationResultStatus`

**Returns**

The termination status of the algorithm.

### variable\_names

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.variable_names" />

`property variable_names`

Returns the list of variable names of the optimization problem.

**Return type**

`List`\[`str`]

**Returns**

The list of variable names of the optimization problem.

### variables

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.variables" />

`property variables`

Returns the list of variables of the optimization problem.

**Return type**

`List`\[`Variable`]

**Returns**

The list of variables.

### variables\_dict

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.variables_dict" />

`property variables_dict`

Returns the optimal value as a dictionary of the variable name and corresponding value.

**Return type**

`Dict`\[`str`, `float`]

**Returns**

The optimal value as a dictionary of the variable name and corresponding value.

### x

<span id="qiskit.optimization.algorithms.SlsqpOptimizationResult.x" />

`property x`

Returns the optimal value found in the optimization or None in case of FAILURE.

**Return type**

`Optional`\[`ndarray`]

**Returns**

The optimal value found in the optimization.

