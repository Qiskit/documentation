# TensoredExpvalMeasMitigator[¶](#tensoredexpvalmeasmitigator "Permalink to this headline")

<span id="undefined" />

`TensoredExpvalMeasMitigator(amats)`

Bases: `qiskit.ignis.mitigation.expval.base_meas_mitigator.BaseExpvalMeasMitigator`

1-qubit tensor product measurement error mitigator.

This class can be used with the [`qiskit.ignis.mitigation.expectation_value()`](qiskit.ignis.mitigation.expectation_value#qiskit.ignis.mitigation.expectation_value "qiskit.ignis.mitigation.expectation_value") function to apply measurement error mitigation of local single-qubit measurement errors. Expectation values can also be computed directly using the [`expectation_value()`](qiskit.ignis.mitigation.expectation_value#qiskit.ignis.mitigation.expectation_value "qiskit.ignis.mitigation.expectation_value") method.

For measurement mitigation to be applied the mitigator should be calibrated using the [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits#qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") function and [`qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter`](qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter") class with the `'tensored'` mitigation method.

Initialize a TensorMeasurementMitigator

**Parameters**

**amats** (`List`\[`ndarray`]) – list of single-qubit readout error assignment matrices.

## Methods

|                                                                                                                                                                                                                                                                |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`assignment_fidelity`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_fidelity#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_fidelity "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_fidelity")             | Return the measurement assignment fidelity on the specified qubits.   |
| [`assignment_matrix`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_matrix#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_matrix "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_matrix")                     | Return the measurement assignment matrix for specified qubits.        |
| [`expectation_value`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.expectation_value#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.expectation_value "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.expectation_value")                     | Compute the mitigated expectation value of a diagonal observable.     |
| [`mitigation_matrix`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation_matrix#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation_matrix "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation_matrix")                     | Return the measurement mitigation matrix for the specified qubits.    |
| [`mitigation_overhead`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation_overhead#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation_overhead "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation_overhead")             | Return the mitigation overhead for expectation value estimation.      |
| [`plot_assignment_matrix`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.plot_assignment_matrix#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.plot_assignment_matrix "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.plot_assignment_matrix") | Matrix plot of the readout error assignment matrix.                   |
| [`plot_mitigation_matrix`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.plot_mitigation_matrix#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.plot_mitigation_matrix "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.plot_mitigation_matrix") | Matrix plot of the readout error mitigation matrix.                   |
| [`required_shots`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.required_shots#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.required_shots "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.required_shots")                                 | Return the number of shots required for expectation value estimation. |
| [`stddev_upper_bound`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.stddev_upper_bound#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.stddev_upper_bound "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.stddev_upper_bound")                 | Return an upper bound on standard deviation of expval estimator.      |
