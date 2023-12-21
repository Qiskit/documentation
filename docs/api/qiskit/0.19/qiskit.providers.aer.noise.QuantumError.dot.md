---
title: dot
description: API reference for qiskit.providers.aer.noise.QuantumError.dot
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.QuantumError.dot
---

# dot

<span id="qiskit.providers.aer.noise.QuantumError.dot" />

`QuantumError.dot(other)`

Return the composition error channel self \* other.

**Parameters**

**other** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

The composition error channel.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if other cannot be converted into a QuantumError,
*   **or has incompatible dimensions.** –

