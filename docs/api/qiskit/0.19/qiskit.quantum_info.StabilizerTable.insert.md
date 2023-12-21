---
title: insert
description: API reference for qiskit.quantum_info.StabilizerTable.insert
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.StabilizerTable.insert
---

# insert

<span id="qiskit.quantum_info.StabilizerTable.insert" />

`StabilizerTable.insert(ind, value, qubit=False)`

Insert stabilizers’s into the table.

When inserting qubit columns, qubit-0 is the right-most (largest index) column, and qubit-(N-1) is the left-most (0 index) column of the underlying [`X`](qiskit.quantum_info.StabilizerTable.X "qiskit.quantum_info.StabilizerTable.X") and [`Z`](qiskit.quantum_info.StabilizerTable.Z "qiskit.quantum_info.StabilizerTable.Z") arrays.

**Parameters**

*   **ind** (*int*) – index to insert at.
*   **value** ([*StabilizerTable*](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")) – values to insert.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Pauli rows (Default: False).

**Returns**

the resulting table with the entries inserted.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")

**Raises**

**QiskitError** – if the insertion index is invalid.

