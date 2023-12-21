---
title: random_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.random_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.random_gates
---

# random\_gates

<span id="qiskit.ignis.verification.CliffordUtils.random_gates" />

`CliffordUtils.random_gates(num_qubits, rand_seed=None)`

Pick a random Clifford gate on num\_qubits.

**Parameters**

*   **num\_qubits** (*int*) – dimension of the Clifford.
*   **rand\_seed** (*int*) – seed for the random number generator

**Returns**

A 1 or 2 qubit random Clifford gate.

**Return type**

list

**Raises**

*   **ValueError** – number of qubits bigger than 2 is not supported.
*   **TypeError** – If rand\_seed is not an integer

