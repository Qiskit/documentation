---
title: properties
description: API reference for qiskit.providers.ibmq.IBMQBackend.properties
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackend.properties
---

# properties

<span id="qiskit.providers.ibmq.IBMQBackend.properties" />

`IBMQBackend.properties(refresh=False, datetime=None)`

Return the backend properties, subject to optional filtering.

**Parameters**

*   **refresh** (`bool`) – If `True`, re-query the server for the backend properties. Otherwise, return a cached version.
*   **datetime** (`Optional`\[`datetime`]) – By specifying datetime, this function returns an instance of the [`BackendProperties`](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") whose timestamp is closest to, but older than, the specified datetime.

**Return type**

`Optional`\[[`BackendProperties`](qiskit.providers.models.BackendProperties "qiskit.providers.models.backendproperties.BackendProperties")]

**Returns**

The backend properties or `None` if the backend properties are not currently available.

