# qiskit.providers.aer.noise.pauli\_error[¶](#qiskit-providers-aer-noise-pauli-error "Permalink to this headline")

<span id="undefined" />

`pauli_error(noise_ops, standard_gates=None)`

Return a mixed Pauli quantum error channel.

The input should be a list of pairs `(P[j], p[j])`, where `P[j]` is a `Pauli` object or string label, and `p[j]` is a probability. All probabilities must sum to 1 for the input ops to be valid.

**Parameters**

*   **noise\_ops** (*list\[pair\[*[*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")*, double]]*) – Pauli error terms.
*   **standard\_gates** (*bool*) – DEPRECATED, if True return the operators as standard qobj Pauli gate instructions. If false return as unitary matrix qobj instructions. (Default: None)

**Returns**

The quantum error object.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – If depolarizing probability is less than 0 or greater than 1.
