---
title: expand
description: API reference for qiskit.quantum_info.Kraus.expand
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Kraus.expand
---

# expand

<span id="qiskit.quantum_info.Kraus.expand" />

`Kraus.expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel subclass.

**Returns**

the tensor product channel other ⊗ self as a Kraus object.

**Return type**

[Kraus](qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

