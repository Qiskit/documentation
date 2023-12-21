---
title: QuadraticProgramToQubo
description: API reference for qiskit.optimization.converters.QuadraticProgramToQubo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.converters.QuadraticProgramToQubo
---

# QuadraticProgramToQubo

<span id="qiskit.optimization.converters.QuadraticProgramToQubo" />

`QuadraticProgramToQubo(penalty=None)`

Convert a given optimization problem to a new problem that is a QUBO.

## Examples

```python
>>> from qiskit.optimization.problems import QuadraticProgram
>>> from qiskit.optimization.converters import QuadraticProgramToQubo
>>> problem = QuadraticProgram()
>>> # define a problem
>>> conv = QuadraticProgramToQubo()
>>> problem2 = conv.encode(problem)
```

**Parameters**

**penalty** (`Optional`\[`float`]) – Penalty factor to scale equality constraints that are added to objective.

## Methods

|                                                                                                                                                                                                                      |                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`QuadraticProgramToQubo.decode`](qiskit.optimization.converters.QuadraticProgramToQubo.decode "qiskit.optimization.converters.QuadraticProgramToQubo.decode")(result)                                               | Convert a result of a converted problem into that of the original problem.                |
| [`QuadraticProgramToQubo.encode`](qiskit.optimization.converters.QuadraticProgramToQubo.encode "qiskit.optimization.converters.QuadraticProgramToQubo.encode")(problem)                                              | Convert a problem with linear equality constraints into new one with a QUBO form.         |
| [`QuadraticProgramToQubo.get_compatibility_msg`](qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg "qiskit.optimization.converters.QuadraticProgramToQubo.get_compatibility_msg")(problem) | Checks whether a given problem can be solved with this optimizer.                         |
| [`QuadraticProgramToQubo.is_compatible`](qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible "qiskit.optimization.converters.QuadraticProgramToQubo.is_compatible")(problem)                         | Checks whether a given problem can be solved with the optimizer implementing this method. |

