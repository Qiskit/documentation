---
title: solve
description: API reference for qiskit.optimization.algorithms.GroverOptimizer.solve
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.GroverOptimizer.solve
---

# solve

<span id="qiskit.optimization.algorithms.GroverOptimizer.solve" />

`GroverOptimizer.solve(problem)`

Tries to solves the given problem using the grover optimizer.

Runs the optimizer to try to solve the optimization problem. If the problem cannot be, converted to a QUBO, this optimizer raises an exception due to incompatibility.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

*   **AttributeError** – If the quantum instance has not been set.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.

