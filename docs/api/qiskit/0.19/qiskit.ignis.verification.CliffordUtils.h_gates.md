---
title: h_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.h_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.h_gates
---

# h\_gates

<span id="qiskit.ignis.verification.CliffordUtils.h_gates" />

`CliffordUtils.h_gates(gatelist, q, h)`

Append a hadamard gate on qubit q to a given list of gates.

**Parameters**

*   **gatelist** (*list*) – a list of gates.

*   **q** (*int*) – an index of the qubit.

*   **h** (*int*) –

    an integer indicating whether or not to apply a hadamard gate:

    *   1 - for H gate.
    *   0 - no H gate.

**Returns**

A list of gates, after appending a hadamard gate on qubit q.

**Return type**

list

