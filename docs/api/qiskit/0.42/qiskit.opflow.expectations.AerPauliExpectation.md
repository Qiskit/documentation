---
title: AerPauliExpectation
description: API reference for qiskit.opflow.expectations.AerPauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.AerPauliExpectation
---

# AerPauliExpectation

<span id="qiskit.opflow.expectations.AerPauliExpectation" />

`AerPauliExpectation`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/expectations/aer_pauli_expectation.py "view source code")

Bases: [`qiskit.opflow.expectations.expectation_base.ExpectationBase`](qiskit.opflow.expectations.ExpectationBase "qiskit.opflow.expectations.expectation_base.ExpectationBase")

An Expectation converter for using Aer’s operator snapshot to take expectations of quantum state circuits over Pauli observables.

**Methods Defined Here**

|                                                                                                                                                         |                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.AerPauliExpectation#compute_variance "qiskit.opflow.expectations.AerPauliExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                                           |
| [`convert`](qiskit.opflow.expectations.AerPauliExpectation#convert "qiskit.opflow.expectations.AerPauliExpectation.convert")                            | Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits. |

