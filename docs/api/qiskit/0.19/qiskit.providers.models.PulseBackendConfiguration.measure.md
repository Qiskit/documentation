---
title: measure
description: API reference for qiskit.providers.models.PulseBackendConfiguration.measure
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.PulseBackendConfiguration.measure
---

# measure

<span id="qiskit.providers.models.PulseBackendConfiguration.measure" />

`PulseBackendConfiguration.measure(qubit)`

Return the measure stimulus channel for the given qubit.

**Raises**

**BackendConfigurationError** – If the qubit is not a part of the system.

**Return type**

[`MeasureChannel`](qiskit.pulse.channels#qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

**Returns**

Qubit measurement stimulus line.

