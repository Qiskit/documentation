# LinearExpression

<span id="undefined" />

`LinearExpression(quadratic_program, coefficients)`

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

Representation of a linear expression by its coefficients.

Creates a new linear expression.

The linear expression can be defined via an array, a list, a sparse matrix, or a dictionary that uses variable names or indices as keys and stores the values internally as a dok\_matrix.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **coefficients** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The (sparse) representation of the coefficients.

## Methods

|                                                                                                                                                                                                                          |                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [`evaluate`](qiskit.optimization.problems.LinearExpression.evaluate#qiskit.optimization.problems.LinearExpression.evaluate "qiskit.optimization.problems.LinearExpression.evaluate")                                     | Evaluate the linear expression for given variables.                                                              |
| [`evaluate_gradient`](qiskit.optimization.problems.LinearExpression.evaluate_gradient#qiskit.optimization.problems.LinearExpression.evaluate_gradient "qiskit.optimization.problems.LinearExpression.evaluate_gradient") | Evaluate the gradient of the linear expression for given variables.                                              |
| [`to_array`](qiskit.optimization.problems.LinearExpression.to_array#qiskit.optimization.problems.LinearExpression.to_array "qiskit.optimization.problems.LinearExpression.to_array")                                     | Returns the coefficients of the linear expression as array.                                                      |
| [`to_dict`](qiskit.optimization.problems.LinearExpression.to_dict#qiskit.optimization.problems.LinearExpression.to_dict "qiskit.optimization.problems.LinearExpression.to_dict")                                         | Returns the coefficients of the linear expression as dictionary, either using variable names or indices as keys. |

## Attributes

<span id="undefined" />

### coefficients

Returns the coefficients of the linear expression.

**Return type**

`dok_matrix`

**Returns**

The coefficients of the linear expression.

<span id="undefined" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.
