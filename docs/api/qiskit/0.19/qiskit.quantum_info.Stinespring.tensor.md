---
title: tensor
description: API reference for qiskit.quantum_info.Stinespring.tensor
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.Stinespring.tensor
---

# tensor

<span id="qiskit.quantum_info.Stinespring.tensor" />

`Stinespring.tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel subclass.

**Returns**

the tensor product channel other ⊗ self as a Stinespring object.

**Return type**

[Stinespring](qiskit.quantum_info.Stinespring "qiskit.quantum_info.Stinespring")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

