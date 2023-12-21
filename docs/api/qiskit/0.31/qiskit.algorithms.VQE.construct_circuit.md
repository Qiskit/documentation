# qiskit.algorithms.VQE.construct\_circuit

`VQE.construct_circuit(parameter, operator)`

Return the circuits used to compute the expectation value.

**Parameters**

*   **parameter** (`Union`\[`List`\[`float`], `List`\[`Parameter`], `ndarray`]) – Parameters for the ansatz circuit.
*   **operator** (`OperatorBase`) – Qubit operator of the Observable

**Return type**

`List`\[`QuantumCircuit`]

**Returns**

A list of the circuits used to compute the expectation value.
