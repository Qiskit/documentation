---
title: dot
description: API reference for qiskit.quantum_info.Stinespring.dot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Stinespring.dot
---

# dot

<span id="qiskit.quantum_info.Stinespring.dot" />

`Stinespring.dot(other, qargs=None)`

Return the right multiplied quantum channel self \* other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The quantum channel self \* other.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to a Stinespring or has incompatible dimensions.

