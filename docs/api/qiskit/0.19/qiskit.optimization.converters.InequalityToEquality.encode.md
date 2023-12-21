---
title: encode
description: API reference for qiskit.optimization.converters.InequalityToEquality.encode
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.converters.InequalityToEquality.encode
---

# encode

<span id="qiskit.optimization.converters.InequalityToEquality.encode" />

`InequalityToEquality.encode(op, name=None, mode='auto')`

Convert a problem with inequality constraints into one with only equality constraints.

**Parameters**

*   **op** ([`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")) – The problem to be solved, that may contain inequality constraints.

*   **name** (`Optional`\[`str`]) – The name of the converted problem.

*   **mode** (`str`) –

    To chose the type of slack variables. There are 3 options for mode.

    *   ’integer’: All slack variables will be integer variables.

    *   ’continuous’: All slack variables will be continuous variables

    *   **’auto’: Try to use integer variables but if it’s not possible,**

        use continuous variables

**Return type**

[`QuadraticProgram`](qiskit.optimization.problems.QuadraticProgram "qiskit.optimization.problems.quadratic_program.QuadraticProgram")

**Returns**

The converted problem, that contain only equality constraints.

**Raises**

*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If a variable type is not supported.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported mode is selected.
*   [**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If an unsupported sense is specified.

