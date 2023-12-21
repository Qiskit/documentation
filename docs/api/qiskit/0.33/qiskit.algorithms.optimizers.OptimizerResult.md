# OptimizerResult

`OptimizerResult`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

The result of an optimization routine.

## Methods

|                                                                                                                                                                               |                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.optimizers.OptimizerResult.combine#qiskit.algorithms.optimizers.OptimizerResult.combine "qiskit.algorithms.optimizers.OptimizerResult.combine") | Any property from the argument that exists in the receiver is updated. |

## Attributes

### fun

The final value of the minimization.

**Return type**

`Optional`\[`float`]

### jac

The final gradient of the minimization.

**Return type**

`Union`\[`float`, `ndarray`, `None`]

### nfev

The total number of function evaluations.

**Return type**

`Optional`\[`int`]

### nit

The total number of iterations.

**Return type**

`Optional`\[`int`]

### njev

The total number of gradient evaluations.

**Return type**

`Optional`\[`int`]

### x

The final point of the minimization.

**Return type**

`Union`\[`float`, `ndarray`, `None`]
