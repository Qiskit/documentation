# qiskit.optimization.converters.LinearEqualityToPenalty.convert

`LinearEqualityToPenalty.convert(problem)`

Convert a problem with equality constraints into an unconstrained problem.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that does not contain inequality constraints.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that is an unconstrained problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an inequality constraint exists.
