# qiskit.optimization.algorithms.SlsqpOptimizer.multi\_start\_solve

`SlsqpOptimizer.multi_start_solve(minimize, problem)`

Applies a multi start method given a local optimizer.

**Parameters**

*   **minimize** (`Callable`\[\[`ndarray`], `Tuple`\[`ndarray`, `Any`]]) – A callable object that minimizes the problem specified
*   **problem** (`QuadraticProgram`) – A problem to solve

**Return type**

`OptimizationResult`

**Returns**

The result of the multi start algorithm applied to the problem.
