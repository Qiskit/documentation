---
title: from_label
description: API reference for qiskit.quantum_info.Pauli.from_label
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Pauli.from_label
---

# from\_label

<span id="qiskit.quantum_info.Pauli.from_label" />

`classmethod Pauli.from_label(label)`

Take pauli string to construct pauli.

The qubit index of pauli label is q\_\{n-1} … q\_0. E.g., a pauli is \$P\_\{n-1} otimes … otimes P\_0\$

**Parameters**

**label** (*str*) – pauli label

**Returns**

the constructed pauli

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – invalid character in the label

