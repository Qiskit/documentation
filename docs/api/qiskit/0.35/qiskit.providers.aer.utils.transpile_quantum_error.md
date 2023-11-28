# qiskit.providers.aer.utils.transpile\_quantum\_error

<span id="undefined" />

`transpile_quantum_error(error, **transpile_kwargs)`

Return a new quantum error containin transpiled circuits.

This returns a new QuantumError containing the circuits resulting from transpiling all error circuits using `qiskit.transpile()` with the passed keyword agruments.

**Parameters**

*   **error** (`QuantumError`) – the quantum error to be transformed.
*   **transpile\_kwargs** – kwargs for passing to qiskit transpile function.

**Return type**

`QuantumError`

**Returns**

The transformed quantum error.

**Raises**

**NoiseError** – if the transformation failed.
