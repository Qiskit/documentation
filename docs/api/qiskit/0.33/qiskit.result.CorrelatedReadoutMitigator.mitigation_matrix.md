# qiskit.result.CorrelatedReadoutMitigator.mitigation\_matrix

`CorrelatedReadoutMitigator.mitigation_matrix(qubits=None)`

Return the readout mitigation matrix for the specified qubits.

The mitigation matrix $A^{-1}$ is defined as the inverse of the [`assignment_matrix()`](qiskit.result.CorrelatedReadoutMitigator.assignment_matrix#qiskit.result.CorrelatedReadoutMitigator.assignment_matrix "qiskit.result.CorrelatedReadoutMitigator.assignment_matrix") $A$.

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured.

**Returns**

the measurement error mitigation matrix $A^{-1}$.

**Return type**

np.ndarray
