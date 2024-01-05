---
title: QuadraticObjective
description: API reference for qiskit.optimization.problems.QuadraticObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticObjective
---

<span id="qiskit-optimization-problems-quadraticobjective" />

# qiskit.optimization.problems.QuadraticObjective

<span id="qiskit.optimization.problems.QuadraticObjective" />

`QuadraticObjective(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=<ObjSense.MINIMIZE: 1>)`

Representation of quadratic objective function of the form: constant + linear \* x + x \* quadratic \* x.

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

### \_\_init\_\_

<span id="qiskit.optimization.problems.QuadraticObjective.__init__" />

`__init__(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=<ObjSense.MINIMIZE: 1>)`

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

## Methods

## Attributes

<span id="qiskit.optimization.problems.QuadraticObjective.Sense" />

### Sense

alias of `ObjSense`

### constant

<span id="qiskit.optimization.problems.QuadraticObjective.constant" />

`property constant`

Returns the constant part of the objective function.

**Return type**

`float`

**Returns**

The constant part of the objective function.

### evaluate

<span id="qiskit.optimization.problems.QuadraticObjective.evaluate" />

`evaluate(x)`

Evaluate the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The value of the quadratic objective given the variable values.

### evaluate\_gradient

<span id="qiskit.optimization.problems.QuadraticObjective.evaluate_gradient" />

`evaluate_gradient(x)`

Evaluate the gradient of the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`ndarray`

**Returns**

The value of the gradient of the quadratic objective given the variable values.

### linear

<span id="qiskit.optimization.problems.QuadraticObjective.linear" />

`property linear`

Returns the linear part of the objective function.

**Return type**

`LinearExpression`

**Returns**

The linear part of the objective function.

### quadratic

<span id="qiskit.optimization.problems.QuadraticObjective.quadratic" />

`property quadratic`

Returns the quadratic part of the objective function.

**Return type**

`QuadraticExpression`

**Returns**

The quadratic part of the objective function.

### quadratic\_program

<span id="qiskit.optimization.problems.QuadraticObjective.quadratic_program" />

`property quadratic_program`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

### sense

<span id="qiskit.optimization.problems.QuadraticObjective.sense" />

`property sense`

Returns the sense of the objective function.

**Return type**

`ObjSense`

**Returns**

The sense of the objective function.

