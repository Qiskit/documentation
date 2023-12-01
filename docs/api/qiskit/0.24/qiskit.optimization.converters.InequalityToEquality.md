<span id="qiskit-optimization-converters-inequalitytoequality" />

# qiskit.optimization.converters.InequalityToEquality

<span id="undefined" />

`InequalityToEquality(mode='auto')`

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

<span id="undefined" />

`__init__(mode='auto')`

**Parameters**

**mode** (`str`) –

To chose the type of slack variables. There are 3 options for mode.

*   ’integer’: All slack variables will be integer variables.

*   ’continuous’: All slack variables will be continuous variables

*   **’auto’: Try to use integer variables but if it’s not possible,**

    use continuous variables

## Methods

|                                                                                                                                                       |                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.InequalityToEquality.__init__ "qiskit.optimization.converters.InequalityToEquality.__init__")(\[mode])   | **type mode**`str`                                                                                             |
| [`convert`](#qiskit.optimization.converters.InequalityToEquality.convert "qiskit.optimization.converters.InequalityToEquality.convert")(problem)      | Convert a problem with inequality constraints into one with only equality constraints.                         |
| [`decode`](#qiskit.optimization.converters.InequalityToEquality.decode "qiskit.optimization.converters.InequalityToEquality.decode")(result)          | DEPRECATED Decode a result into another form using the information of conversion.                              |
| [`encode`](#qiskit.optimization.converters.InequalityToEquality.encode "qiskit.optimization.converters.InequalityToEquality.encode")(problem)         | DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result. |
| [`interpret`](#qiskit.optimization.converters.InequalityToEquality.interpret "qiskit.optimization.converters.InequalityToEquality.interpret")(result) | Convert a result of a converted problem into that of the original problem.                                     |

## Attributes

|                                                                                                                                |                                   |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| [`mode`](#qiskit.optimization.converters.InequalityToEquality.mode "qiskit.optimization.converters.InequalityToEquality.mode") | Returns the mode of the converter |

<span id="undefined" />

`convert(problem)`

Convert a problem with inequality constraints into one with only equality constraints.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that may contain inequality constraints.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that contain only equality constraints.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not supported.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported mode is selected.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported sense is specified.

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

Convert a result of a converted problem into that of the original problem.

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`OptimizationResult`

**Returns**

The result of the original problem.

<span id="undefined" />

`property mode`

Returns the mode of the converter

**Return type**

`str`

**Returns**

The mode of the converter used for additional slack variables
