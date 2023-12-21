# qiskit.aqua.components.eigs.Eigenvalues.construct\_circuit

`abstract Eigenvalues.construct_circuit(mode, register=None)`

Construct the eigenvalue estimation quantum circuit.

**Parameters**

*   **mode** (*str*) – ‘matrix’ or ‘circuit’
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – register for circuit construction where eigenvalues will be stored.

**Returns**

object for the eigenvalue estimation circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**NotImplementedError** – not implemented
