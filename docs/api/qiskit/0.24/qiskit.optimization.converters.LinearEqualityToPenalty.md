---
title: LinearEqualityToPenalty
description: API reference for qiskit.optimization.converters.LinearEqualityToPenalty
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.LinearEqualityToPenalty
---

<span id="qiskit-optimization-converters-linearequalitytopenalty" />

# qiskit.optimization.converters.LinearEqualityToPenalty

<span id="qiskit.optimization.converters.LinearEqualityToPenalty" />

`LinearEqualityToPenalty(penalty=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/optimization/converters/linear_equality_to_penalty.py "view source code")

Convert a problem with only equality constraints to unconstrained with penalty terms.

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

### \_\_init\_\_

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.__init__" />

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

### convert

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.convert" />

`convert(problem)`

Convert a problem with equality constraints into an unconstrained problem.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved, that does not contain inequality constraints.

**Return type**

`QuadraticProgram`

**Returns**

The converted problem, that is an unconstrained problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an inequality constraint exists.

### decode

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.decode" />

`decode(result)`

DEPRECATED Decode a result into another form using the information of conversion.

**Return type**

`OptimizationResult`

### encode

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.encode" />

`encode(problem)`

DEPRECATED Encode a QuadraticProgram into another form and keep the information required to decode the result.

**Return type**

`QuadraticProgram`

### interpret

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.interpret" />

`interpret(result)`

Convert the result of the converted problem back to that of the original problem

**Parameters**

**result** (`OptimizationResult`) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`OptimizationResult`

**Returns**

The result of the original problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the number of variables in the result differs from that of the original problem.

### penalty

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.penalty" />

`property penalty`

Returns the penalty factor used in conversion.

**Return type**

`Optional`\[`float`]

**Returns**

The penalty factor used in conversion.

