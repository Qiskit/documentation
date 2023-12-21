# qiskit.providers.aer.noise.QuantumError.dot

`QuantumError.dot(other)`

Return the composition error channel self \* other.

**Parameters**

**other** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

The composition error channel.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if other cannot be converted into a QuantumError,
*   **or has incompatible dimensions.** –
