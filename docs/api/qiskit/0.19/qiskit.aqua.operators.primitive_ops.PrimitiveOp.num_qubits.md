---
title: num_qubits
description: API reference for qiskit.aqua.operators.primitive_ops.PrimitiveOp.num_qubits
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.aqua.operators.primitive_ops.PrimitiveOp.num_qubits
---

# num\_qubits

<span id="qiskit.aqua.operators.primitive_ops.PrimitiveOp.num_qubits" />

`int`

The number of qubits over which the Operator is defined. If `op.num_qubits == 5`, then `op.eval('1' * 5)` will be valid, but `op.eval('11')` will not.

**Return type**

`int`

**Returns**

The number of qubits accepted by the Operator’s underlying function.

