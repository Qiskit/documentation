---
title: PauliExpectation
description: API reference for qiskit.opflow.expectations.PauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.PauliExpectation
---

# PauliExpectation

<span id="qiskit.opflow.expectations.PauliExpectation" />

`PauliExpectation(group_paulis=True)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/opflow/expectations/pauli_expectation.py "view source code")

Bases: [`qiskit.opflow.expectations.expectation_base.ExpectationBase`](qiskit.opflow.expectations.ExpectationBase "qiskit.opflow.expectations.expectation_base.ExpectationBase")

An Expectation converter for Pauli-basis observables by changing Pauli measurements to a diagonal (\{Z, I}^n) basis and appending circuit post-rotations to the measured state function. Optionally groups the Paulis with the same post-rotations (those that commute with one another, or form Abelian groups) into single measurements to reduce circuit execution overhead.

**Parameters**

**group\_paulis** (`bool`) – Whether to group the Pauli measurements into commuting sums, which all have the same diagonalizing circuit.

**Methods Defined Here**

|                                                                                                                                                   |                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`compute_variance`](qiskit.opflow.expectations.PauliExpectation#compute_variance "qiskit.opflow.expectations.PauliExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                                                                                                         |
| [`convert`](qiskit.opflow.expectations.PauliExpectation#convert "qiskit.opflow.expectations.PauliExpectation.convert")                            | Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging. |

