---
title: LinearConstraint
description: API reference for qiskit.optimization.problems.LinearConstraint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.LinearConstraint
---

# LinearConstraint

<span id="qiskit.optimization.problems.LinearConstraint" />

`LinearConstraint(quadratic_program, name, linear, sense, rhs)`

Representation of a linear constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **name** (`str`) – The name of the constraint.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The coefficients specifying the linear constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Attributes

|                                                                                                                                                                           |                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`LinearConstraint.linear`](qiskit.optimization.problems.LinearConstraint.linear "qiskit.optimization.problems.LinearConstraint.linear")                                  | Returns the linear expression corresponding to the left-hand-side of the constraint. |
| [`LinearConstraint.name`](qiskit.optimization.problems.LinearConstraint.name "qiskit.optimization.problems.LinearConstraint.name")                                        | Returns the name of the constraint.                                                  |
| [`LinearConstraint.quadratic_program`](qiskit.optimization.problems.LinearConstraint.quadratic_program "qiskit.optimization.problems.LinearConstraint.quadratic_program") | Returns the parent QuadraticProgram.                                                 |
| [`LinearConstraint.rhs`](qiskit.optimization.problems.LinearConstraint.rhs "qiskit.optimization.problems.LinearConstraint.rhs")                                           | Returns the right-hand-side of the constraint.                                       |
| [`LinearConstraint.sense`](qiskit.optimization.problems.LinearConstraint.sense "qiskit.optimization.problems.LinearConstraint.sense")                                     | Returns the sense of the constraint.                                                 |

## Methods

|                                                                                                                                                   |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`LinearConstraint.evaluate`](qiskit.optimization.problems.LinearConstraint.evaluate "qiskit.optimization.problems.LinearConstraint.evaluate")(x) | Evaluate the left-hand-side of the constraint. |

