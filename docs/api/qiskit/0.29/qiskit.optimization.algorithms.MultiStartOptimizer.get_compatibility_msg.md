# qiskit.optimization.algorithms.MultiStartOptimizer.get\_compatibility\_msg

`abstract MultiStartOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns the incompatibility message. If the message is empty no issues were found.
