---
title: expand
description: API reference for qiskit.quantum_info.SparsePauliOp.expand
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.SparsePauliOp.expand
---

# expand

<span id="qiskit.quantum_info.SparsePauliOp.expand" />

`SparsePauliOp.expand(other)`

Return the tensor product operator other ⊗ self.

**Parameters**

**other** ([*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")) – an operator object.

**Returns**

the tensor product operator other ⊗ self.

**Return type**

[SparsePauliOp](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")

**Raises**

**QiskitError** – if other cannot be converted to a SparsePauliOp operator.

