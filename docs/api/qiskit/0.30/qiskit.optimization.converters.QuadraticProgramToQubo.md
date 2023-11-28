# QuadraticProgramToQubo

<span id="undefined" />

`QuadraticProgramToQubo(penalty=None)`

Bases: `qiskit.optimization.converters.quadratic_program_converter.QuadraticProgramConverter`

Convert a given optimization problem to a new problem that is a QUBO.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import QuadraticProgramToQubo
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = QuadraticProgramToQubo()
>>> problem2 = conv.convert(problem)
```

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

## Methods

|                                                                                                                                                                                                                                                                  |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`convert`](qiskit.optimization.converters.QuadraticProgramToQubo.convert#qiskit.optimization.converters.QuadraticProgramToQubo.convert "qiskit.optimization.converters.QuadraticProgramToQubo.convert")                                                         | Convert a problem with linear equality constraints into new one with a QUBO form.         |
| [`get_compatibility_msg`](qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg#qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg "qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg") | Checks whether a given problem can be solved with this optimizer.                         |
| [`interpret`](qiskit.optimization.converters.QuadraticProgramToQubo.interpret#qiskit.optimization.converters.QuadraticProgramToQubo.interpret "qiskit.optimization.converters.QuadraticProgramToQubo.interpret")                                                 | Convert a result of a converted problem into that of the original problem.                |
| [`is_compatible`](qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible#qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible "qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible")                                 | Checks whether a given problem can be solved with the optimizer implementing this method. |

## Attributes

<span id="undefined" />

### penalty

Returns the penalty factor used in conversion.

**Return type**

`Optional`\[`float`]

**Returns**

The penalty factor used in conversion.
