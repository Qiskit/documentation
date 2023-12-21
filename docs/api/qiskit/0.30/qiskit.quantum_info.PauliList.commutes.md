# qiskit.quantum\_info.PauliList.commutes

`PauliList.commutes(other, qargs=None)`

Return True for each Pauli that commutes with other.

**Parameters**

*   **other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another PauliList operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s commute, False if they anti-commute.

**Return type**

bool
