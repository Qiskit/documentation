# qiskit.quantum\_info.PauliList.anticommutes

`PauliList.anticommutes(other, qargs=None)`

Return True if other Pauli that anticommutes with other.

**Parameters**

*   **other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another PauliList operator.
*   **qargs** (*list*) – qubits to apply dot product on (default: None).

**Returns**

True if Pauli’s anticommute, False if they commute.

**Return type**

bool
