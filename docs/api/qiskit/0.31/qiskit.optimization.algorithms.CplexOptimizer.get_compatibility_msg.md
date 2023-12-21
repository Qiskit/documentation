# qiskit.optimization.algorithms.CplexOptimizer.get\_compatibility\_msg

`CplexOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Returns `''` since CPLEX accepts all problems that can be modeled using the `QuadraticProgram`. CPLEX may throw an exception in case the problem is determined to be non-convex.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

An empty string.
