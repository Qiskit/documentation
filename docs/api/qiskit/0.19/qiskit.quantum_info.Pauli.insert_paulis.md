---
title: insert_paulis
description: API reference for qiskit.quantum_info.Pauli.insert_paulis
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Pauli.insert_paulis
---

# insert\_paulis

<span id="qiskit.quantum_info.Pauli.insert_paulis" />

`Pauli.insert_paulis(indices=None, paulis=None, pauli_labels=None)`

Insert or append pauli to the targeted indices.

If indices is None, it means append at the end.

**Parameters**

*   **indices** (*list\[int]*) – the qubit indices to be inserted
*   **paulis** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")) – the to-be-inserted or appended pauli
*   **pauli\_labels** (*list\[str]*) – the to-be-inserted or appended pauli label

<Admonition title="Note" type="note">
  the indices refers to the location of original paulis, e.g. if indices = \[0, 2], pauli\_labels = \[‘Z’, ‘I’] and original pauli = ‘ZYXI’ the pauli will be updated to ZY’I’XI’Z’ ‘Z’ and ‘I’ are inserted before the qubit at 0 and 2.
</Admonition>

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – provide both paulis and pauli\_labels at the same time

