# qiskit.optimization.algorithms.IntermediateResult

<span id="undefined" />

`IntermediateResult(value)`

Defines whether the intermediate results of [`RecursiveMinimumEigenOptimizer`](qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer") at each iteration should be stored and returned to the end user.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Attributes

|                                                                                                                                                          |                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`ALL_ITERATIONS`](#qiskit.optimization.algorithms.IntermediateResult.ALL_ITERATIONS "qiskit.optimization.algorithms.IntermediateResult.ALL_ITERATIONS") | All intermediate results are stored.             |
| [`LAST_ITERATION`](#qiskit.optimization.algorithms.IntermediateResult.LAST_ITERATION "qiskit.optimization.algorithms.IntermediateResult.LAST_ITERATION") | Only results from the last iteration are stored. |
| [`NO_ITERATIONS`](#qiskit.optimization.algorithms.IntermediateResult.NO_ITERATIONS "qiskit.optimization.algorithms.IntermediateResult.NO_ITERATIONS")    | No intermediate results are stored.              |

<span id="undefined" />

### ALL\_ITERATIONS

`= 2`

All intermediate results are stored.

<span id="undefined" />

### LAST\_ITERATION

`= 1`

Only results from the last iteration are stored.

<span id="undefined" />

### NO\_ITERATIONS

`= 0`

No intermediate results are stored.
