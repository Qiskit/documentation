<span id="qiskit-optimization-converters-quadraticprogramconverter" />

# qiskit.optimization.converters.QuadraticProgramConverter

<span id="undefined" />

`QuadraticProgramConverter`

An abstract class for converters of quadratic programs in Qiskit’s optimization module.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                 |                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.QuadraticProgramConverter.__init__ "qiskit.optimization.converters.QuadraticProgramConverter.__init__")()          | Initialize self.                                                                                               |
| [`convert`](#qiskit.optimization.converters.QuadraticProgramConverter.convert "qiskit.optimization.converters.QuadraticProgramConverter.convert")(problem)      | Convert a QuadraticProgram into another form and keep the information required to interpret the result.        |
| [`decode`](#qiskit.optimization.converters.QuadraticProgramConverter.decode "qiskit.optimization.converters.QuadraticProgramConverter.decode")(result)          | DEPRECATED Decode a result into another form using the information of conversion.                              |
| [`encode`](#qiskit.optimization.converters.QuadraticProgramConverter.encode "qiskit.optimization.converters.QuadraticProgramConverter.encode")(problem)         | DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result. |
| [`interpret`](#qiskit.optimization.converters.QuadraticProgramConverter.interpret "qiskit.optimization.converters.QuadraticProgramConverter.interpret")(result) | Interpret a result into another form using the information of conversion                                       |

<span id="undefined" />

`abstract convert(problem)`

Convert a QuadraticProgram into another form and keep the information required to interpret the result.

**Return type**

`QuadraticProgram`

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

`abstract interpret(result)`

Interpret a result into another form using the information of conversion

**Return type**

`OptimizationResult`
