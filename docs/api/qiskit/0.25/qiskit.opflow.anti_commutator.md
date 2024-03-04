---
title: anti_commutator
description: API reference for qiskit.opflow.anti_commutator
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.opflow.anti_commutator
---

# qiskit.opflow\.anti\_commutator

<span id="qiskit.opflow.anti_commutator" />

`anti_commutator(op_a, op_b)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/opflow/utils.py "view source code")

Compute anti-commutator of op\_a and op\_b.

$$
AB + BA.
$$

**Parameters**

*   **op\_a** (`OperatorBase`) – Operator A
*   **op\_b** (`OperatorBase`) – Operator B

**Returns**

the anti-commutator

**Return type**

[OperatorBase](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.OperatorBase")

