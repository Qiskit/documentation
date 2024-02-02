---
title: MatrixExpectation
description: API reference for qiskit.opflow.expectations.MatrixExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.MatrixExpectation
---

# MatrixExpectation

<span id="qiskit.opflow.expectations.MatrixExpectation" />

`MatrixExpectation`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/expectations/matrix_expectation.py "view source code")

Bases: [`ExpectationBase`](qiskit.opflow.expectations.ExpectationBase "qiskit.opflow.expectations.expectation_base.ExpectationBase")

Deprecated: An Expectation converter which converts Operator measurements to be matrix-based so they can be evaluated by matrix multiplication.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.expectations.matrix_expectation.MatrixExpectation` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Methods Defined Here**

|                                                                                                                                                     |                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.MatrixExpectation#compute_variance "qiskit.opflow.expectations.MatrixExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                              |
| [`convert`](qiskit.opflow.expectations.MatrixExpectation#convert "qiskit.opflow.expectations.MatrixExpectation.convert")                            | Accept an Operator and return a new Operator with the Pauli measurements replaced by Matrix based measurements. |

