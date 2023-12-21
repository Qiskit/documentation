# qiskit.ignis.verification.AccreditationCircuits.target\_circuit

`AccreditationCircuits.target_circuit(target_circ, two_qubit_gate='cx', coupling_map=None)`

Load target circuit in to class, and parse into layers

**Parameters**

*   **target\_circ** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – a qiskit circuit to accredit
*   **two\_qubit\_gate** (*string*) – a flag as to which 2 qubit gate to compile with, can be cx or cz
*   **coupling\_map** (*list*) – some particular device topology as list of list (e.g. \[\[0,1],\[1,2],\[2,0]])
