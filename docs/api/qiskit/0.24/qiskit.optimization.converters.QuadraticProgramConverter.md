---
title: QuadraticProgramConverter
description: API reference for qiskit.optimization.converters.QuadraticProgramConverter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramConverter
---

<span id="qiskit-optimization-converters-quadraticprogramconverter" />

# qiskit.optimization.converters.QuadraticProgramConverter

<span id="qiskit.optimization.converters.QuadraticProgramConverter" />

`QuadraticProgramConverter`

An abstract class for converters of quadratic programs in Qiskit’s optimization module.

### \_\_init\_\_

<span id="qiskit.optimization.converters.QuadraticProgramConverter.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### convert

<span id="qiskit.optimization.converters.QuadraticProgramConverter.convert" />

`abstract convert(problem)`

Convert a QuadraticProgram into another form and keep the information required to interpret the result.

**Return type**

`QuadraticProgram`

### decode

<span id="qiskit.optimization.converters.QuadraticProgramConverter.decode" />

`decode(result)`

DEPRECATED Decode a result into another form using the information of conversion.

**Return type**

`OptimizationResult`

### encode

<span id="qiskit.optimization.converters.QuadraticProgramConverter.encode" />

`encode(problem)`

DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result.

**Return type**

`QuadraticProgram`

### interpret

<span id="qiskit.optimization.converters.QuadraticProgramConverter.interpret" />

`abstract interpret(result)`

Interpret a result into another form using the information of conversion

**Return type**

`OptimizationResult`

