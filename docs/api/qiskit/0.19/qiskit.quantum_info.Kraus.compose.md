---
title: compose
description: API reference for qiskit.quantum_info.Kraus.compose
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Kraus.compose
---

# compose

<span id="qiskit.quantum_info.Kraus.compose" />

`Kraus.compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[Kraus](qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if other cannot be converted to a Kraus or has incompatible dimensions.

## Additional Information:

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.quantum_info.Kraus.dot "qiskit.quantum_info.Kraus.dot") method.

