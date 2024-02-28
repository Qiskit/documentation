---
title: kraus_error
description: API reference for qiskit.providers.aer.noise.kraus_error
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.noise.kraus_error
---

# qiskit.providers.aer.noise.kraus\_error

<span id="qiskit.providers.aer.noise.kraus_error" />

`kraus_error(noise_ops, standard_gates=True, canonical_kraus=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.9/qiskit/providers/aer/noise/errors/standard_errors.py "view source code")

Return a Kraus quantum error channel.

**Parameters**

*   **noise\_ops** (*list\[matrix]*) – Kraus matrices.
*   **standard\_gates** (*bool*) – Check if input matrices are standard gates.
*   **canonical\_kraus** (*bool*) – Convert input Kraus matrices into the canonical Kraus representation (default: False)

**Returns**

The quantum error object.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if error parameters are invalid.

