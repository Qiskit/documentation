# IntermediateResult



`IntermediateResult(value)`

Bases: `enum.Enum`

Defines whether the intermediate results of [`RecursiveMinimumEigenOptimizer`](qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer#qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer "qiskit.optimization.algorithms.RecursiveMinimumEigenOptimizer") at each iteration should be stored and returned to the end user.

## Attributes



### ALL\_ITERATIONS

`= 2`

All intermediate results are stored.



### LAST\_ITERATION

`= 1`

Only results from the last iteration are stored.



### NO\_ITERATIONS

`= 0`

No intermediate results are stored.
