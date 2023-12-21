---
title: update_x
description: API reference for qiskit.quantum_info.Pauli.update_x
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Pauli.update_x
---

# update\_x

<span id="qiskit.quantum_info.Pauli.update_x" />

`Pauli.update_x(x, indices=None)`

Update partial or entire x.

**Parameters**

*   **x** (*numpy.ndarray or list*) – to-be-updated x
*   **indices** (*numpy.ndarray or list or optional*) – to-be-updated qubit indices

**Returns**

self

**Return type**

[Pauli](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")

**Raises**

**QiskitError** – when updating whole x, the number of qubits must be the same.

