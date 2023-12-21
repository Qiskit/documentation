---
title: compose
description: API reference for qiskit.quantum_info.ScalarOp.compose
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.ScalarOp.compose
---

# compose

<span id="qiskit.quantum_info.ScalarOp.compose" />

`ScalarOp.compose(other, qargs=None, front=False)`

Return the composed operator.

**Parameters**

*   **other** (*BaseOperator*) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The operator self @ other.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if other has incompatible dimensions for specified subsystems.

## Additional Information:

Composition (`@`) is defined as left matrix multiplication for matrix operators. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot") method.

