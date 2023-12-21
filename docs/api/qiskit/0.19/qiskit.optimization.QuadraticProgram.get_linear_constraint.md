---
title: get_linear_constraint
description: API reference for qiskit.optimization.QuadraticProgram.get_linear_constraint
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.QuadraticProgram.get_linear_constraint
---

# get\_linear\_constraint

<span id="qiskit.optimization.QuadraticProgram.get_linear_constraint" />

`QuadraticProgram.get_linear_constraint(i)`

Returns a linear constraint for a given name or index.

**Parameters**

**i** (`Union`\[`int`, `str`]) – the index or name of the constraint.

**Return type**

[`LinearConstraint`](qiskit.optimization.problems.LinearConstraint "qiskit.optimization.problems.linear_constraint.LinearConstraint")

**Returns**

The corresponding constraint.

**Raises**

*   **IndexError** – if the index is out of the list size
*   **KeyError** – if the name does not exist

