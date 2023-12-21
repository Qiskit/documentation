---
title: compute_channel_operation
description: API reference for qiskit.providers.aer.utils.NoiseTransformer.compute_channel_operation
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.utils.NoiseTransformer.compute_channel_operation
---

# compute\_channel\_operation

<span id="qiskit.providers.aer.utils.NoiseTransformer.compute_channel_operation" />

`static NoiseTransformer.compute_channel_operation(rho, operators)`

Given a quantum state’s density function rho, the effect of the channel on this state is: rho -> sum\_\{i=1}^n E\_i \* rho \* E\_i^dagger

**Parameters**

*   **rho** (*number*) – Density function
*   **operators** (*list*) – List of operators

**Returns**

The result of applying the list of operators

**Return type**

number

