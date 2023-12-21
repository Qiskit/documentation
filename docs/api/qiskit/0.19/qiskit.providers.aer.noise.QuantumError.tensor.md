---
title: tensor
description: API reference for qiskit.providers.aer.noise.QuantumError.tensor
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.QuantumError.tensor
---

# tensor

<span id="qiskit.providers.aer.noise.QuantumError.tensor" />

`QuantumError.tensor(other)`

Return the tensor product quantum error channel self ⊗ other.

**Parameters**

**other** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

the tensor product error channel self ⊗ other.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if other cannot be converted to a QuantumError.

