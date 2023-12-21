# qiskit.providers.aer.noise.ReadoutError.expand

`ReadoutError.expand(other)`

Return the tensor product readout error self ⊗ other.

**Parameters**

**other** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – a readout error.

**Returns**

the tensor product readout error other ⊗ self.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if other is not a ReadoutError.
