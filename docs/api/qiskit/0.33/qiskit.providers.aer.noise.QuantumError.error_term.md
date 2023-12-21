# qiskit.providers.aer.noise.QuantumError.error\_term

`QuantumError.error_term(position)`

Return a single term from the error.

**Parameters**

**position** (*int*) – the position of the error term.

**Returns**

A pair (circuit, p) for error term at position \< size where p is the probability of the error term, and circuit is the list of qobj instructions for the error term.

**Return type**

tuple

**Raises**

*   **NoiseError** – If the position is greater than the size of
*   **the quantum error.** –
