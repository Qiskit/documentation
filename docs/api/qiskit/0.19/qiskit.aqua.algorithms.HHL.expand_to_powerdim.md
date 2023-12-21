---
title: expand_to_powerdim
description: API reference for qiskit.aqua.algorithms.HHL.expand_to_powerdim
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.HHL.expand_to_powerdim
---

# expand\_to\_powerdim

<span id="qiskit.aqua.algorithms.HHL.expand_to_powerdim" />

`static HHL.expand_to_powerdim(matrix, vector)`

Expand a matrix to the next-larger 2\*\*n dimensional matrix with ones on the diagonal and zeros on the off-diagonal and expand the vector with zeros accordingly.

**Parameters**

*   **matrix** (*np.array*) – the input matrix
*   **vector** (*np.array*) – the input vector

**Returns**

the expanded matrix, the expanded vector

**Return type**

tuple(np.array, np.array)

