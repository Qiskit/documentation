# qiskit.providers.ibmq.job.IBMQJob.update\_name

`IBMQJob.update_name(name)`

Update the name associated with this job.

**Parameters**

**name** (`str`) – The new name for this job.

**Return type**

`str`

**Returns**

The new name associated with this job.

**Raises**

*   [**IBMQJobApiError**](qiskit.providers.ibmq.job.IBMQJobApiError#qiskit.providers.ibmq.job.IBMQJobApiError "qiskit.providers.ibmq.job.IBMQJobApiError") – If an unexpected error occurred when communicating with the server or updating the job name.
*   [**IBMQJobInvalidStateError**](qiskit.providers.ibmq.job.IBMQJobInvalidStateError#qiskit.providers.ibmq.job.IBMQJobInvalidStateError "qiskit.providers.ibmq.job.IBMQJobInvalidStateError") – If the input job name is not a string.
