# qiskit.aqua.circuits.StateVectorCircuit.construct\_circuit

`StateVectorCircuit.construct_circuit(circuit=None, register=None)`

Construct the circuit representing the desired state vector.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The optional circuit to extend from.
*   **register** (*Union(*[*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *, list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*])*) – The optional qubits to construct the circuit with.

**Returns**

quantum circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – invalid input
