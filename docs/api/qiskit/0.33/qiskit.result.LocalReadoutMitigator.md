# LocalReadoutMitigator

<span id="undefined" />

`LocalReadoutMitigator(amats=None, qubits=None, backend=None)`

Bases: `qiskit.result.mitigation.base_readout_mitigator.BaseReadoutMitigator`

1-qubit tensor product readout error mitigator.

Mitigates [`expectation_value()`](qiskit.result.LocalReadoutMitigator.expectation_value#qiskit.result.LocalReadoutMitigator.expectation_value "qiskit.result.LocalReadoutMitigator.expectation_value") and [`quasi_probabilities()`](qiskit.result.LocalReadoutMitigator.quasi_probabilities#qiskit.result.LocalReadoutMitigator.quasi_probabilities "qiskit.result.LocalReadoutMitigator.quasi_probabilities"). The mitigator should either be calibrated using qiskit experiments, or calculated directly from the backend properties. This mitigation method should be used in case the readout errors of the qubits are assumed to be uncorrelated. For *N* qubits there are *N* mitigation matrices, each of size $2 x 2$ and the mitigation complexity is $O(2^N)$, so it is more efficient than the [`CorrelatedReadoutMitigator`](qiskit.result.CorrelatedReadoutMitigator#qiskit.result.CorrelatedReadoutMitigator "qiskit.result.CorrelatedReadoutMitigator") class.

Initialize a LocalReadoutMitigator

**Parameters**

*   **amats** (`Optional`\[`List`\[`ndarray`]]) – Optional, list of single-qubit readout error assignment matrices.
*   **qubits** (`Optional`\[`Iterable`\[`int`]]) – Optional, the measured physical qubits for mitigation.
*   **backend** – Optional, backend name.

**Raises**

**QiskitError** – matrices sizes do not agree with number of qubits

## Methods

|                                                                                                                                                                                                    |                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`assignment_matrix`](qiskit.result.LocalReadoutMitigator.assignment_matrix#qiskit.result.LocalReadoutMitigator.assignment_matrix "qiskit.result.LocalReadoutMitigator.assignment_matrix")         | Return the measurement assignment matrix for specified qubits.     |
| [`expectation_value`](qiskit.result.LocalReadoutMitigator.expectation_value#qiskit.result.LocalReadoutMitigator.expectation_value "qiskit.result.LocalReadoutMitigator.expectation_value")         | Compute the mitigated expectation value of a diagonal observable.  |
| [`mitigation_matrix`](qiskit.result.LocalReadoutMitigator.mitigation_matrix#qiskit.result.LocalReadoutMitigator.mitigation_matrix "qiskit.result.LocalReadoutMitigator.mitigation_matrix")         | Return the measurement mitigation matrix for the specified qubits. |
| [`quasi_probabilities`](qiskit.result.LocalReadoutMitigator.quasi_probabilities#qiskit.result.LocalReadoutMitigator.quasi_probabilities "qiskit.result.LocalReadoutMitigator.quasi_probabilities") | Compute mitigated quasi probabilities value.                       |
| [`stddev_upper_bound`](qiskit.result.LocalReadoutMitigator.stddev_upper_bound#qiskit.result.LocalReadoutMitigator.stddev_upper_bound "qiskit.result.LocalReadoutMitigator.stddev_upper_bound")     | Return an upper bound on standard deviation of expval estimator.   |

## Attributes

<span id="undefined" />

### qubits

The device qubits for this mitigator

**Return type**

`Tuple`\[`int`]
