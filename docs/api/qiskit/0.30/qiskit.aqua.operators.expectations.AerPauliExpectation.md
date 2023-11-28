# AerPauliExpectation

<span id="undefined" />

`AerPauliExpectation`

Bases: `qiskit.aqua.operators.expectations.expectation_base.ExpectationBase`

An Expectation converter for using Aer’s operator snapshot to take expectations of quantum state circuits over Pauli observables.

## Methods

|                                                                                                                                                                                                                                                 |                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.aqua.operators.expectations.AerPauliExpectation.compute_variance#qiskit.aqua.operators.expectations.AerPauliExpectation.compute_variance "qiskit.aqua.operators.expectations.AerPauliExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                                           |
| [`convert`](qiskit.aqua.operators.expectations.AerPauliExpectation.convert#qiskit.aqua.operators.expectations.AerPauliExpectation.convert "qiskit.aqua.operators.expectations.AerPauliExpectation.convert")                                     | Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits. |
