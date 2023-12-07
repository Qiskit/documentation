<span id="qiskit-optimization-problems-constraint" />

# qiskit.optimization.problems.Constraint



`Constraint(quadratic_program, name, sense, rhs)`

Abstract Constraint Class.

Initializes the constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The name of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.



`__init__(quadratic_program, name, sense, rhs)`

Initializes the constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The name of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Methods

|                                                                                                                                                          |                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.problems.Constraint.__init__ "qiskit.optimization.problems.Constraint.__init__")(quadratic\_program, name, sense, rhs) | Initializes the constraint.                                          |
| [`evaluate`](#qiskit.optimization.problems.Constraint.evaluate "qiskit.optimization.problems.Constraint.evaluate")(x)                                    | Evaluate left-hand-side of constraint for given values of variables. |

## Attributes

|                                                                                                                                               |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`name`](#qiskit.optimization.problems.Constraint.name "qiskit.optimization.problems.Constraint.name")                                        | Returns the name of the constraint.            |
| [`quadratic_program`](#qiskit.optimization.problems.Constraint.quadratic_program "qiskit.optimization.problems.Constraint.quadratic_program") | Returns the parent QuadraticProgram.           |
| [`rhs`](#qiskit.optimization.problems.Constraint.rhs "qiskit.optimization.problems.Constraint.rhs")                                           | Returns the right-hand-side of the constraint. |
| [`sense`](#qiskit.optimization.problems.Constraint.sense "qiskit.optimization.problems.Constraint.sense")                                     | Returns the sense of the constraint.           |



### Sense

alias of `ConstraintSense`



`abstract evaluate(x)`

Evaluate left-hand-side of constraint for given values of variables.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values to be used for the variables.

**Return type**

`float`

**Returns**

The left-hand-side of the constraint.



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
