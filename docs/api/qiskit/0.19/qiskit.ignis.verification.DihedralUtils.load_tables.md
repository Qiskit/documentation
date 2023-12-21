---
title: load_tables
description: API reference for qiskit.ignis.verification.DihedralUtils.load_tables
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.DihedralUtils.load_tables
---

# load\_tables

<span id="qiskit.ignis.verification.DihedralUtils.load_tables" />

`DihedralUtils.load_tables(num_qubits)`

Return the CNOT dihedral group tables.

**Parameters**

**num\_qubits** (*int*) – number of qubits for the CNOTDihedral object.

**Returns**

A table of all the CNOTDihedral objects.

**Return type**

dict

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

