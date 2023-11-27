# qiskit.providers.aer.noise.mixed\_unitary\_error[¶](#qiskit-providers-aer-noise-mixed-unitary-error "Permalink to this headline")

<span id="undefined" />

`mixed_unitary_error(noise_ops, standard_gates=None)`

Return a mixed unitary quantum error channel.

The input should be a list of pairs `(U[j], p[j])`, where `U[j]` is a unitary matrix and `p[j]` is a probability. All probabilities must sum to 1 for the input ops to be valid.

**Parameters**

*   **noise\_ops** (*list\[pair\[matrix, double]]*) – unitary error matrices.
*   **standard\_gates** (*bool*) – DEPRECATED, Check if input matrices are standard gates.

**Returns**

The quantum error object.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if error parameters are invalid.
