---
title: run
description: API reference for qiskit.providers.aer.UnitarySimulator.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.UnitarySimulator.run
---

# run

<span id="qiskit.providers.aer.UnitarySimulator.run" />

`UnitarySimulator.run(qobj, backend_options=None, noise_model=None, validate=False)`

Run a qobj on the backend.

**Parameters**

*   **qobj** ([*QasmQobj*](qiskit.qobj.QasmQobj "qiskit.qobj.QasmQobj")) – The Qobj to be executed.
*   **backend\_options** (*dict or None*) – dictionary of backend options for the execution (default: None).
*   **noise\_model** ([*NoiseModel*](qiskit.providers.aer.noise.NoiseModel "qiskit.providers.aer.noise.NoiseModel") *or None*) – noise model to use for simulation (default: None).
*   **validate** (*bool*) – validate the Qobj before running (default: True).

**Returns**

The simulation job.

**Return type**

[AerJob](qiskit.providers.aer.AerJob "qiskit.providers.aer.AerJob")

## Additional Information:

*   The entries in the `backend_options` will be combined with the `Qobj.config` dictionary with the values of entries in `backend_options` taking precedence.
*   If present the `noise_model` will override any noise model specified in the `backend_options` or `Qobj.config`.

