---
title: gate_param_values
description: API reference for qiskit.providers.aer.noise.device.gate_param_values
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.providers.aer.noise.device.gate_param_values
---

# qiskit.providers.aer.noise.device.gate\_param\_values[¶](#qiskit-providers-aer-noise-device-gate-param-values "Permalink to this headline")

<span id="qiskit.providers.aer.noise.device.gate_param_values" />

`gate_param_values(properties)`

Return parameter error values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(name, qubits, time, error)`. If gate error or gate\_length information is not available `None` will be returned for value.

**Return type**

list

