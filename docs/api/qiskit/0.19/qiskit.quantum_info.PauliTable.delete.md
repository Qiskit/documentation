---
title: delete
description: API reference for qiskit.quantum_info.PauliTable.delete
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.delete
---

# delete

<span id="qiskit.quantum_info.PauliTable.delete" />

`PauliTable.delete(ind, qubit=False)`

Return a copy with Pauli rows deleted from table.

When deleting qubits the qubit index is the same as the column index of the underlying [`X`](qiskit.quantum_info.PauliTable.X "qiskit.quantum_info.PauliTable.X") and [`Z`](qiskit.quantum_info.PauliTable.Z "qiskit.quantum_info.PauliTable.Z") arrays.

**Parameters**

*   **ind** (*int or list*) – index(es) to delete.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Pauli rows (Default: False).

**Returns**

the resulting table with the entries removed.

**Return type**

[PauliTable](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")

**Raises**

**QiskitError** – if ind is out of bounds for the array size or number of qubits.

