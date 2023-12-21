---
title: to_matrix
description: API reference for qiskit.aqua.operators.OperatorBase.to_matrix
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.OperatorBase.to_matrix
---

# to\_matrix

<span id="qiskit.aqua.operators.OperatorBase.to_matrix" />

`abstract OperatorBase.to_matrix(massive=False)`

Return NumPy representation of the Operator. Represents the evaluation of the Operator’s underlying function on every combination of basis binary strings. Warn if more than 16 qubits to force having to set `massive=True` if such a large vector is desired.

**Return type**

`ndarray`

**Returns**

The NumPy `ndarray` equivalent to this Operator.

