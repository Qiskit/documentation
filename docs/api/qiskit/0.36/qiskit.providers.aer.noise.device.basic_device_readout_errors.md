---
title: basic_device_readout_errors
description: API reference for qiskit.providers.aer.noise.device.basic_device_readout_errors
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.noise.device.basic_device_readout_errors
---

# qiskit.providers.aer.noise.device.basic\_device\_readout\_errors[¶](#qiskit-providers-aer-noise-device-basic-device-readout-errors "Permalink to this headline")

<span id="qiskit.providers.aer.noise.device.basic_device_readout_errors" />

`basic_device_readout_errors(properties)`

Return readout error parameters from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of pairs `(qubits, ReadoutError)` for qubits with non-zero readout error values.

**Return type**

list

