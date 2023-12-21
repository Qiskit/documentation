---
title: power
description: API reference for qiskit.providers.aer.noise.QuantumError.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.QuantumError.power
---

# power

<span id="qiskit.providers.aer.noise.QuantumError.power" />

`QuantumError.power(n)`

Return the compose of a error channel with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition error channel.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if the power is not a positive integer.

