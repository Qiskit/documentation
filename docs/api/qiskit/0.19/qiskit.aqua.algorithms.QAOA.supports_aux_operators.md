---
title: supports_aux_operators
description: API reference for qiskit.aqua.algorithms.QAOA.supports_aux_operators
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.algorithms.QAOA.supports_aux_operators
---

# supports\_aux\_operators

<span id="qiskit.aqua.algorithms.QAOA.supports_aux_operators" />

`QAOA.supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

