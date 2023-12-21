---
title: power
description: API reference for qiskit.providers.aer.noise.ReadoutError.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.ReadoutError.power
---

# power

<span id="qiskit.providers.aer.noise.ReadoutError.power" />

`ReadoutError.power(n)`

Return the compose of the readout error with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition channel.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if the power is not a positive integer.

