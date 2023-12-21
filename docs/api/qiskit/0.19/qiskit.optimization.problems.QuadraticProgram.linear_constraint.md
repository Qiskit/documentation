---
title: linear_constraint
description: API reference for qiskit.optimization.problems.QuadraticProgram.linear_constraint
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.problems.QuadraticProgram.linear_constraint
---

# linear\_constraint

<span id="qiskit.optimization.problems.QuadraticProgram.linear_constraint" />

`QuadraticProgram.linear_constraint(linear=None, sense='<=', rhs=0.0, name=None)`

## Adds a linear equality constraint to the quadratic program of the form:

linear \* x sense rhs.

**Parameters**

*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The linear coefficients of the left-hand-side of the constraint.
*   **sense** (`Union`\[`str`, `ConstraintSense`]) – The sense of the constraint, - ‘==’, ‘=’, ‘E’, and ‘EQ’ denote ‘equal to’. - ‘>=’, ‘>’, ‘G’, and ‘GE’ denote ‘greater-than-or-equal-to’. - ‘\<=’, ‘\<’, ‘L’, and ‘LE’ denote ‘less-than-or-equal-to’.
*   **rhs** (`float`) – The right hand side of the constraint.
*   **name** (`Optional`\[`str`]) – The name of the constraint.

**Return type**

[`LinearConstraint`](qiskit.optimization.problems.LinearConstraint "qiskit.optimization.problems.linear_constraint.LinearConstraint")

**Returns**

The added constraint.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the constraint name already exists or the sense is not valid.

