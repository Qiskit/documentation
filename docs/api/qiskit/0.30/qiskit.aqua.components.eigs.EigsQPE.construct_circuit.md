# qiskit.aqua.components.eigs.EigsQPE.construct\_circuit

`EigsQPE.construct_circuit(mode, register=None)`

Construct the eigenvalues estimation using the PhaseEstimationCircuit

**Parameters**

*   **mode** (*str*) – construction mode, ‘matrix’ not supported
*   **register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the register to use for the quantum state

**Returns**

object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ValueError** – QPE is only possible as a circuit not as a matrix
