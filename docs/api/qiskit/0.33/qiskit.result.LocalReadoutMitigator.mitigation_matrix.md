# qiskit.result.LocalReadoutMitigator.mitigation\_matrix

`LocalReadoutMitigator.mitigation_matrix(qubits=None)`

Return the measurement mitigation matrix for the specified qubits.

The mitigation matrix $A^{-1}$ is defined as the inverse of the [`assignment_matrix()`](qiskit.result.LocalReadoutMitigator.assignment_matrix#qiskit.result.LocalReadoutMitigator.assignment_matrix "qiskit.result.LocalReadoutMitigator.assignment_matrix") $A$.

**Parameters**

**qubits** (`Union`\[`List`\[`int`], `int`, `None`]) – Optional, qubits being measured for operator expval. if a single int is given, it is assumed to be the index of the qubit in self.\_qubits

**Returns**

the measurement error mitigation matrix $A^{-1}$.

**Return type**

np.ndarray
