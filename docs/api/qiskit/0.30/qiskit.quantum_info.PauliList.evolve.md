# qiskit.quantum\_info.PauliList.evolve

`PauliList.evolve(other, qargs=None)`

Evolve the Pauli by a Clifford.

This returns the Pauli $P^\prime = C.P.C^\dagger$.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The Clifford operator to evolve by.
*   **qargs** (*list*) – a list of qubits to apply the Clifford to.

**Returns**

the Pauli $C.P.C^\dagger$.

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the Clifford number of qubits and qargs don’t match.
