# qiskit.quantum\_info.PauliList.delete

`PauliList.delete(ind, qubit=False)`

Return a copy with Pauli rows deleted from table.

When deleting qubits the qubit index is the same as the column index of the underlying `X` and `Z` arrays.

**Parameters**

*   **ind** (*int or list*) – index(es) to delete.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Pauli rows (Default: False).

**Returns**

the resulting table with the entries removed.

**Return type**

[PauliList](qiskit.quantum_info.PauliList#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList")

**Raises**

**QiskitError** – if ind is out of bounds for the array size or number of qubits.
