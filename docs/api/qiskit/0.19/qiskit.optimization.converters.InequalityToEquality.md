---
title: InequalityToEquality
description: API reference for qiskit.optimization.converters.InequalityToEquality
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.InequalityToEquality
---

# InequalityToEquality

<span id="qiskit.optimization.converters.InequalityToEquality" />

`InequalityToEquality`

Convert inequality constraints into equality constraints by introducing slack variables.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import InequalityToEquality
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = InequalityToEquality()
>>> problem2 = conv.encode(problem)
```

## Methods

|                                                                                                                                                                             |                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`InequalityToEquality.decode`](qiskit.optimization.converters.InequalityToEquality.decode "qiskit.optimization.converters.InequalityToEquality.decode")(result)            | Convert a result of a converted problem into that of the original problem.             |
| [`InequalityToEquality.encode`](qiskit.optimization.converters.InequalityToEquality.encode "qiskit.optimization.converters.InequalityToEquality.encode")(op\[, name, mode]) | Convert a problem with inequality constraints into one with only equality constraints. |

