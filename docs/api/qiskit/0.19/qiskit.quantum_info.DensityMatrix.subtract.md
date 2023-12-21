---
title: subtract
description: API reference for qiskit.quantum_info.DensityMatrix.subtract
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.DensityMatrix.subtract
---

# subtract

<span id="qiskit.quantum_info.DensityMatrix.subtract" />

`DensityMatrix.subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `state - other` instead.

**Parameters**

**other** (*QuantumState*) – a quantum state object.

**Returns**

the linear combination self - other.

**Return type**

LinearOperator

**Raises**

**QiskitError** – if other is not a quantum state, or has incompatible dimensions.

