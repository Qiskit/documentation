# qiskit.providers.ibmq.IBMQBackend.retrieve\_job

`IBMQBackend.retrieve_job(job_id)`

Return a single job submitted to this backend.

**Parameters**

**job\_id** (`str`) – The ID of the job to retrieve.

**Return type**

`IBMQJob`

**Returns**

The job with the given ID.

**Raises**

[**IBMQBackendError**](qiskit.providers.ibmq.IBMQBackendError#qiskit.providers.ibmq.IBMQBackendError "qiskit.providers.ibmq.IBMQBackendError") – If job retrieval failed.
