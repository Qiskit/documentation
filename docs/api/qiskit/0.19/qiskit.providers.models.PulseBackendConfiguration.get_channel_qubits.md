---
title: get_channel_qubits
description: API reference for qiskit.providers.models.PulseBackendConfiguration.get_channel_qubits
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.models.PulseBackendConfiguration.get_channel_qubits
---

# get\_channel\_qubits

<span id="qiskit.providers.models.PulseBackendConfiguration.get_channel_qubits" />

`PulseBackendConfiguration.get_channel_qubits(channel)`

Return a list of indices for qubits which are operated on directly by the given `channel`.

**Raises**

**BackendConfigurationError** – If `channel` is not a found or if the backend does not provide channels information in its configuration.

**Return type**

`List`\[`int`]

**Returns**

List of qubits operated on my the given `channel`.

