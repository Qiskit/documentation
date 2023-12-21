---
title: QuadraticExpression
description: API reference for qiskit.optimization.problems.QuadraticExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticExpression
---

# QuadraticExpression

<span id="qiskit.optimization.problems.QuadraticExpression" />

`QuadraticExpression(quadratic_program, coefficients)`

Representation of a quadratic expression by its coefficients.

Creates a new quadratic expression.

The quadratic expression can be defined via an array, a list, a sparse matrix, or a dictionary that uses variable names or indices as keys and stores the values internally as a dok\_matrix. We stores values in a compressed way, i.e., values at symmetric positions are summed up in the upper triangle. For example, \{(0, 1): 1, (1, 0): 2} -> \{(0, 1): 3}.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **coefficients** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`]]) – The (sparse) representation of the coefficients.

## Attributes

|                                                                                                                                                                                    |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`QuadraticExpression.coefficients`](qiskit.optimization.problems.QuadraticExpression.coefficients "qiskit.optimization.problems.QuadraticExpression.coefficients")                | Returns the coefficients of the quadratic expression. |
| [`QuadraticExpression.quadratic_program`](qiskit.optimization.problems.QuadraticExpression.quadratic_program "qiskit.optimization.problems.QuadraticExpression.quadratic_program") | Returns the parent QuadraticProgram.                  |

## Methods

|                                                                                                                                                                       |                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`QuadraticExpression.__getitem__`](qiskit.optimization.problems.QuadraticExpression.__getitem__ "qiskit.optimization.problems.QuadraticExpression.__getitem__")(key) | Returns the coefficient where i, j can be a variable names or indices.                                                        |
| [`QuadraticExpression.evaluate`](qiskit.optimization.problems.QuadraticExpression.evaluate "qiskit.optimization.problems.QuadraticExpression.evaluate")(x)            | Evaluate the quadratic expression for given variables: x \* Q \* x.                                                           |
| [`QuadraticExpression.to_array`](qiskit.optimization.problems.QuadraticExpression.to_array "qiskit.optimization.problems.QuadraticExpression.to_array")(\[symmetric]) | Returns the coefficients of the quadratic expression as array.                                                                |
| [`QuadraticExpression.to_dict`](qiskit.optimization.problems.QuadraticExpression.to_dict "qiskit.optimization.problems.QuadraticExpression.to_dict")(\[symmetric, …]) | Returns the coefficients of the quadratic expression as dictionary, either using tuples of variable names or indices as keys. |

