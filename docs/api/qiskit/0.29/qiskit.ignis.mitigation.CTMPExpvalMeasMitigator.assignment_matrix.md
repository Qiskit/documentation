# qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.assignment\_matrix

`CTMPExpvalMeasMitigator.assignment_matrix(qubits=None)`

Return the measurement assignment matrix for specified qubits.

The assignment matrix is the stochastic matrix $A$ which assigns a noisy measurement probability distribution to an ideal input measurement distribution: $P(i|j) = \langle i | A | j \rangle$.

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured for operator expval.

**Returns**

the assignment matrix A.

**Return type**

np.ndarray
