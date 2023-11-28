# IntermediateResult

<span id="undefined" />

`IntermediateResult(value)`

Bases: `enum.Enum`

Defines whether the intermediate results of [`RecursiveMinimumEigenOptimizer`](qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer") at each iteration should be stored and returned to the end user.

## Attributes

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
