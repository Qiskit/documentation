# qiskit.quantum\_info.Pauli.insert

`Pauli.insert(qubits, value)`

Insert a Pauli at specific qubit value.

**Parameters**

*   **qubits** (*int or list*) – qubits index to insert at.
*   **value** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – value to insert.

**Returns**

the resulting Pauli with the entries inserted.

**Return type**

[Pauli](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – if the insertion qubits are invalid.
