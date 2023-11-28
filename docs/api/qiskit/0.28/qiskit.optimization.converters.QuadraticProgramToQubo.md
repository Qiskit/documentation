# qiskit.optimization.converters.QuadraticProgramToQubo

<span id="undefined" />

`QuadraticProgramToQubo(penalty=None)`

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

<span id="undefined" />

`__init__(penalty=None)`

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

## Methods

|                                                                                                                                                                                                |                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.QuadraticProgramToQubo.__init__ "qiskit.optimization.converters.QuadraticProgramToQubo.__init__")(\[penalty])                                     | **type penalty**`Optional`\[`float`]                                                      |
| [`convert`](#qiskit.optimization.converters.QuadraticProgramToQubo.convert "qiskit.optimization.converters.QuadraticProgramToQubo.convert")(problem)                                           | Convert a problem with linear equality constraints into new one with a QUBO form.         |
| [`get_compatibility_msg`](#qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg "qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with this optimizer.                         |
| [`interpret`](#qiskit.optimization.converters.QuadraticProgramToQubo.interpret "qiskit.optimization.converters.QuadraticProgramToQubo.interpret")(x)                                           | Convert a result of a converted problem into that of the original problem.                |
| [`is_compatible`](#qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible "qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |

## Attributes

|                                                                                                                                             |                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`penalty`](#qiskit.optimization.converters.QuadraticProgramToQubo.penalty "qiskit.optimization.converters.QuadraticProgramToQubo.penalty") | Returns the penalty factor used in conversion. |

<span id="undefined" />

`convert(problem)`

Convert a problem with linear equality constraints into new one with a QUBO form.

**Parameters**

**problem** (`QuadraticProgram`) – The problem with linear equality constraints to be solved.

**Return type**

`QuadraticProgram`

**Returns**

The problem converted in QUBO format.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – In case of an incompatible problem.

<span id="undefined" />

`static get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Checks whether the given problem is compatible, i.e., whether the problem can be converted to a QUBO, and otherwise, returns a message explaining the incompatibility.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

A message describing the incompatibility.

<span id="undefined" />

`interpret(x)`

Convert a result of a converted problem into that of the original problem.

**Parameters**

**x** (`Union`\[`ndarray`, `List`\[`float`]]) – The result of the converted problem.

**Return type**

`ndarray`

**Returns**

The result of the original problem.

<span id="undefined" />

`is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

<span id="undefined" />

`property penalty`

Returns the penalty factor used in conversion.

**Return type**

`Optional`\[`float`]

**Returns**

The penalty factor used in conversion.
