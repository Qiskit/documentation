---
title: MatrixExpectation
description: API reference for qiskit.aqua.operators.expectations.MatrixExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.expectations.MatrixExpectation
---

# MatrixExpectation

<span id="qiskit.aqua.operators.expectations.MatrixExpectation" />

`MatrixExpectation`

An Expectation converter which converts Operator measurements to be matrix-based so they can be evaluated by matrix multiplication.

## Methods

|                                                                                                                                                                                                |                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`MatrixExpectation.compute_variance`](qiskit.aqua.operators.expectations.MatrixExpectation.compute_variance "qiskit.aqua.operators.expectations.MatrixExpectation.compute_variance")(exp\_op) | Compute the variance of the expectation estimator.                                                              |
| [`MatrixExpectation.convert`](qiskit.aqua.operators.expectations.MatrixExpectation.convert "qiskit.aqua.operators.expectations.MatrixExpectation.convert")(operator)                           | Accept an Operator and return a new Operator with the Pauli measurements replaced by Matrix based measurements. |

