# QuadraticConstraint

<span id="undefined" />

`QuadraticConstraint(quadratic_program, name, linear, quadratic, sense, rhs)`

Bases: `qiskit.optimization.problems.constraint.Constraint`

Representation of a quadratic constraint.

Constructs a quadratic constraint, consisting of a linear and a quadratic term.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **name** (`str`) – The name of the constraint.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`]]) – The coefficients specifying the linear part of the constraint.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`]]) – The coefficients specifying the linear part of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Methods

|                                                                                                                                                                                               |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`evaluate`](qiskit.optimization.problems.QuadraticConstraint.evaluate#qiskit.optimization.problems.QuadraticConstraint.evaluate "qiskit.optimization.problems.QuadraticConstraint.evaluate") | Evaluate the left-hand-side of the constraint. |

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

### quadratic

Returns the quadratic expression corresponding to the left-hand-side of the constraint.

**Return type**

`QuadraticExpression`

**Returns**

The left-hand-side quadratic expression.

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
