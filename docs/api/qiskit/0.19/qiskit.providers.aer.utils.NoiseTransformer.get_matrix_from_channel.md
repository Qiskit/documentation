---
title: get_matrix_from_channel
description: API reference for qiskit.providers.aer.utils.NoiseTransformer.get_matrix_from_channel
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.utils.NoiseTransformer.get_matrix_from_channel
---

# get\_matrix\_from\_channel

<span id="qiskit.providers.aer.utils.NoiseTransformer.get_matrix_from_channel" />

`static NoiseTransformer.get_matrix_from_channel(channel, symbol)`

Extract the numeric parameter matrix.

**Parameters**

*   **channel** (*matrix*) – a 4x4 symbolic matrix.
*   **symbol** (*list*) – a symbol xi

**Returns**

a 4x4 numeric matrix.

**Return type**

matrix

## Additional Information:

Each entry of the 4x4 symbolic input channel matrix is assumed to be a polynomial of the form a1x1 + … + anxn + c. The corresponding entry in the output numeric matrix is ai.

