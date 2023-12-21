---
title: pauli_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.pauli_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.pauli_gates
---

# pauli\_gates

<span id="qiskit.ignis.verification.CliffordUtils.pauli_gates" />

`CliffordUtils.pauli_gates(gatelist, q, pauli)`

Append a pauli gate on qubit q to a given list of gates.

**Parameters**

*   **gatelist** (*list*) – a list of gates.

*   **q** (*int*) – an index of the qubit.

*   **pauli** (*int*) –

    an integer indicating the pauli gate:

    *   1 - for pauli-Z gate.
    *   2 - for pauli-X gate.
    *   3 - for pauli-Y gate.

**Returns**

A list of gates, after appending a given pauli gate on qubit q.

**Return type**

list

