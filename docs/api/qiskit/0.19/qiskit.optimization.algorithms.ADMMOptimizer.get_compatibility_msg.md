---
title: get_compatibility_msg
description: API reference for qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg
---

# get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.ADMMOptimizer.get_compatibility_msg" />

`ADMMOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`Optional`\[`str`]

**Returns**

Returns True if the problem is compatible, otherwise raises an error.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is not compatible with the ADMM optimizer.

