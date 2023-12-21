---
title: encode
description: API reference for qiskit.optimization.converters.QuadraticProgramToQubo.encode
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.converters.QuadraticProgramToQubo.encode
---

# encode

<span id="qiskit.optimization.converters.QuadraticProgramToQubo.encode" />

`QuadraticProgramToQubo.encode(problem)`

Convert a problem with linear equality constraints into new one with a QUBO form.

**Parameters**

**problem** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem with linear equality constraints to be solved.

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The problem converted in QUBO format.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – In case of an incompatible problem.

