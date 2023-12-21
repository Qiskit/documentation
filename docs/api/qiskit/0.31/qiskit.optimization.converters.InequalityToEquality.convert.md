# qiskit.optimization.converters.InequalityToEquality.convert

`InequalityToEquality.convert(problem)`

Convert a problem with inequality constraints into one with only equality constraints.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that may contain inequality constraints.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that contain only equality constraints.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not supported.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported mode is selected.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported sense is specified.
