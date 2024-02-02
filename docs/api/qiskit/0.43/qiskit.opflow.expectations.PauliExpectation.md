---
title: PauliExpectation
description: API reference for qiskit.opflow.expectations.PauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.expectations.PauliExpectation
---

# PauliExpectation

<span id="qiskit.opflow.expectations.PauliExpectation" />

`PauliExpectation(group_paulis=True)`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/opflow/expectations/pauli_expectation.py "view source code")

Bases: [`ExpectationBase`](qiskit.opflow.expectations.ExpectationBase "qiskit.opflow.expectations.expectation_base.ExpectationBase")

Deprecated: An Expectation converter for Pauli-basis observables by changing Pauli measurements to a diagonal (\{Z, I}^n) basis and appending circuit post-rotations to the measured state function. Optionally groups the Paulis with the same post-rotations (those that commute with one another, or form Abelian groups) into single measurements to reduce circuit execution overhead.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.expectations.pauli_expectation.PauliExpectation` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

**group\_paulis** (*bool*) – Whether to group the Pauli measurements into commuting sums, which all have the same diagonalizing circuit.

**Methods Defined Here**

|                                                                                                                                                   |                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`compute_variance`](qiskit.opflow.expectations.PauliExpectation#compute_variance "qiskit.opflow.expectations.PauliExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                                                                                                         |
| [`convert`](qiskit.opflow.expectations.PauliExpectation#convert "qiskit.opflow.expectations.PauliExpectation.convert")                            | Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging. |

