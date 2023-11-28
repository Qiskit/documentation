# PauliExpectation

<span id="undefined" />

`PauliExpectation(group_paulis=True)`

Bases: `qiskit.aqua.operators.expectations.expectation_base.ExpectationBase`

An Expectation converter for Pauli-basis observables by changing Pauli measurements to a diagonal (\{Z, I}^n) basis and appending circuit post-rotations to the measured state function. Optionally groups the Paulis with the same post-rotations (those that commute with one another, or form Abelian groups) into single measurements to reduce circuit execution overhead.

**Parameters**

**group\_paulis** (`bool`) – Whether to group the Pauli measurements into commuting sums, which all have the same diagonalizing circuit.

## Methods

|                                                                                                                                                                                                                                        |                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`compute_variance`](qiskit.aqua.operators.expectations.PauliExpectation.compute_variance#qiskit.aqua.operators.expectations.PauliExpectation.compute_variance "qiskit.aqua.operators.expectations.PauliExpectation.compute_variance") | Compute the variance of the expectation estimator.                                                                                                                                         |
| [`convert`](qiskit.aqua.operators.expectations.PauliExpectation.convert#qiskit.aqua.operators.expectations.PauliExpectation.convert "qiskit.aqua.operators.expectations.PauliExpectation.convert")                                     | Accepts an Operator and returns a new Operator with the Pauli measurements replaced by diagonal Pauli post-rotation based measurements so they can be evaluated by sampling and averaging. |
