# InequalityToEquality

<span id="undefined" />

`InequalityToEquality(mode='auto')`

Bases: `qiskit.optimization.converters.quadratic_program_converter.QuadraticProgramConverter`

Convert inequality constraints into equality constraints by introducing slack variables.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import InequalityToEquality
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = InequalityToEquality()
>>> problem2 = conv.convert(problem)
```

**Parameters**

**mode** (`str`) –

To chose the type of slack variables. There are 3 options for mode.

*   ’integer’: All slack variables will be integer variables.

*   ’continuous’: All slack variables will be continuous variables

*   **’auto’: Try to use integer variables but if it’s not possible,**

    use continuous variables

## Methods

|                                                                                                                                                                                                            |                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`convert`](qiskit.optimization.converters.InequalityToEquality.convert#qiskit.optimization.converters.InequalityToEquality.convert "qiskit.optimization.converters.InequalityToEquality.convert")         | Convert a problem with inequality constraints into one with only equality constraints. |
| [`interpret`](qiskit.optimization.converters.InequalityToEquality.interpret#qiskit.optimization.converters.InequalityToEquality.interpret "qiskit.optimization.converters.InequalityToEquality.interpret") | Convert a result of a converted problem into that of the original problem.             |

## Attributes

<span id="undefined" />

### mode

Returns the mode of the converter

**Return type**

`str`

**Returns**

The mode of the converter used for additional slack variables
