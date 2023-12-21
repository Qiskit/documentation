---
title: find_inverse_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.find_inverse_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.find_inverse_gates
---

# find\_inverse\_gates

<span id="qiskit.ignis.verification.CliffordUtils.find_inverse_gates" />

`CliffordUtils.find_inverse_gates(num_qubits, gatelist)`

Find the inverse of a Clifford gate.

**Parameters**

*   **num\_qubits** (*int*) – dimension of the Clifford object.
*   **gatelist** (*list*) – a Clifford gate.

**Returns**

An inverse Clifford gate.

**Return type**

list

**Raises**

**ValueError** – number of qubits bigger than 2 is not supported.

