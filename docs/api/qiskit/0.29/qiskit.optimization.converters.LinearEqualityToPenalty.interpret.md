# qiskit.optimization.converters.LinearEqualityToPenalty.interpret

`LinearEqualityToPenalty.interpret(x)`

Convert the result of the converted problem back to that of the original problem

**Parameters**

**x** (`Union`\[`ndarray`, `List`\[`float`]]) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`ndarray`

**Returns**

The result of the original problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the number of variables in the result differs from that of the original problem.
