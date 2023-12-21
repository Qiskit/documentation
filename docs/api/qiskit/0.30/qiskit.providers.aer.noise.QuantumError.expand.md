# qiskit.providers.aer.noise.QuantumError.expand

`QuantumError.expand(other)`

Return the tensor product quantum error channel self ⊗ other.

**Parameters**

**other** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – a quantum error channel.

**Returns**

the tensor product error channel other ⊗ self.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if other cannot be converted to a QuantumError.
