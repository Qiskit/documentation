---
title: v_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.v_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.v_gates
---

# v\_gates

<span id="qiskit.ignis.verification.CliffordUtils.v_gates" />

`CliffordUtils.v_gates(gatelist, q, v)`

Adds an axis-swap gate V or W on qubit q to a given list of gates.

The V gate is defined as: V=HSHS = \[\[0,1],\[1,1]]. It makes a rotation of the paulis: Z->X->Y->Z V is of order 3, and two V-gates is a W-gate, so: W=VV and WV=I.

**Parameters**

*   **gatelist** (*list*) – a list of gates.

*   **q** (*int*) – an index of the qubit.

*   **v** (*int*) –

    an integer indicating the gate:

    *   1 - for V gate.
    *   2 - for W gate.

**Returns**

A list of gates, after appending a gate V or W on qubit q.

**Return type**

list

