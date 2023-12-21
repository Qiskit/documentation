---
title: acquire
description: API reference for qiskit.providers.models.PulseBackendConfiguration.acquire
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.PulseBackendConfiguration.acquire
---

# acquire

<span id="qiskit.providers.models.PulseBackendConfiguration.acquire" />

`PulseBackendConfiguration.acquire(qubit)`

Return the acquisition channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`AcquireChannel`](qiskit.pulse.channels#qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

**Returns**

Qubit measurement acquisition line.

