# Constraint



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



### name

Returns the name of the constraint.

**Return type**

`str`

**Returns**

The name of the constraint.



### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.



### rhs

Returns the right-hand-side of the constraint.

**Return type**

`float`

**Returns**

The right-hand-side of the constraint.



### sense

Returns the sense of the constraint.

**Return type**

`ConstraintSense`

**Returns**

The sense of the constraint.
