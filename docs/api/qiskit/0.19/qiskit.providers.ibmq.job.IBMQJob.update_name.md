---
title: update_name
description: API reference for qiskit.providers.ibmq.job.IBMQJob.update_name
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.job.IBMQJob.update_name
---

# update\_name

<span id="qiskit.providers.ibmq.job.IBMQJob.update_name" />

`IBMQJob.update_name(name)`

Update the name associated with this job.

**Parameters**

**name** (`str`) – The new name for this job.

**Return type**

`str`

**Returns**

The new name associated with this job.

**Raises**

*   [**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server or updating the job name.
*   [**IBMQJobInvalidStateError**](qiskit.providers.ibmq.job.IBMQJobInvalidStateError "qiskit.providers.ibmq.job.IBMQJobInvalidStateError") – If the input job name is not a string.

