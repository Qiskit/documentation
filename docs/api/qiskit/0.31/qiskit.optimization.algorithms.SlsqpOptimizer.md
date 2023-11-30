# SlsqpOptimizer

<span id="undefined" />

`SlsqpOptimizer(iter=100, acc=1e-06, iprint=0, trials=1, clip=100.0, full_output=False)`

Bases: `qiskit.optimization.algorithms.multistart_optimizer.MultiStartOptimizer`

The SciPy SLSQP optimizer wrapped as an Qiskit [`OptimizationAlgorithm`](qiskit.optimization.algorithms.OptimizationAlgorithm#qiskit.optimization.algorithms.OptimizationAlgorithm "qiskit.optimization.algorithms.OptimizationAlgorithm").

This class provides a wrapper for `scipy.optimize.fmin_slsqp` ([https://docs.scipy.org/doc/scipy-0.13.0/reference/generated/scipy.optimize.fmin\_slsqp.html](https://docs.scipy.org/doc/scipy-0.13.0/reference/generated/scipy.optimize.fmin_slsqp.html)) to be used within the optimization module. The arguments for `fmin_slsqp` are passed via the constructor.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.algorithms import SlsqpOptimizer
>>> problem = QuadraticProgram()
>>> # specify problem here
>>> x = problem.continuous_var(name="x")
>>> y = problem.continuous_var(name="y")
>>> problem.maximize(linear=[2, 0], quadratic=[[-1, 2], [0, -2]])
>>> optimizer = SlsqpOptimizer()
>>> result = optimizer.solve(problem)
```

Initializes the SlsqpOptimizer.

This initializer takes the algorithmic parameters of SLSQP and stores them for later use of `fmin_slsqp` when [`solve()`](qiskit.optimization.algorithms.SlsqpOptimizer.solve#qiskit.optimization.algorithms.SlsqpOptimizer.solve "qiskit.optimization.algorithms.SlsqpOptimizer.solve") is invoked. This optimizer can be applied to find a (local) optimum for problems consisting of only continuous variables.

**Parameters**

*   **iter** (`int`) – The maximum number of iterations.

*   **acc** (`float`) – Requested accuracy.

*   **iprint** (`int`) –

    The verbosity of fmin\_slsqp :

    *   iprint \<= 0 : Silent operation
    *   iprint == 1 : Print summary upon completion (default)
    *   iprint >= 2 : Print status of each iterate and summary

*   **trials** (`int`) – The number of trials for multi-start method. The first trial is solved with the initial guess of zero. If more than one trial is specified then initial guesses are uniformly drawn from `[lowerbound, upperbound]` with potential clipping.

*   **clip** (`float`) – Clipping parameter for the initial guesses in the multi-start method. If a variable is unbounded then the lower bound and/or upper bound are replaced with the `-clip` or `clip` values correspondingly for the initial guesses.

*   **full\_output** (`bool`) – If `False`, return only the minimizer of func (default). Otherwise, output final objective function and summary information.

## Methods

|                                                                                                                                                                                                                                          |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`get_compatibility_msg`](qiskit.optimization.algorithms.SlsqpOptimizer.get_compatibility_msg#qiskit.optimization.algorithms.SlsqpOptimizer.get_compatibility_msg "qiskit.optimization.algorithms.SlsqpOptimizer.get_compatibility_msg") | Checks whether a given problem can be solved with this optimizer.                         |
| [`is_compatible`](qiskit.optimization.algorithms.SlsqpOptimizer.is_compatible#qiskit.optimization.algorithms.SlsqpOptimizer.is_compatible "qiskit.optimization.algorithms.SlsqpOptimizer.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |
| [`multi_start_solve`](qiskit.optimization.algorithms.SlsqpOptimizer.multi_start_solve#qiskit.optimization.algorithms.SlsqpOptimizer.multi_start_solve "qiskit.optimization.algorithms.SlsqpOptimizer.multi_start_solve")                 | Applies a multi start method given a local optimizer.                                     |
| [`solve`](qiskit.optimization.algorithms.SlsqpOptimizer.solve#qiskit.optimization.algorithms.SlsqpOptimizer.solve "qiskit.optimization.algorithms.SlsqpOptimizer.solve")                                                                 | Tries to solves the given problem using the optimizer.                                    |

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
