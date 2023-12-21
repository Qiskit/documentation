---
title: argsort
description: API reference for qiskit.quantum_info.StabilizerTable.argsort
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.StabilizerTable.argsort
---

# argsort

<span id="qiskit.quantum_info.StabilizerTable.argsort" />

`StabilizerTable.argsort(weight=False)`

Return indices for sorting the rows of the PauliTable.

The default sort method is lexicographic sorting of Paulis by qubit number. By using the weight kwarg the output can additionally be sorted by the number of non-identity terms in the Stabilizer, where the set of all Pauli’s of a given weight are still ordered lexicographically.

This does not sort based on phase values. It will preserve the original order of rows with the same Pauli’s but different phases.

**Parameters**

**weight** (*bool*) – optionally sort by weight if True (Default: False).

**Returns**

the indices for sorting the table.

**Return type**

array

