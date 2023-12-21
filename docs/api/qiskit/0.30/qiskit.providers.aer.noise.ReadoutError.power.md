# qiskit.providers.aer.noise.ReadoutError.power

`ReadoutError.power(n)`

Return the compose of the readout error with itself n times.

**Parameters**

**n** (*int*) – the number of times to compose with self (n>0).

**Returns**

the n-times composition channel.

**Return type**

[ReadoutError](qiskit.providers.aer.noise.ReadoutError#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")

**Raises**

**NoiseError** – if the power is not a positive integer.
