---
title: elem_to_gates
description: API reference for qiskit.ignis.verification.DihedralUtils.elem_to_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.DihedralUtils.elem_to_gates
---

# elem\_to\_gates

<span id="qiskit.ignis.verification.DihedralUtils.elem_to_gates" />

`DihedralUtils.elem_to_gates(circ)`

Convert a CNOT-dihedral list of gates for the QuantumCircuit.

**Parameters**

**circ** (*list*) – list of gates of an element in the CNOT-dihedral group (from the group table).

**Returns**

List of gates for the QuantumCircuit.

**Return type**

list

**Raises**

**ValueError** – unknown gate type.

