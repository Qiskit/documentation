# CTMPExpvalMeasMitigator[¶](#ctmpexpvalmeasmitigator "Permalink to this headline")

<span id="undefined" />

`CTMPExpvalMeasMitigator(generators, rates, num_qubits=None, seed=None)`

Bases: `qiskit.ignis.mitigation.expval.base_meas_mitigator.BaseExpvalMeasMitigator`

N-qubit CTMP measurement error mitigator.

This class can be used with the [`qiskit.ignis.mitigation.expectation_value()`](qiskit.ignis.mitigation.expectation_value#qiskit.ignis.mitigation.expectation_value "qiskit.ignis.mitigation.expectation_value") function to apply measurement error mitigation of N-qubit measurement errors caused by one and two-body error generators. Expectation values can also be computed directly using the [`expectation_value()`](qiskit.ignis.mitigation.expectation_value#qiskit.ignis.mitigation.expectation_value "qiskit.ignis.mitigation.expectation_value") method.

For measurement mitigation to be applied the mitigator should be calibrated using the [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits#qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") function and [`qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter`](qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter") class with the `'CTMP'` mitigation method.

Initialize a TensorMeasurementMitigator

## Methods

|                                                                                                                                                                                                                                                    |                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`assignment_fidelity`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment_fidelity#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment_fidelity "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment_fidelity")             | Return the measurement assignment fidelity on the specified qubits.   |
| [`assignment_matrix`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment_matrix#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment_matrix "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment_matrix")                     | Return the measurement assignment matrix for specified qubits.        |
| [`expectation_value`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.expectation_value#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.expectation_value "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.expectation_value")                     | Compute the mitigated expectation value of a diagonal observable.     |
| [`generator_matrix`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.generator_matrix#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.generator_matrix "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.generator_matrix")                         | Return the generator matrix on the specified qubits.                  |
| [`mitigation_matrix`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_matrix#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_matrix "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_matrix")                     | Return the measurement mitigation matrix for the specified qubits.    |
| [`mitigation_overhead`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_overhead#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_overhead "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_overhead")             | Return the mitigation overhead for expectation value estimation.      |
| [`noise_strength`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.noise_strength#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.noise_strength "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.noise_strength")                                 | Return the noise strength $gamma$ on the specified qubits             |
| [`plot_assignment_matrix`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.plot_assignment_matrix#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.plot_assignment_matrix "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.plot_assignment_matrix") | Matrix plot of the readout error assignment matrix.                   |
| [`plot_mitigation_matrix`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.plot_mitigation_matrix#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.plot_mitigation_matrix "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.plot_mitigation_matrix") | Matrix plot of the readout error mitigation matrix.                   |
| [`required_shots`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.required_shots#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.required_shots "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.required_shots")                                 | Return the number of shots required for expectation value estimation. |
| [`seed`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.seed#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.seed "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.seed")                                                                         | Set the seed for the quantum state RNG.                               |
| [`stddev_upper_bound`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.stddev_upper_bound#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.stddev_upper_bound "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.stddev_upper_bound")                 | Return an upper bound on standard deviation of expval estimator.      |
