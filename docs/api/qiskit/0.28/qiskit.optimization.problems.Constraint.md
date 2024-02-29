---
title: Constraint
description: API reference for qiskit.optimization.problems.Constraint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.Constraint
---

# qiskit.optimization.problems.Constraint

<span id="qiskit.optimization.problems.Constraint" />

`Constraint(quadratic_program, name, sense, rhs)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/problems/constraint.py "view source code")

Abstract Constraint Class.

Initializes the constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The name of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

### \_\_init\_\_

<span id="qiskit.optimization.problems.Constraint.__init__" />

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

<span id="qiskit.optimization.problems.Constraint.Sense" />

### Sense

alias of `ConstraintSense`

### evaluate

<span id="qiskit.optimization.problems.Constraint.evaluate" />

`abstract evaluate(x)`

Evaluate left-hand-side of constraint for given values of variables.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values to be used for the variables.

**Return type**

`float`

**Returns**

The left-hand-side of the constraint.

### name

<span id="qiskit.optimization.problems.Constraint.name" />

`property name`

Returns the name of the constraint.

**Return type**

`str`

**Returns**

The name of the constraint.

### quadratic\_program

<span id="qiskit.optimization.problems.Constraint.quadratic_program" />

`property quadratic_program`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

### rhs

<span id="qiskit.optimization.problems.Constraint.rhs" />

`property rhs`

Returns the right-hand-side of the constraint.

**Return type**

`float`

**Returns**

The right-hand-side of the constraint.

### sense

<span id="qiskit.optimization.problems.Constraint.sense" />

`property sense`

Returns the sense of the constraint.

**Return type**

`ConstraintSense`

**Returns**

The sense of the constraint.

