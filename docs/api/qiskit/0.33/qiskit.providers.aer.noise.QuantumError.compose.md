# qiskit.providers.aer.noise.QuantumError.compose

`QuantumError.compose(other, front=False)`

Return the composition error channel other \* self.

Note that for front=True this is equivalent to the [`QuantumError.dot()`](qiskit.providers.aer.noise.QuantumError.dot#qiskit.providers.aer.noise.QuantumError.dot "qiskit.providers.aer.noise.QuantumError.dot") method.

**Parameters**

*   **other** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.
*   **front** (*bool*) – If True return the reverse order composation self \* other instead \[default: False].

**Returns**

The composition error channel.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if other cannot be converted into a QuantumError,
*   **or has incompatible dimensions.** –
