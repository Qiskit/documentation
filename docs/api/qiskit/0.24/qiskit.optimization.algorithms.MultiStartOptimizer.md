<span id="qiskit-optimization-algorithms-multistartoptimizer" />

# qiskit.optimization.algorithms.MultiStartOptimizer

<span id="undefined" />

`MultiStartOptimizer(trials=1, clip=100.0)`

An abstract class that implements multi start optimization and should be sub-classed by other optimizers.

Constructs an instance of this optimizer.

**Parameters**

*   **trials** (`int`) – The number of trials for multi-start method. The first trial is solved with the initial guess of zero. If more than one trial is specified then initial guesses are uniformly drawn from `[lowerbound, upperbound]` with potential clipping.
*   **clip** (`float`) – Clipping parameter for the initial guesses in the multi-start method. If a variable is unbounded then the lower bound and/or upper bound are replaced with the `-clip` or `clip` values correspondingly for the initial guesses.

<span id="undefined" />

`__init__(trials=1, clip=100.0)`

Constructs an instance of this optimizer.

**Parameters**

*   **trials** (`int`) – The number of trials for multi-start method. The first trial is solved with the initial guess of zero. If more than one trial is specified then initial guesses are uniformly drawn from `[lowerbound, upperbound]` with potential clipping.
*   **clip** (`float`) – Clipping parameter for the initial guesses in the multi-start method. If a variable is unbounded then the lower bound and/or upper bound are replaced with the `-clip` or `clip` values correspondingly for the initial guesses.

## Methods

|                                                                                                                                                                                          |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.algorithms.MultiStartOptimizer.__init__ "qiskit.optimization.algorithms.MultiStartOptimizer.__init__")(\[trials, clip])                                | Constructs an instance of this optimizer.                                                 |
| [`get_compatibility_msg`](#qiskit.optimization.algorithms.MultiStartOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.MultiStartOptimizer.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_compatible`](#qiskit.optimization.algorithms.MultiStartOptimizer.is_compatible "qiskit.optimization.algorithms.MultiStartOptimizer.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`multi_start_solve`](#qiskit.optimization.algorithms.MultiStartOptimizer.multi_start_solve "qiskit.optimization.algorithms.MultiStartOptimizer.multi_start_solve")(minimize, problem)   | Applies a multi start method given a local optimizer.                                     |
| [`solve`](#qiskit.optimization.algorithms.MultiStartOptimizer.solve "qiskit.optimization.algorithms.MultiStartOptimizer.solve")(problem)                                                 | Tries to solves the given problem using the optimizer.                                    |

## Attributes

|                                                                                                                                    |                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`clip`](#qiskit.optimization.algorithms.MultiStartOptimizer.clip "qiskit.optimization.algorithms.MultiStartOptimizer.clip")       | Returns the clip value for this optimizer.       |
| [`trials`](#qiskit.optimization.algorithms.MultiStartOptimizer.trials "qiskit.optimization.algorithms.MultiStartOptimizer.trials") | Returns the number of trials for this optimizer. |

<span id="undefined" />

`property clip`

Returns the clip value for this optimizer.

**Return type**

`float`

**Returns**

The clip value.

<span id="undefined" />

`abstract get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns the incompatibility message. If the message is empty no issues were found.

<span id="undefined" />

`is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

<span id="undefined" />

`multi_start_solve(minimize, problem)`

Applies a multi start method given a local optimizer.

**Parameters**

*   **minimize** (`Callable`\[\[`array`], `Tuple`\[`array`, `Any`]]) – A callable object that minimizes the problem specified
*   **problem** (`QuadraticProgram`) – A problem to solve

**Return type**

`OptimizationResult`

**Returns**

The result of the multi start algorithm applied to the problem.

<span id="undefined" />

`abstract solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.

<span id="undefined" />

`property trials`

Returns the number of trials for this optimizer.

**Return type**

`int`

**Returns**

The number of trials.
