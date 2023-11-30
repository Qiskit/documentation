---
title: gate_error_values
description: API reference for qiskit_aer.noise.device.gate_error_values
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit_aer.noise.device.gate_error_values
---

# qiskit\_aer.noise.device.gate\_error\_values[¶](#qiskit-aer-noise-device-gate-error-values "Permalink to this headline")

<span id="qiskit_aer.noise.device.gate_error_values" />

`gate_error_values(properties)`

Return gate error values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(name, qubits, value)`. If gate error information is not available `None` will be returned for value.

**Return type**

list

