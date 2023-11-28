# qiskit.providers.aer.utils.transform\_noise\_model[¶](#qiskit-providers-aer-utils-transform-noise-model "Permalink to this headline")

<span id="undefined" />

`transform_noise_model(noise_model, func)`

Return a new noise model by applyign a function to all quantum errors.

This returns a new noise model containing the resulting errors from applying the supplied function to all QuantumErrors in the noise model. This function should have singature func(error: QuantumError) -> QuantumError where the returned quantum error is defined on the same number of qubits as the original error.

**Parameters**

*   **noise\_model** (`NoiseModel`) – the noise model to be transformed.
*   **func** (`Callable`) – function for transforming QuantumErrors.

**Return type**

`NoiseModel`

**Returns**

The transpiled noise model.

**Raises**

**NoiseError** – if the transformation failed.
