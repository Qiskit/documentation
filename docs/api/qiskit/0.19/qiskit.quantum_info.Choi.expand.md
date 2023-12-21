---
title: expand
description: API reference for qiskit.quantum_info.Choi.expand
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Choi.expand
---

# expand

<span id="qiskit.quantum_info.Choi.expand" />

`Choi.expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel other ⊗ self as a Choi object.

**Return type**

[Choi](qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

