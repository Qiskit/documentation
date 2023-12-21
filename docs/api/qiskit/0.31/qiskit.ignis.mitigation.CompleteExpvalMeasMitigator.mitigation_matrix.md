# qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.mitigation\_matrix

`CompleteExpvalMeasMitigator.mitigation_matrix(qubits=None)`

Return the measurement mitigation matrix for the specified qubits.

The mitigation matrix $A^{-1}$ is defined as the inverse of the [`assignment_matrix()`](qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_matrix#qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_matrix "qiskit.ignis.mitigation.CompleteExpvalMeasMitigator.assignment_matrix") $A$.

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured for operator expval.

**Returns**

the measurement error mitigation matrix $A^{-1}$.

**Return type**

np.ndarray
