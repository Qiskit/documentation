---
title: compose
description: API reference for qiskit.providers.aer.noise.ReadoutError.compose
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.ReadoutError.compose
---

# compose

<span id="qiskit.providers.aer.noise.ReadoutError.compose" />

`ReadoutError.compose(other, front=False)`

Return the composition readout error other \* self.

Note that for front=True this is equivalent to the [`ReadoutError.dot()`](qiskit.providers.aer.noise.ReadoutError.dot "qiskit.providers.aer.noise.ReadoutError.dot") method.

**Parameters**

*   **other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.
*   **front** (*bool*) – If True return the reverse order composation self \* other instead \[default: False].

**Returns**

The composition readout error.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

*   **NoiseError** – if other is not a ReadoutError or has incompatible
*   **dimensions.** –

