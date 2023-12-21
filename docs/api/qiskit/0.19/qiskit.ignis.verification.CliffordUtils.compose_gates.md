---
title: compose_gates
description: API reference for qiskit.ignis.verification.CliffordUtils.compose_gates
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CliffordUtils.compose_gates
---

# compose\_gates

<span id="qiskit.ignis.verification.CliffordUtils.compose_gates" />

`CliffordUtils.compose_gates(cliff, gatelist)`

Add gates to a Clifford object from a list of gates.

**Parameters**

*   **cliff** ([*Clifford*](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")) – a Clifford class object.
*   **gatelist** (*list*) – a list of gates.

**Returns**

A Clifford class object, after composing cliff and the gates from gatelist.

**Return type**

[Clifford](qiskit.ignis.verification.Clifford "qiskit.ignis.verification.Clifford")

**Raises**

**ValueError** – unknown gate type.

