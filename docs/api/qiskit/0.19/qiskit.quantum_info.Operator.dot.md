---
title: dot
description: API reference for qiskit.quantum_info.Operator.dot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Operator.dot
---

# dot

<span id="qiskit.quantum_info.Operator.dot" />

`Operator.dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

[Operator](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if other cannot be converted to an Operator or has incompatible dimensions.

