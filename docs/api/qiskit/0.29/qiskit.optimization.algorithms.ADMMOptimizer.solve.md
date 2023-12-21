# qiskit.optimization.algorithms.ADMMOptimizer.solve

`ADMMOptimizer.solve(problem)`

Tries to solves the given problem using ADMM algorithm.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved.

**Return type**

`ADMMOptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.
