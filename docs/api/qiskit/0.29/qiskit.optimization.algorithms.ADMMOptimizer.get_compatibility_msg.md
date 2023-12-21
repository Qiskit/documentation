# qiskit.optimization.algorithms.ADMMOptimizer.get\_compatibility\_msg

`ADMMOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`Optional`\[`str`]

**Returns**

Returns True if the problem is compatible, otherwise raises an error.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.
