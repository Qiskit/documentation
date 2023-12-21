---
title: get_compatibility_msg
description: API reference for qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg
---

# get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.CplexOptimizer.get_compatibility_msg" />

`CplexOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Returns `''` since CPLEX accepts all problems that can be modeled using the `QuadraticProgram`. CPLEX may throw an exception in case the problem is determined to be non-convex.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

An empty string.

