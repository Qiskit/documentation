# CorrelatedReadoutMitigator[¶](#correlatedreadoutmitigator "Permalink to this headline")

<span id="undefined" />

`CorrelatedReadoutMitigator(assignment_matrix, qubits=None)`

Bases: `qiskit.result.mitigation.base_readout_mitigator.BaseReadoutMitigator`

N-qubit readout error mitigator.

Mitigates [`expectation_value()`](qiskit.result.CorrelatedReadoutMitigator.expectation_value#qiskit.result.CorrelatedReadoutMitigator.expectation_value "qiskit.result.CorrelatedReadoutMitigator.expectation_value") and [`quasi_probabilities()`](qiskit.result.CorrelatedReadoutMitigator.quasi_probabilities#qiskit.result.CorrelatedReadoutMitigator.quasi_probabilities "qiskit.result.CorrelatedReadoutMitigator.quasi_probabilities"). The mitigation\_matrix should be calibrated using qiskit experiments. This mitigation method should be used in case the readout errors of the qubits are assumed to be correlated. The mitigation\_matrix of *N* qubits is of size $2^N x 2^N$ so the mitigation complexity is $O(4^N)$.

Initialize a CorrelatedReadoutMitigator

**Parameters**

*   **assignment\_matrix** (`ndarray`) – readout error assignment matrix.
*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – Optional, the measured physical qubits for mitigation.

**Raises**

**QiskitError** – matrix size does not agree with number of qubits

## Methods

|                                                                                                                                                                                                                   |                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`assignment_matrix`](qiskit.result.CorrelatedReadoutMitigator.assignment_matrix#qiskit.result.CorrelatedReadoutMitigator.assignment_matrix "qiskit.result.CorrelatedReadoutMitigator.assignment_matrix")         | Return the readout assignment matrix for specified qubits.        |
| [`expectation_value`](qiskit.result.CorrelatedReadoutMitigator.expectation_value#qiskit.result.CorrelatedReadoutMitigator.expectation_value "qiskit.result.CorrelatedReadoutMitigator.expectation_value")         | Compute the mitigated expectation value of a diagonal observable. |
| [`mitigation_matrix`](qiskit.result.CorrelatedReadoutMitigator.mitigation_matrix#qiskit.result.CorrelatedReadoutMitigator.mitigation_matrix "qiskit.result.CorrelatedReadoutMitigator.mitigation_matrix")         | Return the readout mitigation matrix for the specified qubits.    |
| [`quasi_probabilities`](qiskit.result.CorrelatedReadoutMitigator.quasi_probabilities#qiskit.result.CorrelatedReadoutMitigator.quasi_probabilities "qiskit.result.CorrelatedReadoutMitigator.quasi_probabilities") | Compute mitigated quasi probabilities value.                      |
| [`stddev_upper_bound`](qiskit.result.CorrelatedReadoutMitigator.stddev_upper_bound#qiskit.result.CorrelatedReadoutMitigator.stddev_upper_bound "qiskit.result.CorrelatedReadoutMitigator.stddev_upper_bound")     | Return an upper bound on standard deviation of expval estimator.  |

## Attributes

<span id="undefined" />

### qubits

The device qubits for this mitigator

**Return type**

`Tuple`\[`int`]

<span id="undefined" />

### settings

Return settings.

**Return type**

`Dict`
