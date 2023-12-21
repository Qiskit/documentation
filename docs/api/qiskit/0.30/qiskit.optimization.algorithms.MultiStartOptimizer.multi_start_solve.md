# qiskit.optimization.algorithms.MultiStartOptimizer.multi\_start\_solve

`MultiStartOptimizer.multi_start_solve(minimize, problem)`

Applies a multi start method given a local optimizer.

**Parameters**

*   **minimize** (`Callable`\[\[`ndarray`], `Tuple`\[`ndarray`, `Any`]]) – A callable object that minimizes the problem specified
*   **problem** (`QuadraticProgram`) – A problem to solve

**Return type**

`OptimizationResult`

**Returns**

The result of the multi start algorithm applied to the problem.
