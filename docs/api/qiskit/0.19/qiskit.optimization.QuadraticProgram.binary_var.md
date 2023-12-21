---
title: binary_var
description: API reference for qiskit.optimization.QuadraticProgram.binary_var
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.QuadraticProgram.binary_var
---

# binary\_var

<span id="qiskit.optimization.QuadraticProgram.binary_var" />

`QuadraticProgram.binary_var(name=None)`

Adds a binary variable to the quadratic program.

**Parameters**

**name** (`Optional`\[`str`]) – The name of the variable.

**Return type**

[`Variable`](qiskit.optimization.problems.Variable "qiskit.optimization.problems.variable.Variable")

**Returns**

The added variable.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the variable name is already occupied.

