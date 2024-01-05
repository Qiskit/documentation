---
title: LinearEqualityToPenalty
description: API reference for qiskit.optimization.converters.LinearEqualityToPenalty
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.LinearEqualityToPenalty
---

# qiskit.optimization.converters.LinearEqualityToPenalty

<span id="qiskit.optimization.converters.LinearEqualityToPenalty" />

`LinearEqualityToPenalty(penalty=None)`

Convert a problem with only equality constraints to unconstrained with penalty terms.

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

### \_\_init\_\_

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.__init__" />

`__init__(penalty=None)`

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective. If None is passed, penalty factor will be automatically calculated.

## Methods

## Attributes

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

### interpret

<span id="qiskit.optimization.converters.LinearEqualityToPenalty.interpret" />

`interpret(x)`

Convert the result of the converted problem back to that of the original problem

**Parameters**

**x** (`Union`\[`ndarray`, `List`\[`float`]]) – The result of the converted problem or the given result in case of FAILURE.

**Return type**

`ndarray`

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

