# qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.generator\_matrix

`CTMPExpvalMeasMitigator.generator_matrix(qubits=None)`

Return the generator matrix on the specified qubits.

The generator matrix $G$ is given by $\sum_i r_i G_i$ where the sum is taken over all $G_i$ acting on the specified qubits subset.

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubit subset for the generators.

**Returns**

the generator matrix $G$.

**Return type**

sps.coo\_matrix
