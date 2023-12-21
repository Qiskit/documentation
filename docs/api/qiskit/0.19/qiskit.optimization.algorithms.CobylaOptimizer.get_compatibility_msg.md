---
title: get_compatibility_msg
description: API reference for qiskit.optimization.algorithms.CobylaOptimizer.get_compatibility_msg
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.CobylaOptimizer.get_compatibility_msg
---

# get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.CobylaOptimizer.get_compatibility_msg" />

`CobylaOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Checks whether the given problem is compatible, i.e., whether the problem contains only continuous variables, and otherwise, returns a message explaining the incompatibility.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns a string describing the incompatibility.

