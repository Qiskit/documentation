---
title: from_docplex
description: API reference for qiskit.optimization.QuadraticProgram.from_docplex
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.optimization.QuadraticProgram.from_docplex
---

# from\_docplex

<span id="qiskit.optimization.QuadraticProgram.from_docplex" />

`QuadraticProgram.from_docplex(model)`

Loads this quadratic program from a docplex model.

Note that this supports only basic functions of docplex as follows: - quadratic objective function - linear / quadratic constraints - binary / integer / continuous variables

**Parameters**

**model** (`Model`) – The docplex model to be loaded.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if the model contains unsupported elements.

**Return type**

`None`

