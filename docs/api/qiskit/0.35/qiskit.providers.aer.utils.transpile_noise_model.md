# qiskit.providers.aer.utils.transpile\_noise\_model

<span id="undefined" />

`transpile_noise_model(noise_model, **transpile_kwargs)`

Return a new noise model with transpiled QuantumErrors.

This returns a new noise model containing the resulting errors from transpiling all QuantumErrors in the noise model using [`transpile_quantum_error()`](qiskit.providers.aer.utils.transpile_quantum_error#qiskit.providers.aer.utils.transpile_quantum_error "qiskit.providers.aer.utils.transpile_quantum_error") function with the passed keyword agruments.

**Parameters**

*   **noise\_model** (`NoiseModel`) – the noise model to be transformed.
*   **transpile\_kwargs** – kwargs for passing to qiskit transpile function.

**Return type**

`NoiseModel`

**Returns**

The transpiled noise model.

**Raises**

**NoiseError** – if the transformation failed.
