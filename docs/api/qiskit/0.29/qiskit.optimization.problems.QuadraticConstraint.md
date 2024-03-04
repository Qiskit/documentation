---
title: QuadraticConstraint
description: API reference for qiskit.optimization.problems.QuadraticConstraint
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticConstraint
---

# QuadraticConstraint

<span id="qiskit.optimization.problems.QuadraticConstraint" />

`QuadraticConstraint(quadratic_program, name, linear, quadratic, sense, rhs)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/problems/quadratic_constraint.py "view source code")

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

### evaluate

<span id="qiskit.optimization.problems.QuadraticConstraint.evaluate" />

`QuadraticConstraint.evaluate(x)`

Evaluate the left-hand-side of the constraint.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The left-hand-side of the constraint given the variable values.

## Attributes

<span id="qiskit.optimization.problems.QuadraticConstraint.linear" />

### linear

Returns the linear expression corresponding to the left-hand-side of the constraint.

**Return type**

`LinearExpression`

**Returns**

The left-hand-side linear expression.

<span id="qiskit.optimization.problems.QuadraticConstraint.name" />

### name

Returns the name of the constraint.

**Return type**

`str`

**Returns**

The name of the constraint.

<span id="qiskit.optimization.problems.QuadraticConstraint.quadratic" />

### quadratic

Returns the quadratic expression corresponding to the left-hand-side of the constraint.

**Return type**

`QuadraticExpression`

**Returns**

The left-hand-side quadratic expression.

<span id="qiskit.optimization.problems.QuadraticConstraint.quadratic_program" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="qiskit.optimization.problems.QuadraticConstraint.rhs" />

### rhs

Returns the right-hand-side of the constraint.

**Return type**

`float`

**Returns**

The right-hand-side of the constraint.

<span id="qiskit.optimization.problems.QuadraticConstraint.sense" />

### sense

Returns the sense of the constraint.

**Return type**

`ConstraintSense`

**Returns**

The sense of the constraint.

