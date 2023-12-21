# qiskit.providers.ibmq.IBMQBackendService.retrieve\_job

`IBMQBackendService.retrieve_job(job_id)`

Return a single job.

**Parameters**

**job\_id** (`str`) – The ID of the job to retrieve.

**Return type**

`IBMQJob`

**Returns**

The job with the given id.

**Raises**

*   [**IBMQBackendApiError**](qiskit.providers.ibmq.IBMQBackendApiError#qiskit.providers.ibmq.IBMQBackendApiError "qiskit.providers.ibmq.IBMQBackendApiError") – If an unexpected error occurred when retrieving the job.
*   [**IBMQBackendApiProtocolError**](qiskit.providers.ibmq.IBMQBackendApiProtocolError#qiskit.providers.ibmq.IBMQBackendApiProtocolError "qiskit.providers.ibmq.IBMQBackendApiProtocolError") – If unexpected return value received from the server.
