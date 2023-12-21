---
title: clifford_from_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.clifford_from_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.clifford_from_gates
---

# clifford\_from\_gates

<span id="qiskit.ignis.verification.CliffordUtils.clifford_from_gates" />

`CliffordUtils.clifford_from_gates(num_qubits, gatelist)`

Generate a Clifford object from a list of gates.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the Clifford.
*   **gatelist** (*list*) – a list of gates.

**Returns**

A Clifford class object corresponding to composing the given list of gates.

**Return type**

[Clifford](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")

