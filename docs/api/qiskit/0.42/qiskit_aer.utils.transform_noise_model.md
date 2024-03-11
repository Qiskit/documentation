---
title: transform_noise_model
description: API reference for qiskit_aer.utils.transform_noise_model
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.utils.transform_noise_model
---

# qiskit\_aer.utils.transform\_noise\_model

<span id="qiskit_aer.utils.transform_noise_model" />

`transform_noise_model(noise_model, func)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.12/qiskit_aer/utils/noise_transformation.py "view source code")

Return a new noise model by applyign a function to all quantum errors.

This returns a new noise model containing the resulting errors from applying the supplied function to all QuantumErrors in the noise model. This function should have singature func(error: QuantumError) -> QuantumError where the returned quantum error is defined on the same number of qubits as the original error.

**Parameters**

*   **noise\_model** ([`NoiseModel`](qiskit_aer.noise.NoiseModel "qiskit_aer.noise.noise_model.NoiseModel")) – the noise model to be transformed.
*   **func** (`Callable`) – function for transforming QuantumErrors.

**Return type**

[`NoiseModel`](qiskit_aer.noise.NoiseModel "qiskit_aer.noise.noise_model.NoiseModel")

**Returns**

The transpiled noise model.

**Raises**

**NoiseError** – if the transformation failed.

