---
title: expand
description: API reference for qiskit.quantum_info.SuperOp.expand
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SuperOp.expand
---

# expand

<span id="qiskit.quantum_info.SuperOp.expand" />

`SuperOp.expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel other ⊗ self as a SuperOp object.

**Return type**

[SuperOp](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

