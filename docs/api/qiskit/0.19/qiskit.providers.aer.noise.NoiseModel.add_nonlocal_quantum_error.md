---
title: add_nonlocal_quantum_error
description: API reference for qiskit.providers.aer.noise.NoiseModel.add_nonlocal_quantum_error
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.NoiseModel.add_nonlocal_quantum_error
---

# add\_nonlocal\_quantum\_error

<span id="qiskit.providers.aer.noise.NoiseModel.add_nonlocal_quantum_error" />

`NoiseModel.add_nonlocal_quantum_error(error, instructions, qubits, noise_qubits, warnings=True)`

Add a non-local quantum error to the noise model.

**Parameters**

*   **error** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – the quantum error object.
*   **or** (*instructions (str or list\[str]*) – Instruction or list\[Instruction]): the instructions error applies to.
*   **qubits** (*list\[int]*) – qubits instruction error applies to.
*   **noise\_qubits** (*list\[int]*) – Specify the exact qubits the error should be applied to if different to the instruction qubits.
*   **warnings** (*bool*) – Display warning if appending to an instruction that already has an error (Default: True).

**Raises**

**NoiseError** – if the input parameters are invalid.

## Additional Information:

If the error object is ideal it will not be added to the model.

