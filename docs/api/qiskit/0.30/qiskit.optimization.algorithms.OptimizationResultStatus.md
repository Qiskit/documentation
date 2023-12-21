# OptimizationResultStatus

`OptimizationResultStatus(value)`

Bases: `enum.Enum`

Termination status of an optimization algorithm.

## Attributes

### FAILURE

`= 1`

the optimization algorithm ended in a failure.

### INFEASIBLE

`= 2`

the optimization algorithm obtained an infeasible solution.

### SUCCESS

`= 0`

the optimization algorithm succeeded to find an optimal solution.
