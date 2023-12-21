# qiskit.optimization.converters.QuadraticProgramToQubo.convert

`QuadraticProgramToQubo.convert(problem)`

Convert a problem with linear equality constraints into new one with a QUBO form.

**Parameters**

**problem** (`QuadraticProgram`) – The problem with linear equality constraints to be solved.

**Return type**

`QuadraticProgram`

**Returns**

The problem converted in QUBO format.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – In case of an incompatible problem.
