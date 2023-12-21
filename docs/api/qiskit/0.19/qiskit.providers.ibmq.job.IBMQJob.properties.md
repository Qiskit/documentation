---
title: properties
description: API reference for qiskit.providers.ibmq.job.IBMQJob.properties
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.properties
---

# properties

<span id="qiskit.providers.ibmq.job.IBMQJob.properties" />

`IBMQJob.properties()`

Return the backend properties for this job.

**Return type**

`Optional`\[[`BackendProperties`](qiskit.providers.models.BackendProperties "qiskit.providers.models.backendproperties.BackendProperties")]

**Returns**

The backend properties used for this job, or `None` if properties are not available.

**Raises**

[**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server.

