<span id="qiskit-optimization-problems-linearconstraint" />

# qiskit.optimization.problems.LinearConstraint



`LinearConstraint(quadratic_program, name, linear, sense, rhs)`

Representation of a linear constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **name** (`str`) – The name of the constraint.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The coefficients specifying the linear constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.



`__init__(quadratic_program, name, linear, sense, rhs)`

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **name** (`str`) – The name of the constraint.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The coefficients specifying the linear constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Methods

|                                                                                                                                                                     |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`__init__`](#qiskit.optimization.problems.LinearConstraint.__init__ "qiskit.optimization.problems.LinearConstraint.__init__")(quadratic\_program, name, linear, …) | **type quadratic\_program**`Any`               |
| [`evaluate`](#qiskit.optimization.problems.LinearConstraint.evaluate "qiskit.optimization.problems.LinearConstraint.evaluate")(x)                                   | Evaluate the left-hand-side of the constraint. |

## Attributes

|                                                                                                                                                           |                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`linear`](#qiskit.optimization.problems.LinearConstraint.linear "qiskit.optimization.problems.LinearConstraint.linear")                                  | Returns the linear expression corresponding to the left-hand-side of the constraint. |
| [`name`](#qiskit.optimization.problems.LinearConstraint.name "qiskit.optimization.problems.LinearConstraint.name")                                        | Returns the name of the constraint.                                                  |
| [`quadratic_program`](#qiskit.optimization.problems.LinearConstraint.quadratic_program "qiskit.optimization.problems.LinearConstraint.quadratic_program") | Returns the parent QuadraticProgram.                                                 |
| [`rhs`](#qiskit.optimization.problems.LinearConstraint.rhs "qiskit.optimization.problems.LinearConstraint.rhs")                                           | Returns the right-hand-side of the constraint.                                       |
| [`sense`](#qiskit.optimization.problems.LinearConstraint.sense "qiskit.optimization.problems.LinearConstraint.sense")                                     | Returns the sense of the constraint.                                                 |



### Sense

alias of `qiskit.optimization.problems.constraint.ConstraintSense`



`evaluate(x)`

Evaluate the left-hand-side of the constraint.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The left-hand-side of the constraint given the variable values.



`property linear`

Returns the linear expression corresponding to the left-hand-side of the constraint.

**Return type**

`LinearExpression`

**Returns**

The left-hand-side linear expression.



`property name`

Returns the name of the constraint.

**Return type**

`str`

**Returns**

The name of the constraint.



`property quadratic_program`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.



`property rhs`

Returns the right-hand-side of the constraint.

**Return type**

`float`

**Returns**

The right-hand-side of the constraint.



`property sense`

Returns the sense of the constraint.

**Return type**

`ConstraintSense`

**Returns**

The sense of the constraint.
