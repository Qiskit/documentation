# AerPauliExpectation

<span id="undefined" />

`AerPauliExpectation`

Bases: `qiskit.opflow.expectations.expectation_base.ExpectationBase`

An Expectation converter for using Aer’s operator snapshot to take expectations of quantum state circuits over Pauli observables.

## Methods Defined Here

|                                                                                                                                                                                                                         |                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.AerPauliExpectation.compute_variance#qiskit.opflow.expectations.AerPauliExpectation.compute_variance "qiskit.opflow.expectations.AerPauliExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                                           |
| [`convert`](qiskit.opflow.expectations.AerPauliExpectation.convert#qiskit.opflow.expectations.AerPauliExpectation.convert "qiskit.opflow.expectations.AerPauliExpectation.convert")                                     | Accept an Operator and return a new Operator with the Pauli measurements replaced by AerSnapshot-based expectation circuits. |
