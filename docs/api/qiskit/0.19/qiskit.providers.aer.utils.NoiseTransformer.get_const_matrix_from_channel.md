---
title: get_const_matrix_from_channel
description: API reference for qiskit.providers.aer.utils.NoiseTransformer.get_const_matrix_from_channel
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.utils.NoiseTransformer.get_const_matrix_from_channel
---

# get\_const\_matrix\_from\_channel

<span id="qiskit.providers.aer.utils.NoiseTransformer.get_const_matrix_from_channel" />

`static NoiseTransformer.get_const_matrix_from_channel(channel, symbols)`

Extract the numeric constant matrix.

**Parameters**

*   **channel** (*matrix*) – a 4x4 symbolic matrix.
*   **symbols** (*list*) – The full list \[x1, …, xn] of symbols used in the matrix.

**Returns**

a 4x4 numeric matrix.

**Return type**

matrix

## Additional Information:

Each entry of the 4x4 symbolic input channel matrix is assumed to be a polynomial of the form a1x1 + … + anxn + c. The corresponding entry in the output numeric matrix is c.

