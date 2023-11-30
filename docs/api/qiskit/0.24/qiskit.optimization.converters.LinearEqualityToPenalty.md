<span id="qiskit-optimization-converters-linearequalitytopenalty" />

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

|                                                                                                                                                              |                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.LinearEqualityToPenalty.__init__ "qiskit.optimization.converters.LinearEqualityToPenalty.__init__")(\[penalty]) | **type penalty**`Optional`\[`float`]                                                                           |
| [`convert`](#qiskit.optimization.converters.LinearEqualityToPenalty.convert "qiskit.optimization.converters.LinearEqualityToPenalty.convert")(problem)       | Convert a problem with equality constraints into an unconstrained problem.                                     |
| [`decode`](#qiskit.optimization.converters.LinearEqualityToPenalty.decode "qiskit.optimization.converters.LinearEqualityToPenalty.decode")(result)           | DEPRECATED Decode a result into another form using the information of conversion.                              |
| [`encode`](#qiskit.optimization.converters.LinearEqualityToPenalty.encode "qiskit.optimization.converters.LinearEqualityToPenalty.encode")(problem)          | DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result. |
| [`interpret`](#qiskit.optimization.converters.LinearEqualityToPenalty.interpret "qiskit.optimization.converters.LinearEqualityToPenalty.interpret")(result)  | Convert the result of the converted problem back to that of the original problem                               |

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

`decode(result)`

DEPRECATED Decode a result into another form using the information of conversion.

**Return type**

`OptimizationResult`

<span id="undefined" />

`encode(problem)`

DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result.

**Return type**

`QuadraticProgram`

<span id="undefined" />

`interpret(result)`

Convert the result of the converted problem back to that of the original problem

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`OptimizationResult`

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
