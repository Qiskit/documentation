---
title: transform_by_given_channel
description: API reference for qiskit.providers.aer.utils.NoiseTransformer.transform_by_given_channel
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.utils.NoiseTransformer.transform_by_given_channel
---

# transform\_by\_given\_channel

<span id="qiskit.providers.aer.utils.NoiseTransformer.transform_by_given_channel" />

`NoiseTransformer.transform_by_given_channel(channel_matrices, const_channel_matrix)`

Transform by by quantum channels.

This method creates objective function representing the Hilbert-Schmidt norm of the matrix (A-B) obtained as the difference of the input noise channel and the output channel we wish to determine.

This function is represented by a matrix P and a vector q, such that f(x) = 1/2(x\*P\*x)+q\*x where x is the vector we wish to minimize, where x represents probabilities for the noise operators that construct the output channel

**Parameters**

*   **channel\_matrices** (*list*) – A list of 4x4 symbolic matrices
*   **const\_channel\_matrix** (*matrix*) – a 4x4 constant matrix

**Returns**

a list of the optimal probabilities for the channel matrices, determined by the quadratic program solver

**Return type**

list

