# qiskit.providers.aer.noise.NoiseModel.add\_quantum\_error

`NoiseModel.add_quantum_error(error, instructions, qubits, warnings=True)`

Add a quantum error to the noise model.

**Parameters**

*   **error** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – the quantum error object.
*   \*\*(****str**** or ****list****\[****str****] \*\***or** (*instructions*) – Instruction or list\[Instruction]): the instructions error applies to.
*   **qubits** (*list\[int]*) – qubits instruction error applies to.
*   **warnings** (*bool*) – Display warning if appending to an instruction that already has an error (Default: True).

**Raises**

**NoiseError** – if the input parameters are invalid.

## Additional Information:

If the error object is ideal it will not be added to the model.
