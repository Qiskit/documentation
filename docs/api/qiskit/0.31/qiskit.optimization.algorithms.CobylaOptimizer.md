# CobylaOptimizer

<span id="undefined" />

`CobylaOptimizer(rhobeg=1.0, rhoend=0.0001, maxfun=1000, disp=None, catol=0.0002, trials=1, clip=100.0)`

Bases: `qiskit.optimization.algorithms.multistart_optimizer.MultiStartOptimizer`

The SciPy COBYLA optimizer wrapped as an Qiskit [`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm#qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.OptimizationAlgorithm").

This class provides a wrapper for `scipy.optimize.fmin_cobyla` ([https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.optimize.fmin\_cobyla.html](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.optimize.fmin_cobyla.html)) to be used within the optimization module. The arguments for `fmin_cobyla` are passed via the constructor.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.algorithms import CobylaOptimizer
>>> problem = QuadraticProgram()
>>> # specify problem here
>>> optimizer = CobylaOptimizer()
>>> result = optimizer.solve(problem)
```

Initializes the CobylaOptimizer.

This initializer takes the algorithmic parameters of COBYLA and stores them for later use of `fmin_cobyla` when [`solve()`](qiskit.optimization.algorithms.CobylaOptimizer.solve#qiskit.optimization.algorithms.CobylaOptimizer.solve "qiskit.optimization.algorithms.CobylaOptimizer.solve") is invoked. This optimizer can be applied to find a (local) optimum for problems consisting of only continuous variables.

**Parameters**

*   **rhobeg** (`float`) – Reasonable initial changes to the variables.
*   **rhoend** (`float`) – Final accuracy in the optimization (not precisely guaranteed). This is a lower bound on the size of the trust region.
*   **disp** (`Optional`\[`int`]) – Controls the frequency of output; 0 implies no output. Feasible values are \{0, 1, 2, 3}.
*   **maxfun** (`int`) – Maximum number of function evaluations.
*   **catol** (`float`) – Absolute tolerance for constraint violations.
*   **trials** (`int`) – The number of trials for multi-start method. The first trial is solved with the initial guess of zero. If more than one trial is specified then initial guesses are uniformly drawn from `[lowerbound, upperbound]` with potential clipping.
*   **clip** (`float`) – Clipping parameter for the initial guesses in the multi-start method. If a variable is unbounded then the lower bound and/or upper bound are replaced with the `-clip` or `clip` values correspondingly for the initial guesses.

## Methods

|                                                                                                                                                                                                                                             |                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.CobylaOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.CobylaOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.CobylaOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with this optimizer.                         |
| [`is_compatible`](qiskit.optimization.algorithms.CobylaOptimizer.is_compatible#qiskit.optimization.algorithms.CobylaOptimizer.is_compatible "qiskit.optimization.algorithms.CobylaOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`multi_start_solve`](qiskit.optimization.algorithms.CobylaOptimizer.multi_start_solve#qiskit.optimization.algorithms.CobylaOptimizer.multi_start_solve "qiskit.optimization.algorithms.CobylaOptimizer.multi_start_solve")                 | Applies a multi start method given a local optimizer.                                     |
| [`solve`](qiskit.optimization.algorithms.CobylaOptimizer.solve#qiskit.optimization.algorithms.CobylaOptimizer.solve "qiskit.optimization.algorithms.CobylaOptimizer.solve")                                                                 | Tries to solves the given problem using the optimizer.                                    |

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
