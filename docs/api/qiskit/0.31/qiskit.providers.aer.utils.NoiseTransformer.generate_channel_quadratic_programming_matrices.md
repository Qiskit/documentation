# qiskit.providers.aer.utils.NoiseTransformer.generate\_channel\_quadratic\_programming\_matrices

`NoiseTransformer.generate_channel_quadratic_programming_matrices(channel, symbols)`

Generate matrices for quadratic program.

**Parameters**

*   **channel** (*Matrix*) – a 4x4 symbolic matrix
*   **symbols** (*list*) – the symbols x1, …, xn which may occur in the matrix

**Returns**

A list of 4x4 complex matrices (\[D1, D2, …, Dn], E) such that: channel == x1\*D1 + … + xn\*Dn + E

**Return type**

list
