# LinearEqualityToPenalty

<span id="undefined" />

`LinearEqualityToPenalty(penalty=None)`

Bases: `qiskit.optimization.converters.quadratic_program_converter.QuadraticProgramConverter`

Convert a problem with only equality constraints to unconstrained with penalty terms.

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

## Methods

|                                                                                                                                                                                                                     |                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`convert`](qiskit.optimization.converters.LinearEqualityToPenalty.convert#qiskit.optimization.converters.LinearEqualityToPenalty.convert "qiskit.optimization.converters.LinearEqualityToPenalty.convert")         | Convert a problem with equality constraints into an unconstrained problem.       |
| [`interpret`](qiskit.optimization.converters.LinearEqualityToPenalty.interpret#qiskit.optimization.converters.LinearEqualityToPenalty.interpret "qiskit.optimization.converters.LinearEqualityToPenalty.interpret") | Convert the result of the converted problem back to that of the original problem |

## Attributes

<span id="undefined" />

### penalty

Returns the penalty factor used in conversion.

**Return type**

`Optional`\[`float`]

**Returns**

The penalty factor used in conversion.
