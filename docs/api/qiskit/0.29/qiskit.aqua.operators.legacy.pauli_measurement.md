# qiskit.aqua.operators.legacy.pauli\_measurement

<span id="undefined" />

`pauli_measurement(circuit, pauli, qr, cr, barrier=False)`

Add the proper post-rotation gate on the circuit.

**Parameters**

*   **circuit** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – the circuit to be modified.
*   **pauli** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the pauli will be added.
*   **qr** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – the quantum register associated with the circuit.
*   **cr** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")) – the classical register associated with the circuit.
*   **barrier** (*bool, optional*) – whether or not add barrier before measurement.

**Returns**

the original circuit object with post-rotation gate

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
