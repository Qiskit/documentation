---
title: get_qubit_channels
description: API reference for qiskit.providers.models.PulseBackendConfiguration.get_qubit_channels
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.PulseBackendConfiguration.get_qubit_channels
---

# get\_qubit\_channels

<span id="qiskit.providers.models.PulseBackendConfiguration.get_qubit_channels" />

`PulseBackendConfiguration.get_qubit_channels(qubit)`

Return a list of channels which operate on the given `qubit`.

**Raises**

**BackendConfigurationError** – If `qubit` is not a found or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[[`Channel`](qiskit.pulse.channels#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

**Returns**

List of `Channel`s operated on my the given `qubit`.

