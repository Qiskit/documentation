---
title: retrieve_job
description: API reference for qiskit.providers.ibmq.IBMQBackend.retrieve_job
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackend.retrieve_job
---

# retrieve\_job

<span id="qiskit.providers.ibmq.IBMQBackend.retrieve_job" />

`IBMQBackend.retrieve_job(job_id)`

Return a single job submitted to this backend.

**Parameters**

**job\_id** (`str`) – The ID of the job to retrieve.

**Return type**

[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")

**Returns**

The job with the given ID.

**Raises**

[**IBMQBackendError**](qiskit.providers.ibmq.IBMQBackendError "qiskit.providers.ibmq.IBMQBackendError") – If job retrieval failed.

