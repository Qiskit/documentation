# qiskit.providers.aer.noise.depolarizing\_error[¶](#qiskit-providers-aer-noise-depolarizing-error "Permalink to this headline")

<span id="undefined" />

`depolarizing_error(param, num_qubits, standard_gates=None)`

Return a depolarizing quantum error channel.

The depolarizing channel is defined as:

$$
E(ρ) = (1 - λ) ρ + λ \text{Tr}[ρ] \frac{I}{2^n}
$$

with $0 \le λ \le 4^n / (4^n - 1)$

where $λ$ is the depolarizing error param and :math\`n\` is the number of qubits.

*   If $λ = 0$ this is the identity channel $E(ρ) = ρ$
*   If $λ = 1$ this is a completely depolarizing channel $E(ρ) = I / 2^n$
*   If $λ = 4^n / (4^n - 1)$ this is a uniform Pauli error channel: $E(ρ) = \sum_j P_j ρ P_j / (4^n - 1)$ for all $P_j != I$.

**Parameters**

*   **param** (*double*) – depolarizing error parameter.
*   **num\_qubits** (*int*) – the number of qubits for the error channel.
*   **standard\_gates** (*bool*) – DEPRECATED, if True return the operators as Pauli gates. If false return as unitary gates. (Default: None)

**Returns**

The quantum error object.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – If noise parameters are invalid.
