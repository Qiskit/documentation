---
title: PauliExpectation
description: API reference for qiskit.aqua.operators.expectations.PauliExpectation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.expectations.PauliExpectation
---

# PauliExpectation

<span id="qiskit.aqua.operators.expectations.PauliExpectation" />

`PauliExpectation(group_paulis=True)`

An Expectation converter for Pauli-basis observables by changing Pauli measurements to a diagonal (\{Z, I}^n) basis and appending circuit post-rotations to the measured state function. Optionally groups the Paulis with the same post-rotations (those that commute with one another, or form Abelian groups) into single measurements to reduce circuit execution overhead.

**Parameters**

**group\_paulis** (`bool`) – Whether to group the Pauli measurements into commuting sums, which all have the same diagonalizing circuit.

## Methods

|                                                                                                                                                                                             |                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`PauliExpectation.compute_variance`](qiskit.aqua.operators.expectations.PauliExpectation.compute_variance "qiskit.aqua.operators.expectations.PauliExpectation.compute_variance")(exp\_op) | Compute the variance of the expectation estimator.                                                                                                                                         |
| [`PauliExpectation.convert`](qiskit.aqua.operators.expectations.PauliExpectation.convert "qiskit.aqua.operators.expectations.PauliExpectation.convert")(operator)                           | Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging. |

