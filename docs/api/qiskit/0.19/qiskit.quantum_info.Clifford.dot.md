---
title: dot
description: API reference for qiskit.quantum_info.Clifford.dot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Clifford.dot
---

# dot

<span id="qiskit.quantum_info.Clifford.dot" />

`Clifford.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Clifford*](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

[Clifford](qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")

**Raises**

**QiskitError** – if operators have incompatible dimensions for composition.

