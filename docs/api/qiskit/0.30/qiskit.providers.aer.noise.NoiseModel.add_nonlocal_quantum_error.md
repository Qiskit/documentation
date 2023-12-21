# qiskit.providers.aer.noise.NoiseModel.add\_nonlocal\_quantum\_error

`NoiseModel.add_nonlocal_quantum_error(error, instructions, qubits, noise_qubits, warnings=True)`

Add a non-local quantum error to the noise model (DEPRECATED).

<Admonition title="Deprecated since version 0.9.0" type="danger">
  Adding nonlocal noise to a noise model is deprecated and will be removed no earlier than 3 months from the qiskit-aer 0.9.0 release date. To add non-local noise to a circuit you should write a custom qiskit transpiler pass.
</Admonition>

**Parameters**

*   **error** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – the quantum error object.
*   \*\*(****str**** or ****list****\[****str****] \*\***or** (*instructions*) – Instruction or list\[Instruction]): the instructions error applies to.
*   **qubits** (*list\[int]*) – qubits instruction error applies to.
*   **noise\_qubits** (*list\[int]*) – Specify the exact qubits the error should be applied to if different to the instruction qubits.
*   **warnings** (*bool*) – Display warning if appending to an instruction that already has an error (Default: True).

**Raises**

**NoiseError** – if the input parameters are invalid.

## Additional Information:

If the error object is ideal it will not be added to the model.
