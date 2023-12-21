---
title: compose
description: API reference for qiskit.providers.aer.noise.QuantumError.compose
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.QuantumError.compose
---

# compose

<span id="qiskit.providers.aer.noise.QuantumError.compose" />

`QuantumError.compose(other, front=False)`

Return the composition error channel other \* self.

Note that for front=True this is equivalent to the [`QuantumError.dot()`](qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot") method.

**Parameters**

*   **other** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.
*   **front** (*bool*) – If True return the reverse order composation self \* other instead \[default: False].

**Returns**

The composition error channel.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if other cannot be converted into a QuantumError,
*   **or has incompatible dimensions.** –

