---
title: expand
description: API reference for qiskit.providers.aer.noise.ReadoutError.expand
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.ReadoutError.expand
---

# expand

<span id="qiskit.providers.aer.noise.ReadoutError.expand" />

`ReadoutError.expand(other)`

Return the tensor product readout error self ⊗ other.

**Parameters**

**other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

the tensor product readout error other ⊗ self.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if other is not a ReadoutError.

