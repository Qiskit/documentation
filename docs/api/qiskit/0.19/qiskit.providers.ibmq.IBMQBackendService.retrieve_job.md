---
title: retrieve_job
description: API reference for qiskit.providers.ibmq.IBMQBackendService.retrieve_job
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackendService.retrieve_job
---

# retrieve\_job

<span id="qiskit.providers.ibmq.IBMQBackendService.retrieve_job" />

`IBMQBackendService.retrieve_job(job_id)`

Return a single job.

**Parameters**

**job\_id** (`str`) – The ID of the job to retrieve.

**Return type**

[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")

**Returns**

The job with the given id.

**Raises**

*   [**IBMQBackendApiError**](qiskit.providers.ibmq.IBMQBackendApiError "qiskit.providers.ibmq.IBMQBackendApiError") – If an unexpected error occurred when retrieving the job.
*   [**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If unexpected return value received from the server.

