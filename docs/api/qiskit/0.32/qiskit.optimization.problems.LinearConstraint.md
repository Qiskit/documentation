# LinearConstraint

<span id="undefined" />

`LinearConstraint(quadratic_program, name, linear, sense, rhs)`

Bases: `qiskit.optimization.problems.constraint.Constraint`

Representation of a linear constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **name** (`str`) – The name of the constraint.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The coefficients specifying the linear constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Methods

|                                                                                                                                                                                      |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| [`evaluate`](qiskit.optimization.problems.LinearConstraint.evaluate#qiskit.optimization.problems.LinearConstraint.evaluate "qiskit.optimization.problems.LinearConstraint.evaluate") | Evaluate the left-hand-side of the constraint. |

## Attributes

<span id="undefined" />

### linear

Returns the linear expression corresponding to the left-hand-side of the constraint.

**Return type**

`LinearExpression`

**Returns**

The left-hand-side linear expression.

<span id="undefined" />

### name

Returns the name of the constraint.

**Return type**

`str`

**Returns**

The name of the constraint.

<span id="undefined" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="undefined" />

### rhs

Returns the right-hand-side of the constraint.

**Return type**

`float`

**Returns**

The right-hand-side of the constraint.

<span id="undefined" />

### sense

Returns the sense of the constraint.

**Return type**

`ConstraintSense`

**Returns**

The sense of the constraint.
