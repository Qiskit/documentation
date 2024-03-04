---
title: Constraint
description: API reference for qiskit.optimization.problems.Constraint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.Constraint
---

# Constraint

<span id="qiskit.optimization.problems.Constraint" />

`Constraint(quadratic_program, name, sense, rhs)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/problems/constraint.py "view source code")

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

Abstract Constraint Class.

Initializes the constraint.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The name of the constraint.
*   **sense** (`ConstraintSense`) – The sense of the constraint.
*   **rhs** (`float`) – The right-hand-side of the constraint.

## Methods

### evaluate

<span id="qiskit.optimization.problems.Constraint.evaluate" />

`abstract Constraint.evaluate(x)`

Evaluate left-hand-side of constraint for given values of variables.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values to be used for the variables.

**Return type**

`float`

**Returns**

The left-hand-side of the constraint.

## Attributes

<span id="qiskit.optimization.problems.Constraint.name" />

### name

Returns the name of the constraint.

**Return type**

`str`

**Returns**

The name of the constraint.

<span id="qiskit.optimization.problems.Constraint.quadratic_program" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="qiskit.optimization.problems.Constraint.rhs" />

### rhs

Returns the right-hand-side of the constraint.

**Return type**

`float`

**Returns**

The right-hand-side of the constraint.

<span id="qiskit.optimization.problems.Constraint.sense" />

### sense

Returns the sense of the constraint.

**Return type**

`ConstraintSense`

**Returns**

The sense of the constraint.

