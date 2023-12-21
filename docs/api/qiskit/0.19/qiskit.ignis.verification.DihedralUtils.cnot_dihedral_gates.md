---
title: cnot_dihedral_gates
description: API reference for qiskit.ignis.verification.DihedralUtils.cnot_dihedral_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.DihedralUtils.cnot_dihedral_gates
---

# cnot\_dihedral\_gates

<span id="qiskit.ignis.verification.DihedralUtils.cnot_dihedral_gates" />

`DihedralUtils.cnot_dihedral_gates(idx, G_table, G_keys)`

Make a single CNOT-dihedral element on num\_qubits.

**Parameters**

*   **idx** (*int*) – a unique index of a single CNOT-dihedral element.
*   **G\_table** (*dict*) – the CNOT-dihedral group table on num\_qubits.
*   **G\_keys** (*list*) – list of keys to the CNOT-dihedral group table.

**Returns**

A single CNOT-dihedral element on num\_qubits.

**Return type**

[CNOTDihedral](qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")

