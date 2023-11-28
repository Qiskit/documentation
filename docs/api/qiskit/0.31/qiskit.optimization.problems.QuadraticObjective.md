# QuadraticObjective

<span id="undefined" />

`QuadraticObjective(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=<ObjSense.MINIMIZE: 1>)`

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

Representation of quadratic objective function of the form: constant + linear \* x + x \* quadratic \* x.

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

## Methods

|                                                                                                                                                                                                                                |                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [`evaluate`](qiskit.optimization.problems.QuadraticObjective.evaluate#qiskit.optimization.problems.QuadraticObjective.evaluate "qiskit.optimization.problems.QuadraticObjective.evaluate")                                     | Evaluate the quadratic objective for given variable values.                 |
| [`evaluate_gradient`](qiskit.optimization.problems.QuadraticObjective.evaluate_gradient#qiskit.optimization.problems.QuadraticObjective.evaluate_gradient "qiskit.optimization.problems.QuadraticObjective.evaluate_gradient") | Evaluate the gradient of the quadratic objective for given variable values. |

## Attributes

<span id="undefined" />

### constant

Returns the constant part of the objective function.

**Return type**

`float`

**Returns**

The constant part of the objective function.

<span id="undefined" />

### linear

Returns the linear part of the objective function.

**Return type**

`LinearExpression`

**Returns**

The linear part of the objective function.

<span id="undefined" />

### quadratic

Returns the quadratic part of the objective function.

**Return type**

`QuadraticExpression`

**Returns**

The quadratic part of the objective function.

<span id="undefined" />

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="undefined" />

### sense

Returns the sense of the objective function.

**Return type**

`ObjSense`

**Returns**

The sense of the objective function.
