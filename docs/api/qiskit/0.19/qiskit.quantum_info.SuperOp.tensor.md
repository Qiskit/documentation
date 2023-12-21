---
title: tensor
description: API reference for qiskit.quantum_info.SuperOp.tensor
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SuperOp.tensor
---

# tensor

<span id="qiskit.quantum_info.SuperOp.tensor" />

`SuperOp.tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel self ⊗ other as a SuperOp object.

**Return type**

[SuperOp](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

