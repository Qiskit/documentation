# qiskit.quantum\_info.PauliList.compose

`PauliList.compose(other, qargs=None, front=False, inplace=False)`

Return the composition self∘other for each Pauli in the list.

**Parameters**

*   **other** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – another PauliList.
*   **qargs** (*None or list*) – qubits to apply dot product on (Default: None).
*   **front** (*bool*) – If True use dot composition method \[default: False].
*   **inplace** (*bool*) – If True update in-place (default: False).

**Returns**

the list of composed Paulis.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

**Raises**

**QiskitError** – if other cannot be converted to a PauliList, does not have either 1 or the same number of Paulis as the current list, or has the wrong number of qubits for the specified qargs.
