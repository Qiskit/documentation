---
title: solve
description: API reference for qiskit.optimization.algorithms.MinimumEigenOptimizer.solve
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.MinimumEigenOptimizer.solve
---

# solve

<span id="qiskit.optimization.algorithms.MinimumEigenOptimizer.solve" />

`MinimumEigenOptimizer.solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved.

**Return type**

`MinimumEigenOptimizerResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If problem not compatible.

