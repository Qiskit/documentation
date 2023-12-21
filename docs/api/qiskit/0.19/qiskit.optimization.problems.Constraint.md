---
title: Constraint
description: API reference for qiskit.optimization.problems.Constraint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.Constraint
---

# Constraint

<span id="qiskit.optimization.problems.Constraint" />

`Constraint(quadratic_program, name, sense, rhs)`

Abstract Constraint Class.

Initializes the constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The name of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Attributes

|                                                                                                                                                         |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`Constraint.name`](qiskit.optimization.problems.Constraint.name "qiskit.optimization.problems.Constraint.name")                                        | Returns the name of the constraint.            |
| [`Constraint.quadratic_program`](qiskit.optimization.problems.Constraint.quadratic_program "qiskit.optimization.problems.Constraint.quadratic_program") | Returns the parent QuadraticProgram.           |
| [`Constraint.rhs`](qiskit.optimization.problems.Constraint.rhs "qiskit.optimization.problems.Constraint.rhs")                                           | Returns the right-hand-side of the constraint. |
| [`Constraint.sense`](qiskit.optimization.problems.Constraint.sense "qiskit.optimization.problems.Constraint.sense")                                     | Returns the sense of the constraint.           |

## Methods

|                                                                                                                                 |                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Constraint.evaluate`](qiskit.optimization.problems.Constraint.evaluate "qiskit.optimization.problems.Constraint.evaluate")(x) | Evaluate left-hand-side of constraint for given values of variables. |

