---
title: substitute_variables
description: API reference for qiskit.optimization.problems.QuadraticProgram.substitute_variables
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.problems.QuadraticProgram.substitute_variables
---

# substitute\_variables

<span id="qiskit.optimization.problems.QuadraticProgram.substitute_variables" />

`QuadraticProgram.substitute_variables(constants=None, variables=None)`

Substitutes variables with constants or other variables.

**Parameters**

*   **constants** (`Optional`\[`Dict`\[`Union`\[`int`, `str`], `float`]]) – replace variable by constant e.g., \{‘x’: 2} means ‘x’ is substituted with 2
*   **variables** (`Optional`\[`Dict`\[`Union`\[`str`, `int`], `Tuple`\[`Union`\[`str`, `int`], `float`]]]) – replace variables by weighted other variable need to copy everything using name reference to make sure that indices are matched correctly. The lower and upper bounds are updated accordingly. e.g., \{‘x’: (‘y’, 2)} means ‘x’ is substituted with ‘y’ \* 2

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

An optimization problem by substituting variables with constants or other variables. If the substitution is valid, QuadraticProgram.status is still QuadraticProgram.Status.VALIAD. Otherwise, it gets QuadraticProgram.Status.INFEASIBLE.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the substitution is invalid as follows. - Same variable is substituted multiple times. - Coefficient of variable substitution is zero.

