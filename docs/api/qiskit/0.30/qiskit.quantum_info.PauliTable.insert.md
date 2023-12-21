# qiskit.quantum\_info.PauliTable.insert

`PauliTable.insert(ind, value, qubit=False)`

Insert Pauli’s into the table.

When inserting qubits the qubit index is the same as the column index of the underlying [`X`](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable.X "qiskit.quantum_info.PauliTable.X") and [`Z`](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable.Z "qiskit.quantum_info.PauliTable.Z") arrays.

**Parameters**

*   **ind** (*int*) – index to insert at.
*   **value** ([*PauliTable*](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – values to insert.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Pauli rows (Default: False).

**Returns**

the resulting table with the entries inserted.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if the insertion index is invalid.
