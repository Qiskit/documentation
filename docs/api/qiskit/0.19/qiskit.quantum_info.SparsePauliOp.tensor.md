---
title: tensor
description: API reference for qiskit.quantum_info.SparsePauliOp.tensor
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.tensor
---

# tensor

<span id="qiskit.quantum_info.SparsePauliOp.tensor" />

`SparsePauliOp.tensor(other)`

Return the tensor product operator self ⊗ other.

**Parameters**

**other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – a operator subclass object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if other cannot be converted to a SparsePauliOp operator.

