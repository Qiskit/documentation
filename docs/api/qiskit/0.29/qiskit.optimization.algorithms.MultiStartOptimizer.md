# MultiStartOptimizer

<span id="undefined" />

`MultiStartOptimizer(trials=1, clip=100.0)`

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm`, `abc.ABC`

An abstract class that implements multi start optimization and should be sub-classed by other optimizers.

Constructs an instance of this optimizer.

**Parameters**

*   **trials** (`int`) – The number of trials for multi-start method. The first trial is solved with the initial guess of zero. If more than one trial is specified then initial guesses are uniformly drawn from `[lowerbound, upperbound]` with potential clipping.
*   **clip** (`float`) – Clipping parameter for the initial guesses in the multi-start method. If a variable is unbounded then the lower bound and/or upper bound are replaced with the `-clip` or `clip` values correspondingly for the initial guesses.

## Methods

|                                                                                                                                                                                                                                                         |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.MultiStartOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.MultiStartOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.MultiStartOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`is_compatible`](qiskit.optimization.algorithms.MultiStartOptimizer.is_compatible#qiskit.optimization.algorithms.MultiStartOptimizer.is_compatible "qiskit.optimization.algorithms.MultiStartOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`multi_start_solve`](qiskit.optimization.algorithms.MultiStartOptimizer.multi_start_solve#qiskit.optimization.algorithms.MultiStartOptimizer.multi_start_solve "qiskit.optimization.algorithms.MultiStartOptimizer.multi_start_solve")                 | Applies a multi start method given a local optimizer.                                     |
| [`solve`](qiskit.optimization.algorithms.MultiStartOptimizer.solve#qiskit.optimization.algorithms.MultiStartOptimizer.solve "qiskit.optimization.algorithms.MultiStartOptimizer.solve")                                                                 | Tries to solves the given problem using the optimizer.                                    |

## Attributes

<span id="undefined" />

### clip

Returns the clip value for this optimizer.

**Return type**

`float`

**Returns**

The clip value.

<span id="undefined" />

### trials

Returns the number of trials for this optimizer.

**Return type**

`int`

**Returns**

The number of trials.
