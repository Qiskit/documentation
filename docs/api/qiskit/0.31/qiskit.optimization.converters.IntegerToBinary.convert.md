# qiskit.optimization.converters.IntegerToBinary.convert

`IntegerToBinary.convert(problem)`

Convert an integer problem into a new problem with binary variables.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that may contain integer variables.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that contains no integer variables.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if variable or constraint type is not supported.
