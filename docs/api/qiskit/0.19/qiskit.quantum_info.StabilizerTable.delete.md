---
title: delete
description: API reference for qiskit.quantum_info.StabilizerTable.delete
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.StabilizerTable.delete
---

# delete

<span id="qiskit.quantum_info.StabilizerTable.delete" />

`StabilizerTable.delete(ind, qubit=False)`

Return a copy with Stabilizer rows deleted from table.

When deleting qubit columns, qubit-0 is the right-most (largest index) column, and qubit-(N-1) is the left-most (0 index) column of the underlying [`X`](qiskit.quantum_info.StabilizerTable.X "qiskit.quantum_info.StabilizerTable.X") and [`Z`](qiskit.quantum_info.StabilizerTable.Z "qiskit.quantum_info.StabilizerTable.Z") arrays.

**Parameters**

*   **ind** (*int or list*) – index(es) to delete.
*   **qubit** (*bool*) – if True delete qubit columns, otherwise delete Stabilizer rows (Default: False).

**Returns**

the resulting table with the entries removed.

**Return type**

[StabilizerTable](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable")

**Raises**

**QiskitError** – if ind is out of bounds for the array size or number of qubits.

