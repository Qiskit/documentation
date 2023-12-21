# qiskit.quantum\_info.PauliList.insert

`PauliList.insert(ind, value, qubit=False)`

Insert Pauli’s into the table.

When inserting qubits the qubit index is the same as the column index of the underlying `X` and `Z` arrays.

**Parameters**

*   **ind** (*int*) – index to insert at.
*   **value** ([*PauliList*](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")) – values to insert.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Pauli rows (Default: False).

**Returns**

the resulting table with the entries inserted.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

**Raises**

**QiskitError** – if the insertion index is invalid.
