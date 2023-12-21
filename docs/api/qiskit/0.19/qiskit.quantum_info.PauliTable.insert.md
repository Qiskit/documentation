---
title: insert
description: API reference for qiskit.quantum_info.PauliTable.insert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.insert
---

# insert

<span id="qiskit.quantum_info.PauliTable.insert" />

`PauliTable.insert(ind, value, qubit=False)`

Insert Pauli’s into the table.

When inserting qubits the qubit index is the same as the column index of the underlying [`X`](qiskit.quantum_info.PauliTable.X "qiskit.quantum_info.PauliTable.X") and [`Z`](qiskit.quantum_info.PauliTable.Z "qiskit.quantum_info.PauliTable.Z") arrays.

**Parameters**

*   **ind** (*int*) – index to insert at.
*   **value** ([*PauliTable*](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – values to insert.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Pauli rows (Default: False).

**Returns**

the resulting table with the entries inserted.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if the insertion index is invalid.

