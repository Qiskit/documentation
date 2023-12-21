# qiskit.providers.aer.noise.NoiseModel.add\_all\_qubit\_readout\_error

`NoiseModel.add_all_qubit_readout_error(error, warnings=True)`

Add a single-qubit readout error that applies measure on all qubits.

**Parameters**

*   **error** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError#qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – the quantum error object.
*   **warnings** (*bool*) – Display warning if appending to an instruction that already has an error (Default: True)

**Raises**

**NoiseError** – if the input parameters are invalid.

## Additional Information:

If the error object is ideal it will not be added to the model.
