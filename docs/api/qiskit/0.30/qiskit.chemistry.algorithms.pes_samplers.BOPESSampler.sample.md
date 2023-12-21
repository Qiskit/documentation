# qiskit.chemistry.algorithms.pes\_samplers.BOPESSampler.sample

`BOPESSampler.sample(driver, points)`

Run the sampler at the given points, potentially with repetitions.

**Parameters**

*   **driver** (`BaseDriver`) – BaseDriver specific for the problem. The driver should be based on a Molecule object that has perturbations to be varied.
*   **points** (`List`\[`float`]) – The points along the degrees of freedom to evaluate.

**Return type**

`BOPESSamplerResult`

**Returns**

BOPES Sampler Result

**Raises**

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if the driver does not have a molecule specified.
