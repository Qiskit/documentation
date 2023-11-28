# qiskit.optimization.converters.LinearEqualityToPenalty

<span id="undefined" />

`LinearEqualityToPenalty(penalty=None)`

Convert a problem with only equality constraints to unconstrained with penalty terms.

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

<span id="undefined" />

`__init__(penalty=None)`

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

## Methods

|                                                                                                                                                              |                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.LinearEqualityToPenalty.__init__ "qiskit.optimization.converters.LinearEqualityToPenalty.__init__")(\[penalty]) | **type penalty**`Optional`\[`float`]                                             |
| [`convert`](#qiskit.optimization.converters.LinearEqualityToPenalty.convert "qiskit.optimization.converters.LinearEqualityToPenalty.convert")(problem)       | Convert a problem with equality constraints into an unconstrained problem.       |
| [`interpret`](#qiskit.optimization.converters.LinearEqualityToPenalty.interpret "qiskit.optimization.converters.LinearEqualityToPenalty.interpret")(x)       | Convert the result of the converted problem back to that of the original problem |

## Attributes

|                                                                                                                                               |                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`penalty`](#qiskit.optimization.converters.LinearEqualityToPenalty.penalty "qiskit.optimization.converters.LinearEqualityToPenalty.penalty") | Returns the penalty factor used in conversion. |

<span id="undefined" />

`convert(problem)`

Convert a problem with equality constraints into an unconstrained problem.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that does not contain inequality constraints.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that is an unconstrained problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an inequality constraint exists.

<span id="undefined" />

`interpret(x)`

Convert the result of the converted problem back to that of the original problem

**Parameters**

**x** (`Union`\[`ndarray`, `List`\[`float`]]) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`ndarray`

**Returns**

The result of the original problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the number of variables in the result differs from that of the original problem.

<span id="undefined" />

`property penalty`

Returns the penalty factor used in conversion.

**Return type**

`Optional`\[`float`]

**Returns**

The penalty factor used in conversion.
