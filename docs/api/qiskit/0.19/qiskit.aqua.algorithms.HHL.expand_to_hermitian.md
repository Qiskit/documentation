---
title: expand_to_hermitian
description: API reference for qiskit.aqua.algorithms.HHL.expand_to_hermitian
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.HHL.expand_to_hermitian
---

# expand\_to\_hermitian

<span id="qiskit.aqua.algorithms.HHL.expand_to_hermitian" />

`static HHL.expand_to_hermitian(matrix, vector)`

Expand a non-hermitian matrix A to a hermitian matrix by \[\[0, A.H], \[A, 0]] and expand vector b to \[b.conj, b].

**Parameters**

*   **matrix** (*np.array*) – the input matrix
*   **vector** (*np.array*) – the input vector

**Returns**

the expanded matrix, the expanded vector

**Return type**

tuple(np.array, np.array)

