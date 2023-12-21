---
title: update_z
description: API reference for qiskit.quantum_info.Pauli.update_z
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Pauli.update_z
---

# update\_z

<span id="qiskit.quantum_info.Pauli.update_z" />

`Pauli.update_z(z, indices=None)`

Update partial or entire z.

**Parameters**

*   **z** (*numpy.ndarray or list*) – to-be-updated z
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole z, the number of qubits must be the same.

