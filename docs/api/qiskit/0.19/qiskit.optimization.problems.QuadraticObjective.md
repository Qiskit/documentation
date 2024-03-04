---
title: QuadraticObjective
description: API reference for qiskit.optimization.problems.QuadraticObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticObjective
---

# QuadraticObjective

<span id="qiskit.optimization.problems.QuadraticObjective" />

`QuadraticObjective(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=ObjSense.MINIMIZE)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/quadratic_objective.py "view source code")

Representation of quadratic objective function of the form: constant + linear \* x + x \* quadratic \* x.

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

## Attributes

### constant

<span id="qiskit.optimization.problems.QuadraticObjective.constant" />

`float`

Returns the constant part of the objective function.

**Return type**

`float`

**Returns**

The constant part of the objective function.

### linear

<span id="qiskit.optimization.problems.QuadraticObjective.linear" />

`qiskit.optimization.problems.linear_expression.LinearExpression`

Returns the linear part of the objective function.

**Return type**

[`LinearExpression`](qiskit.optimization.problems.LinearExpression "qiskit.optimization.problems.linear_expression.LinearExpression")

**Returns**

The linear part of the objective function.

### quadratic

<span id="qiskit.optimization.problems.QuadraticObjective.quadratic" />

`qiskit.optimization.problems.quadratic_expression.QuadraticExpression`

Returns the quadratic part of the objective function.

**Return type**

[`QuadraticExpression`](qiskit.optimization.problems.QuadraticExpression "qiskit.optimization.problems.quadratic_expression.QuadraticExpression")

**Returns**

The quadratic part of the objective function.

### quadratic\_program

<span id="qiskit.optimization.problems.QuadraticObjective.quadratic_program" />

`Any`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

### sense

<span id="qiskit.optimization.problems.QuadraticObjective.sense" />

`qiskit.optimization.problems.quadratic_objective.ObjSense`

Returns the sense of the objective function.

**Return type**

`ObjSense`

**Returns**

The sense of the objective function.

## Methods

### evaluate

<span id="qiskit.optimization.problems.QuadraticObjective.evaluate" />

`QuadraticObjective.evaluate(x)`

Evaluate the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The value of the quadratic objective given the variable values.

