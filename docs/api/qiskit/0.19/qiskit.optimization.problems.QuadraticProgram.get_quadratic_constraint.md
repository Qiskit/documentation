---
title: get_quadratic_constraint
description: API reference for qiskit.optimization.problems.QuadraticProgram.get_quadratic_constraint
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.problems.QuadraticProgram.get_quadratic_constraint
---

# get\_quadratic\_constraint

<span id="qiskit.optimization.problems.QuadraticProgram.get_quadratic_constraint" />

`QuadraticProgram.get_quadratic_constraint(i)`

Returns a quadratic constraint for a given name or index.

**Parameters**

**i** (`Union`\[`int`, `str`]) – the index or name of the constraint.

**Return type**

[`QuadraticConstraint`](qiskit.optimization.problems.QuadraticConstraint "qiskit.optimization.problems.quadratic_constraint.QuadraticConstraint")

**Returns**

The corresponding constraint.

**Raises**

*   **IndexError** – if the index is out of the list size
*   **KeyError** – if the name does not exist

