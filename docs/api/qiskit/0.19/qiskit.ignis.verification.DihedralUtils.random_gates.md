---
title: random_gates
description: API reference for qiskit.ignis.verification.DihedralUtils.random_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.DihedralUtils.random_gates
---

# random\_gates

<span id="qiskit.ignis.verification.DihedralUtils.random_gates" />

`DihedralUtils.random_gates(num_qubits)`

Pick a random CNOT-dihedral element on num\_qubits.

**Parameters**

**num\_qubits** (*int*) – number of qubits of the CNOTDihedral object.

**Returns**

A CNOTDihedral object.

**Return type**

[CNOTDihedral](qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

