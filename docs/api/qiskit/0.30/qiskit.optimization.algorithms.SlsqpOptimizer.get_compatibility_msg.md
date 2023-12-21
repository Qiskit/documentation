# qiskit.optimization.algorithms.SlsqpOptimizer.get\_compatibility\_msg

`SlsqpOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Checks whether the given problem is compatible, i.e., whether the problem contains only continuous variables, and otherwise, returns a message explaining the incompatibility.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns a string describing the incompatibility.
