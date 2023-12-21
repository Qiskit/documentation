---
title: cx_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.cx_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.cx_gates
---

# cx\_gates

<span id="qiskit.ignis.verification.CliffordUtils.cx_gates" />

`CliffordUtils.cx_gates(gatelist, ctrl, tgt)`

Adds a controlled-x gate on qubits ctrl and tgt to a given list of gates.

**Parameters**

*   **gatelist** (*list*) – a list of gates.
*   **ctrl** (*int*) – an index of the control qubit.
*   **tgt** (*int*) – an index of the target qubit.

**Returns**

A list of gates, after appending a controlled-x gate on two qubits.

**Return type**

list

