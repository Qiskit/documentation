# qiskit.aqua.circuits.PhaseEstimationCircuit.construct\_circuit

`PhaseEstimationCircuit.construct_circuit(state_register=None, ancillary_register=None, auxiliary_register=None, measurement=False)`

Construct the Phase Estimation circuit

**Parameters**

*   **state\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the optional register to use for the quantum state
*   **ancillary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the optional register to use for
*   **ancillary measurement qubits** (*the*) –
*   **auxiliary\_register** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – an optional auxiliary quantum register
*   **measurement** (*bool*) – Boolean flag to indicate if measurement should be included
*   **the circuit.** (*in*) –

**Returns**

the QuantumCircuit object for the constructed circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **RuntimeError** – Multiple identity pauli terms are present
*   **ValueError** – invalid mode
