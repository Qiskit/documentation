# CompleteExpvalMeasMitigator

<span id="undefined" />

`CompleteExpvalMeasMitigator(amat)`

Bases: `qiskit.ignis.mitigation.expval.base_meas_mitigator.BaseExpvalMeasMitigator`

N-qubit measurement error mitigator.

This class can be used with the [`qiskit.ignis.mitigation.expectation_value()`](qiskit.ignis.mitigation.expectation_value#qiskit.ignis.mitigation.expectation_value "qiskit.ignis.mitigation.expectation_value") function to apply measurement error mitigation of general N-qubit measurement errors when calculating expectation values from counts. Expectation values can also be computed directly using the [`expectation_value()`](qiskit.ignis.mitigation.expectation_value#qiskit.ignis.mitigation.expectation_value "qiskit.ignis.mitigation.expectation_value") method.

For measurement mitigation to be applied the mitigator should be calibrated using the [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits#qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") function and [`qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter`](qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter") class with the `'complete'` mitigation method.

Initialize a TensorMeasurementMitigator

**Parameters**

**amat** (*np.array*) – readout error assignment matrix.

## Methods

|                                                                                                                                                                                                                                                                |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`assignment_fidelity`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_fidelity#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_fidelity "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_fidelity")             | Return the measurement assignment fidelity on the specified qubits.   |
| [`assignment_matrix`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_matrix#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_matrix "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_matrix")                     | Return the measurement assignment matrix for specified qubits.        |
| [`expectation_value`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.expectation_value#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.expectation_value "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.expectation_value")                     | Compute the mitigated expectation value of a diagonal observable.     |
| [`mitigation_matrix`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation_matrix#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation_matrix "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation_matrix")                     | Return the measurement mitigation matrix for the specified qubits.    |
| [`mitigation_overhead`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation_overhead#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation_overhead "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation_overhead")             | Return the mitigation overhead for expectation value estimation.      |
| [`plot_assignment_matrix`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.plot_assignment_matrix#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.plot_assignment_matrix "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.plot_assignment_matrix") | Matrix plot of the readout error assignment matrix.                   |
| [`plot_mitigation_matrix`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.plot_mitigation_matrix#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.plot_mitigation_matrix "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.plot_mitigation_matrix") | Matrix plot of the readout error mitigation matrix.                   |
| [`required_shots`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.required_shots#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.required_shots "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.required_shots")                                 | Return the number of shots required for expectation value estimation. |
| [`stddev_upper_bound`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.stddev_upper_bound#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.stddev_upper_bound "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.stddev_upper_bound")                 | Return an upper bound on standard deviation of expval estimator.      |
