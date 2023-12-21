---
title: error_term
description: API reference for qiskit.providers.aer.noise.QuantumError.error_term
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.QuantumError.error_term
---

# error\_term

<span id="qiskit.providers.aer.noise.QuantumError.error_term" />

`QuantumError.error_term(position)`

Return a single term from the error.

**Parameters**

**position** (*int*) – the position of the error term.

**Returns**

A pair (p, circuit) for error term at position \< size where p is the probability of the error term, and circuit is the list of qobj instructions for the error term.

**Return type**

tuple

**Raises**

*   **NoiseError** – If the position is greater than the size of
*   **the quantum error.** –

