# qiskit.optimization.QuadraticProgram.from\_docplex

`QuadraticProgram.from_docplex(model)`

Loads this quadratic program from a docplex model.

Note that this supports only basic functions of docplex as follows: - quadratic objective function - linear / quadratic constraints - binary / integer / continuous variables

**Parameters**

**model** (`Model`) – The docplex model to be loaded.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the model contains unsupported elements.

**Return type**

`None`
