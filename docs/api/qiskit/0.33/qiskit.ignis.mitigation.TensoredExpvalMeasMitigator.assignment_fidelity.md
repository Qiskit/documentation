# qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment\_fidelity

`TensoredExpvalMeasMitigator.assignment_fidelity(qubits=None)`

Return the measurement assignment fidelity on the specified qubits.

The assignment fidelity on N-qubits is defined as $\sum_{x\in\{0, 1\}^n} P(x|x) / 2^n$, where $P(x|x) = \rangle x|A|x\langle$, and $A$ is the [`assignment_matrix()`](qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_matrix#qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_matrix "qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.assignment_matrix").

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured for operator expval.

**Returns**

the assignment fidelity.

**Return type**

float
