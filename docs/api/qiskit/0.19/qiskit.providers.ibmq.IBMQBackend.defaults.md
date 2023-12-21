---
title: defaults
description: API reference for qiskit.providers.ibmq.IBMQBackend.defaults
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackend.defaults
---

# defaults

<span id="qiskit.providers.ibmq.IBMQBackend.defaults" />

`IBMQBackend.defaults(refresh=False)`

Return the pulse defaults for the backend.

**Parameters**

**refresh** (`bool`) – If `True`, re-query the server for the backend pulse defaults. Otherwise, return a cached version.

**Return type**

`Optional`\[[`PulseDefaults`](qiskit.providers.models.PulseDefaults "qiskit.providers.models.pulsedefaults.PulseDefaults")]

**Returns**

The backend pulse defaults or `None` if the backend does not support pulse.

