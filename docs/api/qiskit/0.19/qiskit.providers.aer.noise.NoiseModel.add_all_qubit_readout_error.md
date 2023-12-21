---
title: add_all_qubit_readout_error
description: API reference for qiskit.providers.aer.noise.NoiseModel.add_all_qubit_readout_error
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.noise.NoiseModel.add_all_qubit_readout_error
---

# add\_all\_qubit\_readout\_error

<span id="qiskit.providers.aer.noise.NoiseModel.add_all_qubit_readout_error" />

`NoiseModel.add_all_qubit_readout_error(error, warnings=True)`

Add a single-qubit readout error that applies measure on all qubits.

**Parameters**

*   **error** ([*ReadoutError*](qiskit.providers.aer.noise.ReadoutError "qiskit.providers.aer.noise.ReadoutError")) – the quantum error object.
*   **warnings** (*bool*) – Display warning if appending to an instruction that already has an error (Default: True)

**Raises**

**NoiseError** – if the input parameters are invalid.

## Additional Information:

If the error object is ideal it will not be added to the model.

