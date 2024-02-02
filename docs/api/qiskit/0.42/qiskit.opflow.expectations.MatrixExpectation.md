---
title: MatrixExpectation
description: API reference for qiskit.opflow.expectations.MatrixExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.MatrixExpectation
---

# MatrixExpectation

<span id="qiskit.opflow.expectations.MatrixExpectation" />

`MatrixExpectation`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/expectations/matrix_expectation.py "view source code")

Bases: [`qiskit.opflow.expectations.expectation_base.ExpectationBase`](qiskit.opflow.expectations.ExpectationBase "qiskit.opflow.expectations.expectation_base.ExpectationBase")

An Expectation converter which converts Operator measurements to be matrix-based so they can be evaluated by matrix multiplication.

**Methods Defined Here**

|                                                                                                                                                     |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.MatrixExpectation#compute_variance "qiskit.opflow.expectations.MatrixExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                              |
| [`convert`](qiskit.opflow.expectations.MatrixExpectation#convert "qiskit.opflow.expectations.MatrixExpectation.convert")                            | Accept an Operator and return a new Operator with the Pauli measurements replaced by Matrix based measurements. |

