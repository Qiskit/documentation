# MatrixExpectation

<span id="undefined" />

`MatrixExpectation`

Bases: `qiskit.opflow.expectations.expectation_base.ExpectationBase`

An Expectation converter which converts Operator measurements to be matrix-based so they can be evaluated by matrix multiplication.

## Methods Defined Here

|                                                                                                                                                                                                                   |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.MatrixExpectation.compute_variance#qiskit.opflow.expectations.MatrixExpectation.compute_variance "qiskit.opflow.expectations.MatrixExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                              |
| [`convert`](qiskit.opflow.expectations.MatrixExpectation.convert#qiskit.opflow.expectations.MatrixExpectation.convert "qiskit.opflow.expectations.MatrixExpectation.convert")                                     | Accept an Operator and return a new Operator with the Pauli measurements replaced by Matrix based measurements. |
