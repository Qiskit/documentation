---
title: encode
description: API reference for qiskit.optimization.converters.IntegerToBinary.encode
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.converters.IntegerToBinary.encode
---

# encode

<span id="qiskit.optimization.converters.IntegerToBinary.encode" />

`IntegerToBinary.encode(op, name=None)`

Convert an integer problem into a new problem with binary variables.

**Parameters**

*   **op** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved, that may contain integer variables.
*   **name** (`Optional`\[`str`]) – The name of the converted problem. If not provided, the name of the input problem is used.

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The converted problem, that contains no integer variables.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if variable or constraint type is not supported.

