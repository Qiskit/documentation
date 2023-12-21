---
title: LinearExpression
description: API reference for qiskit.optimization.problems.LinearExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.LinearExpression
---

# LinearExpression

<span id="qiskit.optimization.problems.LinearExpression" />

`LinearExpression(quadratic_program, coefficients)`

Representation of a linear expression by its coefficients.

Creates a new linear expression.

The linear expression can be defined via an array, a list, a sparse matrix, or a dictionary that uses variable names or indices as keys and stores the values internally as a dok\_matrix.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **coefficients** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The (sparse) representation of the coefficients.

## Attributes

|                                                                                                                                                                           |                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`LinearExpression.coefficients`](qiskit.optimization.problems.LinearExpression.coefficients "qiskit.optimization.problems.LinearExpression.coefficients")                | Returns the coefficients of the linear expression. |
| [`LinearExpression.quadratic_program`](qiskit.optimization.problems.LinearExpression.quadratic_program "qiskit.optimization.problems.LinearExpression.quadratic_program") | Returns the parent QuadraticProgram.               |

## Methods

|                                                                                                                                                            |                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`LinearExpression.__getitem__`](qiskit.optimization.problems.LinearExpression.__getitem__ "qiskit.optimization.problems.LinearExpression.__getitem__")(i) | Returns the i-th coefficient where i can be a variable name or index.                                            |
| [`LinearExpression.evaluate`](qiskit.optimization.problems.LinearExpression.evaluate "qiskit.optimization.problems.LinearExpression.evaluate")(x)          | Evaluate the linear expression for given variables.                                                              |
| [`LinearExpression.to_array`](qiskit.optimization.problems.LinearExpression.to_array "qiskit.optimization.problems.LinearExpression.to_array")()           | Returns the coefficients of the linear expression as array.                                                      |
| [`LinearExpression.to_dict`](qiskit.optimization.problems.LinearExpression.to_dict "qiskit.optimization.problems.LinearExpression.to_dict")(\[use\_name])  | Returns the coefficients of the linear expression as dictionary, either using variable names or indices as keys. |

