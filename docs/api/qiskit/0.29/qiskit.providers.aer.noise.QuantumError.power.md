# qiskit.providers.aer.noise.QuantumError.power

`QuantumError.power(n)`

Return the compose of a error channel with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition error channel.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

**NoiseError** – if the power is not a positive integer.
