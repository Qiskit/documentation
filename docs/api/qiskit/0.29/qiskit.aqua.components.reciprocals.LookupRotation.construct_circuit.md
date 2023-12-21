# qiskit.aqua.components.reciprocals.LookupRotation.construct\_circuit

`LookupRotation.construct_circuit(mode, inreg)`

Construct the Lookup Rotation circuit.

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **inreg** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – input register, typically output register of Eigenvalues

**Returns**

containing the Lookup Rotation circuit.

**Return type**

QuantumCircuit

**Raises:**

NotImplementedError: mode not supported
