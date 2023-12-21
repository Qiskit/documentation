---
title: integer_var
description: API reference for qiskit.optimization.QuadraticProgram.integer_var
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.QuadraticProgram.integer_var
---

# integer\_var

<span id="qiskit.optimization.QuadraticProgram.integer_var" />

`QuadraticProgram.integer_var(lowerbound=0, upperbound=1e+20, name=None)`

Adds an integer variable to the quadratic program.

**Parameters**

*   **lowerbound** (`Union`\[`float`, `int`]) – The lowerbound of the variable.
*   **upperbound** (`Union`\[`float`, `int`]) – The upperbound of the variable.
*   **name** (`Optional`\[`str`]) – The name of the variable.

**Return type**

[`Variable`](qiskit.optimization.problems.Variable "qiskit.optimization.problems.variable.Variable")

**Returns**

The added variable.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the variable name is already occupied.

