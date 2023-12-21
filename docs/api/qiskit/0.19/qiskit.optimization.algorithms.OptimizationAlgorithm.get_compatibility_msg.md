---
title: get_compatibility_msg
description: API reference for qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg
---

# get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.OptimizationAlgorithm.get_compatibility_msg" />

`abstract OptimizationAlgorithm.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns the incompatibility message. If the message is empty no issues were found.

