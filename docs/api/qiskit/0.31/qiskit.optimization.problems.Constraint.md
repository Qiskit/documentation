# Constraint

<span id="undefined" />

`Constraint(quadratic_program, name, sense, rhs)`

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

Abstract Constraint Class.

Initializes the constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The name of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Methods

|                                                                                                                                                                    |                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [`evaluate`](qiskit.optimization.problems.Constraint.evaluate#qiskit.optimization.problems.Constraint.evaluate "qiskit.optimization.problems.Constraint.evaluate") | Evaluate left-hand-side of constraint for given values of variables. |

## Attributes

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
