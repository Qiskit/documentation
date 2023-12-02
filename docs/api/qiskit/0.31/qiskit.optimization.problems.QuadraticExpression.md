# QuadraticExpression

<span id="undefined" />

`QuadraticExpression(quadratic_program, coefficients)`

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

Representation of a quadratic expression by its coefficients.

Creates a new quadratic expression.

The quadratic expression can be defined via an array, a list, a sparse matrix, or a dictionary that uses variable names or indices as keys and stores the values internally as a dok\_matrix. We stores values in a compressed way, i.e., values at symmetric positions are summed up in the upper triangle. For example, \{(0, 1): 1, (1, 0): 2} -> \{(0, 1): 3}.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **coefficients** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`]]) – The (sparse) representation of the coefficients.

## Methods

|                                                                                                                                                                                                                                   |                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`evaluate`](qiskit.optimization.problems.QuadraticExpression.evaluate#qiskit.optimization.problems.QuadraticExpression.evaluate "qiskit.optimization.problems.QuadraticExpression.evaluate")                                     | Evaluate the quadratic expression for given variables: x \* Q \* x.                                                           |
| [`evaluate_gradient`](qiskit.optimization.problems.QuadraticExpression.evaluate_gradient#qiskit.optimization.problems.QuadraticExpression.evaluate_gradient "qiskit.optimization.problems.QuadraticExpression.evaluate_gradient") | Evaluate the gradient of the quadratic expression for given variables.                                                        |
| [`to_array`](qiskit.optimization.problems.QuadraticExpression.to_array#qiskit.optimization.problems.QuadraticExpression.to_array "qiskit.optimization.problems.QuadraticExpression.to_array")                                     | Returns the coefficients of the quadratic expression as array.                                                                |
| [`to_dict`](qiskit.optimization.problems.QuadraticExpression.to_dict#qiskit.optimization.problems.QuadraticExpression.to_dict "qiskit.optimization.problems.QuadraticExpression.to_dict")                                         | Returns the coefficients of the quadratic expression as dictionary, either using tuples of variable names or indices as keys. |

## Attributes

<span id="undefined" />

### coefficients

Returns the coefficients of the quadratic expression.

**Return type**

`dok_matrix`

**Returns**

The coefficients of the quadratic expression.

<span id="undefined" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.
