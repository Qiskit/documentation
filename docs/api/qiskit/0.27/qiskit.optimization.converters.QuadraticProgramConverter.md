---
title: QuadraticProgramConverter
description: API reference for qiskit.optimization.converters.QuadraticProgramConverter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramConverter
---

# qiskit.optimization.converters.QuadraticProgramConverter

<span id="qiskit.optimization.converters.QuadraticProgramConverter" />

`QuadraticProgramConverter` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/converters/quadratic_program_converter.py "view source code")

An abstract class for converters of quadratic programs in Qiskit’s optimization module.

### \_\_init\_\_

<span id="qiskit.optimization.converters.QuadraticProgramConverter.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                            |                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.optimization.converters.QuadraticProgramConverter.__init__ "qiskit.optimization.converters.QuadraticProgramConverter.__init__")()     | Initialize self.                                                                                        |
| [`convert`](#qiskit.optimization.converters.QuadraticProgramConverter.convert "qiskit.optimization.converters.QuadraticProgramConverter.convert")(problem) | Convert a QuadraticProgram into another form and keep the information required to interpret the result. |
| [`interpret`](#qiskit.optimization.converters.QuadraticProgramConverter.interpret "qiskit.optimization.converters.QuadraticProgramConverter.interpret")(x) | Interpret a result into another form using the information of conversion                                |

### convert

<span id="qiskit.optimization.converters.QuadraticProgramConverter.convert" />

`abstract convert(problem)`

Convert a QuadraticProgram into another form and keep the information required to interpret the result.

**Return type**

`QuadraticProgram`

### interpret

<span id="qiskit.optimization.converters.QuadraticProgramConverter.interpret" />

`abstract interpret(x)`

Interpret a result into another form using the information of conversion

**Return type**

`ndarray`

