---
title: dot
description: API reference for qiskit.quantum_info.SparsePauliOp.dot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.dot
---

# dot

<span id="qiskit.quantum_info.SparsePauliOp.dot" />

`SparsePauliOp.dot(other, qargs=None)`

Return the composition channel self∘other.

**Parameters**

*   **other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to compose other on.

**Returns**

The composed operator.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

*   **QiskitError** – if other cannot be converted to an Operator or has
*   **incompatible dimensions.** –

