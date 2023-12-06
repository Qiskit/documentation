# qiskit.optimization.converters.QuadraticProgramConverter



`QuadraticProgramConverter`

An abstract class for converters of quadratic programs in Qiskit’s optimization module.



`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                            |                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.QuadraticProgramConverter.__init__ "qiskit.optimization.converters.QuadraticProgramConverter.__init__")()     | Initialize self.                                                                                        |
| [`convert`](#qiskit.optimization.converters.QuadraticProgramConverter.convert "qiskit.optimization.converters.QuadraticProgramConverter.convert")(problem) | Convert a QuadraticProgram into another form and keep the information required to interpret the result. |
| [`interpret`](#qiskit.optimization.converters.QuadraticProgramConverter.interpret "qiskit.optimization.converters.QuadraticProgramConverter.interpret")(x) | Interpret a result into another form using the information of conversion                                |



`abstract convert(problem)`

Convert a QuadraticProgram into another form and keep the information required to interpret the result.

**Return type**

`QuadraticProgram`



`abstract interpret(x)`

Interpret a result into another form using the information of conversion

**Return type**

`ndarray`
