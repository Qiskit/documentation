---
title: simplify
description: API reference for qiskit.quantum_info.SparsePauliOp.simplify
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.simplify
---

# simplify

<span id="qiskit.quantum_info.SparsePauliOp.simplify" />

`SparsePauliOp.simplify(atol=None, rtol=None)`

Simplify PauliTable by combining duplicaties and removing zeros.

**Parameters**

*   **atol** (*float*) – Optional. Absolute tolerance for checking if coefficients are zero (Default: 1e-8).
*   **rtol** (*float*) – Optinoal. relative tolerance for checking if coefficients are zero (Default: 1e-5).

**Returns**

the simplified SparsePauliOp operator.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

