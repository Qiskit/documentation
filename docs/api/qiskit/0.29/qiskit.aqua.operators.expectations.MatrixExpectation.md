# MatrixExpectation

<span id="undefined" />

`MatrixExpectation`

Bases: `qiskit.aqua.operators.expectations.expectation_base.ExpectationBase`

An Expectation converter which converts Operator measurements to be matrix-based so they can be evaluated by matrix multiplication.

## Methods

|                                                                                                                                                                                                                                           |                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.aqua.operators.expectations.MatrixExpectation.compute_variance#qiskit.aqua.operators.expectations.MatrixExpectation.compute_variance "qiskit.aqua.operators.expectations.MatrixExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                              |
| [`convert`](qiskit.aqua.operators.expectations.MatrixExpectation.convert#qiskit.aqua.operators.expectations.MatrixExpectation.convert "qiskit.aqua.operators.expectations.MatrixExpectation.convert")                                     | Accept an Operator and return a new Operator with the Pauli measurements replaced by Matrix based measurements. |
