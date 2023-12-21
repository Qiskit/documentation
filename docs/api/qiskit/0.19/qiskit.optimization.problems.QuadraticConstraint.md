---
title: QuadraticConstraint
description: API reference for qiskit.optimization.problems.QuadraticConstraint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticConstraint
---

# QuadraticConstraint

<span id="qiskit.optimization.problems.QuadraticConstraint" />

`QuadraticConstraint(quadratic_program, name, linear, quadratic, sense, rhs)`

Representation of a quadratic constraint.

Constructs a quadratic constraint, consisting of a linear and a quadratic term.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **name** (`str`) – The name of the constraint.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The coefficients specifying the linear part of the constraint.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`]]) – The coefficients specifying the linear part of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Attributes

|                                                                                                                                                                                    |                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`QuadraticConstraint.linear`](qiskit.optimization.problems.QuadraticConstraint.linear "qiskit.optimization.problems.QuadraticConstraint.linear")                                  | Returns the linear expression corresponding to the left-hand-side of the constraint.    |
| [`QuadraticConstraint.name`](qiskit.optimization.problems.QuadraticConstraint.name "qiskit.optimization.problems.QuadraticConstraint.name")                                        | Returns the name of the constraint.                                                     |
| [`QuadraticConstraint.quadratic`](qiskit.optimization.problems.QuadraticConstraint.quadratic "qiskit.optimization.problems.QuadraticConstraint.quadratic")                         | Returns the quadratic expression corresponding to the left-hand-side of the constraint. |
| [`QuadraticConstraint.quadratic_program`](qiskit.optimization.problems.QuadraticConstraint.quadratic_program "qiskit.optimization.problems.QuadraticConstraint.quadratic_program") | Returns the parent QuadraticProgram.                                                    |
| [`QuadraticConstraint.rhs`](qiskit.optimization.problems.QuadraticConstraint.rhs "qiskit.optimization.problems.QuadraticConstraint.rhs")                                           | Returns the right-hand-side of the constraint.                                          |
| [`QuadraticConstraint.sense`](qiskit.optimization.problems.QuadraticConstraint.sense "qiskit.optimization.problems.QuadraticConstraint.sense")                                     | Returns the sense of the constraint.                                                    |

## Methods

|                                                                                                                                                            |                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`QuadraticConstraint.evaluate`](qiskit.optimization.problems.QuadraticConstraint.evaluate "qiskit.optimization.problems.QuadraticConstraint.evaluate")(x) | Evaluate the left-hand-side of the constraint. |

