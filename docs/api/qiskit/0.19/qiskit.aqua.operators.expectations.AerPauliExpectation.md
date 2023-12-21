---
title: AerPauliExpectation
description: API reference for qiskit.aqua.operators.expectations.AerPauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.expectations.AerPauliExpectation
---

# AerPauliExpectation

<span id="qiskit.aqua.operators.expectations.AerPauliExpectation" />

`AerPauliExpectation`

An Expectation converter for using Aer’s operator snapshot to take expectations of quantum state circuits over Pauli observables.

## Methods

|                                                                                                                                                                                                      |                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`AerPauliExpectation.compute_variance`](qiskit.aqua.operators.expectations.AerPauliExpectation.compute_variance "qiskit.aqua.operators.expectations.AerPauliExpectation.compute_variance")(exp\_op) | Compute the variance of the expectation estimator.                                                                           |
| [`AerPauliExpectation.convert`](qiskit.aqua.operators.expectations.AerPauliExpectation.convert "qiskit.aqua.operators.expectations.AerPauliExpectation.convert")(operator)                           | Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits. |

