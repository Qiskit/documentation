# qiskit.providers.aer.noise.NoiseModel.add\_readout\_error

`NoiseModel.add_readout_error(error, qubits, warnings=True)`

Add a readout error to the noise model.

**Parameters**

*   **error** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – the quantum error object.
*   **qubits** (*list\[int]*) – qubits instruction error applies to.
*   **warnings** (*bool*) – Display warning if appending to an instruction that already has an error \[Default: True]

**Raises**

**NoiseError** – if the input parameters are invalid.

## Additional Information:

If the error object is ideal it will not be added to the model.
