# qiskit.providers.aer.noise.kraus\_error

<span id="undefined" />

`kraus_error(noise_ops, standard_gates=True, canonical_kraus=False)`

Return a Kraus quantum error channel.

**Parameters**

*   **noise\_ops** (*list\[matrix]*) – Kraus matrices.
*   **standard\_gates** (*bool*) – Check if input matrices are standard gates.
*   **canonical\_kraus** (*bool*) – Convert input Kraus matrices into the canonical Kraus representation (default: False)

**Returns**

The quantum error object.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if error parameters are invalid.
