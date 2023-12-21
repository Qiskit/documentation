# qiskit.quantum\_info.Pauli.commutes

`Pauli.commutes(other, qargs=None)`

Return True if the Pauli commutes with other.

**Parameters**

*   **other** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another Pauli operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s commute, False if they anti-commute.

**Return type**

bool
