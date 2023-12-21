---
title: find_inverse_gates
description: API reference for qiskit.ignis.verification.DihedralUtils.find_inverse_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.DihedralUtils.find_inverse_gates
---

# find\_inverse\_gates

<span id="qiskit.ignis.verification.DihedralUtils.find_inverse_gates" />

`DihedralUtils.find_inverse_gates(num_qubits, elem)`

Find the inverse of a CNOT-dihedral element.

**Parameters**

*   **num\_qubits** (*int*) – the dimension of the CNOTDihedral element.
*   **elem** ([*CNOTDihedral*](qiskit.ignis.verification.CNOTDihedral "qiskit.ignis.verification.CNOTDihedral")) – an element in the CNOTDihedral group table.

**Returns**

An inverse list of gates.

**Return type**

list

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

