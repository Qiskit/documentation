---
title: QuadraticProgramToQubo
description: API reference for qiskit.optimization.converters.QuadraticProgramToQubo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramToQubo
---

# QuadraticProgramToQubo

<span id="qiskit.optimization.converters.QuadraticProgramToQubo" />

`QuadraticProgramToQubo(penalty=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/converters/quadratic_program_to_qubo.py "view source code")

Bases: `qiskit.optimization.converters.quadratic_program_converter.QuadraticProgramConverter`

Convert a given optimization problem to a new problem that is a QUBO.

**Examples**

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

### convert

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.convert" />

`QuadraticProgramToQubo.convert(problem)`

Convert a problem with linear equality constraints into new one with a QUBO form.

**Parameters**

**problem** (`QuadraticProgram`) – The problem with linear equality constraints to be solved.

**Return type**

`QuadraticProgram`

**Returns**

The problem converted in QUBO format.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – In case of an incompatible problem.

### get\_compatibility\_msg

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg" />

`static QuadraticProgramToQubo.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with this optimizer.

Checks whether the given problem is compatible, i.e., whether the problem can be converted to a QUBO, and otherwise, returns a message explaining the incompatibility.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

A message describing the incompatibility.

### interpret

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.interpret" />

`QuadraticProgramToQubo.interpret(x)`

Convert a result of a converted problem into that of the original problem.

**Parameters**

**x** (`Union`\[`ndarray`, `List`\[`float`]]) – The result of the converted problem.

**Return type**

`ndarray`

**Returns**

The result of the original problem.

### is\_compatible

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible" />

`QuadraticProgramToQubo.is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

## Attributes

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.penalty" />

### penalty

Returns the penalty factor used in conversion.

**Return type**

`Optional`\[`float`]

**Returns**

The penalty factor used in conversion.

