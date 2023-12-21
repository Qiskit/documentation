---
title: run
description: API reference for qiskit.providers.aer.PulseSimulator.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.PulseSimulator.run
---

# run

<span id="qiskit.providers.aer.PulseSimulator.run" />

`PulseSimulator.run(qobj, system_model, backend_options=None, validate=False)`

Run a qobj on system\_model.

**Parameters**

*   **qobj** ([*PulseQobj*](qiskit.qobj.PulseQobj "qiskit.qobj.PulseQobj")) – Qobj for pulse Schedules to run
*   **system\_model** ([*PulseSystemModel*](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel")) – Physical model to run simulation on
*   **backend\_options** (*dict*) – Other options
*   **validate** (*bool*) – Flag for validation checks

**Returns**

results of simulation

**Return type**

[Result](qiskit.result.Result "qiskit.result.Result")

