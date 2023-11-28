# qiskit.optimization.problems.QuadraticObjective

<span id="undefined" />

`QuadraticObjective(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=<ObjSense.MINIMIZE: 1>)`

Representation of quadratic objective function of the form: constant + linear \* x + x \* quadratic \* x.

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

<span id="undefined" />

`__init__(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=<ObjSense.MINIMIZE: 1>)`

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

## Methods

|                                                                                                                                                                        |                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.problems.QuadraticObjective.__init__ "qiskit.optimization.problems.QuadraticObjective.__init__")(quadratic\_program\[, constant, …]) | Constructs a quadratic objective function.                                  |
| [`evaluate`](#qiskit.optimization.problems.QuadraticObjective.evaluate "qiskit.optimization.problems.QuadraticObjective.evaluate")(x)                                  | Evaluate the quadratic objective for given variable values.                 |
| [`evaluate_gradient`](#qiskit.optimization.problems.QuadraticObjective.evaluate_gradient "qiskit.optimization.problems.QuadraticObjective.evaluate_gradient")(x)       | Evaluate the gradient of the quadratic objective for given variable values. |

## Attributes

|                                                                                                                                                               |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`constant`](#qiskit.optimization.problems.QuadraticObjective.constant "qiskit.optimization.problems.QuadraticObjective.constant")                            | Returns the constant part of the objective function.  |
| [`linear`](#qiskit.optimization.problems.QuadraticObjective.linear "qiskit.optimization.problems.QuadraticObjective.linear")                                  | Returns the linear part of the objective function.    |
| [`quadratic`](#qiskit.optimization.problems.QuadraticObjective.quadratic "qiskit.optimization.problems.QuadraticObjective.quadratic")                         | Returns the quadratic part of the objective function. |
| [`quadratic_program`](#qiskit.optimization.problems.QuadraticObjective.quadratic_program "qiskit.optimization.problems.QuadraticObjective.quadratic_program") | Returns the parent QuadraticProgram.                  |
| [`sense`](#qiskit.optimization.problems.QuadraticObjective.sense "qiskit.optimization.problems.QuadraticObjective.sense")                                     | Returns the sense of the objective function.          |

<span id="undefined" />

### Sense

alias of `ObjSense`

<span id="undefined" />

`property constant`

Returns the constant part of the objective function.

**Return type**

`float`

**Returns**

The constant part of the objective function.

<span id="undefined" />

`evaluate(x)`

Evaluate the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`float`

**Returns**

The value of the quadratic objective given the variable values.

<span id="undefined" />

`evaluate_gradient(x)`

Evaluate the gradient of the quadratic objective for given variable values.

**Parameters**

**x** (`Union`\[`ndarray`, `List`, `Dict`\[`Union`\[`int`, `str`], `float`]]) – The values of the variables to be evaluated.

**Return type**

`ndarray`

**Returns**

The value of the gradient of the quadratic objective given the variable values.

<span id="undefined" />

`property linear`

Returns the linear part of the objective function.

**Return type**

`LinearExpression`

**Returns**

The linear part of the objective function.

<span id="undefined" />

`property quadratic`

Returns the quadratic part of the objective function.

**Return type**

`QuadraticExpression`

**Returns**

The quadratic part of the objective function.

<span id="undefined" />

`property quadratic_program`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="undefined" />

`property sense`

Returns the sense of the objective function.

**Return type**

`ObjSense`

**Returns**

The sense of the objective function.
