---
title: solve
description: API reference for qiskit.optimization.algorithms.CplexOptimizer.solve
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.CplexOptimizer.solve
---

# solve

<span id="qiskit.optimization.algorithms.CplexOptimizer.solve" />

`CplexOptimizer.solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem. If problem is not convex, this optimizer may raise an exception due to incompatibility, depending on the settings.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.

